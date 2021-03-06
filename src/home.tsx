import React from 'react';
import MyImage from './assets/me.jpg';
import { MyImageEl, ImgContainer, Name, Description, Whoami } from './components/home';
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
                    <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                            opacity: 0,
                            scale: .7
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: .2,
                            }
                        }
                    }}>
                    <Name className="glitch" data-text="Hi, I'm Ujjwal">
                        Hi, I'm Ujjwal
                    </Name>
                    </motion.div>
                </ImgContainer>
            </div>

            <Description>
                <h1 style={{fontSize:'4em'}} className="has-text-primary stiff">whoami</h1>
                <Whoami className="text">
                    I'm a <a href="https://en.wikipedia.org/wiki/Web_developer">Web developer </a>and a  <a href="https://en.wikipedia.org/wiki/Hacker">Computer hacker</a>. I'm 16 years old and from India. I research about security, open source intelligence and <a href="https://en.wikipedia.org/wiki/Reverse_engineering">Reverse Engineering</a> apps, firmwares and malwares.
                </Whoami>
            </Description>
        </div>
    )
}

function Skills() {
    return (
        <div className="skills">SKILLS</div>
    )
}




export default Home;