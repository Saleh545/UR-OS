import React from 'react';
import Header from '../components/Header';
import '../styles/pages/home.scss';
import { FaCalendar, FaClock, FaUserTie, FaFileAlt, FaRobot, FaTable, FaUtensils, FaWhatsapp, FaBell, FaUsers, FaChartLine, FaCogs } from 'react-icons/fa';
import { TbMoodNervous } from 'react-icons/tb';
import { MdTableRestaurant } from 'react-icons/md';
import heroUros from "/src/assets/hero-uros.png";
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io';
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
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";



const Home = () => {
  
  return (
    <>
      <Header />
      <section className="hero">

        <div className="">
          <div className="hero-flex">
            <div className="hero-content">
              <h1 className="hero-title">Biznes əməliyyat sistemi</h1>
              <p className="hero-subtitle">Restoran idarəçiliyini avtomatlaşdıran vahid ekosistem.</p>
            </div>
            <div className="hero-img">
              <img src={heroUros} alt="" />
            </div>
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
            <Link href="#"><IoLogoFacebook /></Link>
            <Link href="#"><IoLogoWhatsapp /></Link>
            <Link href="#"><IoLogoInstagram /></Link>
          </div>
        </div>

      </div>
    </footer>
  );



    </>
  );
}

export default Home;
