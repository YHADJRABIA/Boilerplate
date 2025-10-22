import { MetadataRoute } from 'next'
import { websiteUrl } from '@/utils/general'
import { routing } from '@/i18n/routing'

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales
  const defaultLocale = routing.defaultLocale

  // Generate sitemap entries for all locales
  const routes: MetadataRoute.Sitemap = []

  // Homepage for each locale
  locales.forEach(locale => {
    const isDefault = locale === defaultLocale
    routes.push({
      url: isDefault ? websiteUrl : `${websiteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          locales.map(loc => [
            loc,
            loc === defaultLocale ? websiteUrl : `${websiteUrl}/${loc}`,
          ])
        ),
      },
    })
  })

  // Add other routes here as needed
  // Example: Project pages
  locales.forEach(locale => {
    const isDefault = locale === defaultLocale
    const projectPath =
      locale === 'fr'
        ? 'projet'
        : locale === 'ru'
          ? 'проект'
          : locale === 'se'
            ? 'projekt'
            : 'project'
    const baseUrl = isDefault ? websiteUrl : `${websiteUrl}/${locale}`

    routes.push({
      url: `${baseUrl}/${projectPath}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map(loc => {
            const locProjectPath =
              loc === 'fr'
                ? 'projet'
                : loc === 'ru'
                  ? 'проект'
                  : loc === 'se'
                    ? 'projekt'
                    : 'project'
            const locBaseUrl =
              loc === defaultLocale ? websiteUrl : `${websiteUrl}/${loc}`
            return [loc, `${locBaseUrl}/${locProjectPath}`]
          })
        ),
      },
    })
  })

  return routes
}
