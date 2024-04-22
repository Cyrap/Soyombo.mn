import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { query } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { Card, CardBody, Image } from "@nextui-org/react";
import { Timestamp } from "firebase/firestore";
import {News} from "../firebase/types"
export async function getPosts(): Promise<News[]> {
    const [news, setNews] = useState<News[]>([]);
    const newsCollectionRef = collection(db, "Posts");
  
    useEffect(() => {
      const getNews = async () => {
        try {
          const q = query(newsCollectionRef);
          const data = await getDocs(q);
          const filteredData: any = data.docs.map((doc) => {
            const docData = doc.data();
            const date =
              docData.date instanceof Timestamp ? docData.date.toDate() : null;
            return {
              ...docData,
              id: doc.id,
              date: date,
            };
          });
          setNews(filteredData);
        } catch (err) {
          console.log(err);
        }
      };
      getNews();
    }, []);

    return news;
}
