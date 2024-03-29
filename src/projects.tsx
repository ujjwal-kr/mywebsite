import { IProject, projectData } from "./data"
import { Header, Showcase, ShowcasePara, ProjectList, ProjectDec, Project } from "./components/projects"
import React from "react"
import { motion } from 'framer-motion'
import FooterComponent from "./footer"

interface State {
    projects?: IProject[],
    startAnimation: any
}

class Projects extends React.Component<any, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            projects: [],
            startAnimation: {
                hidden: {
                    translateY: 100 + 'px'
                },
                visible: {
                    translateY: 0 + 'px'
                }
            }
        }
    }

    componentDidMount() {
        document.documentElement.scrollTop = 0
        this.setState({
            projects: projectData
        })
    }

    render() {
        return (
            <div>
                <motion.div initial="hidden" animate="visible"
                    variants={this.state.startAnimation}
                    transition={{ duration: 0.135, ease: 'easeOut' }}
                >
                    <Header className="has-text-centered">
                        <h1 className="has-text-primary stiff is-size-1	">ProJEcts</h1>
                    </Header>
                    <Showcase>
                        <ShowcasePara className="text is-size-4">
                            Welcome to my projects page. I make lot of stuff in my freetime and a most of it could be found on <a href="https://github.com/ujjwal-kr">my GitHub</a>. Here are some of the notable ones:
                        </ShowcasePara>
                        <ProjectList>
                            {this.state.projects ?
                                this.state.projects.map((item: IProject, i: number) => {
                                    return <Project key={i}>
                                        {item.source ?
                                            <h1><a className="text is-size-3" href={item.source}>
                                                <u>{item.title}</u>
                                            </a></h1> :
                                            <h1 className="text is-size-3">{item.title}</h1>}
                                        <div className="columns">
                                            <div className="column">
                                                <ProjectDec className="text is-size-5">{item.body}</ProjectDec>
                                                <br />
                                                <a href={item.live?.url} className="button is-primary text">{item.live?.text}</a>
                                            </div>
                                            <div className="column">
                                                <img src={item.img} alt="project" />
                                            </div>
                                        </div>
                                        <br />
                                    </Project>
                                })
                                :
                                "Something went wrong"
                            }
                        </ProjectList>
                    </Showcase>
                    <FooterComponent />
                </motion.div>
            </div>
        )
    }
}

export default Projects