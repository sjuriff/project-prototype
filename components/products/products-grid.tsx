import useIsMobile from "@/hooks/is-mobile";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Product } from "@/types/shopify-product";
import { MobileProductCard } from "../mobile-product-card";

import { ProductCard } from "../product-card";

gsap.registerPlugin(useGSAP);

const ProductGrid = ({ products }: { products: Product[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useGSAP(
    () => {
      if (!containerRef.current || products.length === 0) return;
      const cards = containerRef.current.querySelectorAll(".product-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "expo.out", stagger: 0.13 }
      );
    },
    { scope: containerRef, dependencies: [products] }
  );

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-display font-medium text-foreground mb-2">Ingen treff</h2>
        <p className="text-muted-foreground text-sm">Prøv å endre søket ditt.</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-12 gap-x-6 justify-items-center gap-y-12"
    >
      {products.map((product) => (
        isMobile ?
          (<MobileProductCard
            sort=""
            id={product.id}
            key={product.id}
            imageUrl={product.imageUrl}
            countryCode={product.countryCode}
            title={product.title}
            validity={product.tiers[0].validity}
            tiers={product.tiers}
          />)
          : (

            <ProductCard id={product.id}
              key={product.id}
              sort=""
              imageUrl={product.imageUrl}
              countryCode={product.countryCode}
              title={product.title}
              validity={product.tiers[0].validity}
              tirers={product.tiers}
            />
          )
      ))}

    </div>
  );
};

export default ProductGrid;
