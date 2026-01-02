import React, { useState } from 'react'
import '../main.scss'
import '../styles/component/header.scss'
import { Link } from 'react-router-dom'
import heroLogo from "/src/assets/hero-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header-flex">

            <div className="header-left">
              <img src={heroLogo} alt="" />
            </div>

            {/* DESKTOP MENU – SƏNİN KODUN */}
            <div className="header-right">
              <ul>
                <li><Link>Haqqımızda</Link></li>
                <li><Link>Funksiyalar</Link></li>
                <li><Link>İntegrasiyalar</Link></li>
                <li><Link>Partnyorlar</Link></li>
                <li><Link>Niyə UR-OS</Link></li>
                <li><Link>Təhlükəsizlik</Link></li>
              </ul>

              <button className='lang'>AZ</button>

              <div className="login">
                <Link to="/sign-up">Sign up</Link>
              </div>
            </div>

            {/* 🍔 HAMBURGER (MOBİL) */}
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
            <li><Link onClick={() => setMenuOpen(false)}>Haqqımızda</Link></li>
            <li><Link onClick={() => setMenuOpen(false)}>Funksiyalar</Link></li>
            <li><Link onClick={() => setMenuOpen(false)}>İntegrasiyalar</Link></li>
            <li><Link onClick={() => setMenuOpen(false)}>Partnyorlar</Link></li>
            <li><Link onClick={() => setMenuOpen(false)}>Niyə UR-OS</Link></li>
            <li><Link onClick={() => setMenuOpen(false)}>Təhlükəsizlik</Link></li>
          </ul>

          <button className="lang">AZ</button>

          <div className="login">
            <Link to="/sign-up">Sign up</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
