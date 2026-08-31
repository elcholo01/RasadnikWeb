import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { products, categories, getCategoryName } from '../../data/productsData';
import blogPosts from '../../data/blogData';
import categoryContent from '../../data/categoryContent';
import ImageLightbox from '../../components/ImageLightbox';

// Opšti FAQ o procesu naručivanja — prikazuje se kad proizvod nema
// sopstveni, ručno napisan productFaq. Namerno ne sadrži tvrdnje o
// samoj biljci, samo tačne, iste informacije o poručivanju za sve.
const DEFAULT_ORDER_FAQ = [
  { q: 'Kako mogu da naručim sadnice?', a: 'Pozovite nas na 063 88 70 837 ili pošaljite upit preko kontakt forme na sajtu — dogovaramo količinu, cenu i termin preuzimanja ili dostave.' },
  { q: 'Da li vršite dostavu i sadnju?', a: 'Da, dostavljamo sadnice širom Srbije i, po dogovoru, vršimo profesionalnu sadnju na vašoj lokaciji.' },
  { q: 'Da li mogu lično da posetim rasadnik i izaberem sadnice?', a: 'Naravno — nalazimo se u Pločici kod Kovina. Kontaktirajte nas da dogovorimo termin posete.' },
];

// SSG: generiši HTML za svaki proizvod I svaku kategoriju pri build-u.
// Isti [slug] segment nosi dva tipa stranice: proizvod (/sadnice/tuja-smaragd)
// i kategoriju (/sadnice/cetinari) — nema kolizije jer se ID-jevi kategorija
// i slugovi proizvoda ne poklapaju.
export async function getStaticPaths() {
  const productPaths = products.map(p => ({ params: { slug: p.slug } }));
  const categoryPaths = categories
    .filter(c => c.id !== 'sve')
    .map(c => ({ params: { slug: c.id } }));
  return { paths: [...productPaths, ...categoryPaths], fallback: false };
}

