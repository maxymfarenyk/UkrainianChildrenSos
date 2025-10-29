import React from 'react';
import HelpBanner from "../components/HelpBanner/HelpBanner.jsx";
import FundHero from "../sections/Fund/Hero/FundHero.jsx";
import Gallery from "../components/Gallery/Gallery.jsx";
import FundDescription from "../sections/Fund/Description/FundDescription.jsx";
import FundPhotos from "../sections/Fund/Photos/FundPhotos.jsx";
import Team from "../sections/Fund/Team/Team.jsx";

const FundPage = () => {
    return (
        <main>
            <FundHero />
            <FundDescription />
            <FundPhotos />
            <Team />
            <Gallery />
            <HelpBanner />
        </main>
    );
};

export default FundPage;
