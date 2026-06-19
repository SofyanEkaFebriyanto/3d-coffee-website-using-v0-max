import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://aurora-coffee.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aurora — Cinematic Coffee, Engineered',
    template: '%s · Aurora Coffee',
  },
  description:
    'Aurora is a premium specialty coffee house blending single-origin craft with an immersive, cinematic digital experience. Discover the ritual.',
  keywords: [
    'specialty coffee',
    'premium coffee',
    'single origin',
    'luxury coffee brand',
    'craft roastery',
  ],
  authors: [{ name: 'Aurora Coffee' }],
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Aurora — Cinematic Coffee, Engineered',
    description:
      'A premium specialty coffee house blending single-origin craft with an immersive, cinematic digital experience.',
    siteName: 'Aurora Coffee',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurora — Cinematic Coffee, Engineered',
    description:
      'A premium specialty coffee house blending single-origin craft with an immersive, cinematic digital experience.',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050506',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Aurora Coffee',
  description:
    'Premium specialty coffee house blending single-origin craft with an immersive digital experience.',
  servesCuisine: 'Coffee',
  priceRange: '$$$',
  url: siteUrl,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
