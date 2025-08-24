"use client"

import { useState } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { useLanguage, languages, Locale } from '@/lib/i18n'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages[locale]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-brand-accent transition-colors font-medium px-3 py-2 rounded"
        aria-label="Change language"
      >
        <span className="hidden md:inline">{currentLanguage.name}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-auto bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            {(Object.keys(languages) as Locale[]).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLocale(lang)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-brand-accent transition-colors flex items-center space-x-3 ${
                  locale === lang ? 'bg-brand-accent/20 text-brand-primary font-medium' : 'text-gray-700'
                }`}
              >
                <span>{languages[lang].name}</span>
                {locale === lang && (
                  <span className="ml-auto text-brand-primary">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
} 