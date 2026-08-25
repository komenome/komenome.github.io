'use client'

import { Check, Headphones, ScanLine, Send } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import RevealOnScroll from './RevealOnScroll'

export default function About() {
  const { t, language } = useLanguage()
  const isMyanmar = language === 'mm'
  const textClass = isMyanmar ? 'myanmar-text' : ''
  const headingClass = isMyanmar ? 'myanmar-heading' : ''
  const points = [
    { icon: ScanLine, text: t('about_point_1') },
    { icon: Check, text: t('about_point_2') },
    { icon: Headphones, text: t('about_point_3') },
  ]

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="site-container">
        <RevealOnScroll>
          <div className="glass-panel grid overflow-hidden rounded-[2rem] lg:grid-cols-[.82fr_1.18fr]">
            <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden p-7 sm:p-10" style={{ background: 'linear-gradient(145deg, var(--accent-strong), #30287e)' }}>
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/15" />
              <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full border border-white/15" />
              <span className={`text-xs font-bold uppercase tracking-[.14em] text-white/70 ${textClass}`}>{t('about_label')}</span>
              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Send className="h-6 w-6" />
                </div>
                <p className="max-w-sm text-2xl font-semibold leading-relaxed text-white sm:text-3xl">Play more.<br />Wait less.</p>
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:p-14">
              <p className={`eyebrow ${textClass}`}>{t('nav_about')}</p>
              <h2 className={`section-title mt-4 ${headingClass}`}>{t('about_title')}</h2>
              <p className={`section-copy mt-5 ${textClass}`}>{t('about_description')}</p>
              <div className="mt-8 space-y-4">
                {points.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-4 rounded-2xl border p-4" style={{ borderColor: 'var(--line)', background: 'var(--accent-soft)' }}>
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ background: 'var(--surface-solid)', color: 'var(--accent-strong)' }}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className={`text-sm font-medium leading-7 ${textClass}`} style={{ color: 'var(--text)' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
