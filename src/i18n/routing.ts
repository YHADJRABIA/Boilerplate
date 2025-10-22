import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const localePrefix = 'as-needed' // No prefix for the default locale. /en -> /

export const locales = ['en', 'fr', 'ru', 'se'] as const
export const defaultLocale = 'en' as const

export const pathnames = {
  // If all locales use the same pathname, a single external path can be provided
  '/': '/',

  // If locales use different paths, you can specify each external path per locale
  '/project': {
    en: '/project',
    fr: '/projet',
    ru: '/проект',
    se: '/projekt',
  },
}

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: {
    mode: localePrefix,
  },
  pathnames: pathnames as typeof pathnames & Record<string, string>,
})

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
