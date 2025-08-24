"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function DiscoverVenue() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-8" style={{ color: '#8B6914' }}>
            {t("discoverVenue.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("discoverVenue.intro")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("discoverVenue.description1")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("discoverVenue.description2")}
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/restaurant/vibe-restaurant-terrace.jpg"
                alt="Vibe restaurant terrace and outdoor seating area"
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