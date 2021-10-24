import { Header, Showcase, ShowcasePara } from "./components/projects"

function Projects() {
    return(
        <div>
            <Header className="has-text-centered">
                <h1 className="has-text-primary stiff is-size-1	">ProJEcts</h1>
            </Header>
            
            <Showcase>
                <ShowcasePara className="text is-size-4">
                    Welcome to my projects page. I make lot of stuff in my freetime and a most of it could be found on <a href="https://github.com/ujjwal-kr">my GitHub</a>. Here are some of the notable ones:
                </ShowcasePara>
            </Showcase>
        </div>
    )
}

export default Projects