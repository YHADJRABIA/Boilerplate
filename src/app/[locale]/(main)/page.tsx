import { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: 'HomePage' })
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  )
}
