import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../globals.css'
import { LanguageProvider } from '@/lib/i18n'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Vibe Restaurant | Bar - Cluj-Napoca',
  description: 'Experience exceptional dining at Vibe Restaurant | Bar in Cluj-Napoca. Discover our carefully crafted menu, premium beverages, and vibrant atmosphere.',
  keywords: 'restaurant, bar, Cluj, fine dining, cuisine, cocktails, Vibe',
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
    title: 'Vibe Restaurant | Bar - Cluj-Napoca',
    description: 'Experience exceptional dining at Vibe Restaurant | Bar in Cluj-Napoca.',
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
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe Restaurant | Bar - Cluj-Napoca',
    description: 'Experience exceptional dining at Vibe Restaurant | Bar in Cluj-Napoca.',
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

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <LanguageProvider initialLocale={locale as 'ro' | 'en' | 'hu'}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
} 