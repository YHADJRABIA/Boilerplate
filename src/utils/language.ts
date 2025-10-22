import FrFlagIcon from '../../public/flags/fr.svg?url'
import UkFlagIcon from '../../public/flags/uk.svg?url'
import RuFlagIcon from '../../public/flags/ru.svg?url'
import SeFlagIcon from '../../public/flags/se.svg?url'
import { locales } from '@/i18n/routing'
import { Locale } from 'next-intl'

interface Language {
  id: Locale
  value: Locale
  label: string
  icon: string
}

export const languages: Language[] = [
  { id: 'en', value: 'en', label: 'English', icon: UkFlagIcon },
  { id: 'fr', value: 'fr', label: 'Français', icon: FrFlagIcon },
  { id: 'ru', value: 'ru', label: 'Русский', icon: RuFlagIcon },
  { id: 'se', value: 'se', label: 'Svenska', icon: SeFlagIcon },
]

export const defaultLanguage = languages[0]

export const getLanguageByLocaleValue = (locale: Locale) => {
  return languages.find(lang => lang.value === locale) as Language
}

// TODO: replace with next-intl's hasLocale
export const isRecognisedLocale = (locale: string) =>
  locales.includes(locale as Locale)
