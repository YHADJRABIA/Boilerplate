import React from 'react'
import Typography from '../../UI/Typography'
import { IconType } from 'react-icons'

export interface SocialLinks {
  links: {
    name: string
    url: string
    icon: IconType
  }[]
}

const Socials = ({ links }: SocialLinks) => {
  return (
    <div className="flex flex-row justify-center items-center gap-16 sm:gap-24">
      {links.map(link => {
        const Icon = link.icon
        return (
          <Typography
            aria-label={link.name}
            className="flex flex-row justify-center items-center transition-all duration-300 text-text-inverse hover:scale-110 hover:text-accent"
            key={link.name}
            link={{ href: link.url, openInNewTab: true }}
            title={link.name}
          >
            <Icon className="text-[clamp(2.4rem,3vw,2.8rem)]" />
          </Typography>
        )
      })}
    </div>
  )
}

export default Socials
