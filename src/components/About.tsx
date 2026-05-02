'use client'

import { useTheme } from 'next-themes'
import { useLanguage } from '@/context/LanguageContext'
import { MessageCircle, Phone, Facebook } from 'lucide-react'
import { motion } from 'framer-motion'
import RevealOnScroll from './RevealOnScroll'

export default function About() {
  const { resolvedTheme } = useTheme()
  const { t, language } = useLanguage()
  const isDark = resolvedTheme === 'dark'

  const fontFamily = language === 'mm' ? 'var(--font-noto)' : undefined
  const headingFontFamily = language === 'mm' ? 'var(--font-noto)' : 'var(--font-playfair)'

  return (
    <section id="about" className="flex items-center justify-center px-4 sm:px-6 py-2 sm:py-24 sm:min-h-screen" style={{ backgroundColor: isDark ? '#000000' : '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto w-full">
        <RevealOnScroll>
          <div className="text-center mb-6 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-heading" style={{ color: isDark ? '#D4AF37' : '#301934', fontFamily: headingFontFamily }}>{t('about_title')}</h2>
            <motion.div
              className="w-16 sm:w-20 h-1 mx-auto rounded-full"
              style={{ backgroundColor: isDark ? '#D4AF37' : '#301934' }}
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <motion.div
            className="rounded-2xl p-6 sm:p-8 md:p-12"
            style={{ backgroundColor: isDark ? 'rgba(26, 26, 26, 0.5)' : 'rgba(243, 244, 246, 0.5)', border: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(48, 25, 52, 0.1)'}` }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-10 text-center font-body" style={{ color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(48, 25, 52, 0.8)', fontFamily }}>
              {t('about_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              {[
                { href: 'https://t.me/KomeNome', Icon: MessageCircle, label: t('contact_telegram') },
                { href: 'viber://chat?number=959985651375', Icon: Phone, label: t('contact_viber') },
                { href: 'https://www.facebook.com/KomeNome.flac', Icon: Facebook, label: t('contact_facebook') },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  data-magnetic="true"
                  className="flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-medium text-xs sm:text-sm transition-all duration-300"
                  style={{ backgroundColor: isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(48, 25, 52, 0.1)', color: isDark ? '#D4AF37' : '#301934', border: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.3)' : 'rgba(48, 25, 52, 0.3)'}` }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  )
}