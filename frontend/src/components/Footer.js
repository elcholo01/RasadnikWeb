import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🌿 Sadnice</h3>
            <p>{t('footer.description')}</p>
          </div>
          
          <div className="footer-section">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><Link href="/" onClick={() => window.scrollTo(0,0)}>{t('nav.home')}</Link></li>
              <li><Link href="/products" onClick={() => window.scrollTo(0,0)}>{t('nav.products')}</Link></li>
              <li><Link href="/about" onClick={() => window.scrollTo(0,0)}>{t('nav.about')}</Link></li>
              <li><Link href="/contact" onClick={() => window.scrollTo(0,0)}>{t('nav.contact')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t('footer.contactInfo')}</h4>
            <ul>
              <li><a href="tel:+381638870837" style={{color: 'inherit', textDecoration: 'none'}}>📞 +381 63 88 70 837</a></li>
              <li><a href="mailto:tilijarasadnik5@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>📧 tilijarasadnik5@gmail.com</a></li>
              <li><a href="https://maps.app.goo.gl/9jQQNMUU1meWtXk58" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>📍 Pločica, Srbija</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Pratite nas</h4>
            <a
              href="https://www.instagram.com/rasadnik_tilija?igsh=MWV1aHB6bzAxMWljdw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
              aria-label="Instagram profil"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer; 