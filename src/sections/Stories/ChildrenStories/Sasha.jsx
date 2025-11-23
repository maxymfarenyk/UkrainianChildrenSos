import React from 'react';
import './ChildrenStories.css'
import YouTubeEmbed from "../../../components/YouTubeEmbed/YouTubeEmbed.jsx";
import { useLanguage } from '../../../context/LanguageContext.jsx';

const Description = () => {
    const { t } = useLanguage();

    const videoId = 'aEWzKTx8qoM'

    return (
        <section className="stories-description">
            <div className="stories-description__inner">
                <div className="stories-description__content">
                    <h2 className="stories-description__title">
                        {t('stories.stories.sasha.title')}
                    </h2>
                    <h3 className="stories-description__subtitle">
                        {t('stories.stories.sasha.subtitle')}
                    </h3>
                    <div className="stories-description__text-grid">

                        <div className="stories-description__column stories-description__column--left">
                            <p>{t('stories.stories.sasha.p1')}</p>
                            <p>{t('stories.stories.sasha.p2')}</p>
                        </div>

                        <div className="stories-description__column stories-description__column--right">
                            <p dangerouslySetInnerHTML={{ __html: t('stories.stories.sasha.p3') }} />
                            <p dangerouslySetInnerHTML={{ __html: t('stories.stories.sasha.p4') }} />
                        </div>
                    </div>

                    <div className="stories-description__video-wrapper">
                        <YouTubeEmbed
                            videoId={videoId}
                            title={t('stories.stories.sasha.title')}
                        />
                        <p className='stories-description__video-subtitle'>Підтримуємо державну ініціативу Bring Kids Back UA</p>
                        <a href='https://childrenofwar.gov.ua/' target='_blank'><p className='stories-description__video-subtitle'>https://childrenofwar.gov.ua/</p></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Description;
