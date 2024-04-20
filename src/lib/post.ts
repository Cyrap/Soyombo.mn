import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

interface News {
    id: string;
    header: string;
    content: string;
    ownerId: string;
    imageURL: string;
}

export async function getPostData(id: string, condition: string): Promise<Partial<News>> {
    try {
        const newsDocRef = doc(db, "Posts", id);
        const newsDocSnapshot = await getDoc(newsDocRef);
        
        if (newsDocSnapshot.exists()) {
            const newsData = newsDocSnapshot.data();
            
            switch (condition) {
                case "all":
                    return {
                        id,
                        ...newsData,
                    };
                case "header":
                    return {
                        id,
                        header: newsData.header
                    };
                case "image":
                    return {
                        id,
                        imageURL: newsData.imageURL
                    };
                default:
                    return {
                        id,
                        ...newsData
                    };
            }
        } else {
            console.log("No such document!");
            return { id };
        }
    } catch (error) {
        console.error("Error fetching document: ", error);
        return { id };
    }
}
