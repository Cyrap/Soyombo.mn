'use client'
import { getPostData } from '../../../lib/post';
import News from '@/components/News/News';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Posts from "../../../components/Posts/Posts"
import {Card, CardBody} from "@nextui-org/react";
interface Params {
  id: string;
}

export default function NewsDetailPage({ params }: {
  params: Params;
}) {
  const id = params?.id;
  console.log(id)
  const news = getPostData(id);
  console.log(news);
  return (
    <div>
      {!id || !news ? (
        <div>Loading...</div>
      ) : (
        <>
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
  );
}


