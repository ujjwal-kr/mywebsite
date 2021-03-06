import React from 'react';
import { useQuery } from 'urql';

interface Data {
    viewer: {
        name: String;
        repositories: {
            nodes: Repo[];
        }
    }
    organization: {
        name: String;
        url: String;
        description: String;
    }
}

interface Repo {
    name: String;
    description: String;
}

function Projects() {
    const ProjectsQuery = `
    query($number_of_repos: Int!){
        viewer{
            name
            repositories(last: $number_of_repos){
                nodes{
                    name
                    description
                }
            }
        }
        organization(login: "hackarmour"){
            name
            url
            description
        }
    }

`
    const [result, reexecuteQuery] = useQuery({
        query: ProjectsQuery,
        variables: {number_of_repos: 100}
    })

    const { fetching, error } = result;
    const data: Data = result.data;
    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;
   return(
       <div></div>
   )
}


export default Projects