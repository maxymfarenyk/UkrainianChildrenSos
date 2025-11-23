import React from 'react';
import './ChildrenStories.css'
import YouTubeEmbed from "../../../components/YouTubeEmbed/YouTubeEmbed.jsx";
import { useLanguage } from '../../../context/LanguageContext.jsx';

const Description = () => {
    const { t } = useLanguage();

    const videoId = 'q5YJn9IM1z8'

    return (
        <section className="stories-description">
            <div className="stories-description__inner">
                <div className="stories-description__content">
                    <h2 className="stories-description__title">
                        {t('stories.stories.bohdan.title')}
                    </h2>
                    <h3 className="stories-description__subtitle">
                        {t('stories.stories.bohdan.subtitle')}
                    </h3>
                    <div className="stories-description__text-grid">

                        <div className="stories-description__column stories-description__column--left">
                            <p dangerouslySetInnerHTML={{ __html: t('stories.stories.bohdan.p1') }} />
                        </div>

                        <div className="stories-description__column stories-description__column--right">
                            <p dangerouslySetInnerHTML={{ __html: t('stories.stories.bohdan.p3') }} />
                            <strong>
                                <p>
                                    {t('stories.stories.bohdan.p4')}
                                </p>
                            </strong>
                        </div>
                    </div>

                    <div className="stories-description__video-wrapper">
                        <YouTubeEmbed
                            videoId={videoId}
                            title={t('stories.stories.bohdan.title')}
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
