import React from 'react';
import './Hero.css';
import { useLanguage } from '../../../context/LanguageContext.jsx';
import BlueWave from "../../../components/Waves/BlueWave.jsx";
import UaFlagIcon from "../../../components/SvgIcons/UaFlagIcon.jsx";
import BoyIcon from "../../../components/SvgIcons/BoyIcon.jsx";
import SunIcon from "../../../components/SvgIcons/SunIcon.jsx";

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
          <h3 className="home-hero__subtitle">
            {t('home.hero.subtitle1')}
            <br />
            {t('home.hero.subtitle2')}
          </h3>
          <a href="#help" className="donate-btn banner">{t('home.hero.cta')}</a>
        </div>

        <div className="home-hero__decor" aria-hidden="true">
          <div className="decor__flag">
            <UaFlagIcon/>
          </div>
          <div className="decor__boy">
            <BoyIcon/>
          </div>
          <div className="decor__sun">
            <SunIcon/>
          </div>
        </div>
      </div>

      <BlueWave />

    </section>
  );
};

export default Hero;
