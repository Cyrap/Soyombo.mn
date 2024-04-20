'use client'
import { getPostData } from '../../../lib/post';
import Head from 'next/head';
import News from '@/components/News/News';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Posts from "../../../components/Posts/Posts"
import {Card} from "@nextui-org/react";
interface Params {
  id: string;
}
export default function NewsDetailPage({ params }: {
  params: Params;
}) {
  const id = params?.id;
  const news = getPostData(id);
  return (<>
      
    <div>
      {!id || !news ? (
        <div>Loading...</div>
      ) : (
        <>
          <Head>
      <title>Soyombo.mnnnnnnn</title>
      <meta name="description" content='check out this news site'/>
      <link rel='news site'  content={`https://soyombo-cyan.vercel.app/NewsDetailPage/${id}`}/>
      <meta property='og:image' content={`${news.imageURL}`} />
      <meta property='og:title' content={`${news.header}`}/>
      <meta property='og:description'
      content='check out this is description'
      />
      <meta name='facebook:card' content='summary_large_image'/>
      <meta name='facebook:site' content="@soyombo"/>
      <meta name='facrbook:title' content={`${news.header}`}/>
      <meta name='facebook:description'
      content='check out this awesome site'
      />
      <meta name='facebook:image'content={`${news.imageURL}`}/>
      <meta name='facebook:url' content={`https://soyombo-cyan.vercel.app/NewsDetailPage/${id}`}/>
      </Head>
        <Navbar/>
        <div className='w-full flex justify-center'>
        <div className="w-full lg:w-[80vw] md:w-[80vw] xl:w-[70vw]  max-w-[1200px]">
          <News {...news} />
          </div>
          <div className='h-[100vh] overflow-y-auto'>
        <Card className="max-w-[400px]">
         <div className="hidden xl:block sticky">
          <Posts />
        </div>
      </Card>
        </div>
        </div>
        <Footer/>
        </>
      )}
    </div>
      </>
  );
}


