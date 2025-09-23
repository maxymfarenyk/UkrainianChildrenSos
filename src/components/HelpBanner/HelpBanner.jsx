import React from 'react';
import './HelpBanner.css';
import { useLanguage } from '../../context/LanguageContext.jsx';

const HelpBanner = () => {
    const { t } = useLanguage();

    return (
        <section className="help-banner">
            <div className="help-banner-content">
                <div className="help-banner-overlay">
                    <h2 className="help-banner-title">{t('help_banner.title')}</h2>
                    <p className="help-banner-subtitle">{t('help_banner.subtitle')}</p>
                    <a className="donate-btn" href="#help">{t('header.donate')}</a>
                </div>
            </div>
        </section>
    );
};

export default HelpBanner;