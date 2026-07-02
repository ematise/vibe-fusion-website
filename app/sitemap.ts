import type { MetadataRoute } from 'next'

const baseUrl = 'https://vibefusion.ro'

const locales = ['ro', 'en'] as const
const pages = ['', '/menu', '/about', '/contact', '/reservations'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' : 'monthly',
      priority: page === '' ? 1 : 0.8,
    }))
  )
}
