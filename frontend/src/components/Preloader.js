import { useEffect, useState } from 'react';

const STORAGE_KEY = 'plSeen';
const MIN_MS = 1650;

function renderLetters(word, accent, startDelay, step, extraLastStyle) {
  return word.split('').map((ch, i) => {
    const delay = startDelay + i * step;
    const style = { animationDelay: `${delay}s` };
    if (extraLastStyle && i === word.length - 1) Object.assign(style, extraLastStyle);
    return (
      <span key={`${word}-${i}`} className={accent ? 'pl-accent' : undefined} style={style}>
        {ch}
      </span>
    );
  });
}

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === '1';
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch (e) {}

    const mountedAt = performance.now();
    let finished = false;

    const hide = () => {
      if (finished) return;
      finished = true;
      const wait = seen ? 0 : Math.max(0, MIN_MS - (performance.now() - mountedAt));
      setTimeout(() => {
        requestAnimationFrame(() => {
          setDone(true);
          setTimeout(() => setVisible(false), 900);
        });
      }, wait);
    };

    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide);
    }
    const failsafe = setTimeout(hide, 6000);

    return () => {
      window.removeEventListener('load', hide);
      clearTimeout(failsafe);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <noscript>
        <style>{'#preloader { display: none !important; }'}</style>
      </noscript>
      <div id="preloader" className={done ? 'pl-done' : ''} role="status" aria-label="Učitavanje">
        <svg viewBox="0 0 200 200" aria-hidden="true">
          <ellipse className="pl-soil" cx="100" cy="170" rx="46" ry="5" fill="#8d6e63" opacity=".35" />
          <path
            className="pl-stem"
            d="M100 166 C101 145 98 120 100 92"
            fill="none"
            stroke="#6d4c41"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path className="pl-leaf l" d="M99 134 C88 122 78 126 72 118 C84 110 96 118 99 134 Z" fill="#7cb342" />
          <path className="pl-leaf r" d="M101 126 C112 114 122 118 128 110 C116 102 104 110 101 126 Z" fill="#8bc34a" />
          <g className="pl-crown">
            <circle cx="100" cy="74" r="30" fill="#2e7d32" />
            <circle cx="73" cy="88" r="21" fill="#43a047" />
            <circle cx="127" cy="88" r="21" fill="#388e3c" />
            <circle cx="83" cy="60" r="19" fill="#66bb6a" />
            <circle cx="117" cy="58" r="18" fill="#4caf50" />
            <circle cx="100" cy="46" r="16" fill="#81c784" />
            <circle cx="100" cy="95" r="17" fill="#2e7d32" />
          </g>
          <g className="pl-pollen" fill="#ffd54f">
            <circle cx="80" cy="70" r="2.2" />
            <circle cx="118" cy="58" r="1.8" />
            <circle cx="100" cy="50" r="2" />
            <circle cx="132" cy="80" r="1.6" />
            <circle cx="68" cy="84" r="1.8" />
          </g>
          <ellipse className="pl-seed" cx="100" cy="164" rx="5" ry="6.5" fill="#795548" />
        </svg>
        <div className="pl-name" aria-hidden="true">
          {renderLetters('Rasadnik', false, 0.35, 0.07, { marginRight: '0.3em' })}
          {renderLetters('Tilija', true, 0.91, 0.07)}
        </div>
        <div className="pl-root" />
      </div>
    </>
  );
}
