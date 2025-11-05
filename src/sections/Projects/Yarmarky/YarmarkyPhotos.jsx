import React from 'react';
import './YarmarkyPhotos.css'

const photos = [
    { id: 1, src: '/assets/projects/yarmarky/IMG_0272 2.png', alt: 'Ярмарки фото 1' },
    { id: 2, src: '/assets/projects/yarmarky/IMG_0905 2.png', alt: 'Ярмарки фото 2' },
    { id: 3, src: '/assets/projects/yarmarky/IMG_0286 2.png', alt: 'Ярмарки фото 3' },
    { id: 4, src: '/assets/projects/yarmarky/IMG_4370 2.png', alt: 'Ярмарки фото 4' },
    { id: 5, src: '/assets/projects/yarmarky/IMG_0883 2.png', alt: 'Ярмарки фото 5' },
    { id: 6, src: '/assets/projects/yarmarky/group photo.png', alt: 'Ярмарки фото 6' },
    { id: 7, src: '/assets/projects/yarmarky/IMG_5461 2.png', alt: 'Ярмарки фото 7' },
    { id: 8, src: '/assets/projects/yarmarky/IMG_0280 2.png', alt: 'Ярмарки фото 8' },
    { id: 9, src: '/assets/projects/yarmarky/IMG_0298 2.png', alt: 'Ярмарки фото 9' },
];

const Photos = () => {
    return (
        <section className="yarmarky-photo-gallery">
            <div className="yarmarky-photo-gallery__grid">
                {photos.map((photo) => (
                    <div key={photo.id} className="yarmarky-photo-gallery__item">
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className={`yarmarky-photo-gallery__image ${photo.id === 1 || photo.id === 6 || photo.id === 7 ? 'yarmarky-photo-gallery__image--wide' : ''}`}
                        />

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Photos;