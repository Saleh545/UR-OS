import React, { useState, useEffect, useRef } from 'react';
import '../styles/pages/login.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { RiRobot2Line, RiCheckLine, RiFileTextLine, RiArrowRightLine } from 'react-icons/ri';

// --- TYPEWRITER (Reset funksiyası ilə) ---
const Typewriter = ({ text, delay = 40, startTyping, onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const indexRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!startTyping) {
      setCurrentText('');
      indexRef.current = 0;
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    if (indexRef.current >= text.length) return;

    timerRef.current = setInterval(() => {
      const idx = indexRef.current;
      if (idx < text.length) {
        setCurrentText((prev) => prev + text.charAt(idx));
        indexRef.current += 1;
      } else {
        clearInterval(timerRef.current);
        if (onComplete) onComplete();
      }
    }, delay);

    return () => clearInterval(timerRef.current);
  }, [text, delay, startTyping]);

  return <span>{currentText}</span>;
};

// --- ƏSAS KOMPONENT ---
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  // Addımlar:
  // 0: Reset
  // 1: Bot (Salam...)
  // 2: User (Bəli...)
  // 3: Bot (Əla...)
  // 4: Fayl (Menu PDF)
  // 5: Alert (Təsdiq)
  // 6: Gözləmə (Loop)
  const [step, setStep] = useState(0);

  // --- TRANSITION MƏNTİQİ (Hamsı burda olmalıdır) ---
  useEffect(() => {
    let timer;
    
    // 0 -> 1 (Başla)
    if (step === 0) {
      timer = setTimeout(() => setStep(1), 800);
    }
    
    // 4 -> 5 (Fayl gələndən 1.2 san sonra Alert gəlsin)
    if (step === 4) {
      timer = setTimeout(() => setStep(5), 1200);
    }

    // 5 -> 6 (Alert gələndən 1 san sonra bitir)
    if (step === 5) {
      timer = setTimeout(() => setStep(6), 1000);
    }

    // 6 -> 0 (Bitəndən 4 san sonra yenidən başla)
    if (step === 6) {
      timer = setTimeout(() => setStep(0), 4000);
    }

    return () => clearTimeout(timer);
  }, [step]);

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
                <Typewriter 
                  text="Salam! Masa rezerv etmək istəyirsiniz? 👋" 
                  startTyping={step >= 1}
                  onComplete={() => setTimeout(() => setStep(2), 1000)} 
                />
              </div>
            </div>

            {/* Mesaj 2: User */}
            <div className={`chat-message user ${step >= 2 ? 'visible' : ''}`}>
              <div className="bubble">
                <Typewriter 
                  text="Bəli, 2 nəfər üçün. Bu axşam 20:00." 
                  startTyping={step >= 2}
                  onComplete={() => setTimeout(() => setStep(3), 1000)}
                />
              </div>
            </div>

            {/* Mesaj 3: Bot */}
            <div className={`chat-message bot ${step >= 3 ? 'visible' : ''}`}>
              <div className="avatar"><RiRobot2Line /></div>
              <div className="bubble">
                <Typewriter 
                  text="Əla! Bizim yeni menyumuza baxın 👇" 
                  startTyping={step >= 3}
                  onComplete={() => setTimeout(() => setStep(4), 800)} 
                />
              </div>
            </div>

            {/* Mesaj 4: Fayl (TƏK) */}
            <div className={`chat-extra-item file ${step >= 4 ? 'show' : ''}`}>
              {/* DÜZƏLİŞ: onClick-də setStep məntiqi qala bilər, amma setTimeout burdan silindi */}
              <div className="file-card" onClick={() => step === 4 && setStep(5)}>
                <div className="icon-box orange"><RiFileTextLine /></div>
                <div className="file-info">
                  <span className="file-name">Chef's Special Menu</span>
                  <span className="file-meta">PDF • 2.4 MB</span>
                </div>
                <RiArrowRightLine className="arrow-icon" />
              </div>
            </div>

            {/* Mesaj 5: Alert (TƏK) */}
            <div className={`chat-extra-item alert ${step >= 5 ? 'show' : ''}`}>
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

      {/* --- SAĞ TƏRƏF --- */}
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