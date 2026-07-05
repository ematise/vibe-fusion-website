"use client"

import { useEffect, useRef, useState } from "react"

function shouldSkipVideo(): boolean {
  if (typeof window === "undefined") return true

  if (window.matchMedia("(max-width: 767px)").matches) return true
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true

  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string }
  }).connection

  if (connection?.saveData) return true
  if (connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g") {
    return true
  }

  return false
}

export function HeroVideo() {
  const [shouldLoad, setShouldLoad] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (shouldSkipVideo()) return

    const scheduleLoad = () => {
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(() => setShouldLoad(true), { timeout: 8000 })
      } else {
        setTimeout(() => setShouldLoad(true), 6000)
      }
    }

    if (document.readyState === "complete") {
      scheduleLoad()
      return
    }

    window.addEventListener("load", scheduleLoad, { once: true })
    return () => window.removeEventListener("load", scheduleLoad)
  }, [])

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return

    videoRef.current.play().catch(() => {
      // Autoplay may be blocked until user interaction
    })
  }, [shouldLoad])

  if (!shouldLoad) return null

  return (
    <div className="absolute inset-0 z-[1]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover brightness-40"
        style={{ pointerEvents: "none" }}
      >
        <source src="/images/cluj/video/desktop_video_nigiri.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/70 to-transparent" />
    </div>
  )
}
