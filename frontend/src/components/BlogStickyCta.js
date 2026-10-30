import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BlogStickyCta({ product, postSlug }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(`blog-cta-dismissed-${postSlug}`)) {
        setDismissed(true);
      }
    } catch (e) {}

    const onScroll = () => {
      setVisible(window.scrollY > 250);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [postSlug]);

  if (!product || dismissed) return null;

  const handleClose = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(`blog-cta-dismissed-${postSlug}`, '1');
    } catch (e) {}
  };

  return (
    <div className={`blog-float-cta ${visible ? 'is-visible' : ''}`}>
      <button
        type="button"
        className="blog-float-cta-close"
        aria-label="Zatvori"
        onClick={handleClose}
      >
        ×
      </button>
      <span className="blog-float-cta-tag">Proizvod · odmah dostupno</span>
      <Link href={`/sadnice/${product.slug}`} className="blog-float-cta-link">
        <img src={product.image} alt={product.name} className="blog-float-cta-img" />
        <div className="blog-float-cta-text">
          <strong className="blog-float-cta-name">{product.name}</strong>
          <span className="blog-float-cta-label">Naruči odmah →</span>
        </div>
      </Link>
    </div>
  );
}
