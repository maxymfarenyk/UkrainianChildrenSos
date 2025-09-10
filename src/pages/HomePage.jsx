import React from 'react';
import Hero from '../sections/Home/Hero/Hero.jsx';
import Description from "../sections/Home/Description/Description.jsx";
import Directions from "../sections/Home/Directions/Directions.jsx";
import Testimony from "../sections/Home/Testimony/Testimony.jsx";

const HomePage = () => {
    return (
        <main>
            <Hero/>
            <Description/>
            <Directions/>
            <Testimony/>
        </main>
    );
};

export default HomePage;
