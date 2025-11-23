import React from 'react';
import HelpBanner from "../components/HelpBanner/HelpBanner.jsx";
import StoriesHero from "../sections/Stories/Hero/StoriesHero.jsx";
import StoriesDescription from "../sections/Stories/Description/StoriesDescription.jsx";
import Vlad from "../sections/Stories/ChildrenStories/Vlad.jsx";
import Illia from "../sections/Stories/ChildrenStories/Illia.jsx";
import Sasha from "../sections/Stories/ChildrenStories/Sasha.jsx";
import Bohdan from "../sections/Stories/ChildrenStories/Bohdan.jsx";
import Margarita from "../sections/Stories/ChildrenStories/Margarita.jsx";

const StoriesPage = () => {
    return (
        <main>
            <StoriesHero />
            <StoriesDescription />
            <Vlad />
            <Illia />
            <Sasha />
            <Bohdan />
            <Margarita />
            <HelpBanner />
        </main>
    );
};

export default StoriesPage;
