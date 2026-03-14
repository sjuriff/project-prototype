"use client";
import { useState } from "react";

interface SortSelectorProps {
  sort: string;
  onSortChange: (value: string) => void;
}

export default function ProductSortBar({ sort, onSortChange }: SortSelectorProps) {


  const tabs = [
    { key: "popular", label: "Populært" },
    { key: "region", label: "Region" }
  ];

  //${sort === key ? "border-b-2 border-tertiary text-primary-text" : " hover:text-tertiary hover:cursor-pointer"}

  return (
    <div className="inline-flex  overflow-hidden bg-surface  ">
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onSortChange(key)}
          className={`px-4 py-2 text-sm flex gap-1 flex-col ${sort === key ? "font-bold pointer-events-none" : "font-medium"} items-center justify-center  text-primary-text transition hover:text-tertiary hover:cursor-pointer
            `}
        >
          {label}
          <div className={`flex ${sort === key ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-300  items-center gap-1`}>
            <div className="w-2 rounded-l-lg h-1 bg-tertiary"></div>
            <div className="w-2  h-1 bg-tertiary"></div>
            <div className="w-18  h-1 bg-gradient-to-r from-tertiary via-tertiary to-transparent"></div>
          </div>
        </button>
      ))}
    </div>
  );
}

