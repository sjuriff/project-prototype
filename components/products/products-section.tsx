'use client'
import { useState, useMemo } from "react";
import FilterHeader from "./filter-header";
import ProductGrid from "./products-grid";
import eSIMProducts from "@/dummy-data/esim-products.json";

export default function ProductsSection() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [region, setRegion] = useState("");
  const destinations = eSIMProducts.countries

  const products = useMemo(() => {
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
      list = [...list].sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sort === 'price-high') {
      list = [...list].sort((a, b) => Number(b.price) - Number(a.price));
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
        resultCount={products.length}
      />
      <div className=" mx-auto px-10 ">
        <div className="bg-surface relative z-0 rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_20px_-5px_rgba(0,0,0,0.04)]">
          <ProductGrid products={products} />
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
};


