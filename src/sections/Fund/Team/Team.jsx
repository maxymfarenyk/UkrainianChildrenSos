import React from 'react';
import { useLanguage } from '../../../context/LanguageContext.jsx';
import './Team.css'


const Team = () => {

    const { t } = useLanguage();

    const teamMembers = [
        { id: 1, name: t('fund.team.name.mykhailo'), title: t('fund.team.job.founder'), src: '/assets/team_photos/image 101.png' },
        { id: 2, name: t('fund.team.name.liubov'), title: t('fund.team.job.trustee'), src: '/assets/team_photos/image 106.png' },
        { id: 3, name: t('fund.team.name.oksana'), title: t('fund.team.job.trustee'), src: '/assets/team_photos/image 102.png' },
        { id: 4, name: t('fund.team.name.volodymyr'), title: t('fund.team.job.volunteer'), src: '/assets/team_photos/image 103.png' },
        { id: 5, name: t('fund.team.name.serhiy'), title: t('fund.team.job.volunteer'), src: '/assets/team_photos/image 104.png' },
        { id: 6, name: t('fund.team.name.serhiy'), title: t('fund.team.job.volunteer'), src: '/assets/team_photos/image 105.png' },
        { id: 7, name: t('fund.team.name.iryna'), title: t('fund.team.job.volunteer'), src: '/assets/team_photos/image 107.png' },
    ];

    // Розділяємо масив на Топ-3 та Решту-4
    const topMembers = teamMembers.slice(0, 3);
    const restMembers = teamMembers.slice(3);

    const renderMembers = (members, wrapperClass) => (
        <div className={wrapperClass}>
            {members.map(member => (
                <div key={member.id} className="team-member">
                    <div className="team-member__photo-wrapper">
                        <img
                            src={member.src}
                            alt={member.name}
                            className="team-member__photo"
                        />
                    </div>
                    <h3 className="team-member__name">{member.name}</h3>
                    <p className="team-member__title">{member.title}</p>
                </div>
            ))}
        </div>
    );

    return (
        <section className="team-section">
            <div className="team-section__content">
                <h2 className="team-section__title">
                    {t('fund.team.title')}
                </h2>

                {/* 1. Контейнер для Топ-3 (Використовуємо Flexbox для центрування) */}
                {renderMembers(topMembers, "team-section__top-flex")}

                {/* 2. Контейнер для Решти-4 (Використовуємо Grid для 4 колонок) */}
                {renderMembers(restMembers, "team-section__rest-grid")}

            </div>
        </section>
    );
};

export default Team;