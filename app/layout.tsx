import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Emma & James Wedding',
  description: 'Join us as we celebrate our special day - June 15, 2025',
  keywords: 'wedding, invitation, Emma, James, celebration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script src="/dashboard-console-capture.js"></script>
      </head>
      <body>
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}