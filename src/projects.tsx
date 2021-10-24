import { Header, Showcase, ShowcasePara, ProjectList, ProjectHead, ProjectDec, Project } from "./components/projects"

function Projects() {
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
                    <Project>
                        <ProjectHead><a className="text is-size-3" href="https://github.com/ujjwal-kr/epictracker">EpicTracker</a></ProjectHead>
                        <ProjectDec className="text is-size-5">A demo of how can I track you using fingerprinting and some automated lookups and stuff, using modern Javascript APIs to identify device metadata and creating a SHA1 hash and sending it to the server so that the device can be recognized later. Here is a <a href="https://epictracker.vercel.app">Live demo</a> </ProjectDec>
                        <br />
                    </Project>
                </ProjectList>
            </Showcase>


        </div>
    )
}

export default Projects