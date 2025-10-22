import React from 'react'
import Typography from '../../UI/Typography'
import styles from './Socials.module.scss'
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
    <div className={styles.root}>
      {links.map(link => {
        const Icon = link.icon
        return (
          <Typography
            aria-label={link.name}
            className={styles.link}
            key={link.name}
            link={{ href: link.url, openInNewTab: true }}
            title={link.name}
          >
            <Icon className={styles.icon} />
          </Typography>
        )
      })}
    </div>
  )
}

export default Socials
