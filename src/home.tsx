import React from 'react';
import MyImage from './assets/me.jpg';
import { MyImageEl, ImgContainer } from './components/home';

function Home() {
    return (
        <div>
            <Hero />
            <Skills />
        </div>
    )
}

function Hero() {
    return (
        <div>
            <div className="hero is-info is-fullheight">
                <ImgContainer>
                    <MyImageEl src={MyImage} />
                    <br/>
                    <br/>
                    <p className="title">
                        Meow Meow
                    </p>
                </ImgContainer>
            </div>
        </div>
    )
}

function Skills() {
    return (
        <div className="skills">SKILLS</div>
    )
}




export default Home;