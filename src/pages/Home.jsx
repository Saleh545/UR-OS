import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/pages/home.scss';

// React Icons
import {
  FaCalendar, FaClock, FaUserTie, FaFileAlt, FaRobot,
  FaUtensils, FaWhatsapp, FaBell, FaUsers, FaChartLine, FaCogs, FaUserTimes, FaBookOpen, FaSyncAlt
} from 'react-icons/fa';
import { TbMoodNervous } from 'react-icons/tb';
import { MdTableRestaurant } from 'react-icons/md';
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io';

// Assets
import heroUros from "/src/assets/hero-uros.png";
import instagram from "../assets/Instagram.svg";
import fb from "../assets/fb.png";
import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";
import speed from "../assets/speed.png";
import carx from "../assets/carx.png";
import robot from "../assets/robot.png";
import data from "../assets/data.png";
import fa from "../assets/2fa.png";
import logo from "../assets/hero-logo.png";
import tik from "../assets/tik.png";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Slaydları buradaca təyin edirik
  const slides = [
    // SLIDE 1: CRM & Statistics
    (
      <div className="mac-window" key="slide1">
        <div className="mac-header">
          <div className="dots">
            <span></span><span></span><span></span>
          </div>
          <div className="address-bar">ur-os.admin / CRM & Sources</div>
        </div>
        <div className="mac-body crm-body">
          <div className="stat-box">
            <p>TOTAL RESERVES (OCTOBER)</p>
            <h2>1,248</h2>
          </div>
          <div className="progress-group">
            <div className="p-row">
              <span className="label text-green">WhatsApp</span>
              <span className="value">850 (68%)</span>
            </div>
            <div className="progress-bar">
              <div className="fill green" style={{ width: '68%' }}></div>
            </div>
          </div>
          <div className="progress-group">
            <div className="p-row">
              <span className="label text-pink">Instagram</span>
              <span className="value">398 (32%)</span>
            </div>
            <div className="progress-bar">
              <div className="fill pink" style={{ width: '32%' }}></div>
            </div>
          </div>
        </div>
      </div>
    ),
    // SLIDE 2: Menu Management
    (
      <div className="mac-window" key="slide2">
        <div className="mac-header">
          <div className="dots">
            <span></span><span></span><span></span>
          </div>
          <div className="address-bar">ur-os.admin / Menu Management</div>
        </div>
        <div className="mac-body menu-body">
          <div className="menu-item">
            <div className="item-info">
              <div className="icon-box orange"></div>
              <div>
                <h4>Ribeye Steak</h4>
                <p>$45.00</p>
              </div>
            </div>
            <div className="toggle active"></div>
          </div>
          <div className="menu-item">
            <div className="item-info">
              <div className="icon-box green"></div>
              <div>
                <h4>Caesar Salad</h4>
                <p>$12.50</p>
              </div>
            </div>
            <div className="toggle active"></div>
          </div>
          <div className="menu-item disabled">
            <div className="item-info">
              <div className="icon-box red"></div>
              <div>
                <h4>Mojito (Sold Out)</h4>
                <p>$8.00</p>
              </div>
            </div>
            <div className="toggle"></div>
          </div>
        </div>
      </div>
    ),
    // SLIDE 3: Table Plan
    (
      <div className="mac-window" key="slide3">
        <div className="mac-header">
          <div className="dots">
            <span></span><span></span><span></span>
          </div>
          <div className="address-bar">ur-os.admin / Floor Plan</div>
        </div>
        <div className="mac-body table-body">
          <div className="t-grid">
            <div className="t-card occupied">
              <h3>T-1</h3>
              <span>Occupied</span>
            </div>
            <div className="t-card reserved">
              <h3>T-2</h3>
              <span>Reserved</span>
            </div>
            <div className="t-card free">
              <h3>T-3</h3>
              <span>Free</span>
            </div>
            <div className="t-card free">
              <h3>T-4</h3>
              <span>Free</span>
            </div>
            <div className="t-card occupied">
              <h3>T-5</h3>
              <span>Occupied</span>
            </div>
            <div className="t-card vip">
              <h3>VIP</h3>
              <span>Reserved</span>
            </div>
          </div>
        </div>
      </div>
    )
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const partners = Array(10).fill({ name: "ChefPub" });

  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(1);

  // İkonları ID-yə görə bir massivdə saxlayırıq
  const icons = {
    1: <FaUserTimes />,
    2: <FaBookOpen />,
    3: <FaBell />,
    4: <FaSyncAlt />
  };

  // JSON-dan "items" massivini götürürük
  const featuresData = t('features_section.items', { returnObjects: true });
  return (
    <>
      <Header />

      <section className="hero">
        <div className="glow-circle left"></div>
        <div className="glow-circle right"></div>

        <div className="container">
          <div className="hero-status">
            <div className="badge">
              <span className="dot"></span> System Status: Online
            </div>
          </div>
          <div className="hero-flex">
            {/* Mətn tərəfi */}
            <div className="hero-content">

              <h1 className="hero-title">
                Biznes əməliyyat <br /> <span className="highlight">sistemi</span>
              </h1>
              <p className="hero-subtitle">
                Restoran idarəçiliyini avtomatlaşdıran vahid ekosistem.
                Xaosdan sistemə keçin.
              </p>
              <div className="hero-btns">
                <Link to="/sign" className="btn-main">İndi Başla</Link>
                <button className="btn-demo">Demo İzlə</button>
              </div>
            </div>

            {/* Vizual Tərəf (Canlı Kod Slayder) */}
            <div className="hero-img">
              <div className="visual-wrapper">
                <div className="slideshow-container">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`slide-item ${index === activeSlide ? 'active' : ''}`}
                    >
                      {slide}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="partners-strip">
        <div className="container">

          {/* Başlıq */}
          <h5 className="strip-title">BİZİ SEÇƏN MƏKANLAR</h5>

          {/* Sürüşən Sahə */}
          <div className="slider">
            <div className="slide-track">

              {/* Sonsuz dövr üçün 2 dəfə render edirik */}
              {[...partners, ...partners].map((item, index) => (
                <div className="slide" key={index}>
                  {/* Logo Dizaynı (Şəkil varsa <img> istifadə et) */}
                  <div className="logo-box">
                    <FaUtensils className="logo-icon" />
                    <span className="logo-text">{item.name}</span>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

  <section className="features-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">WHY UR-OS?</span>
          <h2>{t('features.title', 'Niyə məhz UR-OS?')}</h2>
          <div className="line"></div>
        </div>

        <div className="features-grid">
          {Array.isArray(featuresData) && featuresData.map((item) => (
            <div 
              key={item.id} 
              className={`feature-card ${activeId === item.id ? 'active' : ''}`}
              onClick={() => setActiveId(item.id)}
            >
              {/* ✅ İkon və Başlıq üçün üst qrup */}
              <div className="card-top">
                <div className="icon-box">
                  {icons[item.id]}
                </div>
                <h3>{item.title}</h3>
              </div>
              
              {/* ✅ Təsvir hissəsi (Yalnız aktiv olanda açılır) */}
              <div className="desc-wrapper">
                 <p>{item.desc}</p>
              </div>

              {/* Mobildə aç/bağla göstəricisi */}
              <div className="status-indicator">
                <span>{activeId === item.id ? '−' : '+'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="pain-points">
        <div className="container">
          <div className="pain-up">
            <h2>Problem nöqtələri və <span>çətinliklər</span></h2>
          </div>
          <div className="pain-flex">
            <div className="pain-card">
              <FaCalendar className="pain-icon" />
              <p>Rezervasiyalar itir</p>
              <span>Müştərilərin rezervasiyalarının düzgün qeydə alınmaması və ya itməsi.</span>
            </div>
            <div className="pain-card">
              <FaClock className="pain-icon" />
              <p>İdarəetmə gecikir</p>
              <span>Müştərilərin rezervasiyalarının düzgün qeydə alınmaması və ya itməsi.</span>
            </div>
            <div className="pain-card">
              <MdTableRestaurant className="pain-icon" />
              <p>Masa qarışıqlığı</p>
              <span>Müştərilərin rezervasiyalarının düzgün qeydə alınmaması və ya itməsi.</span>
            </div>
            <div className="pain-card">
              <FaUserTie className="pain-icon" />
              <p>İşçi nəzarətsizliyi</p>
              <span>Müştərilərin rezervasiyalarının düzgün qeydə alınmaması və ya itməsi.</span>
            </div>
            <div className="pain-card">
              <FaFileAlt className="pain-icon" />
              <p>Hesabat yoxdur</p>
              <span>Müştərilərin rezervasiyalarının düzgün qeydə alınmaması və ya itməsi.</span>
            </div>
            <div className="pain-card">
              <TbMoodNervous className="pain-icon" />
              <p>Müştəri narazılığı </p>
              <span>Müştərilərin rezervasiyalarının düzgün qeydə alınmaması və ya itməsi.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="solutions">
        <div className="container">
          <div className="solutions-up">
            <h2>Problemin həll yolu üçün sizə təklif edilən</h2>
          </div>
          <div className="solutions-flex">
            <div className="solutions-card">
              <FaRobot className="solutions-icon" />
              <p>Rezervasiya botu:</p>
              <span>"Rezervasiya botu müştərilərin asanlıqla masa sifariş etməsini təmin edir, zaman itkisinin qarşısını alır və əməliyyatları avtomatlaşdırır."</span>
            </div>
            <div className="solutions-card">
              <MdTableRestaurant className="solutions-icon" />
              <p>Masa idarəetməsi:</p>
              <span>"Masa idarəetməsi sistemi masaların düzgün bölüşdürülməsini və resursların optimallaşdırılmasını təmin edir."</span>
            </div>
            <div className="solutions-card">
              <FaUtensils className="solutions-icon" />
              <p>Menyu idarəetməsi:</p>
              <span>"Menyu idarəetməsi ilə restoranın təklif etdiyi yeməkləri asanlıqla yeniləyin, qiymətləri tənzimləyin və müştərilərə daha yaxşı xidmət göstərin."</span>
            </div>
            <div className="solutions-card">
              <FaWhatsapp className="solutions-icon" />
              <p>WhatsApp avtomatlaşdırma:</p>
              <span>"WhatsApp avtomatlaşdırma vasitəsi ilə müştərilərlə əlaqəni sürətləndirin, onlara təsdiqlər, bildirişlər və məlumatlar göndərin."</span>
            </div>
            <div className="solutions-card">
              <FaBell className="solutions-icon" />
              <p>Bildiriş sistemi:</p>
              <span>"Bildiriş sistemi vasitəsilə müştərilərə və işçilərə vacib məlumatları vaxtında və effektiv şəkildə çatdırın."</span>
            </div>
            <div className="solutions-card">
              <FaUsers className="solutions-icon" />
              <p>CRM müştəri bazası:</p>
              <span>"CRM müştəri bazası ilə müştəri əlaqələrini idarə edin, onların tələblərini daha yaxşı başa düşərək daha hədəfli xidmətlər təqdim edin."</span>
            </div>
            <div className="solutions-card">
              <FaChartLine className="solutions-icon" />
              <p>Statistika & analytics:</p>
              <span>"Statistika və analytics alətləri ilə restoranın fəaliyyətini izləyin, satışları analiz edin və qərarları məlumatlara əsaslanaraq verin."</span>
            </div>
            <div className="solutions-card">
              <FaCogs className="solutions-icon" />
              <p>Admin panel:</p>
              <span>"Admin panel vasitəsilə restoranın bütün əməliyyatlarını idarə edin, statistikaları yoxlayın və müştəri xidmətlərini optimallaşdırın."</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="integrations" id="integrations">
        <div className="integrations__inner">
          <h2 className="integrations__title">İnteqrasiya</h2>
          <div className="integrations__grid">
            <div className="integration-card">
              <div className="integration-card__icon">
                <img src={instagram} alt="Instagram" />
              </div>
              <div className="integration-card__label">Instagram</div>
            </div>
            <div className="integration-card">
              <div className="integration-card__icon">
                <img src={whatsapp} alt="WhatsApp" />
              </div>
              <div className="integration-card__label">WhatsApp</div>
            </div>
            <div className="integration-card">
              <div className="integration-card__icon">
                <img src={telegram} alt="Telegram" />
              </div>
              <div className="integration-card__label">Telegram</div>
            </div>
            <div className="integration-card">
              <div className="integration-card__icon">
                <img src={fb} alt="Meta" />
              </div>
              <div className="integration-card__label">Facebook</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why" id="why">
        <div className="why__inner">
          <h2 className="why__title">
            Niyə <span>UR-OS</span>
          </h2>
          <div className="why__grid">
            <div className="why-card">
              <div className="why-card__icon why-card__icon--green">
                <img src={speed} alt="Biznes üçün sürət" />
              </div>
              <div className="why-card__text">
                <div className="why-card__line">Biznes üçün sürət</div>
              </div>
            </div>
            <div className="why-card">
              <div className="why-card__icon why-card__icon--mint">
                <img src={carx} alt="Tam avtomatlaşdırma" />
              </div>
              <div className="why-card__text">
                <div className="why-card__line">Tam avtomatlaşdırma</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners" id="partners">
        <div className="partners__inner">
          <h2 className="partners__title">Partners</h2>
          <div className="partners__grid">
            <a className="partner-card" href="#" aria-label="Gastronom">
              <img src="https://monyo.az/uploads/a_72_logo.png?x=1761820060" alt="Gastronom" />
            </a>
            <a className="partner-card" href="#" aria-label="Gastronom">
              <img src="https://monyo.az/uploads/a_72_logo.png?x=1761820060" alt="Gastronom" />
            </a>
            <a className="partner-card" href="#" aria-label="Gastronom">
              <img src="https://monyo.az/uploads/a_72_logo.png?x=1761820060" alt="Gastronom" />
            </a>
            <a className="partner-card" href="#" aria-label="Gastronom">
              <img src="https://monyo.az/uploads/a_72_logo.png?x=1761820060" alt="Gastronom" />
            </a>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="roadmap">
        <div className="roadmap__inner">
          <h2 className="roadmap__title">Roadmap</h2>
          <div className="roadmap__content">
            <div className="roadmap__item roadmap__item--left">
              <div className="roadmap__visual bot">
                <img src={robot} alt="Reservasiya Bot" />
              </div>
              <div className="roadmap__text">
                <h3>Reservasiya bot</h3>
                <p>WhatsApp, Instagram və Telegram üzərindən avtomatik rezervasiya.</p>
              </div>
            </div>
            <div className="roadmap__line"></div>
            <div className="roadmap__item roadmap__item--right">
              <div className="roadmap__visual panel">
                <img src={heroUros} alt="Admin Panel" />
              </div>
              <div className="roadmap__text">
                <h3>Admin Panel</h3>
                <p>Rezervasiyalar, masalar, statistika və idarəetmə paneli.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="security">
        <div className="security__inner">
          <h2 className="security__title">Security</h2>
          <div className="security__grid">
            <div className="security-card">
              <div className="security-card__icon">
                <img src={data} alt="Data encrypted" />
              </div>
              <h3>Data encrypted</h3>
              <p>Bütün məlumatlar şifrələnmiş şəkildə qorunur.</p>
            </div>
            <div className="security-card">
              <div className="security-card__icon">
                <img src={fa} alt="2FA" />
              </div>
              <h3>2FA</h3>
              <p>İki mərhələli doğrulama ilə əlavə təhlükəsizlik.</p>
            </div>
            <div className="security-card">
              <div className="security-card__icon">
                <img src={tik} alt="Security compliance" />
              </div>
              <h3>Security compliance</h3>
              <p>Beynəlxalq təhlükəsizlik standartlarına uyğunluq.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="footer__brand">
              <img src={logo} alt="UR-OS" />
              <p>Biznes proseslərini avtomatlaşdıran vahid ekosistem.</p>
            </div>
            <div className="footer__links">
              <div className="footer__col">
                <h4>About</h4>
                <a href="#">Haqqımızda</a>
                <a href="#">Niyə UR-OS</a>
              </div>
              <div className="footer__col">
                <h4>Solutions</h4>
                <a href="#">Rezervasiya botu</a>
                <a href="#">Admin Panel</a>
              </div>
              <div className="footer__col">
                <h4>Integrations</h4>
                <a href="#">WhatsApp</a>
                <a href="#">Instagram</a>
                <a href="#">Telegram</a>
              </div>
              <div className="footer__col">
                <h4>Contact</h4>
                <a href="mailto:info@ur-os.az">info@ur-os.az</a>
                <a href="#">Support</a>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} UR-OS. Bütün hüquqlar qorunur.</span>
            <div className="footer__socials">
              <Link to="#"><IoLogoFacebook /></Link>
              <Link to="#"><IoLogoWhatsapp /></Link>
              <Link to="#"><IoLogoInstagram /></Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;