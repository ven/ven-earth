import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Project {
  title: string
  description: string
  href?: string
  icon: IconProp
}

export const ProjectData: Project[] = [
  {
    title: 'discord.bio',
    description: 'The simple way to extend your Discord profile.',
    href: 'https://discord.bio',
    icon: ['fab', 'discord'],
  },
  {
    title: 'ven.earth',
    description:
      "The website you're currently on! Made with Next.js and utilises serverless functions.",
    href: 'https://github.com/ven/ven-earth',
    icon: ['fas', 'globe-europe'],
  },
  {
    title: 'Lookup',
    description: 'Easily get data about a Discord account from an ID.',
    href: 'https://lookup.ven.earth',
    icon: ['fas', 'search'],
  },
  {
    title: 'Huecord',
    description: 'A Discord bot to manage Philips Hue appliances within Discord.',
    href: 'https://github.com/ven/huecord',
    icon: ['far', 'lightbulb'],
  },
  {
    title: 'Spotify Dashboard',
    description:
      'A minimalistic dashboard for Spotify, allowing you to view your top songs and artists and play music from the application.',
    icon: ['fab', 'spotify'],
  },
  {
    title: 'Light Dashboard',
    description:
      'A Philips Hue dashboard made with React, allowing control of light appliances directly from the browser.',
    icon: ['far', 'tachometer'],
  },
]
