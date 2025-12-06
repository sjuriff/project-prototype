
import ProductDetailV2 from "@/components/product-detail-card-v2";
import EsimStepHero from "@/components/esim-step-hero";
import { CreativeHero } from "@/components/creative-hero";
import { TravelHero } from "@/components/travel-hero";
import Faq from "@/components/FAQ";
import CompareCard from "@/components/compare-card";
import { StaticImageData } from "next/image";

import Hero from "@/components/hero";
import { ProductCard } from "@/components/product-card";
import { ProductCardTwo } from "@/components/product-card-v2";
import { ProductCardThree } from "@/components/product-card-V3";
import { ProductCardFour } from "@/components/product-card-V4";
import franceImage from '@/public/images/paris.jpg';
import SortSelector from "@/components/radio-buttons";
import { Earth } from "lucide-react";
import USAImage from '@/public/images/new-york.jpg'
import thailandImage from '@/public/images/thailand.jpg'
import japanImage from '@/public/images/japan.jpg'
import turkeyImage from '@/public/images/turkey.jpg'
import vietnamImage from '@/public/images/vietnam.jpg'
import canadaImage from '@/public/images/canada.jpeg'
import { EsimPolaroidCard } from "@/components/polaroid-product-card";

interface Product {
  id: string;
  imageUrl: StaticImageData;
  title: string;
  data: string;
  validity: string;
  price: string;
  currency?: string;
}

export default function Home() {
  const popularDestinations: Product[] = [
    {
      id: '1',
      imageUrl: USAImage,
      title: "USA",
      data: "5GB",
      validity: "30 dager",
      price: "199",
      currency: "kr",
    },
    {
      id: '2',
      imageUrl: thailandImage,
      title: "Thailand",
      data: "5GB",
      validity: "30 dager",
      price: "199",
      currency: "kr",
    },
    {
      id: '3',
      imageUrl: japanImage,
      title: "Japan",
      data: "5GB",
      validity: "30 dager",
      price: "199",
      currency: "kr",
    },
    {
      id: '4',
      imageUrl: turkeyImage,
      title: "Tyrkia",
      data: "5GB",
      validity: "30 dager",
      price: "229",
      currency: "kr",
    },
    {
      id: '5',
      imageUrl: vietnamImage,
      title: "Vietnam",
      data: "5GB",
      validity: "30 dager",
      price: "199",
      currency: "kr",
    },
    {
      id: '6',
      imageUrl: canadaImage,
      title: "Canada",
      data: "5GB",
      validity: "30 dager",
      price: "249",
      currency: "kr",
    },

  ]
  return (
    <main className="bg-surface  flex flex-col  2xl:gap-0">
      <section className="w-full bg-surface relative   flex items-center justify-center">
        <h1 className="absolute z-20 left-10 top-10 text-tertiary-heading text-4xl font-heading">Hero 1</h1>
        <Hero />

      </section>



      <section className="w-full   xl:px-8 2xl:px-0  bg-gradient-to-b from-secondary to-surface-dim gap-8    min-h-screen 2xl:min-h-[30vh]  flex flex-col items-center justify-center">
        <div className="2xl:w-4/5 relative bg-surface rounded-3xl  w-full h-full flex flex-col items-center justify-center  ">
          <h1 className="absolute z-20 left-10 top-10 text-tertiary-heading text-4xl font-heading">Produkt seksjon</h1>
          <div className="flex  flex-col items-center gap-2 p-4">
            <div className="bg-primary h-16 w-16 flex items-center justify-center rounded-full">
              <Earth className="w-8 h-8 text-primary-text" />
            </div>
            <h1 className="text-3xl font-heading   text-tertiary [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">Dekning over hele verden</h1>
            <p className="text-xl font-body text-secondary-text">Velg din destinasjon</p>


          </div>
          <div>
            <div className="ml-4">
              <SortSelector />
            </div>
            <div className="grid    py-8 mx-auto gap-8 grid-cols-12  justify-items-center  ">
              {/*    <EsimPolaroidCard country="France" region="Europe" gb="5GB" validity="1 month" price="49" imageUrl={franceImage} />
            <EsimPolaroidCard country="France" region="Europe" gb="5GB" validity="1 month" price="49" imageUrl={franceImage} />
            <EsimPolaroidCard country="France" region="Europe" gb="5GB" validity="1 month" price="49" imageUrl={franceImage} />
            <EsimPolaroidCard country="France" region="Europe" gb="5GB" validity="1 month" price="49" imageUrl={franceImage} /> */}

              {popularDestinations.map((product) => (
                <ProductCard
                  id={product.id}
                  key={product.id}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  data={product.data}
                  validity={product.validity}
                  price={product.price}
                  currency={product.currency}
                />
              ))}



              {/*   <ProductCardTwo imageUrl={franceImage} title="France" region="Europe" data="5GB" validity="1 month" price="49" currency="NOK" />
            <ProductCardTwo imageUrl={franceImage} title="France" region="Europe" data="5GB" validity="1 month" price="49" currency="NOK" />
            <ProductCardTwo imageUrl={franceImage} title="France" region="Europe" data="5GB" validity="1 month" price="49" currency="NOK" />
            <ProductCardTwo imageUrl={franceImage} title="France" region="Europe" data="5GB" validity="1 month" price="49" currency="NOK" />
            <ProductCardThree imageUrl={franceImage} title="France" region="Europe" data="5GB" validity="1 month" price="49" currency="NOK" />
            <ProductCardFour imageUrl={franceImage} title="France" region="Europe" data="5GB" validity="1 month" price="49" currency="NOK" />
            <ProductCardThree imageUrl={franceImage} title="France" region="Europe" data="5GB" validity="1 month" price="49" currency="NOK" />
            <ProductCardFour imageUrl={franceImage} title="France" region="Europe" data="5GB" validity="1 month" price="49" currency="NOK" /> */}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative bg-surface  min-h-screen  flex items-center justify-center">
        <h1 className="absolute z-20 left-10 top-10 text-tertiary-heading text-4xl font-heading">3-step component</h1>
        <EsimStepHero />

      </section>

      <section className="w-full relative bg-surface 2xl:px-28 2xl:py-28   flex items-center justify-center">
        <h1 className="absolute z-20 left-10 top-10 text-tertiary-heading text-4xl font-heading">Hero 2</h1>
        <TravelHero />
      </section>


      <section className="w-full relative bg-surface 2xl:px-28 2xl:py-28   flex items-center justify-center">
        <h1 className="absolute z-20 left-10 top-10 text-tertiary-heading text-4xl font-heading">E-sim fordeler component</h1>
        <CompareCard />
      </section>

      <section className="w-full relative bg-surface 2xl:px-28 2xl:py-28   flex items-center justify-center">
        <h1 className="absolute z-20 left-10 top-10 text-tertiary-heading text-4xl font-heading">Hero 3</h1>
        <CreativeHero />
      </section>

      <section className="w-full relative bg-surface 2xl:px-28 2xl:py-28   flex items-center justify-center">
        <h1 className="absolute z-20 left-10 top-10 text-tertiary-heading text-4xl font-heading">FAQ component</h1>
        <Faq />
      </section>






    </main>
  );
}
