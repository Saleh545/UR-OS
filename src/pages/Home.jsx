import React from 'react';
import Header from '../components/Header';
import '../styles/pages/home.scss';
import { FaCalendar, FaClock, FaUserTie, FaFileAlt, FaRobot, FaTable, FaUtensils, FaWhatsapp, FaBell, FaUsers, FaChartLine, FaCogs } from 'react-icons/fa';
import { TbMoodNervous } from 'react-icons/tb';
import { MdTableRestaurant } from 'react-icons/md';
import heroUros from "/src/assets/hero-uros.png";

import instagram from "../assets/Instagram.svg";
import fb from "../assets/fb.png";
import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";
import speed from "../assets/speed.png";
import carx from "../assets/carx.png";

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

      <section class="integrations" id="integrations">
        <div class="integrations__inner">
          <h2 class="integrations__title">İnteqrasiya</h2>

          <div class="integrations__grid">
            <div class="integration-card">
              <div class="integration-card__icon">
                <img src={instagram} alt="Instagram" />
              </div>
              <div class="integration-card__label">Instagram</div>
            </div>

            <div class="integration-card">
              <div class="integration-card__icon">
                <img src={whatsapp} alt="WhatsApp" />
              </div>
              <div class="integration-card__label">WhatsApp</div>
            </div>

            <div class="integration-card">
              <div class="integration-card__icon">
                <img src={telegram} alt="Telegram" />
              </div>
              <div class="integration-card__label">Telegram</div>
            </div>

            <div class="integration-card">
              <div class="integration-card__icon">
                <img src={fb} alt="Meta" />
              </div>
              <div class="integration-card__label">Facebook</div>
            </div>
          </div>
        </div>
      </section>

      <section class="why" id="why">
        <div class="why__inner">
          <h2 class="why__title">
            Niyə <span>UR-OS</span>
          </h2>

          <div class="why__grid">
            <div class="why-card">
              <div class="why-card__icon why-card__icon--green">
                <img src={speed} alt="Biznes üçün sürət" />
              </div>

              <div class="why-card__text">
                <div class="why-card__line">Biznes üçün sürət</div>
              </div>
            </div>

            <div class="why-card">
              <div class="why-card__icon why-card__icon--mint">
                <img src={carx} alt="Tam avtomatlaşdırma" />
              </div>

              <div class="why-card__text">
                <div class="why-card__line">Tam avtomatlaşdırma</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="partners" id="partners">
        <div class="partners__inner">
          <h2 class="partners__title">Partners</h2>

          <div class="partners__grid">
            <a class="partner-card" href="#" aria-label="Gastronom">
              <img src="https://monyo.az/uploads/a_72_logo.png?x=1761820060" alt="Gastronom" />
            </a>
            <a class="partner-card" href="#" aria-label="Gastronom">
              <img src="https://monyo.az/uploads/a_72_logo.png?x=1761820060" alt="Gastronom" />
            </a>
            <a class="partner-card" href="#" aria-label="Gastronom">
              <img src="https://monyo.az/uploads/a_72_logo.png?x=1761820060" alt="Gastronom" />
            </a>
            <a class="partner-card" href="#" aria-label="Gastronom">
              <img src="https://monyo.az/uploads/a_72_logo.png?x=1761820060" alt="Gastronom" />
            </a>
            <a class="partner-card" href="#" aria-label="Gastronom">
              <img src="https://monyo.az/uploads/a_72_logo.png?x=1761820060" alt="Gastronom" />
            </a>
            <a class="partner-card" href="#" aria-label="Gastronom">
              <img src="https://monyo.az/uploads/a_72_logo.png?x=1761820060" alt="Gastronom" />
            </a>
            <a class="partner-card" href="#" aria-label="Gastronom">
              <img src="https://monyo.az/uploads/a_72_logo.png?x=1761820060" alt="Gastronom" />
            </a>
            <a class="partner-card" href="#" aria-label="Gastronom">
              <img src="https://monyo.az/uploads/a_72_logo.png?x=1761820060" alt="Gastronom" />
            </a>

          </div>
        </div>
      </section>


    </>
  );
}

export default Home;
