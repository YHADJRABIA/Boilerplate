import { defaultLocale } from '@/i18n/routing'
import { redirect } from 'next/navigation' // Shouldn't call Next-Intl's redirect here (outside of /[locale]/ folder). Fails build otherwise

// Redirect '/' to '/(default-locale)'
const IndexPage = () => {
  redirect(`/${defaultLocale}`)
}

export default IndexPage
