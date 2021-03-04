import styled from 'styled-components';

export const MyImageEl = styled.img`
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    border: 5px solid #ff1c5c;
    margin-top: -5em;
    @media all and (max-width: 800px) {
        width: 20rem;
        height: 20rem;
        margin-top: -15em;
    }
`

export const ImgContainer = styled.div`
    text-align: center;
    width: 100%;
    margin: auto;
`

export const Description = styled.div`
    
`