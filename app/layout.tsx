import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const urbanist = Urbanist({ subsets: ['latin'], preload: true })

export const metadata: Metadata = {
icons:'/favicon.ico',
  title: 'Create Next App',
  description: 'Generated by Iqtidar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}