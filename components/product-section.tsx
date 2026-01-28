'use client'
import { ProductCard } from "./product-card";
import  eSIMProducts  from "@/dummy-data/esim-products.json";
import { Earth } from "lucide-react";
import { useState, useEffect, useRef, use } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


import SortSelector from "@/components/radio-buttons";
import {Product, Tier} from '@/types/product'





export default function ProductSection() {
  const [shownProducts, setShownProducts] = useState<Product[]>(eSIMProducts.popular);
  const [sort, setSort] = useState("popular");
  const containerRef = useRef<HTMLDivElement>(null);
  


useEffect(() => {
  const resizeObserver = new ResizeObserver(() => {
    ScrollTrigger.refresh();
  })

  resizeObserver.observe(containerRef.current!);
  return () => {
    resizeObserver.disconnect();
  }
  
}, [])

 

  const handleSortChange = (value: string) => {
    setSort(value);
    if (value === "popular") {
      setShownProducts(eSIMProducts.popular);
    } else if (value === "region") {
      setShownProducts(eSIMProducts.regions);
    } else {
      setShownProducts(eSIMProducts.countries);
    }
  };
  

  return (
    <section className="w-full z-10   xl:px-8 2xl:px-0  bg-gradient-to-b from-secondary to-surface-dim gap-8    min-h-screen 2xl:min-h-[30vh]  flex flex-col items-center justify-center">
        <div className="2xl:w-4/5 mt-28 relative bg-surface rounded-3xl  w-full h-full flex flex-col items-center justify-center  ">
          <div className="flex  flex-col items-center gap-2 p-4">
            <div className="bg-primary h-16 w-16 flex items-center justify-center rounded-full">
              <Earth className="w-8 h-8 text-primary-text" />
            </div>
            <h1 className="text-5xl font-heading   text-primary-text [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">Dekning over hele verden</h1>
            <p className="text-xl font-body text-secondary-text">Velg din destinasjon</p>
          </div>
          <div>
            <div className="ml-4">
              <SortSelector sort={sort} onSortChange={handleSortChange} />
            </div>
            <div ref={containerRef} className="grid    py-8 mx-auto gap-24 grid-cols-12  justify-items-center  ">
              {shownProducts.map((product) => (
                <ProductCard
                  id={product.id}
                  key={product.id}
                  imageUrl={product.imageUrl}
                  countryCode={product.countryCode}
                  title={product.title}
                  data={product.data}
                  validity={product.validity}
                  price={product.price}
                  tirers={product.tiers}
                  currency={product.currency}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

  );
}