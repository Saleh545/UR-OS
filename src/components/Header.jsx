import React, { useState, useEffect } from 'react';
import '../main.scss';
import '../styles/component/header.scss';
import { Link } from 'react-router-dom';
import heroLogo from '/src/assets/hero-logo.png';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const languages = ["az", "en", "ru"];

  // LocalStorage-dən dili oxumaq
  useEffect(() => {
    const savedLang = localStorage.getItem('language'); // localStorage-dən dil məlumatını oxuyuruq
    if (savedLang && languages.includes(savedLang)) {
      i18n.changeLanguage(savedLang); // Əgər dil tapılırsa, onu seçirik
    }
  }, [i18n]);

  // Dil dəyişdirmə funksiyası
  const changeLang = () => {
    const currentLang = i18n.language || 'az';
    const currentIndex = languages.indexOf(currentLang);
    const nextLang = languages[(currentIndex + 1) % languages.length];
    i18n.changeLanguage(nextLang); // Dil dəyişdirilməsi
    localStorage.setItem('language', nextLang); // Yeni dili localStorage-də saxlayırıq
  };

  // Dil dəyişdikdə səhifə başlığını yeniləmək
  useEffect(() => {
    document.title = t('hero.title'); // Dil dəyişdikcə səhifə başlığını yeniləyirik
  }, [i18n.language, t]);

  return (
    <div className="header">
      <div className="container">
        <div className="header-flex">

          <div className="header-left">
            <img src={heroLogo} alt="UR-OS" />
          </div>

          {/* DESKTOP MENU */}
          <div className="header-right">
            <ul>
              <li><Link>{t("header.about")}</Link></li>
              <li><Link>{t("header.features")}</Link></li>
              <li><Link>{t("header.integrations")}</Link></li>
              <li><Link>{t("header.partners")}</Link></li>
              <li><Link>{t("header.why")}</Link></li>
              <li><Link>{t("header.security")}</Link></li>
            </ul>

            {/* 🌍 ONE LANGUAGE BUTTON */}
            <button className="lang" onClick={changeLang}>
              {(i18n.language || "az").toUpperCase()} {/* Dili göstərəcək */}
            </button>

            <div className="login">
              <Link to="/sign">{t("header.signup")}</Link>
            </div>
          </div>

          {/* 🍔 HAMBURGER */}
          <div className="burger" onClick={() => setMenuOpen(true)}>
            ☰
          </div>
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-top">
          <button className="close" onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <ul>
          <li><Link onClick={() => setMenuOpen(false)}>{t("header.about")}</Link></li>
          <li><Link onClick={() => setMenuOpen(false)}>{t("header.features")}</Link></li>
          <li><Link onClick={() => setMenuOpen(false)}>{t("header.integrations")}</Link></li>
          <li><Link onClick={() => setMenuOpen(false)}>{t("header.partners")}</Link></li>
          <li><Link onClick={() => setMenuOpen(false)}>{t("header.why")}</Link></li>
          <li><Link onClick={() => setMenuOpen(false)}>{t("header.security")}</Link></li>
        </ul>

        <button className="lang" onClick={changeLang}>
          {(i18n.language || "az").toUpperCase()} {/* Dili göstərəcək */}
        </button>

        <div className="login">
          <Link to="/sign">{t("header.signup")}</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
