import { Navbar } from '@/components/layout/navbar'
import { Hero } from '@/components/sections/hero'
import { Welcome } from '@/components/sections/welcome'
import { TableSetting } from '@/components/sections/table-setting'
import { TryOurMenu } from '@/components/sections/try-our-menu'
import { DiscoverVenue } from '@/components/sections/discover-venue'
import { Footer } from '@/components/layout/footer'
import { InstagramGallery } from '@/components/sections/instagram-gallery'
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
        <Welcome />
        <TryOurMenu />
        <TableSetting />
        <DiscoverVenue />
        <InstagramGallery />
      </main>
      <Footer />
    </>
  )
}
