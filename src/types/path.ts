import { pathnames } from '@/i18n/routing'
import { Locale } from 'next-intl'
import { Pathnames } from 'next-intl/routing'

export type Pathname = keyof typeof pathnames

export type PathnamesType = Pathnames<Locale>
