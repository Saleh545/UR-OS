import React, { useState, useEffect } from 'react';
import '../main.scss';
import '../styles/component/header.scss';
import { Link } from 'react-router-dom';
import heroLogo from '/src/assets/hero-logo.png';
import { useTranslation } from 'react-i18next';
import { TfiWorld } from 'react-icons/tfi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false); // Keçid effekti üçün state
  const { t, i18n } = useTranslation();

  const languages = ["az", "en", "ru"];

  // LocalStorage-dən dili yükləmək
  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && languages.includes(savedLang)) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  // Title dəyişməsi
  useEffect(() => {
    document.title = t('hero.title', 'UR-OS | Biznes Əməliyyat Sistemi'); 
  }, [i18n.language, t]);

  // ✅ YENİLƏNMİŞ DİL DƏYİŞDİRMƏ FUNKSİYASI
  const changeLang = () => {
    // 1. Keçidi başlat (ekranı qaralt)
    setIsTransitioning(true);

    // 2. 500ms gözlə (animasiya üçün), sonra dili dəyiş
    setTimeout(() => {
      const currentLang = i18n.language || 'az';
      const currentIndex = languages.indexOf(currentLang);
      const nextLang = languages[(currentIndex + 1) % languages.length];
      
      i18n.changeLanguage(nextLang);
      localStorage.setItem('language', nextLang);

      // 3. Dili dəyişəndən sonra ekranı geri aç (qısa gecikmə ilə rəvanlıq üçün)
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
      
    }, 500); // Bu rəqəm CSS-dəki transition müddəti ilə eyni olmalıdır (0.5s)
  };

  return (
    <>
      {/* ⚫ KEÇİD PƏRDƏSİ (OVERLAY) ⚫ */}
      <div className={`page-transition ${isTransitioning ? 'active' : ''}`}></div>

      <div className="header">
        <div className="container">
          <div className="header-flex">

            {/* 1. LOGO (SOL) */}
            <div className="header-left">
              <Link to="/">
                <img src={heroLogo} alt="UR-OS Logo" />
              </Link>
            </div>

            {/* 2. MENU (MƏRKƏZ) */}
            <div className="header-center">
              <ul>
                <li><Link to="/partners">{t("header.partners", "Partnyorlar")}</Link></li>
                <li><Link to="/why">{t("header.why", "Niyə biz?")}</Link></li>
                <li><Link to="/features">{t("header.features", "İmkanlar")}</Link></li>
                <li><Link to="/system">{t("header.system", "Sistem")}</Link></li>
                <li><Link to="/faq">{t("header.faq", "Suallar")}</Link></li>
                <li><Link to="/contact">{t("header.contact", "Əlaqə")}</Link></li>
              </ul>
            </div>

            {/* 3. DİL VƏ KABİNET (SAĞ) */}
            <div className="header-right">
              {/* Dil düyməsi */}
              <button className="lang-btn" onClick={changeLang}>
                <TfiWorld />
                {(i18n.language || "az").toUpperCase()}
              </button>

              {/* Kabinet düyməsi */}
              <Link to="/sign" className="login-btn">
                {t("header.cabinet", "Şəxsi kabinet")} <span>→</span>
              </Link>
            </div>

            {/* 🍔 BURGER (MOBİL ÜÇÜN) */}
            <div className="burger" onClick={() => setMenuOpen(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </div>
          </div>
        </div>

        {/* 📱 MOBİL MENU AÇILAN HİSSƏ */}
        <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
          <div className="mobile-top">
            <button className="close" onClick={() => setMenuOpen(false)}>✕</button>
          </div>

          <ul>
            <li><Link onClick={() => setMenuOpen(false)} to="/partners">{t("header.partners", "Partnyorlar")}</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/why">{t("header.why", "Niyə biz?")}</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/features">{t("header.features", "İmkanlar")}</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/system">{t("header.system", "Sistem")}</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/faq">{t("header.faq", "Suallar")}</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/contact">{t("header.contact", "Əlaqə")}</Link></li>
          </ul>

          <div className="mobile-actions">
             <button className="lang-btn" onClick={changeLang}>
                <TfiWorld />
                {(i18n.language || "az").toUpperCase()}
             </button>
             <Link to="/sign" className="login-btn" onClick={() => setMenuOpen(false)}>
                {t("header.cabinet", "Şəxsi kabinet")} →
             </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;