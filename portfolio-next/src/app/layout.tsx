import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: '구석영 UI/UX 디자이너',
  description: 'UI/UX Designer Portfolio - 감각을 구조로, 흐름을 디자인으로',
  keywords: ['UI/UX', 'Designer', 'Portfolio', '디자이너', '포트폴리오'],
  authors: [{ name: '구석영' }],
  openGraph: {
    title: '구석영 UI/UX 디자이너',
    description: 'UI/UX Designer Portfolio - 감각을 구조로, 흐름을 디자인으로',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  )
}
