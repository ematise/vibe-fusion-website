"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export function TableSetting() {
  const [backgroundPosition, setBackgroundPosition] = useState(50)
  const [targetPosition, setTargetPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height
      const scrollProgress = (windowHeight - elementTop) / (windowHeight + elementHeight)
      const bgPosition = Math.max(0, Math.min(100, scrollProgress * 40))

      setTargetPosition(bgPosition)
    }

    const animate = () => {
      setBackgroundPosition((prev) => {
        const diff = targetPosition - prev
        const easing = diff * 0.05
        return prev + easing
      })
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [targetPosition])

  return (
    <section ref={containerRef} className="relative h-32 md:h-80 lg:h-96 overflow-hidden">
      <Image
        src="/images/hero/2.jpg"
        alt=""
        fill
        className="object-cover"
        loading="lazy"
        sizes="100vw"
        quality={70}
        style={{ objectPosition: `center ${backgroundPosition}%` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </section>
  )
}
