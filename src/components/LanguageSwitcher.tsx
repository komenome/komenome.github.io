'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  return (
    <div
      data-magnetic="true"
      className="relative flex items-center rounded-full border p-1"
      style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
    >
      <motion.button
        onClick={() => setLanguage('en')}
        className="relative z-10 w-9 px-1 py-1 text-center text-[11px] font-bold transition-colors duration-200"
        style={{ color: language === 'en' ? '#fff' : 'var(--muted)' }}
        aria-label="Use English"
        whileTap={{ scale: 0.9 }}
      >
        EN
      </motion.button>
      <motion.button
        onClick={() => setLanguage('mm')}
        className="relative z-10 w-9 px-1 py-1 text-center text-[11px] font-bold transition-colors duration-200"
        style={{ color: language === 'mm' ? '#fff' : 'var(--muted)' }}
        aria-label="မြန်မာဘာသာသုံးရန်"
        whileTap={{ scale: 0.9 }}
      >
        MM
      </motion.button>
      <motion.div
        className="absolute top-1 h-[calc(100%-8px)] rounded-full"
        style={{
          background: 'var(--accent)',
          width: 36,
          left: 4,
        }}
        initial={false}
        animate={{
          left: language === 'en' ? 4 : 40,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      />
    </div>
  )
}
