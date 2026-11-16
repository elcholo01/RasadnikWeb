import { useEffect, useState } from 'react';

const STORAGE_KEY = 'tilija-preloader-shown';
const MIN_DISPLAY_MS = 1500;
const LEAVE_DURATION_MS = 700;

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
      <div className="preloader-panel preloader-panel-left" />
      <div className="preloader-panel preloader-panel-right" />
      <div className="preloader-seam" aria-hidden="true" />
      <div className="preloader-seam-leaf preloader-seam-leaf-top" aria-hidden="true" />
      <div className="preloader-seam-leaf preloader-seam-leaf-bottom" aria-hidden="true" />

      <div className="preloader-content">
        <svg
          className="preloader-sprout"
          viewBox="0 0 120 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse className="preloader-soil" cx="60" cy="126" rx="40" ry="7" />
          <path
            className="preloader-stem"
            d="M60 122 C 60 96, 60 70, 60 46"
            stroke="#2e7d32"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            className="preloader-leaf preloader-leaf-left"
            d="M58 80 C 38 76, 24 61, 28 42 C 49 45, 61 59, 59 80 Z"
            fill="#60ad5e"
          />
          <path
            className="preloader-leaf preloader-leaf-right"
            d="M61 60 C 81 56, 95 42, 91 23 C 70 26, 58 40, 60 60 Z"
            fill="#2e7d32"
          />
        </svg>

        <div className="preloader-wordmark">
          <span className="preloader-word preloader-word-1">Rasadnik</span>
          <span className="preloader-word preloader-word-2">Tilija</span>
        </div>
        <p className="preloader-tagline">Sadnice koje rastu sa vama</p>
      </div>
    </div>
  );
}
