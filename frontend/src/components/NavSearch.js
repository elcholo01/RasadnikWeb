import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MAX_SUGGESTIONS = 6;

function matchesTerm(name, term) {
  return name.toLowerCase().split(/\s+/).some((word) => word.startsWith(term));
}

export default function NavSearch() {
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState('');
  const [catalog, setCatalog] = useState(null);
  const wrapRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();

  const close = () => setOpen(false);

  const toggle = () => setOpen((o) => !o);

  const suggestions = useMemo(() => {
    const q = term.trim().toLowerCase();
    if (!q || !catalog) return [];
    return catalog.filter((p) => matchesTerm(p.name, q)).slice(0, MAX_SUGGESTIONS);
  }, [term, catalog]);

  // Katalog proizvoda je velik (opisi, nega, itd.) — učitavamo ga odvojeno,
  // samo kad se pretraga prvi put otvori, da ne uteže početni JS svake stranice.
  useEffect(() => {
    if (!open || catalog) return;
    import('../data/productsData').then((mod) => setCatalog(mod.products));
  }, [open, catalog]);

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

      <div className={`nav-search-panel${open ? ' open' : ''}`}>
        <form className="nav-search-row" onSubmit={handleSubmit}>
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
            autoComplete="off"
          />
          <button type="submit" aria-label="Pretraži">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <polyline points="12 5 19 12 12 19" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>

        {term.trim() !== '' && (
          suggestions.length > 0 ? (
            <ul className="nav-search-suggestions">
              {suggestions.map((p) => (
                <li key={p.slug}>
                  <Link href={`/sadnice/${p.slug}`} onClick={() => { setTerm(''); close(); }}>
                    <img src={p.image} alt="" loading="lazy" />
                    <span>{p.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="nav-search-empty">Nema rezultata za &quot;{term.trim()}&quot;</p>
          )
        )}
      </div>
    </div>
  );
}
