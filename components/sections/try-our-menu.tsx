import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { H2 } from "@/components/ui/headings"

interface TryOurMenuProps {
  locale: string
  title: string
  intro: string
  description: string
  viewMenu: string
}

export function TryOurMenu({ locale, title, intro, description, viewMenu }: TryOurMenuProps) {
  return (
    <section className="py-14 bg-brand-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative hidden md:block">
            <div className="relative h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/restaurant/vibe-restaurant-food.jpeg"
                alt="Delicious coffee and menu items at Vibe"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={60}
              />
            </div>
          </div>

          <div className="space-y-6">
            <H2 size="lg" className="mb-6 text-[#8B6914]">
              {title}
            </H2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {intro}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
            <div className="pt-4 text-center md:text-left">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link href={`/${locale}/menu`}>{viewMenu}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
