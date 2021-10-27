import twitter from './assets/twitter.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import styled from 'styled-components'

const Footer = styled.div`
    padding: 1.5rem;
    margin: auto;
    text-align: center;
    font-size: 1.2rem;
`

const Icon = styled.img`
    margin: .5rem;
    width: 40px;
    height: 40px;
    &:hover {
        filter: invert(33%) sepia(100%) saturate(5722%) hue-rotate(331deg) brightness(101%) contrast(150%);
    }
`

function FooterComponent() {
    return(
        <Footer className="text">
            <br />
            <a href="https://twitter.com/epicujjwal"><Icon src={twitter} alt="twitter" /></a>
            <a href="https://github.com/ujjwal-kr"><Icon src={github} alt="github" /></a>
            <a href="https://www.linkedin.com/in/ujjwal-kumar-057b511b1"><Icon src={linkedin} alt="github" /></a>
            <br />
           <a href="mailto:epicujjwal@protonmail.com">epicujjwal@protonmail.com</a>
        </Footer>
    )
}

export default FooterComponent