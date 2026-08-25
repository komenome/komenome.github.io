'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t, language } = useLanguage()
  const textClass = language === 'mm' ? 'myanmar-text' : ''

  return (
    <footer className="border-t py-7" style={{ borderColor: 'var(--line)' }}>
      <div className="site-container flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>Kome<span style={{ color: 'var(--accent)' }}>Nome</span><span style={{ color: 'var(--warm)' }}>.</span></p>
          <p className={`mt-1 text-[11px] ${textClass}`} style={{ color: 'var(--muted)' }}>{t('footer_note')}</p>
        </div>
        <p className={`text-[11px] ${textClass}`} style={{ color: 'var(--muted)' }}>{t('footer_rights')}</p>
      </div>
    </footer>
  )
}
