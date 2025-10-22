import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { Analytics } from '@vercel/analytics/next'
import { getMessages } from 'next-intl/server'
import ToastProvider from './ToastProvider'
import { ThemeProvider } from './ThemeProvider'
import { getDarkThemeFromNextCookies } from '@/utils/cookie'

interface PropTypes {
  children: ReactNode
}

const AppProvider = async ({ children }: PropTypes) => {
  // Provide all messages to client side
  const messages = await getMessages()
  const isDarkTheme = await getDarkThemeFromNextCookies()

  return (
    <>
      <Analytics />
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider isDark={isDarkTheme}>
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </NextIntlClientProvider>
    </>
  )
}

export default AppProvider
