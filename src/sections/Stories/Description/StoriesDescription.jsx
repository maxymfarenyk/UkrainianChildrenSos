import React from 'react';
import '../../Fund/Description/FundDescription.css'
import { useLanguage } from '../../../context/LanguageContext.jsx';

const Description = () => {
    const { t } = useLanguage();

    return (
        <section className="fund-description">
            <div className="fund-description__inner">
                <div className="fund-description__content">
                    <h2 className="fund-description__title">
                        {t('stories.description.title')}
                    </h2>
                    <div className="fund-description__text-grid">

                        <div className="fund-description__column fund-description__column--left">
                            <p>{t('stories.description.p1')}</p>
                        </div>

                        <div className="fund-description__column fund-description__column--right">
                            <p>{t('stories.description.p2')}</p>
                        </div>
                    </div>
                    <div className="description-photo">
                        <img src='/assets/photos/UN0770704.jpg 1.png' alt='Чоловік з дитиною на фоні руїн будинку'></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Description;
