import React from 'react';
import HelpBanner from "../components/HelpBanner/HelpBanner.jsx";
import StoriesHero from "../sections/Stories/Hero/StoriesHero.jsx";
import StoriesDescription from "../sections/Stories/Description/StoriesDescription.jsx";
import Vlad from "../sections/Stories/ChildrenStories/Vlad.jsx";

const StoriesPage = () => {
    return (
        <main>
            <StoriesHero />
            <StoriesDescription />
            <Vlad />
            <HelpBanner />
        </main>
    );
};

export default StoriesPage;
