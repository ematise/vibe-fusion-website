export type Locale = 'ro' | 'en'

import roLocale from '@/locales/ro.json'
import enLocale from '@/locales/en.json'

const translations: Record<Locale, typeof roLocale> = {
  ro: roLocale,
  en: enLocale,
}

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.')
  let value: unknown = translations[locale]

  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k]
  }

  return typeof value === 'string' ? value : key
}

export function getTranslations(locale: Locale) {
  return (key: string) => getTranslation(locale, key)
}
