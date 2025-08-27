"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"
import { useState, useEffect, useRef } from "react"

export function Hero() {
  const { t } = useTranslation()
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [debugInfo, setDebugInfo] = useState('')
  const [useYouTube, setUseYouTube] = useState(false)  // Start with local video for debugging
  const videoRef = useRef<HTMLVideoElement>(null)
  
  // Replace these with your actual YouTube video IDs after upload
  const youtubeVideoIds = {
    desktop: "YOUR_DESKTOP_VIDEO_ID", // Replace with actual YouTube video ID
    mobile: "YOUR_MOBILE_VIDEO_ID"   // Replace with actual YouTube video ID
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Intersection observer for mobile autoplay
  useEffect(() => {
    if (isMobile && videoRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && videoRef.current) {
              videoRef.current.play().catch(console.error)
            }
          })
        },
        { threshold: 0.5 }
      )
      
      observer.observe(videoRef.current)
      
      return () => observer.disconnect()
    }
  }, [isMobile])

  useEffect(() => {
    const videoSrc = isMobile ? "/images/cluj/video/mobile_video.mp4" : "/images/cluj/video/desktop_video_nigiri.mp4"
    setDebugInfo(`Loading video: ${videoSrc} | Mobile: ${isMobile}`)
  }, [isMobile])

  const handleVideoLoad = () => {
    console.log('Video loaded successfully')
    setVideoLoaded(true)
    setDebugInfo(prev => prev + ' | Video Loaded ✓')
  }

  const handleVideoError = (e: any) => {
    console.error('Video failed to load:', e)
    console.log('Video error details:', e.target?.error)
    setVideoError(true)
    setDebugInfo(prev => prev + ' | Video Error ✗')
  }

  const handleVideoCanPlay = () => {
    console.log('Video can start playing')
    setDebugInfo(prev => prev + ' | Can Play ✓')
    
    // Force play for mobile devices
    if (videoRef.current) {
      const playPromise = videoRef.current.play()
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Autoplay started successfully')
            setDebugInfo(prev => prev + ' | Autoplay Success ✓')
          })
          .catch(error => {
            console.error('Autoplay failed:', error)
            setDebugInfo(prev => prev + ' | Autoplay Failed ✗')
            
            // For mobile, try to play on first user interaction
            if (isMobile) {
              const playOnTouch = () => {
                if (videoRef.current) {
                  videoRef.current.play().catch(console.error)
                }
                document.removeEventListener('touchstart', playOnTouch)
                document.removeEventListener('click', playOnTouch)
              }
              
              document.addEventListener('touchstart', playOnTouch, { once: true })
              document.addEventListener('click', playOnTouch, { once: true })
            }
          })
      }
    }
  }

  const handleVideoLoadStart = () => {
    console.log('Video load started')
    setDebugInfo(prev => prev + ' | Load Started')
  }

  const handleVideoLoadedMetadata = () => {
    console.log('Video metadata loaded')
    setDebugInfo(prev => prev + ' | Metadata ✓')
  }

  const handleVideoPlaying = () => {
    console.log('Video is playing')
    setDebugInfo(prev => prev + ' | Playing ✓')
  }

  const handleVideoWaiting = () => {
    console.log('Video is waiting/buffering')
    setDebugInfo(prev => prev + ' | Buffering...')
  }

  const handleVideoStalled = () => {
    console.log('Video stalled')
    setDebugInfo(prev => prev + ' | Stalled ✗')
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Always present as fallback */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/restaurant/vibe-restaurant-terrace.jpg"
          alt="Vibe restaurant terrace and interior"
          fill
          className="object-cover brightness-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/70 to-transparent" />
      </div>

      {/* Background Video */}
      <div className={`absolute inset-0 z-[1] transition-opacity duration-1000 opacity-100'`}>
        {useYouTube && youtubeVideoIds.desktop !== "YOUR_DESKTOP_VIDEO_ID" ? (
          // YouTube Embed
          <div className="w-full h-full relative">
            <iframe
              src={`https://www.youtube.com/embed/${isMobile ? youtubeVideoIds.mobile : youtubeVideoIds.desktop}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&playlist=${isMobile ? youtubeVideoIds.mobile : youtubeVideoIds.desktop}`}
              className="w-full h-full object-cover brightness-40"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100vw',
                height: '56.25vw', // 16:9 aspect ratio
                minHeight: '100vh',
                minWidth: '177.77vh', // 16:9 aspect ratio
                transform: 'translate(-50%, -50%)',
              }}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              onLoad={() => {
                setVideoLoaded(true)
                setDebugInfo(prev => prev + ' | YouTube Loaded ✓')
              }}
              onError={() => {
                setVideoError(true)
                setUseYouTube(false) // Fallback to local video
                setDebugInfo(prev => prev + ' | YouTube Error, switching to local ✗')
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/70 to-transparent" />
          </div>
        ) : (
          // Local Video Fallback
          <>
            <video
              key={isMobile ? 'mobile' : 'desktop'}
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              disablePictureInPicture
              disableRemotePlayback
              webkit-playsinline="true"
              x5-playsinline="true"
              x5-video-player-type="h5"
              className="w-full h-full object-cover brightness-40"
              style={{ 
                pointerEvents: 'none',
                objectFit: 'cover'
              }}
              onLoadedData={handleVideoLoad}
              onLoadedMetadata={handleVideoLoadedMetadata}
              onCanPlay={handleVideoCanPlay}
              onPlaying={handleVideoPlaying}
              onWaiting={handleVideoWaiting}
              onStalled={handleVideoStalled}
              onLoadStart={handleVideoLoadStart}
              onError={handleVideoError}
              preload="metadata"
            >
              <source 
                src={isMobile ? "/images/cluj/video/mobile_video.mp4" : "/images/cluj/video/desktop_video_nigiri.mp4"} 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/70 to-transparent" />
          </>
        )}
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
                className="h-32 md:h-40 w-auto mx-auto drop-shadow-lg"
              />
            </div>
          </div>
          <h3 className="font-serif text-3xl text-gray-100 max-w-2xl font-light drop-shadow-xl mx-auto leading-[40px]">
            {t("hero.description")}
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="gap-4 px-12 mt-4"
        >
          <Button asChild size="lg" className="text-lg px-8 py-4 mb-4 mt-8 mr-0 md:mr-4">
            <Link href="/menu">{t("hero.exploreMenu")}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 mb-4 mt-2 backdrop-blur-sm">
            <Link href="/reservations">{t("hero.bookTable")}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 