'use client'

import { ArrowUpRight, Crown, Gamepad2, ShieldCheck, Sparkles, Swords, Zap } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import type { TranslationKey } from '@/lib/translations'
import RevealOnScroll from './RevealOnScroll'

const services: Array<{
  titleKey: TranslationKey
  descKey: TranslationKey
  tagKey: TranslationKey
  tag2Key: TranslationKey
  icon: typeof Gamepad2
  color: string
  glow: string
}> = [
  { titleKey: 'service_1_title', descKey: 'service_1_desc', tagKey: 'service_1_tag', tag2Key: 'service_1_tag2', icon: Swords, color: '#7c6df2', glow: 'rgba(124,109,242,.14)' },
  { titleKey: 'service_2_title', descKey: 'service_2_desc', tagKey: 'service_2_tag', tag2Key: 'service_2_tag2', icon: Crown, color: '#e4a545', glow: 'rgba(228,165,69,.14)' },
  { titleKey: 'service_3_title', descKey: 'service_3_desc', tagKey: 'service_3_tag', tag2Key: 'service_3_tag2', icon: Gamepad2, color: '#3db98b', glow: 'rgba(61,185,139,.14)' },
]

export default function Services() {
  const { t, language } = useLanguage()
  const isMyanmar = language === 'mm'
  const textClass = isMyanmar ? 'myanmar-text' : ''
  const headingClass = isMyanmar ? 'myanmar-heading' : ''

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="site-container">
        <RevealOnScroll>
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className={`eyebrow ${textClass}`}>{t('nav_services')}</p>
            <h2 className={`section-title mt-4 ${headingClass}`}>{t('services_title')}</h2>
            <p className={`section-copy mt-4 ${textClass}`}>{t('services_description')}</p>
          </div>
        </RevealOnScroll>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <RevealOnScroll key={service.titleKey} delay={index * 0.08} variant="scale-up">
                <a href="#contact" className="group glass-panel flex h-full min-h-[350px] flex-col rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-2 sm:p-7" data-magnetic="true">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ color: service.color, background: service.glow }}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border transition-transform duration-300 group-hover:rotate-45" style={{ color: 'var(--text)', borderColor: 'var(--line)' }}>
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-10 text-2xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>{t(service.titleKey)}</h3>
                  <p className={`mt-3 flex-1 text-sm leading-7 ${textClass}`} style={{ color: 'var(--muted)' }}>{t(service.descKey)}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold ${textClass}`} style={{ color: service.color, background: service.glow }}>
                      {index === 0 ? <Zap className="h-3 w-3" /> : index === 1 ? <ShieldCheck className="h-3 w-3" /> : <Sparkles className="h-3 w-3" />}
                      {t(service.tagKey)}
                    </span>
                    <span className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${textClass}`} style={{ color: 'var(--muted)', background: 'var(--surface-muted)' }}>{t(service.tag2Key)}</span>
                  </div>
                </a>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
