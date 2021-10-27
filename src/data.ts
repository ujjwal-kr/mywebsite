export interface IProject {
    title: string
    body: string
    source?: string
    live?: string
}

export const projectData: IProject[] = [
    {
        title: 'HackArmour',
        source: 'https://github.com/hackarmour',
        body: 'Found this team in the late 2020 to store infosec resources, now running a community of awesome people organizing events and creating a search engine indexing best infosec resources. All thanks to the amazing staff and contributors.'
    },
    {
        title: 'Positive Vibes',
        source: 'https://github.com/ujjwal-kr/positive-vibes',
        body: 'I created a news app in the covid pandemic with the MERN [MongoDB, ExpressJs, ReactJs & NodeJs] stack which only delivers positive news, using sentiment analysis on latest google news posts, with features like authentication and control over the sentiment threshold.',
        live: 'https://positivevibes.vercel.app'
    },
    {
        title: 'EpicTracker',
        source: 'https://github.com/ujjwal-kr/epictracker',
        body: 'A demo of how can I track you using fingerprinting and some automated lookups and stuff, using modern Javascript APIs to identify device metadata and creating a SHA1 hash and sending it to the server so that the device can be recognized later',
        live: 'https://epictracker.vercel.app'
    },
    {
        title: 'Betcoin',
        source: 'https://github.com/ujjwal-kr/betcoin',
        body: 'A digital currency system created with python with features of a centralized bank, wallet system, and open transaction history of all users in the network. With games like betting (gambling)',
        live: 'https://betcoin-py.herokuapp.com'
    },
    {
        title: 'Marvel Characters',
        source: 'https://github.com/pixel-builds/marvel',
        body: 'One of the first production web apps I created with angular and firebase, to store information about the marvel characters with features of role based authentication, and offline mode [Progressive Web App] support.',
        live: 'https://marvel-init.web.app'
    }
]