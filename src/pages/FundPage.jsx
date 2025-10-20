import React from 'react';
import HelpBanner from "../components/HelpBanner/HelpBanner.jsx";
import FundHero from "../sections/Fund/Hero/FundHero.jsx";
import Gallery from "../components/Gallery/Gallery.jsx";

const FundPage = () => {
    return (
        <main>
            <FundHero />
            <Gallery />
            <HelpBanner />
        </main>
    );
};

export default FundPage;
