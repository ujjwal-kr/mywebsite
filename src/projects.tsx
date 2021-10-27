import { IProject, projectData } from "./data"
import { Header, Showcase, ShowcasePara, ProjectList, ProjectHead, ProjectDec, Project } from "./components/projects"
import React from "react"

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
            <ShowcasePara className="text is-size-4">
                    Welcome to my projects page. I make lot of stuff in my freetime and a most of it could be found on <a href="https://github.com/ujjwal-kr">my GitHub</a>. Here are some of the notable ones:
            </ShowcasePara>
                <ProjectList>
                {this.state.projects ?
                    this.state.projects.map((item, i) => {
                        return <Project key={i}>
                                {item.source ?
                                    <ProjectHead><a className="text is-size-3" href={item.source}><u>{item.title}</u></a></ProjectHead>
                                :
                                    <ProjectHead className="text is-size-3">{item.title}</ProjectHead>
                                }
                            <ProjectDec className="text is-size-5">
                                {item.body}
                            </ProjectDec>
                            <br />
                            {item.live ?
                                 <a href={item.live} className="button is-primary">Live Demo</a> :null
                            }
                            <br />
                        </Project>
                    })
                :
                "Something went wrong"
                }
                </ProjectList>
            </Showcase>
        </div>
        )
    }
}

export default Projects