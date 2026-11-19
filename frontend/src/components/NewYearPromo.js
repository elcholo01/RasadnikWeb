import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'nyPromoSeen2026';
const SHOW_DELAY_MS = 2600;

const TREES = [
  {
    slug: 'zelena-smrca',
    name: 'Zelena smrča',
    image: '/images/zelena-smrca.jpg',
    badge: 'Klasična jelka',
    badgeClass: 'ny-badge-green',
    sizes: [
      { label: '1.3–1.5 m', price: 3500 },
      { label: '1.5–1.7 m', price: 4500 },
      { label: '1.8–2 m', price: 5500 },
      { label: '2–2.2 m', price: 6500 },
    ],
  },
  {
    slug: 'plava-smrca',
    name: 'Plava smrča',
    image: '/images/WhatsApp Image 2026-01-04 at 19.50.56.jpeg',
    badge: 'Premium izbor',
    badgeClass: 'ny-badge-gold',
    sizes: [
      { label: '1–1.3 m', price: 4000 },
      { label: '1.3–1.5 m', price: 5000 },
      { label: '1.5–1.7 m', price: 7000 },
      { label: '1.8–2 m', price: 9000 },
    ],
  },
];

const SNOWFLAKES = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 43 + 5) % 100,
  delay: ((i * 0.53) % 6).toFixed(2),
  duration: (7 + (i % 5)).toFixed(1),
  size: 4 + (i % 4),
}));

function formatPrice(n) {
  return n.toLocaleString('sr-RS') + ' din';
}

export default function NewYearPromo() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch (e) {}
    if (seen) return;
    const timer = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, '1');
      } catch (e) {}
    }, SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const close = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 260);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className={`ny-overlay${closing ? ' ny-closing' : ''}`} onClick={close}>
      <div className="ny-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ny-close" onClick={close} aria-label="Zatvori">×</button>

        <div className="ny-header">
          <div className="ny-snow" aria-hidden="true">
            {SNOWFLAKES.map((f, i) => (
              <span
                key={i}
                className="ny-flake"
                style={{
                  left: `${f.left}%`,
                  animationDelay: `${f.delay}s`,
                  animationDuration: `${f.duration}s`,
                  width: f.size,
                  height: f.size,
                }}
              />
            ))}
          </div>
          <span className="ny-emoji" aria-hidden="true">🎄</span>
          <h2>Novogodišnja jelka stiže kod vas!</h2>
          <p>
            Ulepšajte praznike pravom zimzelenom jelkom iz našeg rasadnika — već od{' '}
            <strong>3.500 din</strong>, uz dostavu širom Srbije.
          </p>
        </div>

        <div className="ny-body">
          <div className="ny-trees">
            {TREES.map((tree) => (
              <div className="ny-tree-card" key={tree.slug}>
                <span className={`ny-tree-badge ${tree.badgeClass}`}>{tree.badge}</span>
                <div className="ny-tree-img">
                  <img src={tree.image} alt={tree.name} />
                </div>
                <h3>{tree.name}</h3>
                <ul className="ny-sizes">
                  {tree.sizes.map((s) => (
                    <li key={s.label}>
                      <span>{s.label}</span>
                      <strong>{formatPrice(s.price)}</strong>
                    </li>
                  ))}
                </ul>
                <Link href={`/sadnice/${tree.slug}`} className="ny-tree-btn" onClick={close}>
                  Pogledaj i naruči →
                </Link>
              </div>
            ))}
          </div>

          <p className="ny-footnote">
            🚚 Dostava i sadnja na vašoj adresi &nbsp;·&nbsp; 🎁 Ograničene količine uoči Nove godine
          </p>
        </div>
      </div>
    </div>
  );
}
