"use client"

import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()
  
  // Initialize with the correct locale from pathname immediately
  const getInitialLocale = () => {
    const locale = pathname.split('/')[1]
    return (locale === 'ro' || locale === 'en') ? locale : 'en'
  }
  
  const [currentLocale, setCurrentLocale] = useState<string>(getInitialLocale)

  useEffect(() => {
    // Extract locale from pathname
    const locale = pathname.split('/')[1]
    if (locale === 'ro' || locale === 'en') {
      setCurrentLocale(locale)
    }
  }, [pathname])

  const switchLanguage = (locale: string) => {
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
