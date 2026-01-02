import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  az: {
    translation: {
      about: "Haqqımızda",
      features: "Funksiyalar",
      integrations: "İnteqrasiyalar",
      partners: "Partnyorlar",
      why: "Niyə UR-OS",
      security: "Təhlükəsizlik",
      signup: "Qeydiyyat",
      heroTitle: "Biznes əməliyyat sistemi",
      heroSubtitle: "Restoran idarəçiliyini avtomatlaşdıran vahid ekosistem."
    }
  },
  en: {
    translation: {
      about: "About",
      features: "Features",
      integrations: "Integrations",
      partners: "Partners",
      why: "Why UR-OS",
      security: "Security",
      signup: "Sign up",
      heroTitle: "Business Operating System",
      heroSubtitle: "A unified ecosystem for restaurant automation."
    }
  },
  ru: {
    translation: {
      about: "О нас",
      features: "Функции",
      integrations: "Интеграции",
      partners: "Партнёры",
      why: "Почему UR-OS",
      security: "Безопасность",
      signup: "Регистрация",
      heroTitle: "Бизнес операционная система",
      heroSubtitle: "Единая экосистема автоматизации ресторанов."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "az", // default dil
    fallbackLng: "az",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
