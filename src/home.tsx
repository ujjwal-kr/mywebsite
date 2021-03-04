import React from 'react';
import MyImage from './assets/me.jpg';
import { MyImageEl, ImgContainer, Name } from './components/home';
import { motion } from 'framer-motion';
import './glitch.scss';
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
            <div className="hero is-info is-fullheight" style={{overflow: 'hidden'}}>
                <ImgContainer>
                    <motion.div animate={{scale: 1.1}}>
                        <MyImageEl src={MyImage} />                    
                    </motion.div>
                    <br/>
                    <br/>
                    <Name className="glitch" data-text="Hi, I'm Ujjwal">
                        Hi, I'm Ujjwal
                    </Name>
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