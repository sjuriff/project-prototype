'use client'
import { useState, useMemo } from "react";
import FilterHeader from "./filter-header";
import ProductGrid from "./products-grid";
import eSIMProducts from "@/dummy-data/esim-products.json";

export default function ProductsSection()  {
  const [search, setSearch] = useState("");
  const destinations = eSIMProducts.countries

  const filtered = useMemo(() => {
    if (!search) return destinations;
    const q = search.toLowerCase();
    return destinations.filter(
      (d) => d.title.toLowerCase().includes(q) || d.title.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-surface">
      <FilterHeader
        search={search}
        onSearchChange={setSearch}
        resultCount={filtered.length}
      />
      <div className=" mx-auto px-10 -mt-16">
        <div className="bg-surface rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_20px_-5px_rgba(0,0,0,0.04)]">
          <ProductGrid products={filtered} />
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
};


