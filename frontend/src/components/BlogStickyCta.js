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
    <div className={`blog-sticky-cta ${visible ? 'is-visible' : ''}`}>
      <button
        type="button"
        className="blog-sticky-cta-close"
        aria-label="Zatvori"
        onClick={handleClose}
      >
        ×
      </button>
      <img src={product.image} alt={product.name} className="blog-sticky-cta-img" />
      <div className="blog-sticky-cta-text">
        <span className="blog-sticky-cta-label">Ovaj proizvod je dostupan kod nas</span>
        <strong className="blog-sticky-cta-name">{product.name}</strong>
      </div>
      <Link href={`/sadnice/${product.slug}`} className="blog-sticky-cta-btn">
        Naruči odmah
      </Link>
    </div>
  );
}
