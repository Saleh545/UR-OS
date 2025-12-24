import React from 'react'
import '../main.scss'
import '../styles/component/header.scss'
import { Link } from 'react-router-dom'
import heroLogo from "/src/assets/hero-logo.png";


const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header-flex">
            <div className="header-left">
              
              <img src={heroLogo} alt="" />
            </div>
            <div className="header-right">
              <ul>
                <li>
                  <Link>Haqqımızda</Link>
                </li>
                <li>
                  <Link>Funksiyalar</Link>
                </li>
                <li>
                  <Link>İntegrasiyalar</Link>
                </li>
                <li>
                  <Link>Partnyorlar</Link>
                </li>
                <li>
                  <Link>Niyə UR-OS</Link>
                </li>
                <li>
                  <Link>Təhlükəsizlik</Link>
                </li>
              </ul>

              <button className='lang' >AZ</button>

              <div className="login">
                {/* <Link to="/login">Login</Link> */}
                <Link to="/sign-up">Sign up</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
