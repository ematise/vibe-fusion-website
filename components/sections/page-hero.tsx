"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

// List of available hero images
const heroImages = [
  "/images/hero/1.jpg",
  "/images/hero/2.jpg", 
  "/images/hero/3.jpg",
  "/images/hero/4.jpg",
  "/images/hero/5.jpg",
  "/images/hero/6.jpg",
  "/images/hero/7.jpg",
]

interface PageHeroProps {
  title: string
  subtitle?: string
  className?: string
}

export function PageHero({ title, subtitle, className = "" }: PageHeroProps) {
  const [randomImage, setRandomImage] = useState<string>("")

  useEffect(() => {
    // Select a random image on component mount
    const randomIndex = Math.floor(Math.random() * heroImages.length)
    setRandomImage(heroImages[randomIndex])
  }, [])

  return (
    <section className={`relative h-[30vh] min-h-[300px] flex items-center justify-center mb-6 overflow-hidden ${className}`}>
      {/* Background Image */}
      {randomImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={randomImage}
            alt="Vibe Fusion hero background"
            fill
            className="object-cover brightness-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/70 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white drop-shadow-xl"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-100 max-w-2xl font-light drop-shadow-lg mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
