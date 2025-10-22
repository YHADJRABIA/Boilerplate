import { formats } from '@/i18n/request'
import messages from '../../messages/en.json'
import { Locale } from 'next-intl'

declare module 'next-intl' {
  interface AppConfig {
    Locale: Locale
    Messages: typeof messages
    Formats: typeof formats
  }
}
