import styled from 'styled-components'

export const Header = styled.div`
    padding: .9rem;
    background-color: rgba(0,0,0, .3);
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
    font-size: 1.6rem !important;
    @media all and (max-width: 700px){
        font-size: 1.1rem !important;
    }
`

export const Project = styled.div`
    padding: 1rem;
`

export const ProjectList = styled.div`
    padding-top: 2rem;
    padding-left: 5rem;
    padding-right: 5rem;
    @media all and (max-width: 800px){
        padding-left: 0rem;
        padding-right: 0rem;
    }
`

export const ProjectDec = styled.p`
    padding-top: .5rem;
    font-size: 1.5rem !important;
    @media all and (max-width: 700px) {
        font-size: 1.1rem !important;
    }
`