'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar() {
  const { t, language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const navLinks = [
    { href: '#home', label: t('nav_home') },
    { href: '#about', label: t('nav_about') },
    { href: '#services', label: t('nav_services') },
    { href: '#contact', label: t('nav_contact') },
  ]
  const textClass = language === 'mm' ? 'myanmar-text' : ''

  const goTo = (href: string) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav initial={{ y: -90 }} animate={{ y: 0 }} className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl" style={{ background: 'color-mix(in srgb, var(--bg) 78%, transparent)', borderColor: 'var(--line)' }}>
        <div className="site-container flex h-[76px] items-center justify-between">
          <a href="#home" onClick={(event) => { event.preventDefault(); goTo('#home') }} className="text-xl font-bold tracking-[-.04em]" style={{ color: 'var(--text)' }} data-magnetic="true">
            Kome<span style={{ color: 'var(--accent)' }}>Nome</span><span style={{ color: 'var(--warm)' }}>.</span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(event) => { event.preventDefault(); goTo(link.href) }} className={`text-xs font-semibold transition-colors hover:text-[var(--accent)] ${textClass}`} style={{ color: 'var(--muted)' }}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3">
            {mounted && <><ThemeToggle /><LanguageSwitcher /></>}
            <button onClick={() => setIsOpen((open) => !open)} className="flex h-10 w-10 items-center justify-center rounded-full lg:hidden" aria-label={isOpen ? 'Close menu' : 'Open menu'} style={{ color: 'var(--text)' }}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="glass-panel fixed inset-x-4 top-[86px] z-40 rounded-2xl p-3 lg:hidden">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(event) => { event.preventDefault(); goTo(link.href) }} className={`block rounded-xl px-4 py-3 text-sm font-semibold ${textClass}`} style={{ color: 'var(--text)' }}>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
