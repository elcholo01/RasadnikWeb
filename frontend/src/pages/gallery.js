import React, { useState } from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import ImageLightbox from '../components/ImageLightbox';

const galleryImages = [
  '/images/projekti.jpeg', '/images/projekti2.jpeg', '/images/projekti3.jpeg',
  '/images/projekti4.jpeg', '/images/projekti6.jpeg',
  '/images/projekti8.jpeg',
  '/images/72097.jpeg', '/images/68271.jpeg', '/images/72095.jpeg',
  '/images/IMG_4670.jpeg', '/images/IMG_4686.jpeg', '/images/IMG_5210.jpeg',
  '/images/72290.jpeg', '/images/72052.jpeg', '/images/IMG_4839.jpeg',
  '/images/72299.jpeg', '/images/IMG_5327.jpeg', '/images/77219.jpeg',
  '/images/72100.jpeg', '/images/WhatsApp Image 2025-12-26 at 13.00.03.jpeg',
  '/images/486679551_18465391054068689_5399905233392503403_n.jpg',
  '/images/588721729_18509882257068689_6717567260362003079_n.jpg',
];

const Gallery = () => {
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <>
      <Head>
        <title>Galerija – Rasadnik Tilija | Fotografije biljaka i rasadnika</title>
        <meta name="description" content="Pogledajte fotografije biljaka iz Rasadnika Tilija u Pločici – četinari, lišćari, šiblje i perene. Proverite kvalitet sadnica pre kupovine." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rasadniktilija.rs/gallery" />
      </Head>
      <div className="gallery-page">
        <section className="gallery-section">
          <h1 className="gallery-title">{t('gallery.title')}</h1>
          <p className="gallery-subtitle">{t('gallery.subtitle')}</p>
          <div className="gallery-info">{galleryImages.length} {t('gallery.photos') || 'fotografija'}</div>
          <div className="gallery-grid">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="gallery-item" onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}>
                <img src={src} alt={`Rasadnik Tilija galerija ${idx + 1}`} onError={(e) => { e.target.src = '/images/logo.png'; }} />
                <div className="gallery-item-overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>
        {lightboxOpen && (
          <ImageLightbox images={galleryImages} initialIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} productName={t('gallery.title')} />
        )}
      </div>
    </>
  );
};

export default Gallery;
