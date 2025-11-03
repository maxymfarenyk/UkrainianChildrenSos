import React from 'react';
import './Directions.css';
import {useLanguage} from '../../../context/LanguageContext.jsx';

const Directions = () => {
    const {t} = useLanguage();

    return (
        <section className="directions">
            <svg className="wave wave-up" viewBox="0 0 1440 55" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill="#FFFFFF"
                    fillRule="evenodd"
                    d="M0 0 H1439 V55 H0 V0 Z M0 24.1354 C239.999 22.3647 480.001 0 720 0 C959.999 0 1200 22.3647 1440 24.1354 V55 C1200 55 959.999 55 720 55 C480.001 55 239.999 55 0 55 L0 24.1354 Z"
                />
            </svg>


            <h2 className="directions-title">{t('home.directions.title')}</h2>
            <div className="directions-inner">

                {/* 1 блок */}
                <div className="direction-item">
                    <div className="direction-icon"><img src={'/assets/images/girl_puzzle_icon.png'}
                                                         alt="girl with a puzzle"/></div>
                    <p className="direction-text">
                        {t('home.directions.children')}
                    </p>
                </div>

                {/* 2 блок */}
                <div className="direction-item">
                    <div className="direction-icon"><img src={'/assets/images/puzzles_icon.png'}
                                                         alt="4 puzzles with faces"/></div>
                    <p className="direction-text">
                        {t('home.directions.families')}
                    </p>
                </div>

                {/* 3 блок */}
                <div className="direction-item">
                    <div className="direction-icon"><img src={'/assets/images/house_puzzle_icon.png'}
                                                         alt="house made of puzzles"/></div>
                    <p className="direction-text">
                        {t('home.directions.institutions')}
                    </p>
                </div>
            </div>

            <svg className="wave wave-down" width="1440" height="55" viewBox="0 0 1440 55"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    fill="#FFFFFF"
                    fillRule="evenodd"
                    d="M0 0 H1440 V55 H0 V0 Z M1440 30.8646 C1200 32.6353 959.999 55 720 55 C480.001 55 239.999 32.6353 0 30.8646 V0 C239.999 0 480.001 0 720 0 C959.999 0 1200 0 1440 0 V30.8646 Z"
                />
            </svg>

        </section>
    );
};

export default Directions;
