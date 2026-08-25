'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === 'dark'

  return (
    <motion.button
      data-magnetic="true"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300"
      style={{ color: 'var(--text)', borderColor: 'var(--line)', background: 'var(--surface)' }}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 0.9 }}
        transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 15 }}
        className="relative"
      >
        {isDark ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </motion.div>
    </motion.button>
  )
}
