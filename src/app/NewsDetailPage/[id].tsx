'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/store/firebase";

interface News {
    id: string;
    header: string;
    content: string;
    ownerId: string;
    imageURL: string;
}

const NewsDetailPage = () => {
    const router = useRouter();
    const  id  = router.query.id;
    const [news, setNews] = useState<News | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            if (id) {
                try {
                    const newsDocRef = doc(db, "Posts", id.toString());
                    const newsDocSnapshot = await getDoc(newsDocRef);
                    if (newsDocSnapshot.exists()) {
                        const newsData = newsDocSnapshot.data();
                        setNews({
                            id: newsDocSnapshot.id,
                            header: newsData.header,
                            content: newsData.content,
                            ownerId: newsData.ownerId,
                            imageURL: newsData.imageURL
                        });
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error("Error fetching document: ", error);
                }
            }
        };

        fetchNews();
    }, [id]);
    console.log("askdk")
    if (!id || !news) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{news.header}</h1>
            <img src={news.imageURL} alt={news.header} />
            <p>{news.content}</p>
        </div>
    );
};

export default NewsDetailPage;
