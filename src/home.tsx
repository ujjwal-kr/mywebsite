import React, {useEffect} from 'react';
import MyImage from './assets/me.jpg';
import { MyImageEl, ImgContainer, Name, Description } from './components/home';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect/dist/core';


function Home() {
    return (
        <div>
            <Hero />
            <Skills />
        </div>
    )
}

function Hero() {
    useEffect(() => {
        new Typewriter('#description', {
            strings: ['I\'m a Web Dev and Computer Hacker'],
            autoStart: true,
          });
    })

    return (
        <div>
            <div className="hero is-info is-fullheight">
                <ImgContainer>
                    <motion.div animate={{scale: 1.1}}>
                        <MyImageEl src={MyImage} />                    
                    </motion.div>
                    <br/>
                    <br/>
                    <Name className="title">
                        Hi, I'm Ujjwal
                    </Name>
                    <Description className="title" id="description">
                        
                    </Description>
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