import { MetadataRoute } from 'next'
import { websiteUrl } from '@/utils/general'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${websiteUrl}/sitemap.xml`,
  }
}
