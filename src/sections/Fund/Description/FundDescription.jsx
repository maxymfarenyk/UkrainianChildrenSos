import React from 'react';
import './FundDescription.css'
import { useLanguage } from '../../../context/LanguageContext.jsx';

const Description = () => {
    const { t } = useLanguage();

    return (
        <section className="fund-description">
            <div className="fund-description__inner">
                <div className="fund-description__content">
                    <h2 className="fund-description__title">
                        {t('fund.description.title')}
                    </h2>
                    <div className="fund-description__text-grid">

                        <div className="fund-description__column fund-description__column--left">
                            <p>{t('fund.description.p1')}</p>
                            <p>{t('fund.description.p2')}</p>
                        </div>

                        <div className="fund-description__column fund-description__column--right">
                            <p>{t('fund.description.p3')}</p>
                            <strong>
                                <p>
                                    {t('fund.description.p4')}
                                </p>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Description;
