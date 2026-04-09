
import { CreativeHero } from "@/components/home/creative-hero";

import ProductSection from "@/components/home/product-section";
import Faq from "@/components/home/FAQ";
import CompareCard from "@/components/home/compare-card";

import ReversedHero from "@/components/home/reversed-hero";
import HowItWorksSection from "@/components/home/how-it-works";
import { getPopularProducts } from "@/lib/shopify-storefront";
import { getRegionProducts } from "@/lib/shopify-storefront";
import { getAllProducts } from "@/lib/shopify-storefront";


import ImageHero from "@/components/home/image-hero";
import heroImage from '@/public/images/beam-wide-hero_two.png'
import ESimInfoHero from "@/components/home/esim-info-hero";






export default async function Home() {
  const popularProducts = await getPopularProducts(4);
  const regionProducts = await getRegionProducts(4);
  const countries = await getAllProducts(29);



  return (
    <main className="bg-surface    md:w-full overflow-hidden  flex flex-col  2xl:gap-0">
      <section className="w-full h-full bg-gradient-to-b from-surface to-secondary fhd:px-38   flex items-center justify-center">
        {/*  <Hero /> */}
        <ImageHero popular={popularProducts} counrties={countries} imgData={heroImage} imgAlt="hero" title="Dekning over hele verden" />

      </section>

      <ProductSection popularProducts={popularProducts} regionProducts={regionProducts} />

      <section className="w-full mt-8 ">
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


      <section className="w-full relative bg-surface xl:px-8 2xl:px-28 2xl:py-28   flex items-center justify-center">
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
