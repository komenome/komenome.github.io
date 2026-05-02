'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar() {
  const { resolvedTheme } = useTheme()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isDark = resolvedTheme === 'dark'

  useEffect(() => setMounted(true), [])

  const navLinks = [
    { href: '#home', label: t('nav_home') },
    { href: '#about', label: t('nav_about') },
    { href: '#services', label: t('nav_services') },
    { href: '#contact', label: t('nav_contact') },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(48, 25, 52, 0.1)'}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            data-magnetic="true"
            className="text-base sm:text-xl font-bold font-heading"
            style={{ color: isDark ? '#D4AF37' : '#301934' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            KomeNome
          </motion.a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                data-magnetic="true"
                className="relative text-sm font-medium transition-colors duration-300 hover:opacity-100 opacity-70 group"
                style={{ color: isDark ? '#D4AF37' : '#301934' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: isDark ? '#D4AF37' : '#301934' }}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {mounted && <><ThemeToggle /><LanguageSwitcher /></>}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X style={{ color: isDark ? '#D4AF37' : '#301934' }} /> : <Menu style={{ color: isDark ? '#D4AF37' : '#301934' }} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-14 sm:top-16 left-0 right-0 z-40 md:hidden overflow-hidden"
            style={{ backgroundColor: isDark ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)', borderBottom: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(48, 25, 52, 0.1)'}` }}
          >
            <div className="flex flex-col p-4 sm:p-6 gap-3 sm:gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="text-base sm:text-lg font-medium py-2"
                  style={{ color: isDark ? '#D4AF37' : '#301934' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}