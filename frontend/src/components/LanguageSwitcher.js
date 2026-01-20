import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsOpen(false);
  };

  // Zatvori dropdown kada se klikne izvan njega
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const languages = {
    sr: { flag: '🇷🇸', name: 'Srpski', code: 'SR' },
    en: { flag: '🇬🇧', name: 'English', code: 'EN' }
  };

  const currentLang = languages[i18n.language] || languages.sr;

  return (
    <div className="language-switcher-dropdown" ref={dropdownRef}>
      <button 
        className="lang-dropdown-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
      >
        <span className="globe-icon">🌍</span>
        <span className="current-lang">{currentLang.code}</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="lang-dropdown-menu">
          {Object.entries(languages).map(([code, lang]) => (
            <button
              key={code}
              className={`lang-option ${i18n.language === code ? 'active' : ''}`}
              onClick={() => changeLanguage(code)}
            >
              <span className="lang-flag">{lang.flag}</span>
              <span className="lang-name">{lang.name}</span>
              {i18n.language === code && <span className="check-icon">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

