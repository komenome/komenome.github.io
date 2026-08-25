'use client'

import { ArrowUpRight, Clock3 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import type { TranslationKey } from '@/lib/translations'
import RevealOnScroll from './RevealOnScroll'
import SocialIcon from './SocialIcon'

const contacts: Array<{
  platform: 'telegram' | 'viber' | 'facebook'
  labelKey: TranslationKey
  handle: string
  href: string
  color: string
}> = [
  { platform: 'telegram', labelKey: 'contact_telegram', handle: '@KomeNome', href: 'https://t.me/KomeNome', color: '#229ED9' },
  { platform: 'viber', labelKey: 'contact_viber', handle: '+959 985 651 375', href: 'viber://chat?number=959985651375', color: '#7360F2' },
  { platform: 'facebook', labelKey: 'contact_facebook', handle: 'KomeNome.flac', href: 'https://www.facebook.com/KomeNome.flac', color: '#1877F2' },
]

export default function Contact() {
  const { t, language } = useLanguage()
  const isMyanmar = language === 'mm'
  const textClass = isMyanmar ? 'myanmar-text' : ''
  const headingClass = isMyanmar ? 'myanmar-heading' : ''

  return (
    <section id="contact" className="pb-24 pt-20 sm:pb-32 sm:pt-28">
      <div className="site-container">
        <RevealOnScroll>
          <div className="mb-10 text-center sm:mb-14">
            <p className={`eyebrow ${textClass}`}>{t('nav_contact')}</p>
            <h2 className={`section-title mt-4 ${headingClass}`}>{t('contact_title')}</h2>
            <p className={`section-copy mx-auto mt-4 max-w-xl ${textClass}`}>{t('contact_description')}</p>
            <div className={`mt-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium ${textClass}`} style={{ color: 'var(--muted)', borderColor: 'var(--line)', background: 'var(--surface)' }}>
              <Clock3 className="h-3.5 w-3.5" style={{ color: 'var(--warm)' }} /> {t('contact_badge')}
            </div>
          </div>
        </RevealOnScroll>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {contacts.map((contact, index) => (
            <RevealOnScroll key={contact.platform} delay={index * 0.08} variant="scale-up">
              <a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group glass-panel flex min-h-[245px] flex-col rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-2"
                data-magnetic="true"
                aria-label={`${t(contact.labelKey)} — ${contact.handle}`}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ background: contact.color, boxShadow: `0 12px 30px ${contact.color}38` }}>
                    <SocialIcon platform={contact.platform} className="h-7 w-7" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: 'var(--muted)' }} />
                </div>
                <div className="mt-auto pt-10">
                  <h3 className={`text-lg font-bold ${textClass}`} style={{ color: 'var(--text)' }}>{t(contact.labelKey)}</h3>
                  <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>{contact.handle}</p>
                  <p className={`mt-4 text-xs font-semibold ${textClass}`} style={{ color: contact.color }}>{t('contact_action')} →</p>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
