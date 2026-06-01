import React, { useState, useRef, useCallback, useEffect } from 'react';

const DAILY_LIMIT = 2;

// Plant name keywords → product slug on /sadnice/
const PLANT_CATALOG = [
  { keywords: ['tuja', 'thuja'], slug: 'tuja-smaragd', name: 'Tuja Smaragd' },
  { keywords: ['lovor', 'višnja', 'visnja', 'laurel', 'prunus'], slug: 'lovor-visnja', name: 'Lovor Višnja' },
  { keywords: ['fotinija', 'photinia'], slug: 'fotinija-red-robin', name: 'Fotinija Red Robin' },
  { keywords: ['bambus', 'bamboo', 'fargesia'], slug: 'bambus', name: 'Bambus' },
  { keywords: ['lejland', 'leyland', 'lejlandi'], slug: 'lejlandi', name: 'Lejlandi' },
];

function findPlantSlug(name) {
  const lower = name.toLowerCase();
  for (const plant of PLANT_CATALOG) {
    if (plant.keywords.some(k => lower.includes(k))) return plant.slug;
  }
  return null;
}

const getUsage = () => {
  try {
    const stored = JSON.parse(localStorage.getItem('aiDizajnUsage') || '{}');
    const today = new Date().toDateString();
    if (stored.date !== today) return { date: today, count: 0 };
    return stored;
  } catch {
    return { date: new Date().toDateString(), count: 0 };
  }
};

const incrementUsage = () => {
  const usage = getUsage();
  localStorage.setItem('aiDizajnUsage', JSON.stringify({ ...usage, count: usage.count + 1 }));
};

const compressImage = (file) =>
  new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => {
      const MAX = 1024;
      const ratio = Math.min(MAX / img.width, MAX / img.height, 1);
      const canvas = document.createElement('canvas');
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        (blob) => resolve(new File([blob], file.name, { type: 'image/jpeg' })),
        'image/jpeg',
        0.85
      );
    };
    img.src = URL.createObjectURL(file);
  });

