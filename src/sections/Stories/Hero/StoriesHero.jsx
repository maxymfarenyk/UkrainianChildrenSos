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
                        {t('stories.hero.title_line1')}
                        <br />
                        {t('stories.hero.title_line2')}
                    </h1>
                    <p className="home-hero__subtitle">
                        {t('stories.hero.subtitle1')}
                        <br />
                        {t('stories.hero.subtitle2')}
                        <br />
                        {t('stories.hero.subtitle3')}
                    </p>
                    <a href="#help" className="donate-btn banner">{t('home.hero.cta')}</a>
                </div>

                <div className="home-hero__decor" aria-hidden="true">
                    <div className="decor__butterfly">
                        <img src={'/assets/images/butterfly_icon.png'} alt="ukrainian flag icon"/>
                    </div>
                    <div className="decor__car">
                        <img src={'/assets/images/car_icon.png'} alt="boy running icon"/>
                    </div>
                    <div className="decor__sun">
                        <img src={'/assets/images/sun_icon.png'} alt="sun icon"/>
                    </div>
                </div>
            </div>

            <BlueWave />
        </section>
    );
};

export default Hero;
