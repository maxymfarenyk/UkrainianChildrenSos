import React from 'react';
import './ChildrenHeroesPhotos.css'

const photos = [
    { id: 1, src: '/assets/projects/childrenofheroes/image 114.png', alt: 'Діти Героїв фото 1' },
    { id: 2, src: '/assets/projects/childrenofheroes/image 116.png', alt: 'Діти Героїв фото 2' },
    { id: 3, src: '/assets/projects/childrenofheroes/IMG_1319 2.png', alt: 'Діти Героїв фото 3' },
    { id: 4, src: '/assets/projects/childrenofheroes/image 123.png', alt: 'Діти Героїв фото 4' },
    { id: 5, src: '/assets/projects/childrenofheroes/image 121.png', alt: 'Діти Героїв фото 5' },
    { id: 6, src: '/assets/projects/childrenofheroes/image 125.png', alt: 'Діти Героїв фото 6' },
    { id: 7, src: '/assets/projects/childrenofheroes/IMG_1641 4.png', alt: 'Діти Героїв фото 7' },
    { id: 8, src: '/assets/projects/childrenofheroes/image 117.png', alt: 'Діти Героїв фото 8' },
];

const Photos = () => {
    return (
        <section className="ch-photo-gallery">
            <div className="ch-photo-gallery__grid">
                {photos.map((photo) => (
                    <div key={photo.id} className="ch-photo-gallery__item">
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className={`ch-photo-gallery__image ${photo.id === 1 || photo.id === 6 || photo.id === 7 || photo.id === 8 ? 'ch-photo-gallery__image--wide' : ''}`}
                        />

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Photos;