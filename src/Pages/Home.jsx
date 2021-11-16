import React from 'react';
import Slickblok from "../components/Slickblok";
import About from '../components/About';
import Ourservueces from "../components/Ourservices";
import Choosezodiac from "../components/Choosezodiac";
import Inputblok from "../components/Inputblok";
import Blog from "../components/Blog";
import Whychooseus from '../components/Whychooseus';




function Home() {
    return (
        <div>
            <Slickblok />
            <About />
            <Whychooseus />
            <Ourservueces />
            <Choosezodiac />
            <Inputblok />
            <Blog />
        </div>
    )
}

export default Home
