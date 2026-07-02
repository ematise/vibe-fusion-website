"use client"

import { useEffect, useRef, useState } from "react"

export function HeroVideo() {
  const [shouldLoad, setShouldLoad] = useState(false)
  const desktopRef = useRef<HTMLVideoElement>(null)
  const mobileRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const scheduleLoad = () => {
      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(() => setShouldLoad(true), { timeout: 4000 })
      } else {
        setTimeout(() => setShouldLoad(true), 2500)
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
    if (!shouldLoad) return

    const playVideo = async (video: HTMLVideoElement | null) => {
      if (!video) return
      try {
        await video.play()
      } catch {
        // Autoplay may be blocked until user interaction
      }
    }

    void playVideo(desktopRef.current)
    void playVideo(mobileRef.current)
  }, [shouldLoad])

  if (!shouldLoad) return null

  return (
    <div className="absolute inset-0 z-[1] opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]">
      <video
        ref={desktopRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="hidden md:block w-full h-full object-cover brightness-40"
        style={{ pointerEvents: 'none' }}
      >
        <source src="/images/cluj/video/desktop_video_nigiri.mp4" type="video/mp4" />
      </video>
      <video
        ref={mobileRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="md:hidden w-full h-full object-cover brightness-40"
        style={{ pointerEvents: 'none' }}
      >
        <source src="/images/cluj/video/mobile_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/70 to-transparent" />
    </div>
  )
}
