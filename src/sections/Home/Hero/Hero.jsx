import React from 'react';
import './Hero.css';
import { useLanguage } from '../../../context/LanguageContext.jsx';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="home-hero">
      <div className="home-hero__inner">
        <div className="home-hero__content">
          <h1 className="home-hero__title">
            {t('home.hero.title_line1')}
            <br />
            {t('home.hero.title_line2')}
          </h1>
          <p className="home-hero__subtitle">
            {t('home.hero.subtitle1')}
            <br />
            {t('home.hero.subtitle2')}
          </p>
          <a href="#help" className="donate-btn">{t('home.hero.cta')}</a>
        </div>

        <div className="home-hero__decor" aria-hidden="true">
          <div className="home-hero__flagkid" />
          <div className="home-hero__sun" />
        </div>
      </div>

      <svg className="home-hero__wave" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,80 C240,140 480,0 720,60 C960,120 1200,40 1440,80 L1440,120 L0,120 Z" fill="#ffffff" />
      </svg>
    </section>
  );
};

export default Hero;
