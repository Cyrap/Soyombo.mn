'use client'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import News from '@/components/News/News'
import SwiperComponent from '@/components/Swiper/Swiper'
import {NextUIProvider} from '@nextui-org/react'
import Posts from '@/components/Posts/Posts'
import HomeLoading from '@/components/HomeLoading/page'
export default function Home() {
  return(<div>
    {/* <Head>
      <title>Soyombo</title>
      <meta name="description" content='check out this news site'/>
      <link rel='news site' href='https://soyombo-cyan.vercel.app/NewsDetailPage/Eov7yFKvvvvFgTSoP'/>
      <link rel='news site' href='http://localhost:3000/'/>
      <meta property='og:image' content='' />
      <meta property='og:title' content='this isssssssss og title'/>
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
      <meta name='facebook:image' content=''/>
      <meta name='facebook:url' content='https://soyombo-cyan.vercel.app/NewsDetailPage/9XQTKykjHfLBRnRfuuDi'/>
      <meta name='facebook:url' content='http://localhost:3000/'/>
    </Head> */}
   <NextUIProvider>
    <main className='dark text-foreground bg-background'>
    <Navbar/>
    <div className='w-[100vw] flex justify-center'>
    <div className='w-[80vh]'>
    <Posts/>
    </div>
    </div>
    <Footer/>
    </main>
   </NextUIProvider> 
  </div>
  )

  // return (
  //   <>
  //   <Navbar/>
  //   <HomeLoading/>
  //   </>
  // )
}


