import React, { useEffect, useState } from "react";
import Image from "next/image";
import s from './News.module.css'
import { query } from "firebase/firestore";
import { doc, collection, onSnapshot, getDocs, where } from "firebase/firestore"
import { db } from "@/store/firebase";
interface News{
    id:string,
    header:string,
    content:string,
    ownerId:string,
    imageURL:string
}
const News = () =>{
    const [news,setNews] = useState<News[]>([]);
    const newsCollectionRef = collection(db,"Posts");

    useEffect(()=>{
        const getNews = async () =>{
            try{
                const q = query(newsCollectionRef);
                const data = await getDocs(q);
                const filteredData: any = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setNews(filteredData);
                console.log(filteredData);
            }catch(err){
                console.log(err);
            }
        }
        getNews();
    },[])


    return (
    <>
      {news.map((item) => (
        <div key={item.id}>
          <h2 className={s.header}>{item.header}</h2>
          <div className={s.userCon}>
            <div className={s.user}>
              <Image
                className={s.userImg}
                alt="user"
                src={item.imageURL}
                width={40}
                height={40}
              />
              <div className={s.userName}>
                <div>{item.ownerId}</div>
                <div>{new Date().toLocaleDateString()}</div>
              </div>
            </div>
            <div className={s.share}>
              <div>FB</div>
            </div>
          </div>
          <div className={s.content}>{item.content}</div>
          <Image
            className={s.contentImg}
            alt="content"
            src={item.imageURL}
            width={1000}
            height={1000}
          />
        </div>
      ))}
    </>
  );
};

export default News;