import styled from 'styled-components';

// Hero

export const MyImageEl = styled.img`
    width: 28rem;
    height: 28rem;
    border-radius: 50%;
    border: 5px solid #ff1c5c;
    margin-top: -5em;
    @media all and (max-width: 800px) {
        width: 16rem;
        height: 16rem;
    }

    @media all and (max-width: 350px) {
        width: 13rem;
        height: 13rem;
        margin-top: -3em;
    }
`

export const ImgContainer = styled.div`
    text-align: center;
    width: 100%;
    margin: auto;
`

export const ScrollImg = styled.img`
    width: 10em;
    height: 10em;
    position: relative;
    top: 6em;
`

export const Name = styled.p`
    margin-top: 1em;
    font-size: 3.5em;
    @media all and (max-width: 800px) {
        margin-top: .7em;
        font-size: 3em;
        line-height: 1.2;
    }
`

// Description

export const Description = styled.div`
    text-align: center;
    padding: 2%;
`
export const Whoami = styled.p`
    font-size: 2em;
    @media all and (max-width: 800px) {
        font-size: 1.5em;
        margin-top: .6em;
    }
`

export const DesHeading = styled.h1`
    font-size: 4em;
    @media all and (max-width: 800px) {
        font-size: 3.34em;
    }
`

// Skills
export const SkillsContainer = styled.div`
    width: 60%;
    margin: auto;
    padding: 4%;
    background-color: rgba(0, 0, 0, .1);
    @media all and (max-width: 800px) {
        padding: 2%;
        width: 80%;
    }
`

export const Col = styled.div `
    font-size: 1.7rem;
    @media all and (max-width: 800px) {
        font-size: 1.1em;
    }
`
