import React, { useState, useEffect } from 'react';
import '../main.scss';
import '../styles/component/header.scss';
import { Link } from 'react-router-dom';
import heroLogo from '/src/assets/hero-logo.png';
import { useTranslation } from 'react-i18next';
import { TfiWorld } from 'react-icons/tfi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { t, i18n } = useTranslation();

  const languages = ["az", "en", "ru"];

  // ✅ 1. SCROLL QADAĞASI: Menyu açılanda body-ni sabitləyir
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Komponentdən çıxanda (unmount) təmizləmə
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

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

  const changeLang = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const currentLang = i18n.language || 'az';
      const currentIndex = languages.indexOf(currentLang);
      const nextLang = languages[(currentIndex + 1) % languages.length];

      i18n.changeLanguage(nextLang);
      localStorage.setItem('language', nextLang);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }, 500);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`page-transition ${isTransitioning ? 'active' : ''}`}></div>

      {/* ✅ 2. KƏNARA KLİKLƏMƏ ÜÇÜN OVERLAY */}
      {menuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 9998, // Mobil menyunun z-index-indən (9999) bir az az
            backdropFilter: 'blur(2px)'
          }}
        ></div>
      )}

      <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-flex">
            <div className="header-left">
              <Link to="/">
                <img src={heroLogo} alt="UR-OS Logo" />
              </Link>
            </div>

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

            <div className="header-right">
              <button className="lang-btn" onClick={changeLang}>
                <TfiWorld />
                {(i18n.language || "az").toUpperCase()}
              </button>

              <Link to="/sign" className="login-btn">
                {t("header.cabinet", "Şəxsi kabinet")} <span>→</span>
              </Link>
            </div>

            <div className="burger" onClick={() => setMenuOpen(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
};

export default Header;  