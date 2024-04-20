import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import UserProvider from '@/context/UserContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Soyombo.mn',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<>
    <UserProvider>
    <html lang="en">
      <head>
        <meta property='og:image'
        content='https://cdn.factcheck.org/UploadedFiles/TotalEclipseThumb.jpg'
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
    </UserProvider>
  </>
  )
}
