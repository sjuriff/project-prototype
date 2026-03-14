'use client';
import { Plane, X } from "lucide-react";

interface FilterHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
  resultCount: number;
}

export default function FilterHeader ({
  search,
  onSearchChange,
  resultCount,
}: FilterHeaderProps){
  return (
    <section className="bg-gradient-to-b from-surface to-secondary px-6 pt-20 pb-32">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div>
          <h1 className="text-5xl font-heading font-semibold">Alle destinasjoner</h1>
          <p className="text-secondary-text text-lg mt-2 font-price">
            {resultCount} destinasjon{resultCount !== 1 ? "er" : ""}
          </p>
        </div>

        <div className="relative max-w-md mx-auto">
          <Plane className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-surface rounded-full py-3 pl-11 pr-10 text-sm shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_20px_-5px_rgba(0,0,0,0.04)] outline-none focus:ring-2 focus:ring-tertiary transition-shadow placeholder:text-muted-foreground"
            placeholder="Søk etter land eller region..."
          />
          {search && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};


