import React from 'react';
import './Directions.css';
import { useLanguage } from '../../../context/LanguageContext.jsx';

const Directions = () => {
    const { t } = useLanguage();

    return (
        <section className="directions">
            <div className="wave-wrapper top">
                <svg className="wave" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,80 C240,140 480,0 720,60 C960,120 1200,40 1440,80 L1440,120 L0,120 Z" fill="#ffffff" />
                </svg>
            </div>


                <h2 className="directions-title">{t('home.directions.title')}</h2>
            <div className="directions-inner">

                {/* 1 блок */}
                <div className="direction-item">
                    <div className="direction-icon">👧</div>
                    <p className="direction-text">
                        {t('home.directions.children')}
                    </p>
                </div>

                {/* 2 блок */}
                <div className="direction-item">
                    <div className="direction-icon">🧩</div>
                    <p className="direction-text">
                        {t('home.directions.families')}
                    </p>
                </div>

                {/* 3 блок */}
                <div className="direction-item">
                    <div className="direction-icon">🏠</div>
                    <p className="direction-text">
                        {t('home.directions.institutions')}
                    </p>
                </div>
            </div>

            <div className="wave-wrapper bottom">
                <svg className="wave" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,80 C240,140 480,0 720,60 C960,120 1200,40 1440,80 L1440,120 L0,120 Z" fill="#ffffff" />
                </svg>
            </div>
        </section>
    );
};

export default Directions;
