'use client'

import { createContext, type ReactNode, useContext } from 'react'
import { useTheme } from '@/hooks/useTheme'

type ThemeContextType = {
  isDarkTheme: boolean
  toggleTheme: () => void
}

interface PropTypes {
  children: ReactNode
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

export const ThemeProvider = ({ children, isDark }: PropTypes) => {
  const { isDarkTheme, toggleTheme } = useTheme(isDark)

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}
