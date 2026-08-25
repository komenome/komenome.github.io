'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useMousePosition } from '@/hooks/useMousePosition'

const interactiveSelector = 'a, button, [role="button"], input, select, textarea'

export default function Cursor() {
  const { resolvedTheme } = useTheme()
  const mousePosition = useMousePosition()
  const [isInteractive, setIsInteractive] = useState(false)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springX = useSpring(rawX, { stiffness: 620, damping: 38, mass: 0.12 })
  const springY = useSpring(rawY, { stiffness: 620, damping: 38, mass: 0.12 })

  useEffect(() => {
    rawX.set(mousePosition.x)
    rawY.set(mousePosition.y)
  }, [mousePosition, rawX, rawY])

  useEffect(() => {
    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as Element | null
      if (target?.closest(interactiveSelector)) setIsInteractive(true)
    }

    const handlePointerOut = (event: PointerEvent) => {
      const nextTarget = event.relatedTarget as Element | null
      if (!nextTarget?.closest?.(interactiveSelector)) setIsInteractive(false)
    }

    document.addEventListener('pointerover', handlePointerOver, { passive: true })
    document.addEventListener('pointerout', handlePointerOut, { passive: true })

    return () => {
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerout', handlePointerOut)
    }
  }, [])

  const cursorColor = resolvedTheme === 'dark' ? '#a89cf8' : '#4f3bc4'

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[10000] hidden md:block"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        animate={{
          width: isInteractive ? 34 : 18,
          height: isInteractive ? 34 : 18,
          backgroundColor: isInteractive ? `${cursorColor}24` : cursorColor,
          borderColor: cursorColor,
        }}
        transition={{ type: 'spring', stiffness: 520, damping: 34 }}
        className="rounded-full border"
        style={{ boxShadow: `0 0 18px ${cursorColor}45` }}
      />
    </motion.div>
  )
}
