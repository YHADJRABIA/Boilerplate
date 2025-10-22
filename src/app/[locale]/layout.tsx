import { Inter, Literata } from 'next/font/google'
import { ReactNode } from 'react'
import AppProvider from '@/context/AppProvider'
import { websiteUrl } from '@/utils/general'
import { GOOGLE_SEARCH_CONSOLE_VERIFICATION } from '@/utils/constant'
import { routing } from '@/i18n/routing'
import { hasLocale, Locale } from 'use-intl'
import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'
import { getTranslations } from 'next-intl/server'
import { getDarkThemeFromNextCookies } from '@/utils/cookie'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-body' })
const literate = Literata({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-heading',
})

export type ParamsType = { locale: Locale; slug: string }

export interface MetaDataProps {
  params: Promise<ParamsType>
}

/* export const generateStaticParams = () =>
  routing.locales.map(locale => ({ locale })) */

export const generateMetadata = async ({
  params,
}: MetaDataProps): Promise<Metadata> => {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    metadataBase: new URL(websiteUrl),

    title: {
      template: `${t('prefix')} %s`,
      default: t('site_name'),
    },
    description: t('Homepage.description'),
    keywords: t('keywords'),
    authors: [{ name: t('site_name') }],
    creator: t('site_name'),
    publisher: t('site_name'),
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        {
          rel: 'icon',
          url: '/favicon.ico',
        },
      ],
    },
    manifest: '/manifest.json',
    openGraph: {
      title: t('site_name'),
      description: t('Homepage.description'),
      url: websiteUrl, // Doesn't accept localhost:3000
      siteName: t('site_name'),
      images: [
        {
          url: '/logo.svg',
          width: 800,
          height: 600,
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('site_name'),
      description: t('Homepage.description'),
      images: ['/logo.svg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: GOOGLE_SEARCH_CONSOLE_VERIFICATION,
    },
  }
}

interface LayoutProps {
  params: Promise<{ locale: string }>
  children: ReactNode
}

export default async function LocaleLayout({ params, children }: LayoutProps) {
  const { locale } = await params
  const isDarkTheme = await getDarkThemeFromNextCookies()
  const theme = isDarkTheme ? 'dark' : 'auto'

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html data-theme={theme} lang={locale}>
      <body className={`${inter.variable} ${literate.variable}`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
