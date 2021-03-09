import React, { useState } from 'react';
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
    primaryLanguage :{
        name: String;
    }
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
                    primaryLanguage {
                        name
                    }
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
    console.log(data)
   return(
       <div>
           {data.viewer.repositories.nodes.map(repos => {
               if (repos.primaryLanguage == null) {repos.primaryLanguage = {name: ""}}
               console.log(repos.primaryLanguage.name)
               return (<div>
               </div>)
           })}
       </div>
   )
}

function randShade(): String {
    const shades: String[] = ['primary', 'danger', 'success']
    let rand = Math.floor(Math.random() * Math.floor(3))
    return shades[rand]
}



export default Projects