import React, { useState } from 'react'
import './Header.css'
import { useLanguage } from '../../context/LanguageContext.jsx'

const Header = () => {
  const { language, setLanguage, t } = useLanguage()
  const [activeLink, setActiveLink] = useState('')

  return (
    <header className="site-header">
      <div className="header-content">
        <div className="brand">
          <div className="brand-title">
            <a href="/" aria-label="Go to home" className="brand-link">
              <img src={'src/assets/ucs_logo.png'} alt="Logo" />
            </a>
          </div>
        </div>

        <nav className="nav">
          <a
            className={`nav-link ${activeLink === 'fund' ? 'active' : ''}`}
            href="#fund"
            onClick={() => setActiveLink('fund')}
          >
            {t('header.fund')}
          </a>
          <a
            className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
            href="#projects"
            onClick={() => setActiveLink('projects')}
          >
            {t('header.projects')}
          </a>
          <a
            className={`nav-link ${activeLink === 'stories' ? 'active' : ''}`}
            href="#stories"
            onClick={() => setActiveLink('stories')}
          >
            {t('header.stories')}
          </a>
          <a
            className={`nav-link ${activeLink === 'contacts' ? 'active' : ''}`}
            href="#contacts"
            onClick={() => setActiveLink('contacts')}
          >
            {t('header.contacts')}
          </a>
        </nav>

        <div className="actions">
          <div className="lang">
            <button
              className={`lang-btn ${language === 'uk' ? 'active' : ''}`}
              type="button"
              onClick={() => setLanguage('uk')}
            >
              {t('header.ua')}
            </button>
            <span className="lang-sep">|</span>
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              type="button"
              onClick={() => setLanguage('en')}
            >
              {t('header.en')}
            </button>
          </div>
          <a className="donate-btn" href="#help">{t('header.donate')}</a>
        </div>
      </div>
    </header>
  )
}

export default Header
