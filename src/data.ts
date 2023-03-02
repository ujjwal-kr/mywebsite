import marvelImg from "./assets/marvel.png"

export interface IProject {
    title: string
    body: string
    source?: string
    live?: Live
    img?: string
}

interface Live {
    text?: string
    url?: string
}

export const projectData: IProject[] = [
    {
        title: 'HackArmour',
        source: 'https://github.com/hackarmour',
        body: 'Found this team in the late 2020 to store infosec resources, now running a community of awesome people organizing events and creating a search engine indexing best infosec resources. All thanks to the amazing staff and contributors.',
        live: {text: 'Read More', url: 'https://hackarmour.github.io/whitepaper/Hackarmour.pdf'},
        img: "https://media.discordapp.net/attachments/936106022576201769/1053176346500669532/image.png",
    },
    {
        title: 'Positive Vibes',
        source: 'https://github.com/ujjwal-kr/positive-vibes',
        body: 'I created a news app in the covid pandemic with the MERN [MongoDB, ExpressJs, ReactJs & NodeJs] stack which only delivers positive news, using sentiment analysis on latest google news posts, with features like authentication and control over the sentiment threshold.',
        live: {text: 'Visit', url: "https://positivevibes.vercel.app"},
        img: "https://media.discordapp.net/attachments/936106022576201769/1053176636528402462/image.png",
    },
    {
        title: 'Ram',
        source: 'https://github.com/ujjwal-kr/ram',
        body: 'I made my first programming language (stack based) using Rust. With vectors, strings, conditional jumps, IO, and basic filesytem operations. I improved the language enough to make a basic interpreter in it, hosted in the same repository.',
        live: {text: 'Source', url :"https://github.com/ujjwal-kr/ram"},
        img: "https://media.discordapp.net/attachments/936106022576201769/1043010332005761024/image.png",
    },
    {
        title: 'EpicTracker',
        source: 'https://github.com/ujjwal-kr/epictracker',
        body: 'A demo of how can I track you using fingerprinting and some automated lookups and stuff, using modern Javascript APIs to identify device metadata and creating a SHA1 hash and sending it to the server so that the device can be recognized later',
        live: {text: 'Live Demo', url: 'https://epictracker.vercel.app'},
        img: "https://ujjwalkumar.vercel.app/images/tracker.jpeg"
    },
    {
        title: 'Marvel Characters',
        source: 'https://github.com/pixel-builds/marvel',
        body: 'One of the first production web apps I created with angular and firebase, to store information about the marvel characters with features of role based authentication, and offline mode [Progressive Web App] support.',
        live: {url: 'https://marvel-init.web.app', text: 'Visit'},
        img: marvelImg,
    }
]
