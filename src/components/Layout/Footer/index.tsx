import { useNow, useTranslations } from 'next-intl'
import React from 'react'
import Typography from '../../UI/Typography'
import Socials from './Socials'
import { DEFAULT_SOCIAL_LINKS } from '@/utils/constant'

interface PropTypes {
  color?: string
}

const FooterSeparator = ({ color }: PropTypes) => {
  return (
    <svg
      className="mb-[-0.5rem] h-32"
      preserveAspectRatio="none"
      style={{ backgroundColor: color }}
      viewBox="0 0 100 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,0L50,70L100,0L100,80L50,80L0,80Z"
        fill="var(--bg-header-footer)"
        fillOpacity="1"
      ></path>
    </svg>
  )
}

const Footer = () => {
  const t = useTranslations('Footer')
  const now = useNow()
  const currentYear = now.getFullYear()

  return (
    <>
      <FooterSeparator />
      <footer className="p-12 px-10 flex flex-col justify-center items-center gap-16 bg-bg-header-footer">
        <Socials links={DEFAULT_SOCIAL_LINKS} />
        <Typography size="s" tag="small">
          {t('copyright', { currentYear })}
        </Typography>
      </footer>
    </>
  )
}

export default Footer
