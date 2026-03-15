'use client';
import { Plane, X, Earth } from "lucide-react";

interface FilterHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
  resultCount: number;
}

export default function FilterHeader({
  search,
  onSearchChange,
  resultCount,
}: FilterHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-surface to-secondary px-6 pt-20 pb-32">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div>
          <div className=" relative w-fit mx-auto">
            <div className="bg-primary z-0 absolute -top-8 -right-8 h-16 w-16 flex items-center justify-center rounded-full">
              <Earth className="w-8 h-8 text-primary-text" />
            </div>
            <h1 className="text-5xl relative font-heading z-10   text-primary-text [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">Alle destinasjoner</h1>
          </div>
          <p className="text-secondary-text text-lg mt-2 font-price">
            {resultCount} destinasjon{resultCount !== 1 ? "er" : ""}
          </p>
        </div>

        <div className="relative rounded-full group focus-within:ring-2 focus-within:ring-tertiary transition">
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

        {/*  <div className="relative max-w-md mx-auto">
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
        </div> */}
      </div>
    </section>
  );
};


