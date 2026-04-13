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
              <li>📍 Pločica, Srbija</li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer; 