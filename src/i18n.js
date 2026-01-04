// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Dil fayllarını daxil etmək
import az from './i18n/locales/az/translation.json';
import en from './i18n/locales/en/translation.json';
import ru from './i18n/locales/ru/translation.json';

// i18n konfiqurasiyası
i18n
  .use(initReactI18next) // React bağlayıcısı
  .init({
    resources: {
      az: { translation: az },
      en: { translation: en },
      ru: { translation: ru },
    },
    lng: "az", // default dil
    fallbackLng: "en", // fallback dil
    interpolation: {
      escapeValue: false, // React'ı istifadə etdiyimiz üçün HTML etiketlərindən qorunma lazım deyil
    },
  });

export default i18n;
