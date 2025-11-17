import Typography from '@/components/UI/Typography'
import React from 'react'
import cn from 'classnames'
import { IconType } from 'react-icons/lib'

type NavLinkType = {
  icon: IconType
  label: string
  url?: string
  onClick?: () => void
}

export interface PropTypes {
  link: NavLinkType
  isActive: boolean
  onClick?: () => void
  className?: string
}

const NavLink = ({ isActive, link, onClick, className }: PropTypes) => {
  const Icon = link.icon

  const handleClick = () => {
    link.onClick?.()
    onClick?.()
  }
  return (
    <li
      className={cn(
        'flex flex-row justify-center items-center flex-wrap relative [&>*]:text-text-inverse [&>*]:transition-colors [&>*]:duration-300 hover:[&>*]:text-accent',
        {
          '[&>*]:text-accent': isActive,
        },
        className
      )}
      onClick={handleClick}
    >
      <style jsx>{`
        @media (min-width: 1200px) {
          li:not(:last-child)::after {
            content: '•';
            color: var(--text-inverse);
            margin-left: 2rem;
            opacity: 0.8;
            font-size: 1.6rem;
            pointer-events: none;
          }
        }
      `}</style>
      <Typography
        className="flex flex-row justify-center items-center flex-wrap gap-6 lg:cursor-pointer"
        link={{ href: link?.url ?? null }}
        size="s"
        weight={isActive ? 'semiBold' : undefined}
      >
        <Icon className="lg:hidden" size={16} />
        {link.label}
      </Typography>
    </li>
  )
}

export default NavLink
