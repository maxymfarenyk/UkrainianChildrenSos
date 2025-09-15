import React from 'react';
import './Statistics.css';
import { useLanguage } from '../../../context/LanguageContext.jsx';

const Statistics = () => {
    const { t } = useLanguage();

    const statisticsData = [
        { label: 'home.statistics.deceased', value: 646 },
        { label: 'home.statistics.injured', value: 2103 },
        { label: 'home.statistics.missing', value: 2210 },
        { label: 'home.statistics.displaced', value: 19546 },
    ];

    return (
        <section className="statistics">
            <h2 className="statistics-title">{t('home.statistics.title')}</h2>
            <p className="statistics-date">
                {t('home.statistics.date', { date_value: new Date('2025-08-05') })}
            </p>
            <div className="statistics-inner">
                {statisticsData.map((item, index) => (
                    <div className="statistic-item" key={index}>
                        <p className="statistic-value">{item.value}</p>
                        <p className="statistic-label">{t(item.label)}</p>
                    </div>
                ))}
            </div>
            <p className="statistics-note">
                {t('home.statistics.note')}
            </p>
        </section>
    );
};

export default Statistics;