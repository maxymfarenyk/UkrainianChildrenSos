import React from 'react';
import './Hero.css';
import { useLanguage } from '../../../context/LanguageContext.jsx';
import BlueWave from "../../../components/Waves/BlueWave.jsx";

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

      <BlueWave />

    </section>
  );
};

export default Hero;
