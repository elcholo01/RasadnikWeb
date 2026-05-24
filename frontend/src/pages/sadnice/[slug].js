import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { products, getCategoryName } from '../../data/productsData';
import ImageLightbox from '../../components/ImageLightbox';

// SSG: generiši HTML za svaki proizvod pri build-u
export async function getStaticPaths() {
  const paths = products.map(p => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) return { notFound: true };
  return { props: { product } };
}

const ProductDetails = ({ product }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(
    product.sizes && product.sizes.length === 1 ? 0 : null
  );

  const categoryName = getCategoryName(product.category);
  const productImages = product.images && product.images.length > 0 ? product.images : [product.image];
  const priceText = product.showPrice ? ` | Cena od ${product.price.toLocaleString()} RSD` : '';
  const metaDesc = `${product.name} - ${product.description.substring(0, 130)}${priceText}`;

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveIndex(i => (i - 1 + productImages.length) % productImages.length);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveIndex(i => (i + 1) % productImages.length);
  };

  return (
    <>
      <Head>
        <title>{product.name} – Rasadnik Tilija | Kupite sadnice</title>
        <meta name="description" content={metaDesc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://rasadniktilija.rs/sadnice/${product.slug}`} />
        <meta property="og:title" content={`${product.name} – Rasadnik Tilija`} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={`https://rasadniktilija.rs${product.image}`} />
        <meta name="twitter:image" content={`https://rasadniktilija.rs${product.image}`} />
        <meta property="og:url" content={`https://rasadniktilija.rs/sadnice/${product.slug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.richContent || product.description,
          "image": `https://rasadniktilija.rs${product.image}`,
          "offers": product.showPrice ? {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "RSD",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "Rasadnik Tilija" }
          } : undefined
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://rasadniktilija.rs" },
            { "@type": "ListItem", "position": 2, "name": "Sadnice", "item": "https://rasadniktilija.rs/products" },
            { "@type": "ListItem", "position": 3, "name": product.name, "item": `https://rasadniktilija.rs/sadnice/${product.slug}` }
          ]
        })}} />
      </Head>

      <div className="product-details-page">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link href="/">{t('nav.home') || 'Početna'}</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href="/products">{t('nav.products') || 'Proizvodi'}</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        <div className="product-details-container">
          {/* Leva strana - galerija */}
          <div className="product-image-section">
            <div className="product-main-image" onClick={() => openLightbox(activeIndex)}>
              <Image
                src={productImages[activeIndex]}
                alt={`${product.name} – sadnica, Rasadnik Tilija`}
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {productImages.length > 1 && (
                <>
                  <button className="carousel-btn carousel-prev" onClick={prevImage} aria-label="Prethodna slika">&#8249;</button>
                  <button className="carousel-btn carousel-next" onClick={nextImage} aria-label="Sledeća slika">&#8250;</button>
                  <div className="carousel-dots">
                    {productImages.map((_, i) => (
                      <span
                        key={i}
                        className={`carousel-dot ${i === activeIndex ? 'active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
                      />
                    ))}
                  </div>
                </>
              )}
              <span className={`stock-indicator ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                {product.inStock ? (t('products.inStock') || 'Na stanju') : (t('products.outOfStock') || 'Nema na stanju')}
              </span>
              <div className="image-zoom-hint">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <span>{t('productDetails.clickToEnlarge') || 'Kliknite za uvećanje'}</span>
              </div>
            </div>

            {productImages.length > 1 && (
              <div className="product-thumbnails">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    className={`thumbnail-btn ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <Image src={img} alt={`${product.name} – fotografija ${index + 1}`} fill style={{ objectFit: 'cover' }} sizes="70px" />
                  </button>
                ))}
              </div>
            )}

            {productImages.length > 1 && (
              <p className="gallery-hint">
                {activeIndex + 1} / {productImages.length} – {t('productDetails.clickToEnlarge') || 'kliknite za uvećanje'}
              </p>
            )}
          </div>

          {/* Desna strana - informacije */}
          <div className="product-info-section">
            <div className="product-category-badge">{categoryName}</div>

            <h1 className="product-title">{product.name}</h1>

            <div className="product-description">
              <p>{product.description}</p>
              {product.richContent && (
                <p style={{ marginTop: '12px', color: '#444', fontSize: '0.97rem', lineHeight: 1.7 }}>
                  {product.richContent}
                </p>
              )}
            </div>

            {product.sizes ? (
              <div className="product-size-selector">
                <label htmlFor="size-select" className="size-selector-label">{product.sizeLabel || 'Odaberite visinu:'}</label>
                <select
                  id="size-select"
                  className="size-select-dropdown"
                  value={selectedSizeIdx ?? ''}
                  onChange={e => setSelectedSizeIdx(e.target.value === '' ? null : Number(e.target.value))}
                >
                  {product.sizes.length > 1 && <option value="">— Izaberite —</option>}
                  {product.sizes.map((s, i) => (
                    <option key={i} value={i}>
                      {s.label}{s.price ? `  —  ${s.price.toLocaleString()} RSD` : '  —  na upit'}
                    </option>
                  ))}
                </select>
                <div className={`product-price-section${selectedSizeIdx !== null && !product.sizes[selectedSizeIdx].price ? ' price-on-request-section' : ''}`}>
                  {selectedSizeIdx === null ? (
                    <>
                      <span className="product-price-label">Cena od</span>
                      <span className="product-price-value">{product.price.toLocaleString()} RSD</span>
                    </>
                  ) : product.sizes[selectedSizeIdx].price ? (
                    <>
                      <span className="product-price-label">Cena</span>
                      <span className="product-price-value">{product.sizes[selectedSizeIdx].price.toLocaleString()} RSD</span>
                    </>
                  ) : (
                    <span className="product-price-value">Cena na upit</span>
                  )}
                </div>
              </div>
            ) : product.showPrice ? (
              <div className="product-price-section">
                <span className="product-price-label">Cena od</span>
                <span className="product-price-value">{product.price.toLocaleString()} RSD</span>
              </div>
            ) : (
              <div className="product-price-section price-on-request-section">
                <span className="product-price-value">Cena na upit</span>
              </div>
            )}

            {product.details && (
              <div className="product-specifications">
                <h3>{t('productDetails.specifications') || 'Karakteristike'}</h3>
                <div className="specs-grid">
                  {product.details.height && (
                    <div className="spec-item">
                      <span className="spec-icon">📏</span>
                      <div className="spec-content">
                        <span className="spec-label">{t('productDetails.height') || 'Visina'}</span>
                        <span className="spec-value">{product.details.height}</span>
                      </div>
                    </div>
                  )}
                  {product.details.sunlight && (
                    <div className="spec-item">
                      <span className="spec-icon">☀️</span>
                      <div className="spec-content">
                        <span className="spec-label">{t('productDetails.sunlight') || 'Svetlost'}</span>
                        <span className="spec-value">{product.details.sunlight}</span>
                      </div>
                    </div>
                  )}
                  {product.details.watering && (
                    <div className="spec-item">
                      <span className="spec-icon">💧</span>
                      <div className="spec-content">
                        <span className="spec-label">{t('productDetails.watering') || 'Zalivanje'}</span>
                        <span className="spec-value">{product.details.watering}</span>
                      </div>
                    </div>
                  )}
                  {product.details.soil && (
                    <div className="spec-item">
                      <span className="spec-icon">🌱</span>
                      <div className="spec-content">
                        <span className="spec-label">{t('productDetails.soil') || 'Zemljište'}</span>
                        <span className="spec-value">{product.details.soil}</span>
                      </div>
                    </div>
                  )}
                  {product.details.hardiness && (
                    <div className="spec-item">
                      <span className="spec-icon">❄️</span>
                      <div className="spec-content">
                        <span className="spec-label">{t('productDetails.hardiness') || 'Otpornost'}</span>
                        <span className="spec-value">{product.details.hardiness}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="product-actions">
              <Link href="/contact" className="contact-btn">
                {t('productDetails.contactUs') || 'Kontaktirajte nas za narudžbinu'}
              </Link>
              <button onClick={() => router.back()} className="back-btn">
                ← {t('productDetails.back') || 'Nazad'}
              </button>
            </div>
          </div>
        </div>

        {lightboxOpen && (
          <ImageLightbox
            images={productImages}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
            productName={product.name}
          />
        )}
      </div>
    </>
  );
};

export default ProductDetails;
