import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import UserProvider from '@/context/UserContext'
const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Soyombo.mn',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<>
    <UserProvider>
    <html lang="en">
      <head>
        {/* <meta property='og:image'
        content='http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav.db3d4952.png&w=128&q=75'
        /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
    </UserProvider>
  </>
  )
}
