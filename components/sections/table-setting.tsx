"use client"

import { useEffect, useState, useRef } from "react"

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
      
      // Calculate how much of the element is visible and its position
      const elementTop = rect.top
      const elementHeight = rect.height
      
      // Calculate parallax offset based on element position relative to viewport
      const scrollProgress = (windowHeight - elementTop) / (windowHeight + elementHeight)
      
      // Convert to background position percentage (0% to 100%)
      const bgPosition = Math.max(0, Math.min(100, scrollProgress * 40))
      
      setTargetPosition(bgPosition)
    }

    // Smooth animation function
    const animate = () => {
      setBackgroundPosition(prev => {
        const diff = targetPosition - prev
        const easing = diff * 0.05 // Adjust this value for smoother/faster animation (0.01 = very smooth, 0.1 = faster)
        return prev + easing
      })
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    // Start smooth animation
    animationFrameRef.current = requestAnimationFrame(animate)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [targetPosition])

  return (
    <section ref={containerRef} className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
      {/* Background image with parallax */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/restaurant/vibe-restaurant-mirror.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `center ${backgroundPosition}%`,
          willChange: 'background-position'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </section>
  )
} 