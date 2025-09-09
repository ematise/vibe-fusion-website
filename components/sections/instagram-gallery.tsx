"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { PageHeading } from "@/components/ui/page-heading"
import { useTranslation } from "@/lib/i18n"
import { Instagram, ExternalLink } from "lucide-react"

const instagramImages = [
  { id: 1, src: "/images/cluj/insta_latest/1.webp", alt: "Vibe Fusion Instagram post 1" },
  { id: 2, src: "/images/cluj/insta_latest/2.webp", alt: "Vibe Fusion Instagram post 2" },
  { id: 3, src: "/images/cluj/insta_latest/3.webp", alt: "Vibe Fusion Instagram post 3" },
  { id: 4, src: "/images/cluj/insta_latest/4.jpg", alt: "Vibe Fusion Instagram post 4" },
  { id: 5, src: "/images/cluj/insta_latest/5.jpg", alt: "Vibe Fusion Instagram post 5" },
  { id: 6, src: "/images/cluj/insta_latest/6.jpg", alt: "Vibe Fusion Instagram post 6" },
  { id: 7, src: "/images/cluj/insta_latest/7.jpg", alt: "Vibe Fusion Instagram post 7" },
  { id: 8, src: "/images/cluj/insta_latest/8.jpg", alt: "Vibe Fusion Instagram post 8" },
  { id: 9, src: "/images/cluj/insta_latest/9.jpg", alt: "Vibe Fusion Instagram post 9" },
  { id: 10, src: "/images/cluj/insta_latest/10.jpg", alt: "Vibe Fusion Instagram post 10" },
  { id: 11, src: "/images/cluj/insta_latest/11.jpg", alt: "Vibe Fusion Instagram post 11" },
  { id: 12, src: "/images/cluj/insta_latest/12.jpg", alt: "Vibe Fusion Instagram post 12" },
  { id: 13, src: "/images/cluj/insta_latest/13.jpg", alt: "Vibe Fusion Instagram post 13" },
  { id: 14, src: "/images/cluj/insta_latest/14.jpg", alt: "Vibe Fusion Instagram post 14" },
  { id: 15, src: "/images/cluj/insta_latest/15.jpg", alt: "Vibe Fusion Instagram post 15" },
  { id: 16, src: "/images/cluj/insta_latest/16.jpg", alt: "Vibe Fusion Instagram post 16" },
  { id: 17, src: "/images/cluj/insta_latest/17.jpg", alt: "Vibe Fusion Instagram post 17" },
]

interface ImageItemProps {
  image: typeof instagramImages[0]
  index: number
}

function ImageItem({ image, index }: ImageItemProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      )}
      
      {/* Image */}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={`object-cover transition-all duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${isHovered ? 'scale-110' : 'scale-100'}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />
      
      {/* Hover overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute bottom-4 left-4 right-4">
        </div>
      </div>
    </motion.div>
  )
}

export function InstagramGallery() {
  const { t } = useTranslation()

  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}


        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {instagramImages.map((image, index) => (
            <ImageItem key={image.id} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
