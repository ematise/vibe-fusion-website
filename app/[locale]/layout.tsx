import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../globals.css'
import { LanguageProvider } from '@/lib/i18n'

// Import locale files
import roLocale from '@/locales/ro.json'
import enLocale from '@/locales/en.json'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale
  
  // Get translations based on locale
  const translations = locale === 'ro' ? roLocale : enLocale
  const metadata = translations.metadata
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: 'Vibe Restaurant | Bar' }],
    creator: 'Vibe',
    publisher: 'Vibe',
    icons: {
      icon: [
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      ],
      shortcut: '/favicon-32x32.png',
      apple: '/favicon-192x192.png',
    },
    openGraph: {
      title: metadata.ogTitle,
      description: metadata.ogDescription,
      url: 'https://vibe.com',
      siteName: 'Vibe Restaurant | Bar',
      images: [
        {
          url: '/vibe-logo-white-transparent-bg.png',
          width: 1200,
          height: 630,
          alt: 'Vibe Restaurant | Bar',
        },
      ],
      locale: locale === 'ro' ? 'ro_RO' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.ogTitle,
      description: metadata.twitterDescription,
      images: ['/vibe-logo-white-transparent-bg.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  }
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <LanguageProvider initialLocale={locale as 'ro' | 'en'}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
} 