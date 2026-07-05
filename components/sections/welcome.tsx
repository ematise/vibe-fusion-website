import Image from "next/image"
import { H2 } from "@/components/ui/headings"

interface WelcomeProps {
  title: string
  intro: string
  description: string
}

export function Welcome({ title, intro, description }: WelcomeProps) {
  return (
    <section className="py-8 bg-brand-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          </div>

          <div className="relative">
            <div className="relative h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/restaurant/vibe-restaurant-table.jpg"
                alt="Elegant Vibe restaurant table setting"
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
