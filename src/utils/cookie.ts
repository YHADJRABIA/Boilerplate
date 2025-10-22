import { defaultLocale } from '@/i18n/routing'
import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { NextRequest } from 'next/server'
import { COOKIE_MAX_AGE, THEME_COOKIE, LOCALE_COOKIE } from '@/types/cookie'
import { isClient, isProduction } from '@/utils/general'

export function hasCookie(cookieName: string): boolean {
  if (!isClient) return false
  return document.cookie.includes(cookieName)
}

export async function setThemeCookie(isDark: boolean) {
  if (isClient) {
    // Client-side: use document.cookie
    document.cookie = `${THEME_COOKIE}=${isDark}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`
  } else {
    // Server-side: use next/headers
    const { cookies } = await import('next/headers')
    const cookieStore = await cookies()
    cookieStore.set(THEME_COOKIE, isDark.toString(), {
      path: '/',
      maxAge: COOKIE_MAX_AGE,
      httpOnly: false, // Allow client-side access for theme switching
      secure: isProduction,
      sameSite: 'lax',
    })
  }
}

/**
 * Extracts the locale from the NEXT_LOCALE cookie out of a Next cookies object.
 * @param cookies The cookies object containing the locale cookie.
 * @returns A string representing the locale.
 */
const getLocaleFromNextCookie = (
  cookies: ReadonlyRequestCookies | RequestCookies
) => {
  const nextCookie = cookies.get(LOCALE_COOKIE)
  const locale = nextCookie ? nextCookie.value : defaultLocale

  return locale
}

export const getLocaleFromNextRequest = (req: NextRequest) => {
  return getLocaleFromNextCookie(req.cookies)
}

export const getDarkThemeFromNextCookies = async (): Promise<boolean> => {
  const { cookies } = await import('next/headers')
  const nextCookies = await cookies()
  const themeCookie = nextCookies.get(THEME_COOKIE)

  // If cookie exists, use its value
  if (themeCookie) {
    return themeCookie.value === 'true'
  }

  // Default to false for server-side rendering
  // Client-side will handle system preference detection
  return false
}

export const getLocaleFromNextCookies = (cookies: ReadonlyRequestCookies) => {
  return getLocaleFromNextCookie(cookies)
}

export const getNextLocale = async () => {
  const { cookies } = await import('next/headers')
  const nextCookies = await cookies()
  return getLocaleFromNextCookies(nextCookies)
}
