import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Noto_Sans_Myanmar } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/context/LanguageContext'
import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const notoSansMyanmar = Noto_Sans_Myanmar({
  subsets: ['myanmar'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KomeNome | ယုံကြည်စိတ်ချရသော Game Top-Up ဝန်ဆောင်မှု',
  description: 'Mobile Legends, Honor of Kings နှင့် PUBG Mobile များအတွက် မြန်ဆန်၊ လုံခြုံပြီး ယုံကြည်စိတ်ချရသော Game Top-Up ဝန်ဆောင်မှု။',
  keywords: ['game top-up', 'Mobile Legends', 'Honor of Kings', 'PUBG Mobile', 'digital services'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="my" suppressHydrationWarning className={`${playfair.variable} ${dmSans.variable} ${notoSansMyanmar.variable}`}>
      <body className="dark">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <Cursor />
            <Navbar />
            <main>{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
