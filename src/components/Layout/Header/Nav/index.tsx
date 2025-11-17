'use client'
import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { usePathname } from '@/i18n/routing'
import BurgerMenu from '../BurgerMenu'
import LanguageMenu from '../../LanguageMenu'
import Separator from '@/components/Separator'
import useIsOnDesktop from '@/hooks/useIsOnDesktop'
import NavLinks from './NavLinks'
import ThemeToggler from '@/components/ThemeToggler'
import { useThemeContext } from '@/context/ThemeProvider'
import { useTranslations } from 'next-intl'

interface PropTypes {
  className?: string
}

const Nav = ({ className }: PropTypes) => {
  const { isDarkTheme, toggleTheme } = useThemeContext()
  const t = useTranslations('ThemeToggler')
  const currentPath = usePathname()
  const isOnDesktop = useIsOnDesktop()
  const [toggled, setToggled] = useState(false)

  const handleCloseNav = () => {
    if (toggled === false) return
    setToggled(false)
  }

  // Close nav menu when path has changed
  useEffect(() => {
    handleCloseNav()
  }, [currentPath]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <nav aria-label="Main menu" className={cn(className)}>
      <BurgerMenu
        className="lg:hidden"
        setToggled={setToggled}
        toggled={toggled}
      />

      <div
        className={cn(
          'flex flex-col justify-start items-center flex-wrap p-12 pt-12 pb-8 absolute overflow-hidden top-header left-[-120%] opacity-0 transition-all duration-500 ease-out w-full bg-bg-header-footer shadow-[0_3px_5px_0px_rgba(255,255,255,0.2),0_-3px_5px_0px_rgba(255,255,255,0.2)] [&>*]:w-full',
          'lg:all-unset lg:box-border lg:flex lg:flex-row lg:justify-start lg:items-center lg:flex-wrap lg:gap-16',
          { 'bg-bg-header-footer opacity-100 left-0': toggled }
        )}
      >
        <ul className="flex flex-col justify-around items-start flex-wrap content-start gap-8 lg:flex-row">
          <NavLinks onActiveLinkClick={handleCloseNav} />
        </ul>
        <Separator className="lg:hidden" />
        <div className="mt-auto flex flex-row justify-between items-center flex-wrap sm:gap-8">
          <LanguageMenu isInverted={!isOnDesktop} />
          <ThemeToggler
            isDarkTheme={isDarkTheme}
            title={t('theme')}
            onClick={toggleTheme}
          />
        </div>
      </div>
    </nav>
  )
}

export default Nav
