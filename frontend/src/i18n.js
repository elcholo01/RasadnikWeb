import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationSR from './locales/sr.json';
import translationEN from './locales/en.json';

const resources = {
  sr: {
    translation: translationSR
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'sr', // Default je srpski
    fallbackLng: 'sr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

