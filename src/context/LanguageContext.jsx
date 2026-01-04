import { createContext, useContext, useState, useEffect } from "react";
import az from "../i18n/locales/az/translation.json";
import en from "../i18n/locales/en/translation.json";
import ru from "../i18n/locales/ru/translation.json";

const languages = { az, en, ru };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('lang') || "az"); // Dil saxlanılır, səhifə yeniləndikdə qalır

  // Dil dəyişdirildikdə dilin kontekstdə qalması üçün
  useEffect(() => {
    localStorage.setItem('lang', lang); // LocalStorage-da saxlanır
  }, [lang]);

  const t = languages[lang];

  const toggleLang = () => {
    // Toggle dil dəyişimi
    setLang(prevLang =>
      prevLang === "az" ? "en" : prevLang === "en" ? "ru" : "az"
    );
  };

  return (
    <LanguageContext.Provider value={{ t, lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
