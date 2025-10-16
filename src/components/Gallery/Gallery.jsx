import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Gallery.css';


// Підтягуємо всі фото з папки assets/gallery
const images = import.meta.glob('../../assets/gallery/*.{jpg,jpeg,png,svg}', { eager: true });

const photos = Object.keys(images).map((key, index) => ({
    id: index,
    src: images[key].default,
}));

const Gallery = () => {
    const swiperRef = useRef(null);

    return (
        <section className="home-gallery">
            <div className="home-gallery-inner">
                <div className="gallery-slider">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3.2}
                        navigation={{
                            nextEl: '.gallery-next',
                            prevEl: '.gallery-prev',
                        }}
                        pagination={{
                            el: '.gallery-pagination',
                            clickable: true,
                        }}
                        // autoplay={{
                        //     delay: 5000,
                        //     disableOnInteraction: true,
                        //     pauseOnMouseEnter: true,
                        // }}
                        loop={false}
                        speed={600}
                        // breakpoints={{
                        //     320: {
                        //         slidesPerView: 1.2,
                        //         spaceBetween: 20, // Зменшено з 20
                        //     },
                        //     768: {
                        //         slidesPerView: 1.8,
                        //         spaceBetween: 25, // Зменшено з 25
                        //     },
                        //     1024: {
                        //         slidesPerView: 2.5,
                        //         spaceBetween: 30, // Зменшено з 30
                        //     },
                        // }}
                        className="gallery-swiper"
                    >
                        {photos.map((photo) => (
                            <SwiperSlide key={photo.id}>
                                <div className="gallery-card">
                                    <img src={photo.src} alt={`Gallery ${photo.id}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation */}
                    {/* Класи для навігації виправлено на ті, що використовуються в navigation: '.gallery-next' та '.gallery-prev' */}
                    <button className="gallery-prev slider-arrow-prev">&#8249;</button>
                    <button className="gallery-next slider-arrow-next">&#8250;</button>

                    {/* Custom Pagination */}
                    <div className="gallery-pagination"></div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;