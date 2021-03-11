import React from 'react';
import MyImage from './assets/me.jpg';
import { MyImageEl, ImgContainer, Name, Description, Whoami, DesHeading, SkillsContainer, Col } from './components/home';
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
                <DesHeading className="has-text-primary stiff">whoami</DesHeading>
                <Whoami className="text">
                    I'm a <a href="https://en.wikipedia.org/wiki/Web_developer">Web developer </a>and a  <a href="https://en.wikipedia.org/wiki/Hacker">Computer hacker</a>. I'm 16 years old and from India. I research about security, open source intelligence and <a href="https://en.wikipedia.org/wiki/Reverse_engineering">Reverse Engineering</a> apps, firmwares and malwares.
                </Whoami>
            </Description>
        </div>
    )
}

function Skills() {
    return (
        <div style={{textAlign: 'center'}}>
            <br/>
            <DesHeading className="has-text-primary stiff">Skills</DesHeading>
            <br/>
            <SkillsContainer className="columns is-mobile text">
                <Col className="column">
                    <li style={{color: 'yellow'}} >JavaScript</li>
                    <li style={{color: '#00aeff'}}>Golang</li>
                    <li style={{color: '#2994ff'}}>Python</li>
                    <li>Web-Exploitation</li>
                    <li>Designing</li>
                    <li>C</li>
                </Col>
                <Col className="column">
                    <li>Typescript</li>
                    <li>React</li>
                    <li style={{color: 'red'}}>Angular</li>
                    <li className="has-text-success">Nodejs</li>
                    <li>OSINT</li>
                    <li className="has-text-primary">Reverse Engg</li>
                </Col>
            </SkillsContainer>
             <br/>
            <br/>
        </div>
    )
}




export default Home;
