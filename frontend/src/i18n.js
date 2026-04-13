import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationSR from './locales/sr.json';
import translationEN from './locales/en.json';

const resources = {
  sr: { translation: translationSR },
  en: { translation: translationEN }
};

// localStorage nije dostupan na serveru (SSR)
const savedLang = typeof window !== 'undefined' ? localStorage.getItem('language') : null;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: savedLang || 'sr',
    fallbackLng: 'sr',
    interpolation: { escapeValue: false }
  });
}

export default i18n;
