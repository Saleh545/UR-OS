import React from 'react';
import Header from '../components/Header';
import '../styles/pages/home.scss';
import { FaCalendar, FaClock,  FaUserTie, FaFileAlt, FaRobot, FaTable, FaUtensils, FaWhatsapp, FaBell, FaUsers, FaChartLine, FaCogs } from 'react-icons/fa';
import { TbMoodNervous } from 'react-icons/tb';
import { MdTableRestaurant } from 'react-icons/md';

const Home = () => {
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="container">
          <div className="hero-flex">
            <div className="hero-logo">
              <img src="src/assets/hero-uros.png" alt="Uros Logo" />
            </div>
            <div className="hero-content">
              <h1 className="hero-title">Biznes əməliyyat sistemi</h1>
              <p className="hero-subtitle">Restoran idarəçiliyini avtomatlaşdıran vahid ekosistem.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="pain-points">
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
              <MdTableRestaurant className="pain-icon"  />

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
      </div>

         <div className="solutions">
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
              <MdTableRestaurant className="solutions-icon"  />
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
    </div>
    </div>
  );
}

export default Home;
