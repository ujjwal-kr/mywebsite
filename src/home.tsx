import React from 'react';

function Home() {
    return (
        <div>
            <Hero />
            <Description />
            <Skills />
        </div>
    )
}

function Hero() {
    return (
        <div className="hero">HERO</div>
    )
}


function Description() {
    return (
        <div className="description">Description</div>
    )
}

function Skills() {
    return (
        <div className="skills">SKILLS</div>
    )
}




export default Home;