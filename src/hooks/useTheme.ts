'use client'

import { useEffect, useState } from 'react'
import { THEME_COOKIE } from '@/types/cookie'
import { setThemeCookie, hasCookie } from '@/utils/cookie'

export function useTheme(initialTheme: boolean) {
  const [isDarkTheme, setIsDarkTheme] = useState(initialTheme)
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize theme on client-side
  useEffect(() => {
    // Check if cookie exists, if not use system preference
    if (!hasCookie(THEME_COOKIE)) {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      setIsDarkTheme(prefersDark)
    }
    setIsInitialized(true)
  }, [])

  // Apply theme to DOM and save to cookie
  useEffect(() => {
    if (!isInitialized) return

    document.documentElement.dataset.theme = isDarkTheme ? 'dark' : 'light'
    setThemeCookie(isDarkTheme)
  }, [isDarkTheme, isInitialized])

  const toggleTheme = () => setIsDarkTheme(prev => !prev)

  return { isDarkTheme, toggleTheme }
}
