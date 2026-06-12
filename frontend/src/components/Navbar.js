import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="navbar-brand">
          <span className="brand-icon">🌿</span>
          Sadnice
        </Link>

        <div className={`navbar-menu${isOpen ? ' active' : ''}`}>
          <Link href="/" className={`nav-link${isActive('/') ? ' active' : ''}`} onClick={() => setIsOpen(false)}>
            {t('nav.home')}
          </Link>
          <Link href="/products" className={`nav-link${isActive('/products') ? ' active' : ''}`} onClick={() => setIsOpen(false)}>
            {t('nav.products')}
          </Link>
          <Link href="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`} onClick={() => setIsOpen(false)}>
            {t('nav.about')}
          </Link>
          <Link href="/contact" className={`nav-link${isActive('/contact') ? ' active' : ''}`} onClick={() => setIsOpen(false)}>
            {t('nav.contact')}
          </Link>
          <Link href="/gallery" className={`nav-link${isActive('/gallery') ? ' active' : ''}`} onClick={() => setIsOpen(false)}>
            {t('nav.gallery')}
          </Link>
          <Link href="/blog" className={`nav-link${isActive('/blog') ? ' active' : ''}`} onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <LanguageSwitcher />
        </div>

        <div className={`navbar-toggle${isOpen ? ' active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 