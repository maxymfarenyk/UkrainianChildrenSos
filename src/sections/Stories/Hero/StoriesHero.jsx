import React from 'react';
import '../../Home/Hero/Hero.css'
import { useLanguage } from '../../../context/LanguageContext.jsx';
import BlueWave from "../../../components/Waves/BlueWave.jsx";
import ButterflyIcon from "../../../components/SvgIcons/ButterflyIcon.jsx";
import CarIcon from "../../../components/SvgIcons/CarIcon.jsx";
import SunIcon from "../../../components/SvgIcons/SunIcon.jsx";

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="home-hero">
            <div className="home-hero__inner">
                <div className="home-hero__content">
                    <h1 className="home-hero__title">
                        {t('stories.hero.title_line1')}
                        <br />
                        {t('stories.hero.title_line2')}
                    </h1>
                    <h3 className="home-hero__subtitle">
                        {t('stories.hero.subtitle1')}
                        <br />
                        {t('stories.hero.subtitle2')}
                        <br />
                        {t('stories.hero.subtitle3')}
                    </h3>
                    <a href="#help" className="donate-btn banner">{t('home.hero.cta')}</a>
                </div>

                <div className="home-hero__decor" aria-hidden="true">
                    <div className="decor__butterfly">
                        <ButterflyIcon/>
                    </div>
                    <div className="decor__car">
                        <CarIcon/>
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
