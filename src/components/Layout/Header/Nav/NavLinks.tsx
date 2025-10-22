'use client'
import React from 'react'
import NavLink from './NavLink'
import useNavLinks from '@/hooks/useNavLinks'
import { usePathname } from '@/i18n/routing'
import { hasMatchingFirstSlug } from '@/utils/path'
import { Pathname } from '@/types/path'

interface PropTypes {
  onActiveLinkClick?: () => void
}

const NavLinks = ({ onActiveLinkClick }: PropTypes) => {
  const currentPath = usePathname()
  const navLinks = useNavLinks()

  return (
    <>
      {navLinks.map(link => {
        const isActive = hasMatchingFirstSlug(
          link?.url as Pathname,
          currentPath
        )
        return (
          <NavLink
            isActive={isActive}
            key={link.label}
            link={link}
            onClick={isActive ? onActiveLinkClick : undefined}
          />
        )
      })}
    </>
  )
}

export default NavLinks
