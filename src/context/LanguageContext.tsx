'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { Language, TranslationKey } from '@/lib/translations'
import { translations } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('mm')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true)
      try {
        const stored = localStorage.getItem('language') as Language | null
        if (stored === 'en' || stored === 'mm') {
          setLanguageState(stored)
        }
      } catch {
        // Storage may be disabled by the browser; Myanmar remains the default.
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('language', lang)
    } catch {}
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key
  }

  const value: LanguageContextType = {
    language: mounted ? language : 'mm',
    setLanguage,
    t,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
