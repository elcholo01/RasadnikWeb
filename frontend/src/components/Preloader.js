import { useEffect, useState } from 'react';

const STORAGE_KEY = 'tilija-preloader-shown';
const MIN_DISPLAY_MS = 1600;
const LEAVE_DURATION_MS = 450;

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch (e) {}

    if (alreadyShown) {
      setVisible(false);
      return;
    }

    let reducedMotion = false;
    try {
      reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}

    const minDisplay = reducedMotion ? 0 : MIN_DISPLAY_MS;
    const leaveDuration = reducedMotion ? 0 : LEAVE_DURATION_MS;
    const start = Date.now();
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      const elapsed = Date.now() - start;
      const wait = Math.max(minDisplay - elapsed, 0);
      setTimeout(() => {
        setLeaving(true);
        setTimeout(() => {
          setVisible(false);
          try {
            sessionStorage.setItem(STORAGE_KEY, '1');
          } catch (e) {}
        }, leaveDuration);
      }, wait);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish);
    }
    const fallback = setTimeout(finish, 6000);

    return () => {
      window.removeEventListener('load', finish);
      clearTimeout(fallback);
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
    <div className={`preloader${leaving ? ' preloader-leave' : ''}`} role="status" aria-label="Sajt se učitava">
      <svg
        className="preloader-icon"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="50" cy="86" rx="22" ry="4" fill="rgba(0,0,0,0.08)" />
        <rect x="46" y="58" width="8" height="24" rx="4" fill="#6d4c3d" />
        <path d="M46 72 C 36 70, 30 62, 32 54 C 42 56, 48 64, 46 72 Z" fill="var(--primary-light, #60ad5e)" />
        <path d="M54 68 C 64 66, 70 58, 68 50 C 58 52, 52 60, 54 68 Z" fill="var(--primary, #2e7d32)" />
        <circle cx="50" cy="36" r="24" fill="var(--primary, #2e7d32)" />
        <circle cx="33" cy="44" r="18" fill="var(--primary-light, #60ad5e)" />
        <circle cx="67" cy="44" r="18" fill="var(--primary-light, #60ad5e)" />
        <circle cx="41" cy="23" r="5" fill="rgba(255,255,255,0.35)" />
      </svg>

      <div className="preloader-wordmark">
        <span className="preloader-word preloader-word-1">Rasadnik</span>
        <span className="preloader-word preloader-word-2">Tilija</span>
      </div>

      <div className="preloader-bar">
        <div className="preloader-bar-fill" />
      </div>
    </div>
  );
}
