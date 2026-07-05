import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Welcome } from '@/components/sections/welcome'
import { TryOurMenu } from '@/components/sections/try-our-menu'
import { DiscoverVenue } from '@/components/sections/discover-venue'
import { TableSetting } from '@/components/sections/table-setting'
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
        <Welcome
          title={t('welcome.title')}
          intro={t('welcome.intro')}
          description={t('welcome.description')}
        />
        <TryOurMenu
          locale={locale}
          title={t('tryMenu.title')}
          intro={t('tryMenu.intro')}
          description={t('tryMenu.description')}
          viewMenu={t('tryMenu.viewMenu')}
        />
        <TableSetting />
        <DiscoverVenue
          title={t('discoverVenue.title')}
          intro={t('discoverVenue.intro')}
          description1={t('discoverVenue.description1')}
          description2={t('discoverVenue.description2')}
        />
        <InstagramGallery />
      </main>
      <Footer locale={locale} />
    </>
  )
}
