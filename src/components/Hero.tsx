'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from 'next-themes'
import { ChevronDown } from 'lucide-react'
import Lottie from 'lottie-react'
import faviconAnimation from '../../public/favicon.json'

export default function Hero() {
  const { t, language } = useLanguage()
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const [mounted, setMounted] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [typingDone, setTypingDone] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const fullText = t('hero_tagline')
    let index = 0
    setDisplayedText('')
    setTypingDone(false)

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        setTypingDone(true)
        clearInterval(timer)
      }
    }, 40)

    return () => clearInterval(timer)
  }, [t])

  const handleScrollDown = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  }

  const fontFamily = language === 'mm' ? 'var(--font-noto)' : undefined
  const headingFontFamily = language === 'mm' ? 'var(--font-noto)' : 'var(--font-playfair)'

  return (
    <section id="home" className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 pt-8 pb-0 sm:py-10 overflow-hidden" style={{ backgroundColor: isDark ? '#000000' : '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
        <motion.div className="flex flex-col gap-3 sm:gap-5 z-10" variants={containerVariants} initial="hidden" animate="visible">
          <motion.p variants={itemVariants} className="text-xs sm:text-sm font-medium tracking-widest uppercase" style={{ color: isDark ? 'rgba(212, 175, 55, 0.7)' : 'rgba(48, 25, 52, 0.7)', fontFamily }}>
            {t('hero_greeting')}
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-none ${isDark ? 'text-gradient-gold' : 'text-gradient-purple'}`}
            style={{ fontFamily: headingFontFamily }}
          >
            {t('hero_name')}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl max-w-md leading-relaxed font-body" style={{ color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(48, 25, 52, 0.8)', fontFamily }}>
            {displayedText}
            {!typingDone && <span className="typewriter-cursor" style={{ color: isDark ? '#D4AF37' : '#301934' }} />}
          </motion.p>
          <motion.div variants={itemVariants} className="flex gap-4 pt-1 sm:pt-3">
            <motion.a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
              data-magnetic="true"
              className="px-5 sm:px-7 py-3 sm:py-4 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 inline-flex items-center gap-2 overflow-hidden relative"
              style={{ backgroundColor: isDark ? '#D4AF37' : '#301934', color: isDark ? '#000000' : '#FFFFFF' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {t('hero_cta')}
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {mounted && (
            <div className="w-36 sm:w-48 md:w-80 lg:w-96 aspect-square">
              <Lottie animationData={faviconAnimation} loop autoplay style={{ width: '100%', height: '100%' }} />
            </div>
          )}
        </motion.div>
      </div>
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full transition-all duration-300"
        style={{ border: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.3)' : 'rgba(48, 25, 52, 0.3)'}`, color: isDark ? '#D4AF37' : '#301934' }}
        data-magnetic="true"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.button>
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 50%, ${isDark ? 'rgba(212, 175, 55, 0.05)' : 'rgba(48, 25, 52, 0.05)'} 0%, transparent 50%)` }} />
    </section>
  )
}