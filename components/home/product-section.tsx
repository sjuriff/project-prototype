'use client'
import { MobileProductCard } from "../mobile-product-card";
import { ProductCard } from "@/components/product-card";
import eSIMProducts from "@/dummy-data/esim-products.json";
import { Earth } from "lucide-react";
import { useState, useEffect, useRef, use } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Product } from "@/types/shopify-product";
import useIsMobile from "@/hooks/is-mobile";
import SortSelector from "@/components/radio-buttons";


gsap.registerPlugin(ScrollTrigger); 
gsap.registerPlugin(useGSAP);


interface ProductSectionProps {
  popularProducts: Product[];
  regionProducts: Product[];
}



export default function ProductSection({ popularProducts, regionProducts }: ProductSectionProps) {
  const [shownProducts, setShownProducts] = useState<Product[]>(popularProducts);
  const [sort, setSort] = useState("popular");
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const iconRef = useRef<HTMLDivElement>(null);




  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    })

    resizeObserver.observe(containerRef.current!);
    return () => {
      resizeObserver.disconnect();
    }

  }, [])

  useGSAP(
    () => {
      if (!iconRef.current || !containerRef.current) return

      gsap.fromTo(
        iconRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "expo.out", scrollTrigger: {trigger: containerRef.current, start: "top 90%", end: "50% 90%", scrub: true, markers: false} }
      );



      if (shownProducts.length === 0) return;
      const cards = containerRef.current.querySelectorAll(".product-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "expo.out", stagger: 0.13 }
      );
    },
    { scope: containerRef, dependencies: [shownProducts] }
  );



  const handleSortChange = (value: string) => {
    setSort(value);
    if (value === "popular") {
      setShownProducts(popularProducts);

    } else {
      setShownProducts(regionProducts);

    }
  };


  return (
    <section className="w-full z-0 relative 2xl:min-h-[30vh]   xl:px-8  2xl:px-16  bg-gradient-to-b from-secondary to-surface-dim gap-8    min-h-screen  flex flex-col items-center justify-center">
      <div className=" mt-8 relative bg-surface rounded-3xl fhd:w-[90%] overflow-hidden   w-full h-full flex flex-col items-center justify-center  ">
        <div className="flex  flex-col items-center gap-2 p-4">
          {/*  <div className="bg-primary h-16 w-16 flex items-center justify-center rounded-full">
            <Earth className="w-8 h-8 text-primary-text" />
          </div> */}

          <div ref={iconRef}  className="hidden  absolute md:block z-0 top-8 md:-top-52 -left-48 items-center h-[500px] w-[500px] flex justify-center gap-3  bg-primary/40 rounded-full">
          <Earth className="h-12 w-12 absolute top-60 right-28  md:w-38 md:h-38 z-0 text-tertiary opacity-75   " />
        </div>
          <div className=" relative">
            <div className="bg-primary md:hidden z-0 absolute -top-7 md:-top-8 -right-5 md:-right-8 h-12 w-12 md:h-16 md:w-16 flex items-center justify-center rounded-full">
              <Earth className="md:w-8 md:h-8 h-8 w-8 text-primary-text" />
            </div>
            <h1 className="md:text-5xl text-3xl relative text-center font-heading z-10   text-primary-text [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">Dekning over hele verden</h1>
          </div>
          <p className="text-lg md:text-xl font-body text-secondary-text">Velg din destinasjon</p>
        </div>
        <div className="">
          <div className="flex items-center gap-2 text-nowrap w-full   justify-center">
            <SortSelector sort={sort} onSortChange={handleSortChange} />
          </div>

          <div ref={containerRef} className="grid gap-x-8  px-16 md:px-0  w-full  py-8 w-full gap-10 grid-cols-12  justify-items-center  ">
            {shownProducts.map((product) => (
              isMobile ? (
                <MobileProductCard
                  sort={sort}
                  id={product.id}
                  key={product.id}
                  imageUrl={product.imageUrl}
                  countryCode={product.countryCode}
                  title={product.title}
                  validity={product.tiers[0].validity}
                  tiers={product.tiers}
                />
              ) : (
                <ProductCard
                  sort={sort}
                  id={product.id}
                  key={product.id}
                  imageUrl={product.imageUrl}
                  countryCode={product.countryCode}
                  title={product.title}
                  validity={product.tiers[0].validity}
                  tirers={product.tiers}
                />
              )
            ))}
          </div>

        </div>
      </div>
    </section>

  );
}