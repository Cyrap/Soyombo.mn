'use client'
import { getPostData } from '../../../lib/post';
import Head from 'next/head';
import News from '@/components/News/News';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Posts from "../../../components/Posts/Posts"
import { Card } from "@nextui-org/react";

interface Params {
  id: string;
}

export default function NewsDetailPage({ params }: {
  params: Params;
}) {
  const id = params?.id;
  const news = getPostData(id);

  return (
    <>
      <Head>
        <title>{news?.header}</title>
        <meta name="description" content="Check out this news site" />
        <meta property="og:image" content={news?.imageURL} />
        <meta property="og:title" content={news?.header} />
        <meta property="og:description" content="Check out this awesome site" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://soyombo-cyan.vercel.app/NewsDetailPage/${id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@soyombo" />
        <meta name="twitter:title" content={news?.header} />
        <meta name="twitter:description" content="Check out this awesome site" />
        <meta name="twitter:image" content={news?.imageURL} />
      </Head>

      <div>
        {!id || !news ? (
          <div>Loading...</div>
        ) : (
          <>
            <Navbar />
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
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
