import React from 'react';
import './Description.css'
import {useLanguage} from '../../../context/LanguageContext.jsx';

const Description = () => {
    const {t} = useLanguage();

    return (
        <section className="home-description">
            <div className="home-description-inner">
                <p className="home-description-text">
                    <strong>{t('home.description.title')}</strong>
                    {t('home.description.paragraph1')}
                </p>
                <p className="home-description-text">
                    <strong>{t('home.description.title')}</strong>
                    {t('home.description.paragraph2')}
                </p>
                <p className="home-description-text">
                    {t('home.description.paragraph3')}
                </p>
            </div>
        </section>
    );
};

export default Description;
