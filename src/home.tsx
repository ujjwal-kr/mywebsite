import React from 'react';
import MyImage from './assets/me.jpg';
import { MyImageEl, ImgContainer, Name, Description } from './components/home';
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
                <p style={{fontSize:'2em'}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque dolores natus nemo id quas in autem, nesciunt, nulla atque corporis magni. Incidunt, facere rerum consequatur sit iste cupiditate voluptatum.
                </p>
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