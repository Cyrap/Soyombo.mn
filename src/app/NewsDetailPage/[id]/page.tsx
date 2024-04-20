import Head from 'next/head';
import News from '@/components/News/News';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Posts from "../../../components/Posts/Posts"
import { Card } from "@nextui-org/react";
import { getPostData } from "../../../lib/post"

interface Params {
  id: string;
}

export default async function NewsDetailPage({ params }: {
  params: Params;
}) {
  const id = params?.id;
  let header = "";
  let imageURL = "";

  try {
    const headerData = await getPostData(id, "header");
    const imageData = await getPostData(id, "image");
    header = headerData.header ?? '';
    imageURL = imageData.imageURL ?? "";

    console.log(header);
    console.log(imageURL);
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      <Head>
        <title>Title</title>
        {/* <link rel='news site' href='https://soyombo-cyan.vercel.app/NewsDetailPage/Eov7yFKvvvvFgTSoP'/> */}
        <meta name="description" content="Check out this news site" />
        <meta property="og:image" content={imageURL} />
        <meta property="og:title" content={header} />
        <meta property="og:description" content="Check out this awesome site" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content={`https://soyombo-cyan.vercel.app/NewsDetailPage/${id}`} /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@soyombo" />
        <meta name="twitter:title" content={header} />
        <meta name="twitter:description" content="Check out this awesome site" />
        <meta name="twitter:image" content={imageURL} />
      </Head>

      <div>
        <Navbar />
        <div>{header}</div>
        <div>{imageURL}</div>
        <div className='w-full flex justify-center'>
          <div className="w-full lg:w-[80vw] md:w-[80vw] xl:w-[70vw]  max-w-[1200px]">
            <News id={id} />
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
      </div>
    </>
  );
}
