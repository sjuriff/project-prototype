'use client'
import { useState, useMemo } from "react";
import FilterHeader from "./filter-header";
import ProductGrid from "./products-grid";
import eSIMProducts from "@/dummy-data/esim-products.json";

export default function ProductsSection() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("a-å");
  const destinations = eSIMProducts.countries

  const filtered = useMemo(() => {
    if (!search) return destinations;
    const q = search.toLowerCase();
    return destinations.filter(
      (d) => d.title.toLowerCase().includes(q) || d.title.toLowerCase().includes(q)
    );
  }, [search]);


  const countries = useMemo(() => {
    let list = filtered;
    /*  let list = DESTINATIONS.filter(d => d.type === 'country'); */

    /* if (region) list = list.filter(d => d.region === region); */

    /*  if (price === 'low') list = list.filter(d => MOCK_PRICES[d.id] < 5);
     else if (price === 'mid') list = list.filter(d => MOCK_PRICES[d.id] >= 5 && MOCK_PRICES[d.id] <= 10);
     else if (price === 'high') list = list.filter(d => MOCK_PRICES[d.id] > 10); */
    if (sort === 'a-z') list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === 'z-a') list = [...list].sort((a, b) => b.title.localeCompare(a.title));
    else if (sort === 'price-low') list = [...list].sort((a, b) => Number(a.price) - Number(b.price));
    else if (sort === 'price-high') list = [...list].sort((a, b) => Number(b.price) - Number(a.price));

/*     else if (sort === 'price-low') list = [...list].sort((a, b) => MOCK_PRICES[a.id] - MOCK_PRICES[b.id]);
    else if (sort === 'price-high') list = [...list].sort((a, b) => MOCK_PRICES[b.id] - MOCK_PRICES[a.id]);
    else list = [...list].sort((a, b) => a.name.localeCompare(b.name)) */;

    return list;
  }, [/* region, price, */ sort]);

  return (
    <div className="min-h-screen bg-gradient-to-b relative from-secondary to-surface">
      <FilterHeader
        search={search}
        sort={sort}
        onSortChange={setSort}
        onSearchChange={setSearch}
        resultCount={filtered.length}
      />
      <div className=" mx-auto px-10 ">
        <div className="bg-surface relative z-0 rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_20px_-5px_rgba(0,0,0,0.04)]">
          <ProductGrid products={countries} />
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
};


