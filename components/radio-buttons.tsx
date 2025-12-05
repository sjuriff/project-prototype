"use client";
import { useState } from "react";

export default function ProductSortBar() {
  const [sort, setSort] = useState("popular");

  const tabs = [
    { key: "popular", label: "Populært" },
    { key: "region", label: "Region" },
    { key: "all", label: "Alle" },
  ];

  return (
    <div className="inline-flex rounded-lg overflow-hidden bg-surface border shadow-sm">
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setSort(key)}
          className={`px-4 py-2 text-sm font-medium transition
            ${sort === key ? "bg-tertiary text-tertiary-text" : " hover:text-tertiary hover:cursor-pointer"}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

