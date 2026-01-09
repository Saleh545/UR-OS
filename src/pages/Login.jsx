import React, { useState, useEffect, useRef } from 'react';
import '../styles/pages/login.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { RiRobot2Line, RiCheckLine, RiFileTextLine, RiArrowRightLine } from 'react-icons/ri';

// --- TƏKMİLLƏŞDİRİLMİŞ TYPEWRITER (Stabil Versiya) ---
const Typewriter = ({ text, delay = 40, startTyping, onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const indexRef = useRef(0); // İndeksi yaddaşda saxlayırıq ki, itməsin
  const timerRef = useRef(null);

  useEffect(() => {
    if (!startTyping) return;

    // Əgər artıq yazılıbsa, təkrar yazmasın
    if (indexRef.current >= text.length) return;

    timerRef.current = setInterval(() => {
      // Cari indeksi artırırıq
      const idx = indexRef.current;
      
      if (idx < text.length) {
        // Hərfləri bir-bir əlavə edirik
        setCurrentText((prev) => prev + text.charAt(idx));
        indexRef.current += 1;
      } else {
        // Mətn bitdi
        clearInterval(timerRef.current);
        if (onComplete) onComplete();
      }
    }, delay);

    return () => clearInterval(timerRef.current);
  }, [text, delay, startTyping]); // onComplete-i bura daxil etmirik ki, loop yaranmasın

  return <span>{currentText}</span>;
};

// --- ƏSAS KOMPONENT ---
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  // Addımlar:
  // 0: Start
  // 1: Bot yazır
  // 2: User yazır
  // 3: Bot cavab yazır
  // 4: Fayl və Alert
  const [step, setStep] = useState(0);

  // Səhifə açılanda 1-ci addımı başlat
  useEffect(() => {
    const timer = setTimeout(() => setStep(1), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="login-container">
      {/* --- SOL TƏRƏF --- */}
      <div className="login-left">
        <div className="brand-logo">
          <span className="logo-text">UR<span className="blue">OS</span></span>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Restoranınızın <br />
            <span className="blue-text">Rəqəmsal Beyni</span>
          </h1>
          <p className="hero-subtitle">
            AI-botlar, ağıllı rezervasiya və interaktiv menyu. <br />
            Müştərilərinizə ən yüksək xidməti göstərin.
          </p>

          <div className="chat-simulation">
            
            {/* Mesaj 1: Bot */}
            <div className={`chat-message bot ${step >= 1 ? 'visible' : ''}`}>
              <div className="avatar"><RiRobot2Line /></div>
              <div className="bubble">
                {step >= 1 && (
                  <Typewriter 
                    text="Salam! Masa rezerv etmək istəyirsiniz? 👋" 
                    startTyping={true}
                    onComplete={() => setTimeout(() => setStep(2), 1000)} // 1 saniyə gözlə, sonra 2-ci gəlsin
                  />
                )}
              </div>
            </div>

            {/* Mesaj 2: User */}
            <div className={`chat-message user ${step >= 2 ? 'visible' : ''}`}>
              <div className="bubble">
                {step >= 2 && (
                  <Typewriter 
                    text="Bəli, 2 nəfər üçün. Bu axşam 20:00." 
                    startTyping={true}
                    onComplete={() => setTimeout(() => setStep(3), 1000)} // 1 saniyə gözlə, sonra 3-cü gəlsin
                  />
                )}
              </div>
            </div>

            {/* Mesaj 3: Bot */}
            <div className={`chat-message bot ${step >= 3 ? 'visible' : ''}`}>
              <div className="avatar"><RiRobot2Line /></div>
              <div className="bubble">
                {step >= 3 && (
                  <Typewriter 
                    text="Əla! Bizim yeni menyumuza baxın 👇" 
                    startTyping={true}
                    onComplete={() => setTimeout(() => setStep(4), 800)} // Bitəndə 4-cü (fayllar) gəlsin
                  />
                )}
              </div>
            </div>

            {/* Mesaj 4: Fayllar */}
            <div className={`chat-extras ${step >= 4 ? 'show' : ''}`}>
              <div className="file-card">
                <div className="icon-box orange"><RiFileTextLine /></div>
                <div className="file-info">
                  <span className="file-name">Chef's Special Menu</span>
                  <span className="file-meta">PDF • 2.4 MB</span>
                </div>
                <RiArrowRightLine className="arrow-icon" />
              </div>

              <div className="success-alert">
                <div className="check-icon"><RiCheckLine /></div>
                <div className="alert-text">
                  <span className="alert-title">REZERV TƏSDİQLƏNDİ</span>
                  <span className="alert-sub">Bu gün, 20:00 • Masa #4</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- SAĞ TƏRƏF (Login Form) --- */}
      <div className="login-right">
        <div className="form-wrapper">
          <div className="mobile-header">
             <span className="back-link">← Ana səhifə</span>
          </div>
          
          <h2 className="form-title">
            Xoş gəlmisiniz <span className="blue">UR-OS</span> 👋
          </h2>
          <p className="form-subtitle">
            Sistemi idarə etmək üçün hesabınıza daxil olun
          </p>

          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="admin@ur-os.az" className="form-input"/>
            </div>

            <div className="form-group">
              <label>Şifrə</label>
              <div className="password-input-wrapper">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="············" 
                  className="form-input"
                />
                <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="form-actions">
              <label className="checkbox-container">
                <input type="checkbox" /> <span className="checkmark"></span> Məni xatırlas
              </label>
              <a href="#" className="forgot-link">Şifrəni unutmusuz?</a>
            </div>

            <button type="submit" className="submit-btn">
              Daxil ol <RiArrowRightLine className="btn-icon"/>
            </button>

            <p className="footer-text">
              Hələ də UR-OS istifadə etmirsiniz? <a href="#">Bizə yazın</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;