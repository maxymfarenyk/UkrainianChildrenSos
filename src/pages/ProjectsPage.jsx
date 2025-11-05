import React from 'react';
import ProjectsHero from "../sections/Projects/Hero/ProjectsHero.jsx";
import YarmarkyDescription from "../sections/Projects/Yarmarky/YarmarkyDescription.jsx";
import ChildrenHeroesDescription from "../sections/Projects/ChildrenHeroes/ChildrenHeroesDescription.jsx";
import YarmarkyPhotos from "../sections/Projects/Yarmarky/YarmarkyPhotos.jsx";
import ChildrenHeroesPhotos from "../sections/Projects/ChildrenHeroes/ChildrenHeroesPhotos.jsx";

const ProjectsPage = () => {
    return (
        <main>
            <ProjectsHero/>
            <YarmarkyDescription/>
            <YarmarkyPhotos/>
            <ChildrenHeroesDescription/>
            <ChildrenHeroesPhotos/>
        </main>
    );
};

export default ProjectsPage;
