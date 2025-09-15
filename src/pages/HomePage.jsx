import React from 'react';
import Hero from '../sections/Home/Hero/Hero.jsx';
import Description from "../sections/Home/Description/Description.jsx";
import Directions from "../sections/Home/Directions/Directions.jsx";
import Testimony from "../sections/Home/Testimony/Testimony.jsx";
import Statistics from "../sections/Home/Statistics/Statistics.jsx";

const HomePage = () => {
    return (
        <main>
            <Hero/>
            <Description/>
            <Directions/>
            <Testimony/>
            <Statistics/>
        </main>
    );
};

export default HomePage;
