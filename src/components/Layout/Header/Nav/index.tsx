'use client'
import React, { useEffect, useState } from 'react'
import styles from './Nav.module.scss'
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
    <nav aria-label="Main menu" className={cn(styles.root, className)}>
      <BurgerMenu
        className={styles.burgerMenu}
        setToggled={setToggled}
        toggled={toggled}
      />

      <div className={cn(styles.menu, { [styles.toggled]: toggled })}>
        <ul className={styles.links}>
          <NavLinks onActiveLinkClick={handleCloseNav} />
        </ul>
        <Separator className={styles.separator} />
        <div className={styles.bottomSection}>
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
