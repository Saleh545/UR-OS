import React, { useState } from 'react'
import '../main.scss'
import '../styles/component/header.scss'
import { Link } from 'react-router-dom'
import heroLogo from "/src/assets/hero-logo.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const languages = ["az", "en", "ru"]

  const changeLang = () => {
    const currentIndex = languages.indexOf(i18n.language)
    const nextLang = languages[(currentIndex + 1) % languages.length]
    i18n.changeLanguage(nextLang)
  }

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header-flex">

            <div className="header-left">
              <img src={heroLogo} alt="UR-OS" />
            </div>

            {/* DESKTOP MENU */}
            <div className="header-right">
              <ul>
                <li><Link>{t("about")}</Link></li>
                <li><Link>{t("features")}</Link></li>
                <li><Link>{t("integrations")}</Link></li>
                <li><Link>{t("partners")}</Link></li>
                <li><Link>{t("why")}</Link></li>
                <li><Link>{t("security")}</Link></li>
              </ul>

              {/* 🔁 ONE LANG BUTTON */}
              <button className="lang" onClick={changeLang}>
                {i18n.language.toUpperCase()}
              </button>

              <div className="login">
                <Link to="/sign-up">{t("signup")}</Link>
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
            <li><Link onClick={() => setMenuOpen(false)}>{t("about")}</Link></li>
            <li><Link onClick={() => setMenuOpen(false)}>{t("features")}</Link></li>
            <li><Link onClick={() => setMenuOpen(false)}>{t("integrations")}</Link></li>
            <li><Link onClick={() => setMenuOpen(false)}>{t("partners")}</Link></li>
            <li><Link onClick={() => setMenuOpen(false)}>{t("why")}</Link></li>
            <li><Link onClick={() => setMenuOpen(false)}>{t("security")}</Link></li>
          </ul>

          {/* MOBILE LANG BUTTON */}
          <button className="lang" onClick={changeLang}>
            {i18n.language.toUpperCase()}
          </button>

          <div className="login">
            <Link to="/sign-up">{t("signup")}</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
