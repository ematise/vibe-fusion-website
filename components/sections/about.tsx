"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageHeading } from "@/components/ui/page-heading"
import { H3 } from "@/components/ui/headings"
import { useTranslation } from "@/lib/i18n"
import { Coffee, Utensils, Users, Heart, Star, Award } from "lucide-react"
import { InstagramGallery } from "./instagram-gallery"
import { PageHero } from "./page-hero"

export function About() {
  const { t } = useTranslation()
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <PageHero 
        title={t("aboutPage.title")}
        subtitle={t("aboutPage.subtitle")}
      />

      {/* Brand Story Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <PageHeading level="h2">
                {t("aboutPage.storyTitle")}
              </PageHeading>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("aboutPage.storyDescription1")}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t("aboutPage.storyDescription2")}
              </p>
              <p className="text-gray-600 leading-relaxed mt-6 hidden md:block">
                {t("aboutPage.storyDescription3")}
              </p>

            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/about-us.jpg"
                  alt="Vibe Fusion restaurant about us"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-primary rounded-lg opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-secondary rounded-lg opacity-20"></div>
            </motion.div>
            <p className="text-gray-600 leading-relaxed mt-6 block md:hidden">
                {t("aboutPage.storyDescription3")}
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Section */}
      <InstagramGallery />


      {/* Products Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <PageHeading level="h2" className="mb-4 text-center">
              {t("aboutPage.productsTitle")}
            </PageHeading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("aboutPage.productsSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/cluj/subcategories/coffee-751e43b8.jpeg"
                  alt="Specialty Coffee"
                  fill
                  className="object-cover"
                />
              </div>
              <H3 size="sm" className="mb-2 text-center">
                {t("aboutPage.coffeeTitle")}
              </H3>
              <p className="text-gray-600 text-sm">
                {t("aboutPage.coffeeDescription")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/cluj/subcategories/savory-5694b537.jpeg"
                  alt="Brunch Classics"
                  fill
                  className="object-cover"
                />
              </div>
              <H3 size="sm" className="mb-2 text-center">
                {t("aboutPage.brunchTitle")}
              </H3>
              <p className="text-gray-600 text-sm">
                {t("aboutPage.brunchDescription")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/cluj/subcategories/sashimi-102708af.jpeg"
                  alt="Sushi & Asian Fusion"
                  fill
                  className="object-cover"
                />
              </div>
              <H3 size="sm" className="mb-2 text-center">
                {t("aboutPage.sushiTitle")}
              </H3>
              <p className="text-gray-600 text-sm">
                {t("aboutPage.sushiDescription")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/cluj/subcategories/cocktails-40d93add.jpeg"
                  alt="Cocktails & Drinks"
                  fill
                  className="object-cover"
                />
              </div>
              <H3 size="sm" className="mb-2 text-center">
                {t("aboutPage.cocktailsTitle")}
              </H3>
              <p className="text-gray-600 text-sm">
                {t("aboutPage.cocktailsDescription")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  )
}
