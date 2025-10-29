import React from 'react';
import './FundPhotos.css'
import photo1 from '../../../assets/gallery/gallery_photo1.png';

const photos = [
    { id: 1, src: photo1, alt: 'Групове фото 1' },
    { id: 2, src: '/assets/photos/image 107.png', alt: 'Групове фото 2' },
    { id: 3, src: '/assets/photos/image 5.png', alt: 'Групове фото 3' },
    { id: 4, src: '/assets/photos/thanks.png', alt: 'Групове фото 4' },
    { id: 5, src: '/assets/photos/image 113.png', alt: 'Групове фото 5' },
    { id: 6, src: '/assets/photos/image 111.png', alt: 'Групове фото 6' },
];

const Photos = () => {
    return (
        <section className="photo-gallery">
            <div className="photo-gallery__grid">
                {photos.map((photo) => (
                    <div key={photo.id} className="photo-gallery__item">
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className={`photo-gallery__image ${photo.id === 1 || photo.id === 6 ? 'photo-gallery__image--wide' : ''}`}
                        />

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Photos;