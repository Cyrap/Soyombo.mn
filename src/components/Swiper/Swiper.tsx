'use client'
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/store/firebase';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductPopup from '../../app/products/ProductPopUp';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageURL: string;
}

const SwiperComponent = () => {
  const [isLoading, setLoading] = useState(true);
  const [productList, setProductList] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productCollectionRef = collection(db, 'products');

  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getDocs(productCollectionRef);
        const filteredData: any = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProductList(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getProductList();
  }, []);

  const openProductPopup = (product: any) => {
    setSelectedProduct(product);
  };

  const closeProductPopup = () => {
    setSelectedProduct(null);
  };

  const handleImageLoadingComplete = () => {
    console.log('Image loading complete');
    setLoading(false);
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[#E5E5E5]">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            658: {
              slidesPerView: 3,
            },
            924: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
            },
            
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {productList.map((product) => (
            <SwiperSlide key={product.id}>
              <div className=" rounded-2xl	relative h-[50vh] overflow-hidden group border border-white border-opacity-30" onClick={() => openProductPopup(product)}>
                {(
                  <Image
                    alt={product.name}
                    src={product.imageURL}
                    layout="fill"
                    objectFit="cover"
                    className={`duration-700 ease-in-out group-hover:opacity-96 ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
                    onLoadingComplete={handleImageLoadingComplete}
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-sm text-white">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-white">${product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {selectedProduct && (
          <ProductPopup product={selectedProduct} onClose={closeProductPopup} />
        )}
      </div>
    </>
  );
};

export default SwiperComponent;
