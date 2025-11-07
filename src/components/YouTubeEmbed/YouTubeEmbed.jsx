import React from 'react';
import './YouTubeEmbed.css';

const YouTubeEmbed = ({ videoId, title }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-responsive">
            <iframe
                src={embedUrl}
                title={title || "YouTube video player"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubeEmbed;