'use client'

import { motion } from 'framer-motion'

interface HeroGraphicProps {
  isDark: boolean
}

export default function HeroGraphic({ isDark }: HeroGraphicProps) {
  const primary = isDark ? '#D4AF37' : '#301934'
  const primaryFaded = isDark ? 'rgba(212,175,55,0.3)' : 'rgba(48,25,52,0.3)'
  const primaryFaded2 = isDark ? 'rgba(212,175,55,0.15)' : 'rgba(48,25,52,0.15)'
  const primaryFaded3 = isDark ? 'rgba(212,175,55,0.08)' : 'rgba(48,25,52,0.08)'

  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto">
      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={primary} stopOpacity="0.2" />
              <stop offset="100%" stopColor={primary} stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx="200" cy="200" r="160" fill="url(#centerGlow)" />

          <motion.ellipse
            cx="200" cy="200" rx="155" ry="155"
            fill="none"
            stroke={primaryFaded}
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          />

          <motion.ellipse
            cx="200" cy="200" rx="120" ry="120"
            fill="none"
            stroke={primaryFaded2}
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.6 }}
          />

          <motion.ellipse
            cx="200" cy="200" rx="85" ry="85"
            fill="none"
            stroke={primaryFaded3}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.9 }}
          />

          <motion.ellipse
            cx="200" cy="200" rx="155" ry="155"
            fill="none"
            stroke={primary}
            strokeWidth="1.5"
            opacity={0.5}
            filter="url(#glow)"
            animate={{
              scale: [1, 1.03, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '200px 200px' }}
          />

          <motion.ellipse
            cx="200" cy="200" rx="120" ry="120"
            fill="none"
            stroke={primary}
            strokeWidth="2"
            opacity={0.6}
            filter="url(#glow)"
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            style={{ transformOrigin: '200px 200px' }}
          />

          <motion.ellipse
            cx="200" cy="200" rx="85" ry="85"
            fill="none"
            stroke={primary}
            strokeWidth="2"
            opacity={0.7}
            filter="url(#softGlow)"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{ transformOrigin: '200px 200px' }}
          />

          <motion.circle
            cx="200" cy="200" r="6"
            fill={primary}
            filter="url(#softGlow)"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {[
            { cx: 200, cy: 45, delay: 0 },
            { cx: 340, cy: 135, delay: 0.8 },
            { cx: 340, cy: 265, delay: 1.6 },
            { cx: 200, cy: 355, delay: 2.4 },
            { cx: 60, cy: 265, delay: 3.2 },
            { cx: 60, cy: 135, delay: 4.0 },
          ].map((dot, i) => (
            <motion.circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r="3"
              fill={primary}
              filter="url(#glow)"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: dot.delay * 0.25,
                ease: 'easeInOut',
              }}
            />
          ))}

          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const x1 = 200 + 85 * Math.cos((angle * Math.PI) / 180)
            const y1 = 200 + 85 * Math.sin((angle * Math.PI) / 180)
            const x2 = 200 + 120 * Math.cos((angle * Math.PI) / 180)
            const y2 = 200 + 120 * Math.sin((angle * Math.PI) / 180)
            return (
              <motion.line
                key={`line-${i}`}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={primary}
                strokeWidth="0.5"
                opacity={0.3}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.4, 0.2] }}
                transition={{ duration: 1.5, delay: 1.2 + i * 0.15 }}
              />
            )
          })}
        </svg>
      </motion.div>
    </div>
  )
}