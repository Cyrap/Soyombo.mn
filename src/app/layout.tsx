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
      {/* <head>
      <meta property='og:image'
        content='https://cdn.factcheck.org/UploadedFiles/TotalEclipseThumb.jpg'
        />
        <title>Soyombo</title>
      <meta name="description" content='check out this news site'/>
      <link rel='news site' href='https://soyombo-cyan.vercel.app/NewsDetailPage/Eov7yFKvvvvFgTSoP'/>
      <link rel='news site' href='http://localhost:3000/'/>
      <meta property='og:image' content='"https://cdn.factcheck.org/UploadedFiles/TotalEclipseThumb.jpg' />
      <meta property='og:title' content='this is og title'/>
      <meta property='og:description'
      content='check out this is description'
      />
      <meta name='facebook:card' content='summary_image'/>
      <meta name='facebook:site' content="@soyombo"/>
      <meta name='facrbook:title' content="this is title"
      />
      <meta name='facebook:description'
      content='check out this awesome site'
      />
      <meta name='facebook:image' content='"https://cdn.factcheck.org/UploadedFiles/TotalEclipseThumb.jpg'/>
      <meta name='facebook:url' content='https://soyombo-cyan.vercel.app/NewsDetailPage/9XQTKykjHfLBRnRfuuDi'/>
      <meta name='facebook:url' content='http://localhost:3000/'/>
   
      </head> */}
      <body className={inter.className}>{children}</body>
    </html>
    </UserProvider>
  </>
  )
}
