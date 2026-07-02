"use client"

import { useEffect, useRef, useState } from "react"

export function HeroVideo() {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 767px)').matches
    setIsMobile(mobile)

    const scheduleLoad = () => {
      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(() => setShouldLoad(true), { timeout: 6000 })
      } else {
        setTimeout(() => setShouldLoad(true), 4000)
      }
    }

    if (document.readyState === 'complete') {
      scheduleLoad()
      return
    }

    window.addEventListener('load', scheduleLoad, { once: true })
    return () => window.removeEventListener('load', scheduleLoad)
  }, [])

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return

    videoRef.current.play().catch(() => {
      // Autoplay may be blocked until user interaction
    })
  }, [shouldLoad, isMobile])

  if (!shouldLoad) return null

  const videoSrc = isMobile
    ? '/images/cluj/video/mobile_video.mp4'
    : '/images/cluj/video/desktop_video_nigiri.mp4'

  return (
    <div className="absolute inset-0 z-[1]">
      <video
        key={videoSrc}
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover brightness-40"
        style={{ pointerEvents: 'none' }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/70 to-transparent" />
    </div>
  )
}
