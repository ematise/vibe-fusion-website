"use client"

import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()
  
  // Initialize with null to prevent hydration mismatch
  const [currentLocale, setCurrentLocale] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Extract locale from pathname after client-side hydration
    const locale = pathname.split('/')[1]
    if (locale === 'ro' || locale === 'en') {
      setCurrentLocale(locale)
    } else {
      setCurrentLocale('ro') // Default to Romanian
    }
  }, [pathname])

  // Don't render until client-side to prevent hydration mismatch
  if (!isClient || !currentLocale) {
    return (
      <div className="flex items-center gap-1.5 bg-transparent rounded-full p-1 justify-end md:justify-start">
        <div className="px-3 py-1 border border-white/30 text-sm font-medium rounded-full text-white opacity-50">
          EN
        </div>
        <div className="px-3 py-1 border border-white/30 text-sm font-medium rounded-full text-white opacity-50">
          RO
        </div>
      </div>
    )
  }

  const switchLanguage = (locale: string) => {
    // Set cookie immediately
    document.cookie = `preferred-language=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
    
    // Update URL
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/'
    router.push(`/${locale}${pathWithoutLocale}`)
  }

  return (
    <div className="flex items-center gap-1.5 bg-transparent rounded-full p-1 justify-end md:justify-start">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 border border-white/30 text-sm font-medium rounded-full transition-all duration-200 ${
          currentLocale === 'en'
            ? 'bg-white text-brand-primary'
            : 'text-white hover:text-brand-accent'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('ro')}
        className={`px-3 py-1 border border-white/30 text-sm font-medium rounded-full transition-all duration-200 ${
          currentLocale === 'ro'
            ? 'bg-white text-brand-primary'
            : 'text-white hover:text-brand-accent'
        }`}
      >
        RO
      </button>
    </div>
  )
}
