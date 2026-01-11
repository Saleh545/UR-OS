import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiPhone, FiInstagram, FiMail, FiMapPin } from 'react-icons/fi';
import '../styles/component/footer.scss';
import logo from "../assets/logo.png"

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-section">
      <div className="container">

        {/* ÜST HİSSƏ */}
        <div className="footer-top">

          {/* 1. SOL: Logo və Təsvir */}
          <div className="footer-brand">
            <Link to="/"><img src={logo} alt="" /></Link>            <p className="desc">{t('footer.desc')}</p>
          </div>

          {/* 2. ORTA: Məhsul Linkləri */}
          <div className="footer-links">
            <h4 className="column-title">{t('footer.product')}</h4>
            <ul>
              <li><Link to="/">{t('footer.links.why')}</Link></li>
              <li><Link to="/">{t('footer.links.partners')}</Link></li>
              <li><Link to="/">{t('footer.links.features')}</Link></li>
              <li><Link to="/">{t('footer.links.system')}</Link></li>
              <li><Link to="/">{t('footer.links.faq')}</Link></li>
              <li><Link to="/login">{t('footer.links.cabinet')}</Link></li>
            </ul>
          </div>

          {/* 3. SAĞ: Əlaqə Kartları */}
          <div className="footer-contact">
            <h4 className="column-title">{t('footer.contact')}</h4>
            <div className="contact-grid">

              <Link to="tel:+994703600100" className="contact-card">
                <div className="icon"><FiPhone /></div>
                <div className="info">
                  <span>{t('footer.contact_info.call')}</span>
                  <h5>+994 70 360 01 00</h5>
                </div>
              </Link>

              <Link to="https://instagram.com/ur.os.az" target="_blank" rel="noreferrer" className="contact-card">
                <div className="icon"><FiInstagram /></div>
                <div className="info">
                  <span>{t('footer.contact_info.follow')}</span>
                  <h5>@ur.os.az</h5>
                </div>
              </Link>

              <Link to="mailto:uros@outlook.com" className="contact-card">
                <div className="icon"><FiMail /></div>
                <div className="info">
                  <span>{t('footer.contact_info.email')}</span>
                  <h5>uros@outlook.com</h5>
                </div>
              </Link>

              <div className="contact-card">
                <div className="icon"><FiMapPin /></div>
                <div className="info">
                  <span>{t('footer.contact_info.location')}</span>
                  <h5>{t('footer.contact_info.city')}</h5>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ALT HİSSƏ: Copyright */}
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;