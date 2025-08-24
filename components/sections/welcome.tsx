"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function Welcome() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-brand-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6" style={{ color: '#8B6914' }}>
              {t("welcome.title")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("welcome.intro")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("welcome.description")}
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/restaurant/vibe-restaurant-table.jpg"
                alt="Elegant Vibe restaurant table setting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 