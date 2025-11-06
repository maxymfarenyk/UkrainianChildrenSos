import React from 'react';
import HelpBanner from "../components/HelpBanner/HelpBanner.jsx";
import StoriesHero from "../sections/Stories/Hero/StoriesHero.jsx";
import StoriesDescription from "../sections/Stories/Description/StoriesDescription.jsx";

const StoriesPage = () => {
    return (
        <main>
            <StoriesHero />
            <StoriesDescription />
            <HelpBanner />
        </main>
    );
};

export default StoriesPage;
