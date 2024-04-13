'use client'
import Navbar from '../components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import News from '@/components/News/News'
import SwiperComponent from '@/components/Swiper/Swiper'
import {NextUIProvider} from '@nextui-org/react'

export default function Home() {
  return(<>
   <NextUIProvider>
    <main className='dark text-foreground bg-background'>
    <Navbar/>
    <div className='w-[90vw] flex justify-center'>
    <News/>
    </div>
    <Footer/>
    </main>
   </NextUIProvider> 
  </>
  )
}


