import { query } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { Timestamp } from "firebase/firestore";
import { Suggestion } from "../firebase/types";

export async function getPosts(): Promise<Suggestion[]> {
  const newsCollectionRef = collection(db, "suggestion");
  
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
    return filteredData;
  } catch (err) {
    console.log(err);
    return []; // Return an empty array in case of error
  }
}
