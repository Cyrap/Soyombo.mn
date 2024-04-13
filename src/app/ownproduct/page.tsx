'use client'
import { useState, useEffect } from "react"
import Navbar from "@/components/Navbar/Navbar";
import { doc, collection, onSnapshot, getDocs, query, where } from "firebase/firestore"
import { db } from "../../store/firebase";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageURL: string; 
}  
const Products = () => {

  const [productList, setProductList] = useState<Product[]>([]);
  const user = useUser();
  const userId = user?.user?.uid;
  const productCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProductList = async () => {
      try {
        const q = query(productCollectionRef, where("ownerId", "==", userId));
        const data = await getDocs(q);
        const filteredData: any = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProductList(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    }

    if (userId) {
      getProductList();
    }
  }, [userId])

  console.log(productList);
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productList.map((product) => (
            <BlurImage
              key={product.id}
              image={product}
              onClick={() => openProductPopup(product)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

function BlurImage({ image, onClick }: { image: Product; onClick: () => void }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className="cursor-pointer"
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-lg bg-[#25C2C2]">
        <Image
          alt=""
          src={image.imageURL}
          layout="responsive"
          width={500} 
          height={500} 
          objectFit="cover"
          className={`duration-700 ease-in-out group-hover:opacity-75 hover:scale-110 ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.price}</p>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.description}</p>
    </div>
  );
}

export default Products;
