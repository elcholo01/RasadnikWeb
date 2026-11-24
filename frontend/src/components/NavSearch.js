import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

export default function NavSearch() {
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState('');
  const wrapRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();

  const close = () => setOpen(false);

  const toggle = () => setOpen((o) => !o);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();

    const onClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) close();
    };
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = term.trim();
    router.push(q ? `/products?search=${encodeURIComponent(q)}` : '/products');
    setTerm('');
    close();
  };

  return (
    <div className="nav-search" ref={wrapRef}>
      <button
        type="button"
        className={`nav-search-btn${open ? ' active' : ''}`}
        onClick={toggle}
        aria-label="Pretraga proizvoda"
        aria-expanded={open}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <form className={`nav-search-panel${open ? ' open' : ''}`} onSubmit={handleSubmit}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="nav-search-panel-icon">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Pretraži proizvode..."
          aria-label="Pretraži proizvode"
        />
        <button type="submit" aria-label="Pretraži">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <polyline points="12 5 19 12 12 19" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>
    </div>
  );
}
