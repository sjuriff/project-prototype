
import { CreativeHero } from "@/components/creative-hero";

import ProductSection from "@/components/product-section";
import Faq from "@/components/FAQ";
import CompareCard from "@/components/compare-card";

import ReversedHero from "@/components/reversed-hero";
import HowItWorksSection from "@/components/how-it-works";


import ImageHero from "@/components/image-hero";
import heroImage from '@/public/images/beam-wide-hero.jpeg'
import ESimInfoHero from "@/components/esim-info-hero";






export default function Home() {

  return (
    <main className="bg-surface  flex flex-col  2xl:gap-0">
      <section className="w-full z-0 bg-gradient-to-b from-surface to-secondary relative   flex items-center justify-center">
        {/*  <Hero /> */}
        <ImageHero imgData={heroImage} imgAlt="hero" title="Dekning over hele verden" />

      </section>

      <ProductSection />

      <section className="w-full">
        <ESimInfoHero />

      </section>


      {/* <section className="w-full relative bg-surface  min-h-[50vh]  flex items-center justify-center">
        <EsimStepHero />

      </section> */}



      <section className="w-full relative pt-28 bg-surface 2xl:px-28 2xl:py-28   flex items-center justify-center">
        <ReversedHero />
      </section>

      {/*   <section className="w-full relative bg-surface 2xl:px-28 2xl:py-28   flex items-center justify-center">
        <TravelHero />
      </section> */}


      <section className="w-full relative bg-surface xl:px-8 2xl:px-28 2xl:py-28   flex items-center justify-center">
        <CompareCard />
      </section>

      <section className="w-full relative bg-surface 2xl:px-28 2xl:py-28   flex items-center justify-center">
        <CreativeHero />
      </section>

      <section className="w-full relative bg-surface 2xl:px-28 2xl:py-28   flex items-center justify-center">
        <Faq />
      </section>
    </main>
  );
}
