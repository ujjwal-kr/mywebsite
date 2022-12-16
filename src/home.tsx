import MyImage from './assets/myself.png'
import { MyImageEl, ImgContainer, Name, Description, Whoami, DesHeading, SkillsContainer, Col } from './components/home'
import { motion } from 'framer-motion'
import './glitch.scss'
import FooterComponent from './footer'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <motion.main
                initial={{ opacity: 0, translateY: -100 + 'px' }}
                animate={{ translateY: 0 + 'px', opacity: 1 }}
                transition={{ duration: .135, ease: 'easeOut' }}
                exit={{ opacity: 0 }}
            >
                <Hero />
                <Skills />
                <Projects />
                <Blog />
                <Ventures />
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
                    I'm a Computer Programmer. I'm {age} years old and from India. I research about CS, <a href="https://en.wikipedia.org/wiki/Reverse_engineering">Reverse Engineering</a> apps, firmwares and malwares. Currently working on <a href="https://github.com/hackarmour">HackArmour</a>, and some <Link to="/projects">epic projects.</Link>
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
                    <li>C++</li>
                    <li style={{ color: '#2994ff' }}>Python</li>
                    <li>Rust</li>
                    <li>Electronics</li>
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
                    Writing is one of my hobby. But spending more time into it is what I want to accomplish. Please check out <a href="https://crackhead-systems.vercel.app">CrackHead Systems</a>, a systems programming and tech blog I maintain.
                </Whoami>
            </Description>
        </div>
    )
}

function Ventures() {
    return (
        <div style={{ textAlign: 'center' }}>
            <br />
            <br />
            <Description>
                <DesHeading className="has-text-primary stiff">Ventures</DesHeading>
                <Whoami className="text">
                    Here is the list of what I want to learn in the upcoming years, and also have setup a <a href="https://github.com/ujjwal-kr/system-programming-roadmap">3 year long roadmap</a> for myself to learn some of the below mentioned things.
                    <br />
                    <br />
                    <ul>
                        <li>
                            - Graphics Programming
                        </li>
                        <li>
                            - Malware Analysis
                        </li>
                        <li>
                            - Compiler Development
                        </li>
                        <li>
                            - Browser Exploitation
                        </li>
                        <li>
                            - Blockchain and P2P
                        </li>
                    </ul>
                </Whoami>
            </Description>
        </div>
    )
}


export default Home
