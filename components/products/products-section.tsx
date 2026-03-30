'use client'
import { useState, useMemo } from "react";
import FilterHeader from "./filter-header";
import ProductGrid from "./products-grid";
import eSIMProducts from "@/dummy-data/esim-products.json";
import { Product } from "@/types/shopify-product";

interface ProductSectionsProps {
  products: Product[]
  
}
export default function ProductsSection({products}: ProductSectionsProps) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [region, setRegion] = useState("");
  const destinations = products

  const destinationsList = useMemo(() => {
    let list = destinations;

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (d) =>
          d.title.toLowerCase().includes(q)
        // || d.description?.toLowerCase().includes(q)
        // || d.region?.toLowerCase().includes(q)
      );
    }

    // Filter by region
    if (region) {
      list = list.filter((d) => d.region === region);
    }

    // Filter by sort
    if (sort === 'a-z') {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === 'z-a') {
      list = [...list].sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort === 'price-low') {
      list = [...list].sort((a, b) => Number(a.tiers[0].price) - Number(b.tiers[0].price));
    } else if (sort === 'price-high') {
      list = [...list].sort((a, b) => Number(b.tiers[0].price) - Number(a.tiers[0].price));
    }

    return list;
  }, [destinations, search, region, sort]);

  return (
    <div className="min-h-screen bg-gradient-to-b relative from-secondary to-surface">
      <FilterHeader
        search={search}
        sort={sort}
        region={region}
        onSortChange={setSort}
        onSearchChange={setSearch}
        onRegionChange={setRegion}
        resultCount={destinationsList.length}
      />
      <div className=" mx-auto px-4 md:px-10 fhd:px-48 ">
        <div className="bg-surface relative z-0  rounded-xl p-8 ">
          <ProductGrid products={destinationsList} />
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
};


