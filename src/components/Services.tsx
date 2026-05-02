'use client'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { ArrowUpRight, Zap, Shield, Clock } from 'lucide-react'
import RevealOnScroll from './RevealOnScroll'

const services = [
  { id: 1, titleKey: 'service_1_title', descKey: 'service_1_desc', tagKey: 'service_1_tag', tag2Key: 'service_1_tag2', icon: '⚔️' },
  { id: 2, titleKey: 'service_2_title', descKey: 'service_2_desc', tagKey: 'service_2_tag', tag2Key: 'service_2_tag2', icon: '👑' },
  { id: 3, titleKey: 'service_3_title', descKey: 'service_3_desc', tagKey: 'service_3_tag', tag2Key: 'service_3_tag2', icon: '🎮' },
]

function ServiceCard({ id, delay }: { id: number; delay: number }) {
  const { t, language } = useLanguage()
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const service = services.find((s) => s.id === id)!

  const fontFamily = language === 'mm' ? 'var(--font-noto)' : undefined
  const headingFontFamily = language === 'mm' ? 'var(--font-noto)' : 'var(--font-playfair)'

  return (
    <RevealOnScroll delay={delay} variant="scale-up">
      <motion.div
        className="group relative rounded-2xl p-3 sm:p-4 md:p-8 transition-all duration-300 overflow-hidden"
        style={{
          backgroundColor: isDark ? 'rgba(26, 26, 26, 0.5)' : 'rgba(243, 244, 246, 0.5)',
          border: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(48, 25, 52, 0.1)'}`,
        }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        data-magnetic="true"
      >
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${isDark ? 'rgba(212, 175, 55, 0.08)' : 'rgba(48, 25, 52, 0.08)'} 0%, transparent 50%)`,
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2 sm:mb-4">
            <span className="text-xl sm:text-2xl md:text-4xl">{service.icon}</span>
            <motion.div
              className="w-7 h-7 sm:w-9 md:w-12 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(48, 25, 52, 0.1)' }}
              whileHover={{ rotate: 45 }}
            >
              <ArrowUpRight className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6" style={{ color: isDark ? '#D4AF37' : '#301934' }} />
            </motion.div>
          </div>
          <h3 className="text-sm sm:text-base md:text-2xl font-bold mb-1 sm:mb-2 font-heading" style={{ color: isDark ? '#D4AF37' : '#301934', fontFamily: headingFontFamily }}>
            {t(service.titleKey as any)}
          </h3>
          <p className="text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4 leading-relaxed font-body" style={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(48, 25, 52, 0.6)', fontFamily }}>
            {t(service.descKey as any)}
          </p>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            <span className="px-2 py-1 text-[10px] sm:text-xs md:text-xs font-medium rounded-full flex items-center gap-1" style={{ backgroundColor: isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(48, 25, 52, 0.1)', color: isDark ? '#D4AF37' : '#301934' }}>
              {id === 1 && <Zap className="w-2.5 h-2.5" />}
              {id === 2 && <Shield className="w-2.5 h-2.5" />}
              {id === 3 && <Clock className="w-2.5 h-2.5" />}
              {t(service.tagKey as any)}
            </span>
            <span className="px-2 py-1 text-[10px] sm:text-xs md:text-xs font-medium rounded-full" style={{ backgroundColor: isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(48, 25, 52, 0.1)', color: isDark ? '#D4AF37' : '#301934' }}>
              {t(service.tag2Key as any)}
            </span>
          </div>
        </div>
        <a href="#contact" data-magnetic="true" className="absolute inset-0 z-20" aria-label={`Order ${t(service.titleKey as any)}`}
          onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
        />
      </motion.div>
    </RevealOnScroll>
  )
}

export default function Services() {
  const { t, language } = useLanguage()
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  const headingFontFamily = language === 'mm' ? 'var(--font-noto)' : 'var(--font-playfair)'

  return (
    <section id="services" className="flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-24" style={{ backgroundColor: isDark ? '#000000' : '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto w-full">
        <RevealOnScroll>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-heading" style={{ color: isDark ? '#D4AF37' : '#301934', fontFamily: headingFontFamily }}>{t('services_title')}</h2>
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
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {[1, 2, 3].map((id, index) => <ServiceCard key={id} id={id} delay={index * 0.1} />)}
        </div>
      </div>
    </section>
  )
}