import styled from 'styled-components';

export const MyImageEl = styled.img`
    width: 28rem;
    height: 28rem;
    border-radius: 50%;
    border: 5px solid #ff1c5c;
    margin-top: -5em;
    @media all and (max-width: 800px) {
        width: 18rem;
        height: 18rem;
    }

    @media all and (max-width: 350px) {
        width: 15rem;
        height: 15rem;
        margin-top: -3em;
    }
`

export const ImgContainer = styled.div`
    text-align: center;
    width: 100%;
    margin: auto;
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