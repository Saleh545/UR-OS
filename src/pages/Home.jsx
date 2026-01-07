import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/pages/home.scss';
import { useTranslation } from 'react-i18next';

// React Icons
import { FaUtensils, FaTelegramPlane, FaUserTimes, FaBookOpen, FaBell, FaSyncAlt } from 'react-icons/fa';
import { IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io';
import { MdDashboard, MdAllInclusive, MdSecurity, MdSmartToy, MdNotificationsActive, MdSmartphone, MdKeyboardArrowDown } from 'react-icons/md';
import { FiPlus, FiMinus } from 'react-icons/fi'; // ✅ YENİ: FAQ üçün ikonlar

const Home = () => {
  const { t } = useTranslation();
  
  // State-lər
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeId, setActiveId] = useState(null);       // Features və Capabilities üçün
  const [activeFaqId, setActiveFaqId] = useState(null); // ✅ YENİ: FAQ üçün

  // Referanslar
  const gridRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const faqRef = useRef(null); // ✅ YENİ: FAQ üçün ref

  const slides = [
    <div className="mac-window" key="slide1">
      <div className="mac-header"><div className="dots"><span></span><span></span><span></span></div><div className="address-bar">ur-os.admin / CRM & Sources</div></div>
      <div className="mac-body crm-body">
        <div className="stat-box"><p>TOTAL RESERVES (OCTOBER)</p><h2>1,248</h2></div>
        <div className="progress-group">
          <div className="p-row"><span className="label text-green">WhatsApp</span><span className="value">850 (68%)</span></div>
          <div className="progress-bar"><div className="fill green" style={{ width: '68%' }}></div></div>
        </div>
        <div className="progress-group">
          <div className="p-row"><span className="label text-pink">Instagram</span><span className="value">398 (32%)</span></div>
          <div className="progress-bar"><div className="fill pink" style={{ width: '32%' }}></div></div>
        </div>
      </div>
    </div>,
    <div className="mac-window" key="slide2">
      <div className="mac-header"><div className="dots"><span></span><span></span><span></span></div><div className="address-bar">ur-os.admin / Menu Management</div></div>
      <div className="mac-body menu-body">
        <div className="menu-item"><div className="item-info"><div className="icon-box orange"></div><div><h4>Ribeye Steak</h4><p>$45.00</p></div></div><div className="toggle active"></div></div>
        <div className="menu-item"><div className="item-info"><div className="icon-box green"></div><div><h4>Caesar Salad</h4><p>$12.50</p></div></div><div className="toggle active"></div></div>
      </div>
    </div>,
    <div className="mac-window" key="slide3">
      <div className="mac-header"><div className="dots"><span></span><span></span><span></span></div><div className="address-bar">ur-os.admin / Floor Plan</div></div>
      <div className="mac-body table-body">
        <div className="t-grid">
          <div className="t-card occupied"><h3>T-1</h3><span>Occupied</span></div>
          <div className="t-card reserved"><h3>T-2</h3><span>Reserved</span></div>
          <div className="t-card free"><h3>T-3</h3><span>Free</span></div>
          <div className="t-card vip"><h3>VIP</h3><span>Reserved</span></div>
        </div>
      </div>
    </div>
  ];

  // ✅ BİRLƏŞDİRİLMİŞ EFFEKT (Slayder + Kənara Klik)
  useEffect(() => {
    // 1. Slayder üçün interval
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    // 2. Kənara kliklədikdə bağlanma funksiyası (HAMISI BİR YERDƏ)
    const handleClickOutside = (event) => {
      // --- Features və Capabilities bağlanması ---
      const isOutsideGrid = gridRef.current && !gridRef.current.contains(event.target);
      const isOutsideCapabilities = capabilitiesRef.current && !capabilitiesRef.current.contains(event.target);

      if (isOutsideGrid && isOutsideCapabilities) {
        setActiveId(null);
      }

      // --- FAQ bağlanması ---
      const isOutsideFaq = faqRef.current && !faqRef.current.contains(event.target);
      if (isOutsideFaq) {
        setActiveFaqId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [slides.length]);

  const icons = {
    1: <FaUserTimes />, 2: <FaBookOpen />, 3: <FaBell />, 4: <FaSyncAlt />,
    5: <MdNotificationsActive />, 6: <MdSmartphone />, 7: <MdDashboard />,
    8: <MdAllInclusive />, 9: <MdSecurity />, 10: <MdSmartToy />,
  };

  // Dataları JSON-dan çəkirik
  const featuresData = t('features_section.items', { returnObjects: true });
  const capabilitiesData = t('capabilities.items', { returnObjects: true });
  const faqData = t('faq.items', { returnObjects: true }); // ✅ YENİ: FAQ datası
  const partners = Array(10).fill({ name: "ChefPub" });

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="glow-circle left"></div>
        <div className="glow-circle right"></div>
        <div className="container">
          <div className="hero-status">
            <div className="badge"><span className="dot"></span> System Status: Online</div>
          </div>
          <div className="hero-flex">
            <div className="hero-content">
              <h1 className="hero-title">{t('hero.title_part1')} <span className="highlight">{t('hero.title_highlight')}</span></h1>
              <p className="hero-subtitle">{t('hero.subtitle')}</p>
              <div className="hero-btns">
                <Link to="/sign" className="btn-main">{t('hero.btn_start')}</Link>
                <button className="btn-demo">{t('hero.btn_demo')}</button>
              </div>
            </div>
            <div className="hero-img">
              <div className="visual-wrapper">
                <div className="slideshow-container">
                  {slides.map((slide, index) => (
                    <div key={index} className={`slide-item ${index === activeSlide ? 'active' : ''}`}>{slide}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="partners-strip">
        <div className="container">
          <h5 className="strip-title">BİZİ SEÇƏN MƏKANLAR</h5>
          <div className="slider">
            <div className="slide-track">
              {[...partners, ...partners].map((item, index) => (
                <div className="slide" key={index}>
                  <div className="logo-box"><FaUtensils className="logo-icon" /><span className="logo-text">{item.name}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY UR-OS SECTION */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">WHY UR-OS?</span>
            <h2>{t('features.title_start')} <span>{t('features.title_end')}</span></h2>
            <div className="line"></div>
          </div>
          <div className="features-grid" ref={gridRef}>
            {Array.isArray(featuresData) && featuresData.map((item) => (
              <div
                key={item.id}
                className={`feature-card ${activeId === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveId(activeId === item.id ? null : item.id);
                }}
              >
                <div className="card-top">
                  <div className="icon-box">{icons[item.id]}</div>
                  <h3>{item.title}</h3>
                </div>
                <div className="desc-wrapper"><p>{item.desc}</p></div>
                <div className="status-indicator"><span>{activeId === item.id ? '−' : '+'}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section className="capabilities-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">{t('capabilities.subtitle')}</span>
            <h2 className="title">{t('capabilities.title')}</h2>
            <div className="underline"></div>
          </div>

          <div className="capabilities-grid" ref={capabilitiesRef}>
            {Array.isArray(capabilitiesData) && capabilitiesData.map((item) => (
              <div
                key={item.id}
                className={`cap-card ${activeId === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveId(activeId === item.id ? null : item.id);
                }}
              >
                <div className="cap-card-content">
                  <div className="icon-box">{icons[item.id]}</div>
                  <div className="arrow"><MdKeyboardArrowDown /></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  <div className="details-wrapper">
                    <div className="details-content">
                      <div className="divider"></div>

                      {/* İnteqrasiyalar (ID: 2) üçün xüsusi görünüş */}
                      {item.id === 2 ? (
                        <div className="supported-platforms">
                          <span className="platform-label">SUPPORTED BY META</span>
                          <div className="platform-list">
                            <div className="platform-item instagram">
                              <IoLogoInstagram /> <span>Instagram</span>
                            </div>
                            <div className="platform-item whatsapp">
                              <IoLogoWhatsapp /> <span>WhatsApp</span>
                            </div>
                            <div className="platform-item telegram">
                              <FaTelegramPlane /> <span>Telegram</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <ul>
                          {item.details?.map((detail, idx) => (
                            <li key={idx}><span className="check">✓</span> {detail}</li>
                          ))}
                        </ul>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FAQ SECTION (YENİLƏNMİŞ) */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">{t('faq.subtitle')}</span>
            <h2 className="title">{t('faq.title')}</h2>
            <div className="underline"></div>
          </div>

          <div className="faq-container" ref={faqRef}>
            {Array.isArray(faqData) && faqData.map((item) => (
              <div 
                key={item.id}
                className={`faq-item ${activeFaqId === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation(); 
                  setActiveFaqId(activeFaqId === item.id ? null : item.id);
                }}
              >
                <div className="faq-header">
                  <h3>{item.question}</h3>
                  <div className="toggle-icon">
                    {activeFaqId === item.id ? <FiMinus /> : <FiPlus />}
                  </div>
                </div>

                <div className="faq-body">
                  <div className="body-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;