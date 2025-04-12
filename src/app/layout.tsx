import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'John Doe | Full-Stack Web Developer in Chicago'

const description =
  "Skilled full-stack web developer in Chicago. I build responsive, user-friendly websites with React, NextJS, and NodeJS. Let's bring your vision to life. Hire me today!"

// Default fallback URL for local development
const defaultUrl = 'http://localhost:3001'

// Safely get the URL from environment variable or use default
let siteUrl = process.env.NEXT_PUBLIC_SITE_URL || defaultUrl

// Ensure URL is properly formatted
if (!siteUrl.startsWith('http')) {
  siteUrl = `http://${siteUrl}`
}

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'John Doe Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@Basit_Miyanji',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}