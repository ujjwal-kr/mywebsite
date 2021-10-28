import MyImage from './assets/myself.png';
import { MyImageEl, ImgContainer, Name, Description, Whoami, DesHeading, SkillsContainer, Col } from './components/home';
import { motion } from 'framer-motion';
import './glitch.scss';
import FooterComponent from './footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <motion.main
                initial={{ translateY: -100 + 'px' }}
                animate={{ translateY: 0 + 'px' }}
                transition={{ duration: .12 }}>
                <Hero />
                <Skills />
                <Projects />
                <Blog />
                <FooterComponent />
            </motion.main>
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
                    <MyImageEl src={MyImage} />
                    <br />
                    <br />
                    <Name className="glitch" data-text="Hi, I'm Ujjwal">
                        Hi, I'm Ujjwal
                    </Name>
                </ImgContainer>
            </div>

            <Description>
                <DesHeading className="has-text-primary stiff">whoami</DesHeading>
                <Whoami className="text">
                    Computer Programmer. I'm {age} years old and from India. I research about CS, <a href="https://en.wikipedia.org/wiki/Reverse_engineering">Reverse Engineering</a> apps, firmwares and malwares. Currently working on <a href="https://github.com/hackarmour">HackArmour</a>, and some <Link to="/projects">epic projects.</Link>
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
        </div>
    )
}

function Projects() {
    return (
        <div style={{ textAlign: 'center' }}>
            <br />
            <Description>
                <DesHeading className="has-text-primary stiff">ProJEcts</DesHeading>
                <br />
                <Whoami className="text">
                    I'm mostly a student, and most of the time is spent on academics. I try to make whatever comes in my mind in my spare time using the technologies I know and try to learn them by making projects.
                </Whoami>
                <br />
                <Link to="/projects">
                    <button className="text button is-primary is-medium">My Projects</button>
                </Link>
            </Description>
        </div>
    )
}

function Blog() {
    return (
        <div style={{ textAlign: 'center' }}>
            <br />
            <br />
            <Description>
                <DesHeading className="has-text-primary stiff">Publishments</DesHeading>
                <Whoami className="text">
                    Writing is my hobby. But spending more time into it is what I want to accomplish. I have written a bit on <a href="https://ujjwalkr.medium.com/">My Meduim Page</a> and also starting a <a href="https://github.com/kekwlabs/kek-blogs">blogging platform</a> for more technical writing and publising stuff from and for the community.
                </Whoami>
            </Description>
        </div>
    )
}


export default Home
