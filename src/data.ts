export interface Project {
    title: string
    body: string
    live?: string
}

export const Projects: Project[] = [
    {
        title: 'EpicTracker',
        body: 'A demo of how can I track you using fingerprinting and some automated lookups and stuff, using modern Javascript APIs to identify device metadata and creating a SHA1 hash and sending it to the server so that the device can be recognized later',
        live: 'https://epictracker.vercel.com'
    },

    {
        title: 'EpicTracker',
        body: 'A demo of how can I track you using fingerprinting and some automated lookups and stuff, using modern Javascript APIs to identify device metadata and creating a SHA1 hash and sending it to the server so that the device can be recognized later',
        live: 'https://epictracker.vercel.com'
    }
]