export async function getStaticProps({ params }) {
  const product = products.find(p => p.slug === params.slug);
  if (product) {
    return { props: { pageType: 'product', product } };
  }

  const category = categories.find(c => c.id === params.slug && c.id !== 'sve');
  if (category) {
    const categoryProducts = products.filter(p =>
      (p.categories && p.categories.includes(category.id)) || p.category === category.id
    );
    const content = categoryContent[category.id] || null;
    return { props: { pageType: 'category', category, categoryProducts, content } };
  }

  return { notFound: true };
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
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const categoryName = getCategoryName(product.category);
  const relatedPost = product.relatedBlogSlug ? blogPosts.find(p => p.slug === product.relatedBlogSlug) : null;
  const faq = product.productFaq || DEFAULT_ORDER_FAQ;
  const productImages = product.images && product.images.length > 0 ? product.images : [product.image];
  const priceText = product.showPrice ? ` | Cena od ${product.price.toLocaleString()} RSD` : '';
  const descAlreadyHasName = product.description.toLowerCase().startsWith(product.name.toLowerCase());
  const metaDesc = product.metaDescription || `${descAlreadyHasName ? '' : product.name + ' - '}${product.description.substring(0, 150)}${priceText}`;
  const pageTitle = product.seoTitle || `${product.name} – Rasadnik Tilija | Kupite sadnice`;

  const selectedSize = product.sizes && selectedSizeIdx !== null ? product.sizes[selectedSizeIdx] : null;
  const waPriceText = selectedSize
    ? (selectedSize.price ? ` (${selectedSize.label} – ${selectedSize.price.toLocaleString()} RSD)` : ` (${selectedSize.label})`)
    : (product.showPrice ? ` – cena od ${product.price.toLocaleString()} RSD` : '');
  const waMessage = `Zdravo, zanima me ${product.name}${waPriceText}. Da li je dostupno i kolika je dostava?`;
  const waHref = `https://wa.me/381638870837?text=${encodeURIComponent(waMessage)}`;

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
        <title>{pageTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://rasadniktilija.rs/sadnice/${product.slug}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={`https://rasadniktilija.rs${product.image}`} />
        <meta name="twitter:image" content={`https://rasadniktilija.rs${product.image}`} />
        <meta property="og:url" content={`https://rasadniktilija.rs/sadnice/${product.slug}`} />
        {product.showPrice && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": product.richContent || product.description,
            "image": `https://rasadniktilija.rs${product.image}`,
            "offers": {
              "@type": "Offer",
              "price": product.price,
              "priceCurrency": "RSD",
              "availability": "https://schema.org/InStock",
              "seller": { "@type": "Organization", "name": "Rasadnik Tilija" }
            }
          })}} />
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://rasadniktilija.rs" },
            { "@type": "ListItem", "position": 2, "name": "Sadnice", "item": "https://rasadniktilija.rs/products" },
            { "@type": "ListItem", "position": 3, "name": product.name, "item": `https://rasadniktilija.rs/sadnice/${product.slug}` }
          ]
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faq.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a }
          }))
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
              {product.richContent && product.richContent.split('\n\n').map((paragraph, i) => (
                <p key={i} style={{ marginTop: '12px', color: '#444', fontSize: '0.97rem', lineHeight: 1.7 }}>
                  {paragraph}
                </p>
              ))}
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

            <div className="trust-badges">
              <div className="trust-badge">
                <span className="trust-badge-icon">🚚</span>
                <span>Dostava širom Srbije</span>
              </div>
              <div className="trust-badge">
                <span className="trust-badge-icon">🌱</span>
                <span>Usluga sadnje na terenu</span>
              </div>
              <div className="trust-badge">
                <span className="trust-badge-icon">📞</span>
                <span>Brz odgovor na upit</span>
              </div>
            </div>

            {product.details && (
              <div className="product-specifications">
                <h3>{t('productDetails.specifications') || 'Karakteristike'}</h3>
                <div className="specs-table-wrapper">
                  <table className="specs-table">
                    <tbody>
                      {product.details.height && (
                        <tr>
                          <th>{t('productDetails.height') || 'Visina'}</th>
                          <td>{product.details.height}</td>
                        </tr>
                      )}
                      {product.details.growthRate && (
                        <tr>
                          <th>{t('productDetails.growthRate') || 'Brzina rasta'}</th>
                          <td>{product.details.growthRate}</td>
                        </tr>
                      )}
                      {product.details.spacing && (
                        <tr>
                          <th>{t('productDetails.spacing') || 'Razmak sadnje'}</th>
                          <td>{product.details.spacing}</td>
                        </tr>
                      )}
                      {product.details.sunlight && (
                        <tr>
                          <th>{t('productDetails.sunlight') || 'Svetlost'}</th>
                          <td>{product.details.sunlight}</td>
                        </tr>
                      )}
                      {product.details.watering && (
                        <tr>
                          <th>{t('productDetails.watering') || 'Zalivanje'}</th>
                          <td>{product.details.watering}</td>
                        </tr>
                      )}
                      {product.details.soil && (
                        <tr>
                          <th>{t('productDetails.soil') || 'Zemljište'}</th>
                          <td>{product.details.soil}</td>
                        </tr>
                      )}
                      {product.details.hardiness && (
                        <tr>
                          <th>{t('productDetails.hardiness') || 'Otpornost'}</th>
                          <td>{product.details.hardiness}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="product-faq">
              <h3>Najčešća pitanja o kupovini</h3>
              {faq.map((item, i) => (
                <div key={i} className={`product-faq-item ${openFaqIdx === i ? 'open' : ''}`}>
                  <button
                    className="product-faq-question"
                    onClick={() => setOpenFaqIdx(openFaqIdx === i ? null : i)}
                    aria-expanded={openFaqIdx === i}
                  >
                    <span>{item.q}</span>
                    <span className="product-faq-toggle">{openFaqIdx === i ? '−' : '+'}</span>
                  </button>
                  {openFaqIdx === i && (
                    <p className="product-faq-answer">{item.a}</p>
                  )}
                </div>
              ))}
            </div>

            {relatedPost && (
              <div className="product-related-article">
                <h3>Detaljan vodič za sadnju i negu</h3>
                <Link href={`/blog/${relatedPost.slug}`} className="related-article-card">
                  <span className="related-article-title">{relatedPost.title}</span>
                  <span className="related-article-cta">Pročitajte kompletan vodič →</span>
                </Link>
              </div>
            )}

            <div className="product-actions">
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="whatsapp-order-btn">
                <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20" aria-hidden="true">
                  <path d="M16.003 0C7.17 0 .008 7.162.008 16a15.93 15.93 0 002.22 8.14L.003 32l8.12-2.12A16 16 0 1016.003 0zm0 29.333a13.28 13.28 0 01-6.787-1.867l-.48-.293-5.013 1.307 1.333-4.867-.32-.493A13.28 13.28 0 012.67 16c0-7.333 5.987-13.333 13.333-13.333S29.336 8.667 29.336 16s-5.987 13.333-13.333 13.333zm7.307-9.96c-.4-.2-2.36-1.16-2.727-1.293-.36-.133-.627-.2-.893.2-.267.4-1.027 1.293-1.267 1.56-.24.267-.48.3-.88.1-.4-.2-1.68-.613-3.2-1.96-1.18-1.053-1.98-2.347-2.213-2.747-.24-.4-.027-.613.173-.813.173-.173.4-.453.6-.693.2-.24.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.893-2.16-1.227-2.96-.32-.76-.64-.667-.893-.68L10.5 8.72c-.267 0-.7.1-1.067.5-.36.4-1.387 1.36-1.387 3.307 0 1.96 1.42 3.853 1.62 4.12.2.267 2.8 4.28 6.787 6.013.947.413 1.687.653 2.267.84.953.3 1.82.253 2.507.153.76-.113 2.347-.96 2.68-1.887.333-.92.333-1.72.233-1.887-.1-.16-.36-.253-.76-.453z" />
                </svg>
                Poruči preko WhatsApp-a
              </a>
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

const CategoryView = ({ category, categoryProducts, content }) => {
  const { t } = useTranslation();
  const pageTitle = content?.seoTitle || `${category.name} – prodaja sadnica | Rasadnik Tilija`;
  const metaDesc = content?.metaDescription || `Prodaja sadnica iz kategorije ${category.name} – Rasadnik Tilija, dostava širom Srbije.`;
  const canonicalUrl = `https://rasadniktilija.rs/sadnice/${category.id}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://rasadniktilija.rs/images/hero-background.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://rasadniktilija.rs/images/hero-background.webp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": pageTitle,
          "description": metaDesc,
          "url": canonicalUrl,
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": categoryProducts.map((p, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "url": `https://rasadniktilija.rs/sadnice/${p.slug}`,
              "name": p.name
            }))
          }
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://rasadniktilija.rs" },
            { "@type": "ListItem", "position": 2, "name": "Sadnice", "item": "https://rasadniktilija.rs/products" },
            { "@type": "ListItem", "position": 3, "name": category.name, "item": canonicalUrl }
          ]
        })}} />
      </Head>

      <div className="category-page">
        <nav className="breadcrumb">
          <Link href="/">{t('nav.home') || 'Početna'}</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href="/products">{t('nav.products') || 'Proizvodi'}</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{category.name}</span>
        </nav>

        <div className="category-hero">
          <h1>{category.name}</h1>
          <p className="category-count">{categoryProducts.length} {categoryProducts.length === 1 ? 'sadnica dostupna' : 'sadnica dostupno'}</p>
        </div>

        {content?.intro && (
          <div
            className="category-intro"
            dangerouslySetInnerHTML={{ __html: content.intro }}
          />
        )}

        <div className="products-grid-compact category-products-grid">
          {categoryProducts.map(product => (
            <Link key={product.id} href={`/sadnice/${product.slug}`} className="product-card-compact">
              <div className="product-image-compact">
                <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} sizes="(max-width: 640px) 50vw, (max-width: 1200px) 33vw, 25vw" />
                <span className={`stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                  {product.inStock ? (t('products.inStock') || 'Na stanju') : (t('products.outOfStock') || 'Nema na stanju')}
                </span>
                <div className="card-overlay">Pogledaj detalje →</div>
              </div>
              <div className="product-info-compact">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                {product.sizes && product.sizes.length > 0
                  ? <div className="product-price-badge">{product.sizes[0].price ? `${product.sizes[0].price.toLocaleString()} RSD` : 'Cena na upit'}</div>
                  : product.showPrice
                    ? <div className="product-price-badge">od {product.price.toLocaleString()} RSD</div>
                    : <div className="product-price-badge price-on-request">Cena na upit</div>
                }
              </div>
            </Link>
          ))}
        </div>

        <div className="category-cta">
          <p>Ne znate koja vrsta vam odgovara, ili vam treba veća količina za projekat?</p>
          <Link href="/contact" className="contact-btn">Kontaktirajte nas za savet i ponudu</Link>
        </div>
      </div>
    </>
  );
};

const SadnicePage = (props) => {
  if (props.pageType === 'category') {
    return <CategoryView category={props.category} categoryProducts={props.categoryProducts} content={props.content} />;
  }
  return <ProductDetails product={props.product} />;
};

export default SadnicePage;
