import styled from 'styled-components'

export const Header = styled.div`
    padding: .9rem;
    background-color: rgba(0,0,0, .3)
`

export const Showcase = styled.section`
    padding-top: 5rem;
    width: 80%;
    margin: auto;
    
    @media all and (max-width: 700px){
        width: 100%;
        padding: 1rem;
    }
`

export const ShowcasePara = styled.p`
    @media all and (max-width: 700px){
        font-size: 1.1rem !important;
    }
`

export const Project = styled.div`
    padding: 1rem;
`

export const ProjectList = styled.div`
    padding-top: 2rem;

`


export const ProjectHead = styled.h1`
    
`

export const ProjectDec = styled.p`
    padding-top: .5rem;
    @media all and (max-width: 700px) {
        font-size: 1.1rem !important;
    }
`