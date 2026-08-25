'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'
import Lottie from 'lottie-react'
import faviconAnimation from '../../public/favicon.json'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t, language } = useLanguage()
  const isMyanmar = language === 'mm'
  const textClass = isMyanmar ? 'myanmar-text' : ''
  const stats = [
    { value: '3+', label: t('hero_stat_years') },
    { value: '3', label: t('hero_stat_games') },
    { value: '1:1', label: t('hero_stat_support') },
  ]

  return (
    <section id="home" className="min-h-screen overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative z-10"
        >
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold ${textClass}`} style={{ borderColor: 'var(--line)', background: 'var(--surface)', color: 'var(--accent-strong)' }}>
            <Sparkles className="h-3.5 w-3.5" />
            {t('hero_badge')}
          </div>

          <p className={`mb-3 text-sm font-semibold ${textClass}`} style={{ color: 'var(--muted)' }}>{t('hero_greeting')}</p>
          <h1 className="font-heading text-[clamp(3.5rem,10vw,7.7rem)] font-bold leading-[.88] tracking-[-.07em]" style={{ color: 'var(--text)' }}>
            Kome<span style={{ color: 'var(--accent)' }}>Nome</span>
          </h1>
          <p className={`mt-7 max-w-2xl text-lg font-medium leading-8 sm:text-xl sm:leading-9 ${textClass}`} style={{ color: 'var(--muted)' }}>
            {t('hero_tagline')}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#services" className={`primary-button ${textClass}`} data-magnetic="true">
              {t('hero_cta')} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://t.me/KomeNome" target="_blank" rel="noopener noreferrer" className={`secondary-button ${textClass}`} data-magnetic="true">
              <MessageCircle className="h-4 w-4" /> {t('hero_contact')}
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 border-y py-5" style={{ borderColor: 'var(--line)' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="border-r px-3 first:pl-0 last:border-0 sm:px-6" style={{ borderColor: 'var(--line)' }}>
                <div className="text-xl font-bold sm:text-2xl" style={{ color: 'var(--text)' }}>{stat.value}</div>
                <div className={`mt-1 text-[10px] leading-5 sm:text-xs ${textClass}`} style={{ color: 'var(--muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[480px]"
        >
          <div className="absolute -inset-8 rounded-full opacity-50 blur-3xl" style={{ background: 'radial-gradient(circle, var(--accent-soft), transparent 68%)' }} />
          <div className="glass-panel hero-art relative aspect-square overflow-hidden rounded-[2.5rem] p-8 sm:p-12">
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full px-3 py-2 text-[11px] font-semibold" style={{ background: 'var(--surface-solid)', color: 'var(--muted)' }}>
              <span className="status-dot h-2 w-2 rounded-full bg-emerald-400" />
              <span className={textClass}>{t('hero_status')}</span>
            </div>
            <Lottie animationData={faviconAnimation} loop autoplay className="h-full w-full" />
            <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-2xl border px-4 py-3 text-xs font-semibold" style={{ borderColor: 'var(--line)', background: 'var(--surface-solid)', color: 'var(--text)' }}>
              <ShieldCheck className="h-4 w-4" style={{ color: 'var(--accent)' }} /> Secure Top-Up
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
