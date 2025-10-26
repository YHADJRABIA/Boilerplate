import Typography from '@/components/UI/Typography'
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
    <>
      <Typography tag="h1">{t('title')}</Typography>
    </>
  )
}
