import { IProject, projectData } from "./data"
import { Header, Showcase, ShowcasePara, ProjectList, ProjectHead, ProjectDec, Project } from "./components/projects"
import React from "react"
import { motion } from 'framer-motion'
import FooterComponent from "./footer"

interface State {
    projects?: IProject[]
}

class Projects extends React.Component<any, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        this.setState({
            projects: projectData
        })
    }

    render() {
        return (
            <div>
                <Header className="has-text-centered">
                    <h1 className="has-text-primary stiff is-size-1	">ProJEcts</h1>
                </Header>
                <Showcase>
                    <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                            opacity: 0,
                            translateY: 100 + 'px'
                        },

                        visible: {
                            opacity: 1,
                            translateY: 0 + 'px'
                        }
                    }}>
                        <ShowcasePara className="text is-size-4">
                            Welcome to my projects page. I make lot of stuff in my freetime and a most of it could be found on <a href="https://github.com/ujjwal-kr">my GitHub</a>. Here are some of the notable ones:
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
                                        {item.live ?
                                            <div>
                                                <br />
                                                <a href={item.live} className="button is-primary">Live Demo</a>
                                            </div> : null}
                                        <br />
                                    </Project>
                                })
                                :
                                "Something went wrong"
                            }
                        </ProjectList>
                    </motion.div>
                </Showcase>
                <FooterComponent />
            </div>
        )
    }
}

export default Projects