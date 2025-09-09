import type { Metadata } from 'next'
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Contact } from "@/components/sections/contact"

// Import locale files
import roLocale from '@/locales/ro.json'
import enLocale from '@/locales/en.json'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale
  
  // Get translations based on locale
  const translations = locale === 'ro' ? roLocale : enLocale
  const metadata = translations.metadata.pages.contact
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.ogTitle,
      description: metadata.ogDescription,
      url: `https://vibe.com/${locale}/contact`,
      siteName: 'Vibe Restaurant | Bar',
      images: [
        {
          url: '/vibe-logo-white-transparent-bg.png',
          width: 1200,
          height: 630,
          alt: 'Vibe Restaurant | Bar Contact',
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
  }
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  )
}
