import Image from "next/image"
import { H2 } from "@/components/ui/headings"

interface DiscoverVenueProps {
  title: string
  intro: string
  description1: string
  description2: string
}

export function DiscoverVenue({ title, intro, description1, description2 }: DiscoverVenueProps) {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <H2 size="lg" className="mb-8 text-[#8B6914]">
                {title}
              </H2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {intro}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {description1}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {description2}
            </p>
          </div>

          <div className="relative hidden md:block">
            <div className="relative h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/restaurant/vibe-restaurant-terrace.jpg"
                alt="Vibe restaurant terrace and outdoor seating area"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={60}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
