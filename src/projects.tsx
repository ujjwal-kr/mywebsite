import { IProject, projectData } from "./data"
import { Header, Showcase, ShowcasePara, ProjectList, ProjectHead, ProjectDec, Project } from "./components/projects"
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
                    opacity: 0,
                    translateY: 100 + 'px'
                },
                visible: {
                    opacity: 1,
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
                    transition={{ duration: 0.12 }}
                >
                    <Header className="has-text-centered">
                        <h1 className="has-text-primary stiff is-size-1	">ProJEcts</h1>
                    </Header>
                    <Showcase>
                        <ShowcasePara className="text is-size-4">
                            Welcome to my projects page.I make lot of stuff in my freetime and a most of it could be found on <a href="https://github.com/ujjwal-kr">my GitHub</a>.Here are some of the notable ones:
                        </ShowcasePara>
                        <ProjectList>
                            {this.state.projects ?
                                this.state.projects.map((item: IProject, i: number) => {
                                    return <Project key={i}>
                                        {item.source ?
                                            <ProjectHead><a className="text is-size-3" href={item.source}>
                                                <u>{item.title}</u>
                                            </a></ProjectHead> :
                                            <ProjectHead className="text is-size-3">{item.title}</ProjectHead>}
                                        <ProjectDec className="text is-size-5">{item.body}</ProjectDec>
                                        <div>
                                            <br />
                                            <a href={item.live?.url} className="button is-primary">{item.live?.text}</a>
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