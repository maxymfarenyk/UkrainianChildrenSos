import React from 'react';
import '../../Home/Hero/Hero.css'
import { useLanguage } from '../../../context/LanguageContext.jsx';
import BlueWave from "../../../components/Waves/BlueWave.jsx";

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="home-hero">
            <div className="home-hero__inner">
                <div className="home-hero__content">
                    <h1 className="home-hero__title">
                        {t('projects.hero.title_line1')}
                        <br />
                        {t('projects.hero.title_line2')}
                    </h1>
                    <p className="home-hero__subtitle">
                        {t('projects.hero.subtitle1')}
                        <br />
                        {t('projects.hero.subtitle2')}
                        <br />
                        {t('projects.hero.subtitle3')}
                    </p>
                    <a href="#help" className="donate-btn">{t('home.hero.cta')}</a>
                </div>

                <div className="home-hero__decor" aria-hidden="true">
                    <div className="home-hero__sun" />
                </div>
            </div>

            <BlueWave />
        </section>
    );
};

export default Hero;
