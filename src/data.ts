export interface IProject {
    title: string
    body: string
    source?: string
    live?: string
}

export const projectData: IProject[] = [
    {
        title: 'EpicTracker',
        source: 'https://github.com/ujjwal-kr/epictracker',
        body: 'A demo of how can I track you using fingerprinting and some automated lookups and stuff, using modern Javascript APIs to identify device metadata and creating a SHA1 hash and sending it to the server so that the device can be recognized later',
        live: 'https://epictracker.vercel.app'
    },

    {
        title: 'EpicTracker',
        source: 'https://github.com/ujjwal-kr/epictracker',
        body: 'A demo of how can I track you using fingerprinting and some automated lookups and stuff, using modern Javascript APIs to identify device metadata and creating a SHA1 hash and sending it to the server so that the device can be recognized later',
        live: 'https://epictracker.vercel.app'
    }
]