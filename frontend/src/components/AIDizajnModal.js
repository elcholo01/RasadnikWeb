import React, { useState, useRef, useCallback, useEffect } from 'react';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://rasadnikweb.onrender.com';
const DAILY_LIMIT = 2;

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [usageCount, setUsageCount] = useState(0);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setUsageCount(getUsage().count);
  }, []);

  const remaining = DAILY_LIMIT - usageCount;
  const limitReached = remaining <= 0;

  const handleFile = useCallback((file) => {
    if (!file || !file.type.startsWith('image/')) {
      setError('Molimo odaberite sliku (JPG, PNG, WEBP)');
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setError('Slika je prevelika. Maksimalna veličina je 20MB.');
      return;
    }
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setResultUrl(null);
    setError(null);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(false);
      handleFile(e.dataTransfer.files[0]);
    },
    [handleFile]
  );

  const getRecaptchaToken = () =>
    new Promise((resolve) => {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      if (!siteKey || !window.grecaptcha) { resolve(null); return; }
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(siteKey, { action: 'ai_dizajn' }).then(resolve);
      });
    });

  const handleGenerate = async () => {
    if (!selectedFile || limitReached) return;
    setLoading(true);
    setError(null);

    try {
      const compressed = await compressImage(selectedFile);
      const formData = new FormData();
      formData.append('image', compressed);

      const recaptchaToken = await getRecaptchaToken();
      if (recaptchaToken) formData.append('recaptcha_token', recaptchaToken);

      const response = await fetch(`/api/ai-dizajn`, {
        method: 'POST',
        body: formData,
      });

      let data;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        throw new Error('Backend servis nije dostupan. Pokušajte za par minuta.');
      }

      if (response.status === 429) {
        throw new Error('Dnevni limit je dostignut. Pokušajte sutra.');
      }

      if (!response.ok) throw new Error(data.error || 'Greška pri generisanju');

      incrementUsage();
      setUsageCount((c) => c + 1);
      setResultUrl(data.imageUrl);
    } catch (err) {
      setError(err.message || 'Došlo je do greške. Pokušajte ponovo.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setResultUrl(null);
    setError(null);
  };

  return (
    <div className="ai-overlay" onClick={onClose}>
      <div className="ai-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ai-close" onClick={onClose} aria-label="Zatvori">×</button>

        <div className="ai-header">
          <span className="ai-header-icon">🌿</span>
          <h2>AI Dizajn Dvorišta</h2>
          <p>Pošaljite fotografiju vašeg dvorišta i dobijte idejno rešenje uređenja</p>
          {limitReached && (
            <div className="ai-usage-badge">⛔ Dnevni limit iskorišćen — pokušajte sutra</div>
          )}
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
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                >
                  {previewUrl ? (
                    <img src={previewUrl} alt="Odabrana slika dvorišta" className="ai-preview" />
                  ) : (
                    <div className="ai-placeholder">
                      <span className="ai-placeholder-icon">📷</span>
                      <strong>Kliknite ili prevucite sliku ovde</strong>
                      <span>JPG, PNG, WEBP</span>
                    </div>
                  )}
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFile(e.target.files[0])}
                />

                {error && <div className="ai-error">{error}</div>}

                <button
                  className="ai-btn-generate"
                  onClick={handleGenerate}
                  disabled={!selectedFile || loading}
                >
                  {loading ? (
                    <><span className="ai-spin" />Generisanje (30–60 sek)...</>
                  ) : (
                    'Generiši dizajn ✨'
                  )}
                </button>

                {loading && (
                  <p className="ai-loading-text">AI analizira vaše dvorište i kreira idejno rešenje...</p>
                )}
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
                <img src={resultUrl} alt="AI dizajn dvorišta" />
              </div>
            </div>
            <div className="ai-result-actions">
              <a href={resultUrl} download="dvoriste-dizajn.jpg" className="ai-btn-download" target="_blank" rel="noreferrer">
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
  );
}
