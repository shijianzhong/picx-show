import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: '美图欣赏 - 精选高质量图片分享平台',
    template: '%s | 美图欣赏'
  },
  description: '发现和分享最美的高质量图片，包含风景、人物、艺术等多种类型的美图，为您提供视觉盛宴。',
  keywords: ['美图', '图片欣赏', '高质量图片', '风景图片', '艺术图片', '图片分享'],
  authors: [{ name: '美图欣赏' }],
  creator: '美图欣赏',
  publisher: '美图欣赏',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '美图欣赏 - 精选高质量图片分享平台',
    description: '发现和分享最美的高质量图片，包含风景、人物、艺术等多种类型的美图，为您提供视觉盛宴。',
    url: 'https://your-domain.com',
    siteName: '美图欣赏',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '美图欣赏 - 精选高质量图片分享平台',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '美图欣赏 - 精选高质量图片分享平台',
    description: '发现和分享最美的高质量图片，包含风景、人物、艺术等多种类型的美图，为您提供视觉盛宴。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
