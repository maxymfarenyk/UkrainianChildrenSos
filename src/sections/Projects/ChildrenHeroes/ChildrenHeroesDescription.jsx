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
                        {t('projects.children_heroes.title')}
                    </h2>
                    <div className="fund-description__text-grid">

                        <div className="fund-description__column fund-description__column--left">
                            <p dangerouslySetInnerHTML={{ __html: t('projects.children_heroes.p1') }} />
                            <p>{t('projects.children_heroes.p2')}</p>
                        </div>

                        <div className="fund-description__column fund-description__column--right">
                            <p dangerouslySetInnerHTML={{ __html: t('projects.children_heroes.p3') }} />
                            <strong>
                                <p>
                                    {t('projects.children_heroes.p4')}
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
