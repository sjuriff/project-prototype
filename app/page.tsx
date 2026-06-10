
import { CreativeHero } from "@/components/home/creative-hero";
import products from "@/dummy-data/esim-products.json";
import { Product } from "@/types/product";

import ProductSection from "@/components/home/product-section";
import Faq from "@/components/home/FAQ";
import CompareCard from "@/components/home/compare-card";

import ReversedHero from "@/components/home/reversed-hero";




import ImageHero from "@/components/home/image-hero";
import heroImage from '@/public/images/beam-wide-hero_two.png'
import ESimInfoHero from "@/components/home/esim-info-hero";






export default async function Home() {
  const popularProducts: Product[] = products.popular;
  const regionProducts: Product[] = products.regions;
  const countries: Product[] = products.countries;





  return (
    <main className="bg-surface    md:w-full overflow-hidden  flex flex-col  2xl:gap-0">
      <section className="w-full h-full bg-gradient-to-b from-surface to-secondary fhd:px-0   flex items-center justify-center">
        {/*  <Hero /> */}
        <ImageHero popular={popularProducts} counrties={countries} imgData={heroImage} imgAlt="hero" title="Dekning over hele verden" />

      </section>

      <ProductSection popularProducts={popularProducts} regionProducts={regionProducts} />

      <section className="w-full    xl:px-10 2xl:px-16  mt-8 ">
        <ESimInfoHero />

      </section>


      {/* <section className="w-full relative bg-surface  min-h-[50vh]  flex items-center justify-center">
        <EsimStepHero />

      </section> */}



      <section className="w-full relative pt-0 bg-surface 2xl:px-28 2xl:py-28   flex items-center justify-center">
        <ReversedHero />
      </section>

      {/*   <section className="w-full relative bg-surface 2xl:px-28 2xl:py-28   flex items-center justify-center">
        <TravelHero />
      </section> */}


      <section className="w-full relative bg-surface xl:px-8 2xl:px-28 2xl:py-16   flex items-center justify-center">
        <CompareCard />
      </section>

      <section className="w-full   relative bg-surface 2xl:px-28 2xl:py-28   flex items-center justify-center">
        <CreativeHero />
      </section>

      <section className="w-full relative bg-surface 2xl:px-28 2xl:py-28   flex items-center justify-center">
        <Faq />
      </section>
    </main>
  );
}
