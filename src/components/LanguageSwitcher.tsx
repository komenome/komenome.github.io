'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  const getTextColor = (lang: 'en' | 'mm') => {
    const isActive = language === lang
    if (isActive) {
      return isDark ? '#000000' : '#FFFFFF'
    }
    return isDark ? 'rgba(212, 175, 55, 0.7)' : 'rgba(48, 25, 52, 0.7)'
  }

  return (
    <div
      data-magnetic="true"
      className="relative flex items-center rounded-full p-1"
      style={{
        backgroundColor: isDark ? 'rgba(26, 26, 26, 0.8)' : 'rgba(243, 244, 246, 0.8)',
        border: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.2)' : 'rgba(48, 25, 52, 0.2)'}`,
      }}
    >
      <button
        onClick={() => setLanguage('en')}
        className="relative z-10 w-10 text-center px-1 py-1 text-sm font-medium transition-colors duration-200"
        style={{ color: getTextColor('en') }}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('mm')}
        className="relative z-10 w-10 text-center px-1 py-1 text-sm font-medium transition-colors duration-200"
        style={{ color: getTextColor('mm') }}
      >
        MM
      </button>
      <motion.div
        className="absolute top-1 h-[calc(100%-8px)] rounded-full"
        style={{
          backgroundColor: isDark ? '#D4AF37' : '#301934',
          width: 40,
          left: 4,
        }}
        initial={false}
        animate={{
          left: language === 'en' ? 4 : 44,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      />
    </div>
  )
}