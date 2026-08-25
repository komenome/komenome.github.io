'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useMousePosition } from '@/hooks/useMousePosition'

export default function Cursor() {
  const { resolvedTheme } = useTheme()
  const mousePosition = useMousePosition()

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springConfig = { stiffness: 500, damping: 28, mass: 0.15 }
  const springX = useSpring(rawX, springConfig)
  const springY = useSpring(rawY, springConfig)

  const dotX = useMotionValue(0)
  const dotY = useMotionValue(0)

  const isDark = resolvedTheme === 'dark'
  const cursorColor = isDark ? '#8b7cf6' : '#6551d8'

  useEffect(() => {
    rawX.set(mousePosition.x)
    rawY.set(mousePosition.y)
    dotX.set(mousePosition.x)
    dotY.set(mousePosition.y)
  }, [mousePosition, rawX, rawY, dotX, dotY])

  useEffect(() => {
    const magneticElements = document.querySelectorAll('[data-magnetic]')

    const handleEnter: EventListener = (event) => {
      const e = event as MouseEvent
      const target = e.currentTarget as HTMLElement
      const rect = target.getBoundingClientRect()
      rawX.set(rect.left + rect.width / 2)
      rawY.set(rect.top + rect.height / 2)
      dotX.set(rect.left + rect.width / 2)
      dotY.set(rect.top + rect.height / 2)
    }

    const handleMove: EventListener = (event) => {
      const e = event as MouseEvent
      const target = e.currentTarget as HTMLElement
      const rect = target.getBoundingClientRect()
      rawX.set(rect.left + rect.width / 2)
      rawY.set(rect.top + rect.height / 2)
      dotX.set(rect.left + rect.width / 2)
      dotY.set(rect.top + rect.height / 2)
    }

    const handleLeave = () => {
      rawX.set(mousePosition.x)
      rawY.set(mousePosition.y)
      dotX.set(mousePosition.x)
      dotY.set(mousePosition.y)
    }

    magneticElements.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mousemove', handleMove)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      magneticElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mousemove', handleMove)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [mousePosition, rawX, rawY, dotX, dotY])

  if (typeof window === 'undefined') return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="w-10 h-10 rounded-full border-2"
          style={{
            borderColor: cursorColor,
            filter: `drop-shadow(0 0 8px ${cursorColor})`,
            backgroundColor: 'transparent',
          }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: cursorColor,
            boxShadow: `0 0 10px ${cursorColor}`,
          }}
        />
      </motion.div>
    </>
  )
}
