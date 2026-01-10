import React, { useState, useEffect } from 'react';
import '../main.scss';
import '../styles/component/header.scss';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';
import { TfiWorld } from 'react-icons/tfi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const languages = ["az", "en", "ru"];

  const scrollToSection = (id) => {
    setMenuOpen(false);

    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80; // Header hündürlüyü qədər boşluq (istəyə görə dəyişə bilərsən)
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      navigate('/', { state: { targetId: id } });
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && languages.includes(savedLang)) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    document.title = t('app_title');
  }, [i18n.language, t]);

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

  const navLinks = [
    { id: 'partners', key: 'header.partners', label: 'Partnyorlar' },
    { id: 'why', key: 'header.why', label: 'Niyə biz?' },
    { id: 'features', key: 'header.features', label: 'İmkanlar' },
    { id: 'system', key: 'header.system', label: 'Sistem' },
    { id: 'faq', key: 'header.faq', label: 'Suallar' },
    { id: 'contact', key: 'header.contact', label: 'Əlaqə' },
  ];

  return (
    <>
      <div className={`page-transition ${isTransitioning ? 'active' : ''}`}></div>

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
            zIndex: 9998,
            backdropFilter: 'blur(2px)'
          }}
        ></div>
      )}

      <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-flex">
            <div className="header-left">
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src={logo} alt="UR-OS Logo" />
              </Link>
            </div>

            <div className="header-center">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    {/* DƏYİŞİKLİK BURADADIR: <a> əvəzinə <Link> */}
                    <Link
                      to="/" // Həmişə ana səhifəyə işarə edir
                      onClick={(e) => {
                        e.preventDefault(); // Link-in standart işini dayandırırıq
                        scrollToSection(link.id); // Öz funksiyamızı işlədirik
                      }}
                    >
                      {t(link.key, link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="header-right">
              <button className="lang-btn" onClick={changeLang}>
                <TfiWorld />
                {(i18n.language || "az").toUpperCase()}
              </button>

              <Link to="/login" className="login-btn">
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
          {navLinks.map((link) => (
            <li key={link.id}>
              {/* DƏYİŞİKLİK BURADADIR: Mobil menyuda da <a> əvəzinə <Link> */}
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
              >
                {t(link.key, link.label)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-actions">
          <button className="lang-btn" onClick={changeLang}>
            <TfiWorld />
            {(i18n.language || "az").toUpperCase()}
          </button>
          <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>
            {t("header.cabinet", "Şəxsi kabinet")} →
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;