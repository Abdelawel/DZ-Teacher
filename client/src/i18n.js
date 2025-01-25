import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import ar from './locales/ar/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en, // English translations
      },
      ar: {
        translation: ar, // Arabic translations
      },
    },
    lng: 'en', // Default language (set to 'en' for English)
    fallbackLng: 'en', // If translations are not available in the current language, use English
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
