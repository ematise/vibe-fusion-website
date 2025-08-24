"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/restaurant/vibe-restaurant-terrace.jpg"
          alt="Vibe restaurant terrace and interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="mb-8">
            <div className="px-8 py-6 rounded-lg inline-block">
              <Image 
                src="/vibe-logo-white-transparent-bg.png" 
                alt="Vibe Restaurant | Bar" 
                width={160}
                height={160}
                className="h-32 md:h-40 w-auto mx-auto"
              />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t("hero.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button asChild size="lg" className="text-lg px-8 py-4">
            <Link href="/menu">{t("hero.exploreMenu")}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4">
            <Link href="/reservations">{t("hero.bookTable")}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 