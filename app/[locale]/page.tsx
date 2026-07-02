import { Navbar } from '@/components/layout/navbar'
import { LazyFooter } from '@/components/layout/lazy-footer'
import { Hero } from '@/components/sections/hero'
import { LazyHomeSections } from '@/components/sections/lazy-home-sections'
import { getTranslations } from '@/lib/i18n-server'

type Locale = 'ro' | 'en'

export default function Home({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const t = getTranslations(locale)

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero
          locale={locale}
          description={t('hero.description')}
          exploreMenu={t('hero.exploreMenu')}
          bookTable={t('hero.bookTable')}
        />
        <LazyHomeSections />
      </main>
      <LazyFooter />
    </>
  )
}
