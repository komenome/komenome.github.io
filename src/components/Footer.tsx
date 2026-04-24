'use client'

import { useTheme } from 'next-themes'
import { useLanguage } from '@/context/LanguageContext'
import { Heart } from 'lucide-react'

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const { t } = useLanguage()
  const isDark = resolvedTheme === 'dark'

  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6" style={{ backgroundColor: isDark ? '#000000' : '#FFFFFF', borderTop: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(48, 25, 52, 0.1)'}` }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <p className="text-xs sm:text-sm flex items-center gap-1" style={{ color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(48, 25, 52, 0.5)' }}>
          <span style={{ color: isDark ? '#D4AF37' : '#301934' }}>{t('footer_copy')}</span>
          <Heart className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: isDark ? '#D4AF37' : '#301934' }} />
        </p>
        <p className="text-xs sm:text-sm" style={{ color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(48, 25, 52, 0.5)' }}>{t('footer_rights')}</p>
      </div>
    </footer>
  )
}