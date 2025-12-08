import ProductDetailV2 from "@/components/product-detail-card-v2";
import { StaticImageData } from "next/image";
import USAImage from '@/public/images/new-york.jpg'
import thailandImage from '@/public/images/thailand.jpg'
import japanImage from '@/public/images/japan.jpg'
import turkeyImage from '@/public/images/turkey.jpg'
import vietnamImage from '@/public/images/vietnam.jpg'
import canadaImage from '@/public/images/canada.jpeg'
import BackButton from "@/components/buttons/back-button";

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

interface Tier {
  data: string;
  validity: string;
  price: string;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  

  const { id } = await params;

 
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
   const popularDestinations: Product[] = [
    {
      id: '1',
      imageUrl: USAImage,
      title: "USA",
      data: "5GB",
      validity: "30 dager",
      price: "199",
      currency: "kr",
      tiers: [
        {
          data: "2GB",
          validity: "15 dager",
          price: "119",
        },
        {
          data: "5GB",
          validity: "30 dager",
          price: "199",
        },
        {
          data: "10GB",
          validity: "30 dager",
          price: "339",
        },
        {
          data: "20GB",
          validity: "30 dager",
          price: "569",
        },
      ]
    },
    {
      id: '2',
      imageUrl: thailandImage,
      title: "Thailand",
      data: "5 GB",
      validity: "30 dager",
      price: "199",
      currency: "kr",
      tiers: [
        {
          data: "2GB",
          validity: "15 dager",
          price: "119",
        },
        {
          data: "5GB",
          validity: "30 dager",
          price: "199",
        },
        {
          data: "10GB",
          validity: "30 dager",
          price: "339",
        },
        {
          data: "20GB",
          validity: "30 dager",
          price: "569",
        },
      ]
    },
    {
      id: '3',
      imageUrl: japanImage,
      title: "Japan",
      data: "5GB",
      validity: "30 dager",
      price: "199",
      currency: "kr",
      tiers: [
        {
          data: "2GB",
          validity: "15 dager",
          price: "119",
        },
        {
          data: "5GB",
          validity: "30 dager",
          price: "199",
        },
        {
          data: "10GB",
          validity: "30 dager",
          price: "349",
        },
        {
          data: "20GB",
          validity: "30 dager",
          price: "599",
        },
      ]
    },
    {
      id: '4',
      imageUrl: turkeyImage,
      title: "Tyrkia",
      data: "5 GB",
      validity: "30 dager",
      price: "229",
      currency: "kr",
      tiers: [
        {
          data: "2GB",
          validity: "15 dager",
          price: "139",
        },
        {
          data: "5GB",
          validity: "30 dager",
          price: "229",
        },
        {
          data: "10GB",
          validity: "30 dager",
          price: "409",
        },
        {
          data: "20GB",
          validity: "30 dager",
          price: "529",
        },
      ]
    },
    {
      id: '5',
      imageUrl: vietnamImage,
      title: "Vietnam",
      data: "5GB",
      validity: "30 dager",
      price: "199",
      currency: "kr",
      tiers: [
        {
          data: "2GB",
          validity: "15 dager",
          price: "119",
        },
        {
          data: "5GB",
          validity: "30 dager",
          price: "199",
        },
        {
          data: "10GB",
          validity: "30 dager",
          price: "349",
        },
        {
          data: "20GB",
          validity: "30 dager",
          price: "599",
        },
      ]
    },
    {
      id: '6',
      imageUrl: canadaImage,
      title: "Canada",
      data: "5GB",
      validity: "30 dager",
      price: "249",
      currency: "kr",
      tiers: [
        {
          data: "2GB",
          validity: "15 dager",
          price: "149",
        },
        {
          data: "5GB",
          validity: "30 dager",
          price: "249",
        },
        {
          data: "10GB",
          validity: "30 dager",
          price: "429",
        },
        {
          data: "20GB",
          validity: "30 dager",
          price: "729",
        },
      ]
    
    },

  ]

  const showProduct = popularDestinations.find((product) => product.id === id);
  console.log("product", showProduct)
  if (!showProduct) {
    return (
      <main className="bg-surface border border-black flex items-center justify-center  flex flex-col  ">
        <p className="text-tetriary-text">Product not found</p>
      </main>
    )
  } else {
    return (
      <main className="bg-surface   flex items-center justify-center  flex flex-col  ">
        <section className="w-full relative   bg-surface  min-h-screen flex items-center justify-center">
          <div className="absolute top-4 left-4 2xl:top-16 2xl:left-16">
          <BackButton />
          </div>
          <ProductDetailV2 id={id} tiers={showProduct.tiers} title={showProduct.title} image={showProduct.imageUrl} description={showProduct.title} price={showProduct.price} data={showProduct.data} validity={showProduct.validity} />
        </section>
      </main>
    );
  }
}
