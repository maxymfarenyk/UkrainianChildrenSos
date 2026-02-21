import React from 'react';
import './ThankYouResponse.css'
import {useLanguage} from '../../../context/LanguageContext.jsx';

const ThankYouResponse = () => {
    const {t} = useLanguage();

    return (
        <section className="thx-response">
            <div className="thx-response-inner">
                <p className="thx-response-text">
                    <strong>{t('thx-response.title')}</strong>
                </p>
                <p className="thx-response-text">
                    {t('thx-response.paragraph1')}
                </p>
                <p className="thx-response-text">
                    {t('thx-response.paragraph2')}
                </p>
            </div>
        </section>
    );
};

export default ThankYouResponse;
