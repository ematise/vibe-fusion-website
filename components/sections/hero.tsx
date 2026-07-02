import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { HeroVideoWrapper } from './hero-video-wrapper'

type Locale = 'ro' | 'en'

interface HeroProps {
  locale: Locale
  description: string
  exploreMenu: string
  bookTable: string
}

export function Hero({ locale, description, exploreMenu, bookTable }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/restaurant/vibe-restaurant-terrace.jpg"
          alt="Vibe restaurant terrace and interior"
          fill
          className="object-cover brightness-40"
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/70 to-transparent" />
      </div>

      <HeroVideoWrapper />

      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <div className="space-y-6">
          <div className="mb-8">
            <div className="px-8 py-6 rounded-lg inline-block">
              <Image
                src="/vibe-logo-white-transparent-bg.png"
                alt="Vibe Restaurant | Bar"
                width={320}
                height={208}
                className="h-32 md:h-40 w-auto mx-auto drop-shadow-lg"
                loading="lazy"
                sizes="(max-width: 768px) 200px, 320px"
                quality={70}
              />
            </div>
          </div>
          <p className="text-2xl md:text-3xl text-gray-100 max-w-2xl font-light drop-shadow-xl mx-auto leading-[36px] md:leading-[40px]">
            {description}
          </p>
        </div>

        <div className="gap-4 px-12 mt-4">
          <Button asChild size="lg" className="text-lg px-8 py-4 mb-4 mt-8 mr-0 md:mr-4">
            <Link href={`/${locale}/menu`}>{exploreMenu}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 py-4 mb-4 mt-2 backdrop-blur-sm border-white text-white hover:bg-white hover:text-brand-dark"
          >
            <Link href={`/${locale}/reservations`}>{bookTable}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
