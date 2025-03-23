import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tess Guilmette | Web Developer & Consultant',
  description:
    "I'm a web developer and digital consultant blending design, strategy, and technology to build elegant, high-performance websites and solutions. I specialize in modern web platforms, AI-driven content, and creative problem solving.",
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://portfolio.tgwebdevelopment.com'),
  openGraph: {
    title: 'Tess Guilmette | Web Developer & Consultant',
    description:
      "I build elegant, high-performance websites and creative digital solutions — blending strategy, design, and development.",
    url: 'https://yourdomain.com',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Tess Guilmette',
    description:
      "Hi, I&#39;m Tess — a developer and consultant building smart, beautiful web experiences powered by code, content, and creativity.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
