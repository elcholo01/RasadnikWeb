import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { products } from '../data/productsData';

const SCROLL_POSITION_KEY = 'products_scroll_position';
const PRODUCTS_STATE_KEY = 'products_state';
const ITEMS_PER_PAGE = 12;

const Products = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const scrollRestoredRef = useRef(false);

  const [selectedCategory, setSelectedCategory] = useState('sve');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    if (!router.isReady) return;
    setSelectedCategory(router.query.category || 'sve');
    setSearchTerm(router.query.search || '');
    setVisibleCount(parseInt(router.query.count) || ITEMS_PER_PAGE);
  }, [router.isReady]);

  useEffect(() => {
    if (!router.isReady) return;
    const query = {};
    if (selectedCategory !== 'sve') query.category = selectedCategory;
    if (searchTerm) query.search = searchTerm;
    if (visibleCount > ITEMS_PER_PAGE) query.count = visibleCount;
    router.replace({ pathname: '/products', query }, undefined, { shallow: true });
  }, [selectedCategory, searchTerm, visibleCount, router.isReady]);

  const categoryList = [
    { id: 'sve', name: t('products.allCategories') },
    { id: 'ziva-ograda', name: t('products.zivaOgrada') },
    { id: 'cetinari', name: t('products.cetinari') },
    { id: 'liscari', name: t('products.liscari') },
    { id: 'siblje', name: t('products.siblje') },
    { id: 'perene', name: t('products.perene') },
    { id: 'mediteranske', name: 'Mediteranske biljke' },
    { id: 'zemlja-i-malc', name: 'Zemlja i malč' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === 'sve' ||
      (product.categories && product.categories.includes(selectedCategory)) ||
      product.category === selectedCategory;
    const term = searchTerm.trim().toLowerCase();
    if (!term) return matchesCategory;
    return matchesCategory && product.name.toLowerCase().startsWith(term);
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < filteredProducts.length;

  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
    setVisibleCount(ITEMS_PER_PAGE);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(SCROLL_POSITION_KEY);
      sessionStorage.removeItem(PRODUCTS_STATE_KEY);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProductClick = () => {
    if (typeof window === 'undefined') return;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    sessionStorage.setItem(SCROLL_POSITION_KEY, scrollPosition.toString());
    sessionStorage.setItem(PRODUCTS_STATE_KEY, JSON.stringify({
      visibleCount, category: selectedCategory, search: searchTerm, timestamp: Date.now()
    }));
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const savedScroll = sessionStorage.getItem(SCROLL_POSITION_KEY);
    const savedState = sessionStorage.getItem(PRODUCTS_STATE_KEY);
    if (savedScroll && savedState && !scrollRestoredRef.current) {
      try {
        const state = JSON.parse(savedState);
        const scrollPos = parseInt(savedScroll, 10);
        if (scrollPos > 0 && Date.now() - state.timestamp < 5 * 60 * 1000) {
          requestAnimationFrame(() => {
            setTimeout(() => {
              window.scrollTo({ top: scrollPos, behavior: 'auto' });
              scrollRestoredRef.current = true;
              setTimeout(() => {
                sessionStorage.removeItem(SCROLL_POSITION_KEY);
                sessionStorage.removeItem(PRODUCTS_STATE_KEY);
                scrollRestoredRef.current = false;
              }, 500);
            }, 100);
          });
        }
      } catch (e) {
        sessionStorage.removeItem(SCROLL_POSITION_KEY);
        sessionStorage.removeItem(PRODUCTS_STATE_KEY);
      }
    }
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>Sadnice na prodaju – Rasadnik Tilija | Četinari, lišćari, perene, živa ograda</title>
        <meta name="description" content="Kupite sadnice iz Rasadnika Tilija – četinari, lišćari, šiblje, perene i živa ograda. 40+ vrsta po povoljnim cenama. Poručite online uz dostavu na adresu širom Srbije." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rasadniktilija.rs/products" />
        <meta property="og:title" content="Sadnice na prodaju – Rasadnik Tilija | Četinari, lišćari, perene, živa ograda" />
        <meta property="og:description" content="Kupite sadnice iz Rasadnika Tilija – četinari, lišćari, šiblje, perene i živa ograda. 40+ vrsta po povoljnim cenama. Poručite online uz dostavu na adresu širom Srbije." />
        <meta property="og:url" content="https://rasadniktilija.rs/products" />
        <meta property="og:image" content="https://rasadniktilija.rs/images/hero-background.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://rasadniktilija.rs/images/hero-background.webp" />
      </Head>
      <div className="products-page" style={{ background: 'linear-gradient(135deg, #e0f2f1 0%, #f9fbe7 100%)', minHeight: '100vh', paddingTop: '32px', paddingBottom: '48px' }}>

        <section className="section" style={{ background: 'linear-gradient(135deg, #f9fbe7 0%, #e0f2f1 100%)', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.08)', maxWidth: 900, margin: '0 auto 32px auto', padding: 32 }}>
          <h1 style={{ color: '#2e7d32', fontWeight: 700, textAlign: 'center', marginBottom: 12 }}>{t('products.title')}</h1>
          <p style={{ fontSize: '1.15rem', color: '#234d20', textAlign: 'center', marginBottom: 0 }}>{t('products.subtitle')}</p>
        </section>

        <section className="section" style={{ background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.08)', maxWidth: 1200, margin: '0 auto 32px auto', padding: '24px 32px' }}>
          <div className="filters" style={{ rowGap: '16px' }}>
            {categoryList.map(cat => (
              <button key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
                style={{ padding: '12px 28px', border: '2px solid #2e7d32', background: selectedCategory === cat.id ? '#2e7d32' : '#fff', color: selectedCategory === cat.id ? '#fff' : '#2e7d32', borderRadius: 25, cursor: 'pointer', transition: 'all 0.2s', fontWeight: 600, fontSize: '1.1rem' }}>
                {cat.name}
              </button>
            ))}
          </div>
          <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('products.searchPlaceholder')}
              style={{ width: '100%', maxWidth: 420, padding: '10px 16px', borderRadius: 999, border: '1.5px solid #c8e6c9', fontSize: '1rem', outline: 'none', boxShadow: '0 2px 8px rgba(44,62,80,0.06)' }} />
          </div>
        </section>

        <section className="section" style={{ background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.08)', maxWidth: 1200, margin: '0 auto', padding: '32px' }}>
          {filteredProducts.length > 0 ? (
            <>
              <div className="products-grid-compact">
                {visibleProducts.map(product => (
                  <Link key={product.id} href={`/sadnice/${product.slug}`} className="product-card-compact" onClick={handleProductClick}>
                    <div className="product-image-compact">
                      <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} sizes="(max-width: 640px) 50vw, (max-width: 1200px) 33vw, 25vw" />
                      <span className={`stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                        {product.inStock ? t('products.inStock') : t('products.outOfStock')}
                      </span>
                    </div>
                    <div className="product-info-compact">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      {product.sizes && product.sizes.length > 0
                        ? <div className="product-price-badge">{product.sizes[0].price.toLocaleString()} RSD</div>
                        : product.showPrice
                          ? <div className="product-price-badge">od {product.price.toLocaleString()} RSD</div>
                          : <div className="product-price-badge price-on-request">Cena na upit</div>
                      }
                    </div>
                  </Link>
                ))}
              </div>
              {hasMoreProducts && (
                <div className="load-more-container">
                  <button onClick={() => setVisibleCount(v => v + ITEMS_PER_PAGE)} className="load-more-btn">
                    {t('products.loadMore') || 'Ucitaj jos'} ({filteredProducts.length - visibleCount} {t('products.remaining') || 'preostalo'})
                  </button>
                </div>
              )}
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#234d20' }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{t('products.noPlantsInCategory')}</p>
              <button onClick={() => handleCategoryChange('sve')} style={{ padding: '12px 32px', background: '#2e7d32', color: '#fff', border: 'none', borderRadius: 25, cursor: 'pointer', fontSize: '1rem', fontWeight: 600 }}>
                {t('products.viewAll')}
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Products;
