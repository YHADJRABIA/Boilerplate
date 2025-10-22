import type { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'

export const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

export const THEME_COOKIE = 'dark-theme' as const
export const LOCALE_COOKIE = 'NEXT_LOCALE' as const

export type CookieType = typeof THEME_COOKIE | typeof LOCALE_COOKIE

export type CookieOptions = Partial<ResponseCookie>
