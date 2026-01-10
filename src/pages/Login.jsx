import React, { useState, useEffect, useRef } from 'react';
import '../styles/pages/login.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { RiRobot2Line, RiCheckLine, RiFileTextLine, RiArrowRightLine } from 'react-icons/ri';
import { TfiWorld } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

// --- TYPEWRITER (Eyni qalır) ---
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

// --- LOGIN COMPONENT ---
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(0);
    const { t, i18n } = useTranslation();
    const languages = ["az", "en", "ru"];

    const changeLang = () => {
        const currentLang = i18n.language || 'az';
        const currentIndex = languages.indexOf(currentLang);
        const nextLang = languages[(currentIndex + 1) % languages.length];
        i18n.changeLanguage(nextLang);
        localStorage.setItem('language', nextLang);
    };

    useEffect(() => {
        let timer;
        if (step === 0) timer = setTimeout(() => setStep(1), 800);
        if (step === 4) timer = setTimeout(() => setStep(5), 1200);
        if (step === 5) timer = setTimeout(() => setStep(6), 1000);
        if (step === 6) timer = setTimeout(() => setStep(0), 4000);
        return () => clearTimeout(timer);
    }, [step]);

    return (
        <div className="login-container">
            {/* --- SOL TƏRƏF (Eyni qalır) --- */}
            <div className="login-left">
                <div className="brand-logo">
                    <Link to="/"><img src={logo} alt="UR-OS Logo" /></Link>
                </div>
                <div className="hero-text-fixed">
                    <h1 className="hero-title">
                        {t('hero.title_part1')} <br />
                        <span className="blue-text">{t('hero.title_highlight')}</span>
                    </h1>
                    <p className="hero-subtitle">{t('hero.subtitle')}</p>
                </div>
                <div className="chat-simulation">
                    <div className={`chat-message bot ${step >= 1 ? 'visible' : ''}`}>
                        <div className="avatar"><RiRobot2Line /></div>
                        <div className="bubble"><Typewriter text={t('chat.bot_greeting')} startTyping={step >= 1} onComplete={() => setTimeout(() => setStep(2), 1000)} /></div>
                    </div>
                    <div className={`chat-message user ${step >= 2 ? 'visible' : ''}`}>
                        <div className="bubble"><Typewriter text={t('chat.user_reply')} startTyping={step >= 2} onComplete={() => setTimeout(() => setStep(3), 1000)} /></div>
                    </div>
                    <div className={`chat-message bot ${step >= 3 ? 'visible' : ''}`}>
                        <div className="avatar"><RiRobot2Line /></div>
                        <div className="bubble"><Typewriter text={t('chat.bot_menu')} startTyping={step >= 3} onComplete={() => setTimeout(() => setStep(4), 800)} /></div>
                    </div>
                    <div className={`chat-extra-item file ${step >= 4 ? 'show' : ''}`}>
                        <div className="file-card">
                            <div className="icon-box orange"><RiFileTextLine /></div>
                            <div className="file-info"><span className="file-name">{t('chat.file_name')}</span><span className="file-meta">{t('chat.file_meta')}</span></div>
                            <RiArrowRightLine className="arrow-icon" />
                        </div>
                    </div>
                    <div className={`chat-extra-item alert ${step >= 5 ? 'show' : ''}`}>
                        <div className="success-alert">
                            <div className="check-icon"><RiCheckLine /></div>
                            <div className="alert-text"><span className="alert-title">{t('chat.alert_title')}</span><span className="alert-sub">{t('chat.alert_sub')}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SAĞ TƏRƏF --- */}
            <div className="login-right">
                
                {/* Dil Düyməsi */}
                <div className="lang-switcher-wrapper">
                    <button className="lang-btn" onClick={changeLang}>
                        <TfiWorld />
                        {(i18n.language || "az").toUpperCase()}
                    </button>
                </div>

                <div className="form-wrapper">
                    
                    {/* YENİ: MOBİL LOQO (Yalnız mobildə görünəcək) */}
                    <div className="mobile-logo">
                        <Link to="/"><img src={logo} alt="UR-OS Logo" /></Link>
                    </div>

                    <h2 className="form-title">
                        {t('login.welcome')} <span className="blue">UR-OS</span> 
                        <span className="wave-emoji">👋</span>
                    </h2>
                    <p className="form-subtitle">{t('login.subtitle')}</p>

                    <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>{t('login.email_label')}</label>
                            <input type="email" placeholder={t('login.placeholder_email')} className="form-input" />
                        </div>
                        <div className="form-group">
                            <label>{t('login.password_label')}</label>
                            <div className="password-input-wrapper">
                                <input type={showPassword ? "text" : "password"} placeholder={t('login.placeholder_password')} className="form-input" />
                                <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                        </div>
                        <div className="form-actions">
                            <label className="checkbox-container">
                                <input type="checkbox" /> <span className="checkmark"></span> {t('login.remember_me')}
                            </label>
                            <a href="#" className="forgot-link">{t('login.forgot_password')}</a>
                        </div>
                        <button type="submit" className="submit-btn">
                            {t('login.login_btn')} <RiArrowRightLine className="btn-icon" />
                        </button>
                        <p className="footer-text">
                            {t('login.footer_text')} <a href="#">{t('login.contact_us')}</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;