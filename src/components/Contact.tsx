'use client'

import { useTheme } from 'next-themes'
import { useLanguage } from '@/context/LanguageContext'
import { MessageCircle, Phone, Facebook } from 'lucide-react'
import { motion } from 'framer-motion'
import RevealOnScroll from './RevealOnScroll'

export default function Contact() {
  const { resolvedTheme } = useTheme()
  const { t, language } = useLanguage()
  const isDark = resolvedTheme === 'dark'

  const fontFamily = language === 'mm' ? 'var(--font-noto)' : undefined
  const headingFontFamily = language === 'mm' ? 'var(--font-noto)' : 'var(--font-playfair)'

  const contactMethods = [
    {
      key: 'contact_telegram',
      label: t('contact_telegram'),
      handle: '@KomeNome',
      href: 'https://t.me/KomeNome',
      icon: MessageCircle,
      color: '#0088cc',
    },
    {
      key: 'contact_viber',
      label: t('contact_viber'),
      handle: '+959 985 651 375',
      href: 'viber://chat?number=959985651375',
      icon: Phone,
      color: '#8f00ff',
    },
    {
      key: 'contact_facebook',
      label: t('contact_facebook'),
      handle: 'KomeNome.flac',
      href: 'https://www.facebook.com/KomeNome.flac',
      icon: Facebook,
      color: '#1877f2',
    },
  ]

  return (
    <section id="contact" className="flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-24" style={{ backgroundColor: isDark ? '#000000' : '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto w-full">
        <RevealOnScroll>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-heading" style={{ color: isDark ? '#D4AF37' : '#301934', fontFamily: headingFontFamily }}>{t('contact_title')}</h2>
            <motion.div
              className="w-16 sm:w-20 h-1 mx-auto rounded-full mb-4 sm:mb-6"
              style={{ backgroundColor: isDark ? '#D4AF37' : '#301934' }}
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-base sm:text-lg font-body" style={{ color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(48, 25, 52, 0.7)', fontFamily }}>
              {t('contact_description')}
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {contactMethods.map((method, index) => (
            <RevealOnScroll key={method.key} delay={index * 0.1} variant="scale-up">
              <motion.a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                data-magnetic="true"
                className="group relative flex flex-col items-center justify-center rounded-2xl p-3 sm:p-4 md:p-8 text-center transition-all duration-300"
                style={{
                  backgroundColor: isDark ? 'rgba(26, 26, 26, 0.5)' : 'rgba(243, 244, 246, 0.5)',
                  border: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(48, 25, 52, 0.1)'}`,
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className="w-8 h-8 sm:w-10 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-2 sm:mb-3"
                  style={{ backgroundColor: method.color + '20' }}
                  whileHover={{ scale: 1.1 }}
                >
                  <method.icon className="w-4 h-4 sm:w-5 md:w-7 sm:h-5 md:h-7" style={{ color: method.color }} />
                </motion.div>
                <h3 className="text-xs sm:text-sm md:text-xl font-bold mb-0.5 sm:mb-1 font-heading" style={{ color: isDark ? '#D4AF37' : '#301934', fontFamily: headingFontFamily }}>
                  {method.label}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm font-body" style={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(48, 25, 52, 0.6)', fontFamily }}>
                  {method.handle}
                </p>
              </motion.a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}