export default function AIDizajnModal({ onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);
  const [plantsUsed, setPlantsUsed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [usageCount, setUsageCount] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const dragRef = useRef(null);
  const frameRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => { setUsageCount(getUsage().count); }, []);

  // Keyboard shortcuts in lightbox
  useEffect(() => {
    const onKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === '+' || e.key === '=') changeZoom(z => Math.min(z + 0.5, 5));
      if (e.key === '-') changeZoom(z => Math.max(z - 0.5, 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  // Wheel zoom (passive:false required to preventDefault)
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.3 : -0.3;
    changeZoom(z => Math.min(Math.max(z + delta, 1), 5));
  }, []);

  useEffect(() => {
    const el = frameRef.current;
    if (!el || !lightboxOpen) return;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [lightboxOpen, handleWheel]);

  const changeZoom = (updater) => {
    setZoom(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      if (next <= 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const closeLightbox = () => { setLightboxOpen(false); setZoom(1); setPan({ x: 0, y: 0 }); };

  const onMouseDown = (e) => {
    if (zoom <= 1) return;
    e.preventDefault();
    dragRef.current = { lastX: e.clientX, lastY: e.clientY };
  };
  const onMouseMove = (e) => {
    if (!dragRef.current) return;
    setPan(p => ({ x: p.x + e.clientX - dragRef.current.lastX, y: p.y + e.clientY - dragRef.current.lastY }));
    dragRef.current = { lastX: e.clientX, lastY: e.clientY };
  };
  const onMouseUp = () => { dragRef.current = null; };

  const bypassLimit = process.env.NEXT_PUBLIC_BYPASS_FRONTEND_LIMIT === 'true';
  const remaining = bypassLimit ? 99 : DAILY_LIMIT - usageCount;
  const limitReached = !bypassLimit && remaining <= 0;

  const handleFile = useCallback((file) => {
    if (!file || !file.type.startsWith('image/')) { setError('Molimo odaberite sliku (JPG, PNG, WEBP)'); return; }
    if (file.size > 20 * 1024 * 1024) { setError('Slika je prevelika. Maksimalna veličina je 20MB.'); return; }
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setResultUrl(null);
    setPlantsUsed([]);
    setError(null);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault(); setIsDragging(false); handleFile(e.dataTransfer.files[0]);
  }, [handleFile]);

  const getRecaptchaToken = () =>
    new Promise((resolve) => {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      if (!siteKey || !window.grecaptcha) { resolve(null); return; }
      window.grecaptcha.ready(() => window.grecaptcha.execute(siteKey, { action: 'ai_dizajn' }).then(resolve));
    });

  const handleGenerate = async () => {
    if (!selectedFile || limitReached) return;
    setLoading(true); setError(null);
    try {
      const compressed = await compressImage(selectedFile);
      const formData = new FormData();
      formData.append('image', compressed);
      const token = await getRecaptchaToken();
      if (token) formData.append('recaptcha_token', token);

      const response = await fetch('/api/ai-dizajn', { method: 'POST', body: formData });
      let data;
      const ct = response.headers.get('content-type');
      if (ct && ct.includes('application/json')) { data = await response.json(); }
      else { throw new Error('Backend servis nije dostupan. Pokušajte za par minuta.'); }

      if (response.status === 429) throw new Error('Dnevni limit je dostignut. Pokušajte sutra.');
      if (!response.ok) throw new Error(data.error || 'Greška pri generisanju');

      incrementUsage();
      setUsageCount(c => c + 1);
      setResultUrl(data.imageUrl);
      setPlantsUsed(data.plantsUsed || []);
    } catch (err) {
      setError(err.message || 'Došlo je do greške. Pokušajte ponovo.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => { setSelectedFile(null); setPreviewUrl(null); setResultUrl(null); setPlantsUsed([]); setError(null); };

  return (
    <>
      {lightboxOpen && (
        <div className="ai-lightbox" onClick={closeLightbox}>
          <div className="ai-lightbox-topbar" onClick={e => e.stopPropagation()}>
            <button onClick={() => changeZoom(z => Math.max(z - 0.5, 1))}>−</button>
            <span>{Math.round(zoom * 100)}%</span>
            <button onClick={() => changeZoom(z => Math.min(z + 0.5, 5))}>+</button>
            <button className="ai-lightbox-close-btn" onClick={closeLightbox}>×</button>
          </div>
          <div
            ref={frameRef}
            className="ai-lightbox-frame"
            onClick={e => e.stopPropagation()}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            <img
              src={resultUrl}
              alt="AI dizajn dvorišta - uvećano"
              className="ai-lightbox-img"
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                cursor: zoom > 1 ? (dragRef.current ? 'grabbing' : 'grab') : 'default',
                touchAction: 'pinch-zoom',
              }}
            />
          </div>
          <p className="ai-lightbox-hint">Scroll za zoom · Vučite za pomeranje · ESC za zatvaranje</p>
        </div>
      )}

      <div className="ai-overlay" onClick={onClose}>
        <div className="ai-modal" onClick={e => e.stopPropagation()}>
          <button className="ai-close" onClick={onClose} aria-label="Zatvori">×</button>

          <div className="ai-header">
            <span className="ai-header-icon">🌿</span>
            <h2>AI Dizajn Dvorišta</h2>
            <p>Pošaljite fotografiju vašeg dvorišta i dobijte idejno rešenje uređenja</p>
            {limitReached && <div className="ai-usage-badge">⛔ Dnevni limit iskorišćen — pokušajte sutra</div>}
          </div>

          {!resultUrl ? (
            <div className="ai-body">
              {limitReached ? (
                <div className="ai-limit-box">
                  <div style={{ fontSize: 48, marginBottom: 12 }}>⏰</div>
                  <strong>Iskoristili ste oba generisanja za danas</strong>
                  <p>Dnevni limit se resetuje u ponoć. Sutra možete ponovo da probate!</p>
                </div>
              ) : (
                <>
                  <div
                    className={`ai-dropzone${isDragging ? ' dragging' : ''}${previewUrl ? ' has-image' : ''}`}
                    onClick={() => fileInputRef.current?.click()}
                    onDrop={handleDrop}
                    onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                  >
                    {previewUrl
                      ? <img src={previewUrl} alt="Odabrana slika dvorišta" className="ai-preview" />
                      : <div className="ai-placeholder">
                          <span className="ai-placeholder-icon">📷</span>
                          <strong>Kliknite ili prevucite sliku ovde</strong>
                          <span>JPG, PNG, WEBP</span>
                        </div>
                    }
                  </div>
                  <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }}
                    onChange={e => handleFile(e.target.files[0])} />
                  {error && <div className="ai-error">{error}</div>}
                  <button className="ai-btn-generate" onClick={handleGenerate} disabled={!selectedFile || loading}>
                    {loading ? <><span className="ai-spin" />Generisanje (30–60 sek)...</> : 'Generiši dizajn ✨'}
                  </button>
                  {loading && <p className="ai-loading-text">AI analizira vaše dvorište i kreira idejno rešenje...</p>}
                </>
              )}
            </div>
          ) : (
            <div className="ai-result">
              <div className="ai-before-after">
                <div className="ai-side">
                  <span className="ai-side-label">Pre</span>
                  <img src={previewUrl} alt="Originalno dvorište" />
                </div>
                <div className="ai-arrow">→</div>
                <div className="ai-side">
                  <span className="ai-side-label">Idejno rešenje</span>
                  <img src={resultUrl} alt="AI dizajn dvorišta" className="ai-result-img-clickable"
                    onClick={() => setLightboxOpen(true)} title="Kliknite za uvećanje" />
                  <span className="ai-zoom-hint">🔍 Kliknite za uvećanje</span>
                </div>
              </div>

              {plantsUsed.length > 0 && (
                <div className="ai-plants-box">
                  <div className="ai-plants-title">🌱 Biljke korišćene u dizajnu</div>
                  <div className="ai-plants-list">
                    {plantsUsed.map((plant, i) => {
                      const slug = findPlantSlug(plant);
                      if (slug) {
                        return (
                          <a key={i} href={`/sadnice/${slug}`} className="ai-plant-tag ai-plant-link"
                            target="_blank" rel="noreferrer">
                            {plant}
                          </a>
                        );
                      }
                      return (
                        <span key={i} className="ai-plant-tag ai-plant-available">
                          {plant}
                          <span className="ai-plant-badge">U rasadniku</span>
                        </span>
                      );
                    })}
                  </div>
                  <p className="ai-plants-note">
                    Sve biljke su dostupne u našem rasadniku.
                    Biljke bez linka još uvek nisu na sajtu — <a href="/contact" target="_blank" rel="noreferrer">kontaktirajte nas</a> za narudžbinu.
                  </p>
                </div>
              )}

              <div className="ai-result-actions">
                <a href={resultUrl} download="dvoriste-dizajn.png" className="ai-btn-download" target="_blank" rel="noreferrer">
                  Preuzmi sliku
                </a>
                {remaining > 1 && (
                  <button className="ai-btn-retry" onClick={reset}>
                    Nova slika ({remaining - 1} preostalo)
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
