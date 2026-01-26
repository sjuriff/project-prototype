'use client'

import ProductDetailV2 from "@/components/product-detail-card-v2";
import { StaticImageData } from "next/image";
import USAImage from '@/public/images/new-york.jpg'
import thailandImage from '@/public/images/thailand.jpg'
import japanImage from '@/public/images/japan.jpg'
import turkeyImage from '@/public/images/turkey.jpg'
import vietnamImage from '@/public/images/vietnam.jpg'
import canadaImage from '@/public/images/canada.jpeg'
import BackButton from "@/components/buttons/back-button";

import { usePersistedProduct } from "@/hooks/use-persisted-product";

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

interface Tier {
  data: string;
  validity: string;
  price: string;
  popular?: boolean
}


interface Product {
  id: string;
  imageUrl: StaticImageData;
  title: string;
  data: string;
  validity: string;
  price: string;
  currency?: string;
  tiers: Tier[];
}
//Needs to be an asycn function when we fetch real data, also needs to be a server component
export default function ProductDetailPage({ params }: ProductDetailPageProps) {

  const { getProduct, clearProduct } = usePersistedProduct()








  const showProduct = getProduct()

  console.log("showProduct", showProduct)

  if (!showProduct) {
    return (
      <main className="bg-surface border border-black flex items-center justify-center  flex flex-col  ">
        <p className="text-tetriary-text">Product not found</p>
      </main>
    )
  } else {
    return (
      <main className="bg-surface   flex items-center justify-center  flex flex-col  ">
        <section className="w-full relative   bg-surface  min-h-screen py-16  px-8 flex items-center justify-center">
          <div className="absolute top-4 left-4 2xl:top-16 2xl:left-16">
            <BackButton />
          </div>
          <ProductDetailV2 id={showProduct.id} tiers={showProduct.tiers} title={showProduct.title} image={showProduct.imageUrl} description={showProduct.title} price={showProduct.price} data={showProduct.data} validity={showProduct.validity} />
        </section>
      </main>
    );
  }
}
