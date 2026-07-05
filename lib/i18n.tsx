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

const translationCache: Partial<Record<Locale, Record<string, unknown>>> = {}

async function loadTranslations(locale: Locale): Promise<Record<string, unknown>> {
  if (translationCache[locale]) {
    return translationCache[locale]!
  }

  const data =
    locale === 'ro'
      ? (await import('../locales/ro.json')).default
      : (await import('../locales/en.json')).default

  translationCache[locale] = data
  return data
}

function getNestedValue(data: Record<string, unknown>, key: string): string {
  const keys = key.split('.')
  let value: unknown = data

  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k]
  }

  return typeof value === 'string' ? value : key
}

export function LanguageProvider({ children, initialLocale = 'ro' }: {
  children: ReactNode
  initialLocale?: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const [translations, setTranslations] = useState<Record<string, unknown>>({})
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
    setLocaleState(initialLocale)
    loadTranslations(initialLocale).then(setTranslations)
  }, [initialLocale])

  const t = (key: string): string => getNestedValue(translations, key)

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)

    if (isClient && typeof document !== 'undefined') {
      document.cookie = `preferred-language=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`
    }

    loadTranslations(newLocale).then(setTranslations)

    const pathWithoutLocale = pathname.replace(/^\/(ro|en)/, '')
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  useEffect(() => {
    setLocaleState(initialLocale)
    loadTranslations(initialLocale).then(setTranslations)
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
