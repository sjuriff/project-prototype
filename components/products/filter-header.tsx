'use client';
import { Plane, X, Earth } from "lucide-react";
import BackButton from "../buttons/back-button";
import FilterDropdown from "./product-filter";
import { useState } from "react";

interface FilterHeaderProps {
  search: string;
  sort: string;
  region: string;
  onRegionChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  onSortChange: (value: string) => void;
  resultCount: number;
}

const SORT_OPTIONS = [
  { value: 'a-z', label: 'A → Å' },
  { value: 'z-a', label: 'Å → A' },
  { value: 'price-low', label: 'Pris: Lav → Høy' },
  { value: 'price-high', label: 'Pris: Høy → Lav' },
];

const REGIONS_OPTIONS = [
  { value: 'europe', label: 'Europa' },
  { value: 'asia', label: 'Asia' },
  { value: 'africa', label: 'Afrika' },
  { value: 'oceania', label: 'Oseania' },
  { value: 'north-america', label: 'Nord-Amerika' },
  { value: 'south-america', label: 'Sør-Amerika' },
]

export default function FilterHeader({
  search,
  region,
  onSearchChange,
  sort,
  onRegionChange,
  onSortChange,
  resultCount,
}: FilterHeaderProps) {

  const hasFilters = region || sort;


  return (
    <section className="bg-gradient-to-b z-10 max-h-[375px]  from-surface to-secondary px-6 relative pt-20 pb-10 ">
      <div className="absolute top-4 md:top-8 left-2 md:left-8">
        <BackButton />
      </div>
      <div className="max-w-2xl  mx-auto text-center space-y-8">
        <div>
          <div className=" relative w-fit mx-auto">
            <div className="bg-primary z-0 absolute -top-6 md:-top-8 -right-8 h-12 w-12 md:h-16 md:w-16 flex items-center justify-center rounded-full">
              <Earth className=" h-6 w-6 md:w-8 md:h-8 text-primary-text" />
            </div>
            <h1 className="text-3xl md:text-5xl relative font-heading z-10   text-primary-text [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">Alle destinasjoner</h1>
          </div>
          <p className="text-secondary-text text-lg mt-2 font-price">
            {resultCount} destinasjon{resultCount !== 1 ? "er" : ""}
          </p>
        </div>

        <div className="relative rounded-full  group focus-within:ring-2 focus-within:ring-tertiary transition">
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}

            placeholder="Hvor skal du reise?"
            className="
                w-full pl-12 pr-4 py-4
                rounded-full border-2 border-secondary-text
                bg-surface-dim shadow-sm
                text-secondary-text
                focus:text-primary-text
                focus:outline-none
                focus:border-transparent
              "
          />
          {search && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* Icon + sliding circle */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none overflow-hidden">
            <div className="relative flex items-center justify-center w-8 h-8">
              <div
                className="
                    absolute w-8 h-8 rounded-full bg-primary
                    -translate-x-[200%]
                    group-focus-within:translate-x-0
                    transition-transform duration-300 ease-out
                  "
              />
              <Plane className="relative h-4 w-4 text-secondary-text z-10" />
            </div>
          </div>
        </div>

      </div>
      <div className="flex md:pr-16 fhd:pr-48   w-full items-center mt-8 md:mt-16 justify-center md:justify-end gap-2">

        <FilterDropdown label="Sorter" value={sort} onChange={onSortChange} options={SORT_OPTIONS} />
        <FilterDropdown label="Region" value={region} onChange={onRegionChange} options={REGIONS_OPTIONS} />
        {hasFilters && (
          <button
            onClick={() => { onRegionChange(''); onSortChange(''); }}
            className="text-[12px] font-body text-secondary-text hover:cursor-pointer hover:text-primary-text px-2 py-1 transition-colors"
          >
            Fjern alle filtre
          </button>
        )}
      </div>
    </section>
  );
};


