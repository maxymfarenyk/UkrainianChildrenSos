import React from 'react';
import HelpBanner from "../components/HelpBanner/HelpBanner.jsx";
import StoriesHero from "../sections/Stories/Hero/StoriesHero.jsx";

const StoriesPage = () => {
    return (
        <main>
            <StoriesHero />
            <HelpBanner />
        </main>
    );
};

export default StoriesPage;
