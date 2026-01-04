import React from 'react'; // React import olunmalı
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext'; // Konteksti düzgün import et
import './i18n.js'; // i18n.js faylını import edin


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider> {/* Dil providerini yerləşdirin */}
        <App /> {/* Tətbiqinizi burada daxil edin */}
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
