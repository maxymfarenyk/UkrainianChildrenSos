import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimony.css';
import { useLanguage } from '../../../context/LanguageContext.jsx';

const Testimony = () => {
    const { t } = useLanguage();
    const swiperRef = useRef(null);

    const testimonies = [
        {
            id: 'vitalii',
            nameKey: 'home.testimony.vitalii.name',
            locationKey: 'home.testimony.vitalii.location',
            quoteKey: 'home.testimony.vitalii.quote'
        },
        {
            id: 'artem',
            nameKey: 'home.testimony.artem.name',
            locationKey: 'home.testimony.artem.location',
            quoteKey: 'home.testimony.artem.quote'
        },
        {
            id: 'dayana',
            nameKey: 'home.testimony.dayana.name',
            locationKey: 'home.testimony.dayana.location',
            quoteKey: 'home.testimony.dayana.quote'
        },
        {
            id: 'oleksandr',
            nameKey: 'home.testimony.oleksandr.name',
            locationKey: 'home.testimony.oleksandr.location',
            quoteKey: 'home.testimony.oleksandr.quote'
        },
        {
            id: 'illia',
            nameKey: 'home.testimony.illia.name',
            locationKey: 'home.testimony.illia.location',
            quoteKey: 'home.testimony.illia.quote'
        }
    ];

    return (
        <section className="home-testimony">
            <div className="home-testimony-inner">
                <div className="testimony-slider">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2.5}
                        navigation={{
                            nextEl: '.testimony-next',
                            prevEl: '.testimony-prev',
                        }}
                        pagination={{
                            el: '.testimony-pagination',
                            clickable: true,
                        }}
                        // autoplay={{
                        //     delay: 5000,
                        //     disableOnInteraction: true,
                        //     pauseOnMouseEnter: true,
                        // }}
                        loop={false}
                        speed={600}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1.8,
                                spaceBetween: 25,
                            },
                            1024: {
                                slidesPerView: 2.5,
                                spaceBetween: 30,
                            },
                        }}
                        className="testimony-swiper"
                    >
                        {testimonies.map((testimony) => (
                            <SwiperSlide key={testimony.id}>
                                <div className="testimony-card">
                                    <p className="testimony-quote">
                                        {t(testimony.quoteKey)}
                                    </p>
                                    <div className="testimony-author">
                                        <div className="author-name">{t(testimony.nameKey)}</div>
                                        <div className="author-location">{t(testimony.locationKey)}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation */}
                    <button className="testimony-prev slider-arrow-prev">
                        &#8249;
                    </button>
                    <button className="testimony-next slider-arrow-next">
                        &#8250;
                    </button>

                    {/* Custom Pagination */}
                    <div className="testimony-pagination"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimony;