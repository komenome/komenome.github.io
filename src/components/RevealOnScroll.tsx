'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type AnimationVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up'

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: AnimationVariant
}

const variants = {
  'fade-up': {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-left': {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  'scale-up': {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
}

export default function RevealOnScroll({ children, className = '', delay = 0, variant = 'fade-up' }: RevealOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const selectedVariant = variants[variant]

  return (
    <motion.div
      ref={ref}
      initial={selectedVariant.hidden}
      animate={isInView ? selectedVariant.visible : selectedVariant.hidden}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}