"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export type Locale = 'ro' | 'en'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Locale, Record<string, unknown>> = {
  ro: require('../locales/ro.json'),
  en: require('../locales/en.json'),
}

function getNestedValue(data: Record<string, unknown>, key: string): string {
  const keys = key.split('.')
  let value: unknown = data

  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k]
  }

  return typeof value === 'string' ? value : key
}

export function LanguageProvider({
  children,
  initialLocale = 'ro',
}: {
  children: ReactNode
  initialLocale?: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const t = (key: string): string => getNestedValue(translations[locale], key)

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)

    if (isClient && typeof document !== 'undefined') {
      document.cookie = `preferred-language=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`
    }

    const pathWithoutLocale = pathname.replace(/^\/(ro|en)/, '')
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  useEffect(() => {
    setLocaleState(initialLocale)
  }, [initialLocale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function useTranslation() {
  const { t } = useLanguage()
  return { t }
}

export const languages = {
  ro: { name: 'Română', flag: '🇷🇴' },
  en: { name: 'English', flag: '🇬🇧' },
}
