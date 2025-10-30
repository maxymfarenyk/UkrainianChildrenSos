import React from 'react';
import ProjectsHero from "../sections/Projects/Hero/ProjectsHero.jsx";
import YarmarkyDescription from "../sections/Projects/Yarmarky/YarmarkyDescription.jsx";
import ChildrenHeroesDescription from "../sections/Projects/ChildrenHeroesDescription/ChildrenHeroesDescription.jsx";

const ProjectsPage = () => {
    return (
        <main>
            <ProjectsHero/>
            <YarmarkyDescription/>
            <ChildrenHeroesDescription/>
        </main>
    );
};

export default ProjectsPage;
