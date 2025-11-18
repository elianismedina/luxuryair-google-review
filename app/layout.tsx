import type { Metadata, Viewport } from 'next'
import { Questrial, Signika } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const questrial = Questrial({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-questrial',
});

const signika = Signika({ 
  subsets: ["latin"],
  variable: '--font-signika',
});

export const metadata: Metadata = {
  title: 'Luxury Air - Deja tu Reseña',
  description: 'Comparte tu experiencia con Luxury Air en Google Business',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0284c7' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${questrial.variable} ${signika.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
