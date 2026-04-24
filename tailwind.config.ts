import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          dark: '#D4AF37',
          light: '#301934',
        },
        'deep-purple': {
          DEFAULT: '#301934',
          light: '#301934',
        },
        background: {
          dark: '#000000',
          light: '#FFFFFF',
        },
        secondary: {
          dark: '#1A1A1A',
          light: '#F3F4F6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        myanmar: ['var(--font-noto)', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config