import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Open_Sans, Merriweather } from 'next/font/google'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'TechPlus Trust Ltd — Solar-Powered Poultry Solutions in Rwanda',
    template: '%s | TechPlus Trust Ltd',
  },
  description:
    'TechPlus Trust Ltd builds affordable, locally manufactured solar-powered egg incubators, runs decentralized hatching stations, and trains farmers across Rwanda. We hatch your success.',
  keywords: [
    'solar egg incubator Rwanda',
    'poultry incubator Rwanda',
    'buy egg incubator Rwanda',
    'decentralized hatching Rwanda',
    'day old chicks Rwanda',
    'poultry farming training Rwanda',
    'AgTech Rwanda',
  ],
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'TechPlus Trust Ltd — Solar-Powered Poultry Solutions in Rwanda',
    description:
      'Locally made incubators. Decentralized hatching. Healthier chicks. Stronger communities.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#274F16',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} ${merriweather.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
