import dynamic from 'next/dynamic'
import { Navbar } from '@/components/layout/navbar'
import { Hero } from '@/components/sections/hero'
import { Footer } from '@/components/layout/footer'
import { getTranslations } from '@/lib/i18n-server'
import type { Locale } from '@/lib/i18n'

const Welcome = dynamic(
  () => import('@/components/sections/welcome').then((mod) => mod.Welcome),
  { loading: () => <section className="py-8 min-h-[400px]" /> }
)
const TryOurMenu = dynamic(
  () => import('@/components/sections/try-our-menu').then((mod) => mod.TryOurMenu),
  { loading: () => <section className="py-14 min-h-[400px]" /> }
)
const TableSetting = dynamic(
  () => import('@/components/sections/table-setting').then((mod) => mod.TableSetting),
  { loading: () => <section className="h-32 md:h-80 lg:h-96" /> }
)
const DiscoverVenue = dynamic(
  () => import('@/components/sections/discover-venue').then((mod) => mod.DiscoverVenue),
  { loading: () => <section className="py-8 min-h-[400px]" /> }
)
const InstagramGallery = dynamic(
  () => import('@/components/sections/instagram-gallery').then((mod) => mod.InstagramGallery),
  { loading: () => <section className="py-8 min-h-[400px]" /> }
)

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
