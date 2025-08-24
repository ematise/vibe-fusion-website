"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'

// Language types
export type Locale = 'ro' | 'en'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation data
const translations: Record<Locale, any> = {
  ro: require('../locales/ro.json'),
  en: require('../locales/en.json'),
}

// Language provider component
export function LanguageProvider({ children, initialLocale = 'ro' }: { 
  children: ReactNode
  initialLocale?: Locale 
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const router = useRouter()
  const pathname = usePathname()

  // Get translation function
  const t = (key: string): string => {
    const keys = key.split('.')
    let value = translations[locale]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  // Set locale with URL update
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    
    // Save to cookie for middleware
    document.cookie = `preferred-language=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`
    
    // Update URL to include new locale
    const currentPath = pathname
    const pathWithoutLocale = currentPath.replace(/^\/(ro|en)/, '')
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  // Update locale state when initial locale changes
  useEffect(() => {
    setLocaleState(initialLocale)
  }, [initialLocale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook to use language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Custom hook for translations
export function useTranslation() {
  const { t } = useLanguage()
  return { t }
}

// Language information
export const languages = {
  ro: { name: 'Română', flag: '🇷🇴' },
  en: { name: 'English', flag: '🇬🇧' },
} 