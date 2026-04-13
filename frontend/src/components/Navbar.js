import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <span className="brand-icon">🌿</span>
          Sadnice
        </Link>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>
            {t('nav.home')}
          </Link>
          <Link href="/products" className="nav-link" onClick={() => setIsOpen(false)}>
            {t('nav.products')}
          </Link>
          <Link href="/about" className="nav-link" onClick={() => setIsOpen(false)}>
            {t('nav.about')}
          </Link>
          <Link href="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
            {t('nav.contact')}
          </Link>
          <Link href="/gallery" className="nav-link" onClick={() => setIsOpen(false)}>
            {t('nav.gallery')}
          </Link>
          <LanguageSwitcher />
        </div>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 