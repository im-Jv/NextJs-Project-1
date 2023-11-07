import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MyChakra from '@/components/MyChakra';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IT Company',
  description: 'A tech Company',
  icons: '/favicon.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyChakra>
          <Navbar />
          {children}
          <Footer />
        </MyChakra>
      </body>
    </html>
  )
}
