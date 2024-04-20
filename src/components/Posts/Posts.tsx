'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { query } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { Card, CardBody, Image } from "@nextui-org/react";
import { Timestamp } from "firebase/firestore";

interface News {
  id: string;
  header: string;
  content: string;
  ownerId: string;
  imageURL: string;
  date: Date;
}

const Posts = () => {
  const router = useRouter();

  const [news, setNews] = useState<News[]>([]);
  const newsCollectionRef = collection(db, "Posts");

  useEffect(() => {
    const getNews = async () => {
      try {
        const q = query(newsCollectionRef);
        const data = await getDocs(q);
        const filteredData: any = data.docs.map((doc) => {
          const docData = doc.data();
          // Convert the Firebase timestamp to a JavaScript Date object
          const date =
            docData.date instanceof Timestamp ? docData.date.toDate() : null;
          // Spread operator to merge with existing doc data
          return {
            ...docData,
            id: doc.id,
            date: date,
          };
        });
        setNews(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.log(err);
      }
    };
    getNews();
  }, []);

  const handleNavigation = (id: any) => {
    router.push(`/NewsDetailPage/${id}`);
  };

  const calculateTimeAgo = (date: Date) => {
    const now = new Date();
    const diff = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diff / (1000 * 3600 * 24)); // Convert milliseconds to days
    const diffHours = Math.floor(diff / (1000 * 3600)); // Convert milliseconds to hours

    if (diffDays > 0) {
      return `${diffDays} Өдр${diffDays === 1 ? "" : "ийн"} өмнө`;
    } else {
      return `${diffHours} Цаг${diffHours === 1 ? "" : "ийн"} өмнө`;
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {news.map((item) => (
          <div
            onClick={() => handleNavigation(item.id)}
            key={item.id}
            className="flex flex-col w-full"
          >
            <Card
              isBlurred
              className="border-none bg-background/60 dark:bg-default-100/50"
              shadow="sm"
            >
              <CardBody className="">
                <div className="flex flex-row h-full">
                  <div className="relative w-[200px]">
                    <Image
                      alt="cover"
                      className="object-cover w-full h-full"
                      src={item.imageURL}
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between p-4 w-[100px]">
                    <h3 className="text-[15px] font-semibold">{item.header}</h3>
                    <span className="text-sm">
                      {item.date && calculateTimeAgo(item.date)}
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
