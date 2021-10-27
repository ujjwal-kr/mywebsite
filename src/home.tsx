import MyImage from './assets/myself.png';
import { MyImageEl, ImgContainer, Name, Description, Whoami, DesHeading, SkillsContainer, Col } from './components/home';
import { motion } from 'framer-motion';
import './glitch.scss';
import FooterComponent from './footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Hero />
            <Skills />
            <Blog />
            <FooterComponent />
        </div>
    )
}

function Hero() {
    let age: number
    const birthday: number = Date.parse('Thu Oct 7 2004 00:00:00 GMT+0530')
    let time: number = Date.now()
    let eclapsed = time - birthday
    age = Math.floor(eclapsed / 1000 / 60 / 60 / 24 / 365)
    return (
        <div>
            <div className="hero is-info is-fullheight" style={{ overflow: 'hidden' }}>
                <ImgContainer>
                    <motion.div animate={{ scale: 1.1 }}>
                        <MyImageEl src={MyImage} />
                    </motion.div>
                    <br />
                    <br />
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
                    Computer Programmer. I'm {age} years old and from India. I research about CS, <a href="https://en.wikipedia.org/wiki/Reverse_engineering">Reverse Engineering</a> apps, firmwares and malwares. Currently working on <a href="https://github.com/hackarmour">HackArmour</a>, and some <Link to="/projects"> <a>epic projects.</a> </Link>
                </Whoami>
            </Description>
        </div>
    )
}

function Skills() {
    return (
        <div style={{ textAlign: 'center' }}>
            <br />
            <DesHeading className="has-text-primary stiff">Skills</DesHeading>
            <br />
            <SkillsContainer className="columns is-mobile text">
                <Col className="column">
                    <li style={{ color: 'yellow' }} >JavaScript</li>
                    <li style={{ color: '#00aeff' }}>Golang</li>
                    <li style={{ color: '#2994ff' }}>Python</li>
                    <li>UI/UX</li>
                    <li>Electronics</li>
                    <li>C</li>
                </Col>
                <Col className="column">
                    <li>Typescript</li>
                    <li>React</li>
                    <li style={{ color: 'red' }}>Angular</li>
                    <li className="has-text-success">Nodejs</li>
                    <li>OSINT</li>
                    <li className="has-text-primary">Reversing</li>
                </Col>
            </SkillsContainer>
            <br />
            <br />
            <Link to="/projects">
                <button className="text button is-primary is-medium">My Projects</button>
            </Link>
        </div>
    )
}

function Blog() {
    return (
        <div style={{ textAlign: 'center' }}>
            <br />
            <Description>
                <DesHeading className="has-text-primary stiff">Publishments</DesHeading>
                <br />
                <Whoami className="text">
                    Writing is my hobby. But spending more time into it is what I want to accomplish. I have written a bit on <a href="https://ujjwalkr.medium.com/">My Meduim Page</a> and also starting a <a href="https://github.com/kekwlabs/kek-blogs">blogging platform</a> for more technical writing and publising stuff from and for the community.
                </Whoami>
            </Description>
        </div>
    )
}


export default Home
