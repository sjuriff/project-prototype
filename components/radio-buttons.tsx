"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";


interface SortSelectorProps {
  sort: string;
  onSortChange: (value: string) => void;
}

export default function ProductSortBar({ sort, onSortChange }: SortSelectorProps) {
  const indicatorRefs = useRef<
    Record<
      string,
      {
        dotOne: HTMLDivElement | null;
        dotTwo: HTMLDivElement | null;
        line: HTMLDivElement | null;
      }
    >
  >({
    popular: { dotOne: null, dotTwo: null, line: null },
    region: { dotOne: null, dotTwo: null, line: null },
  });

  const tabs = [
    { key: "popular", label: "Populært" },
    { key: "region", label: "Region" }
  ];

  useGSAP(
    () => {
      const active = indicatorRefs.current[sort];
      if (!active?.dotOne || !active?.dotTwo || !active?.line) return;

      gsap.killTweensOf([active.dotOne, active.dotTwo, active.line]);

      const tl = gsap.timeline();

      tl.fromTo(
        active.dotOne,
        { opacity: 0, scaleX: 0, y: 5, transformOrigin: "left center" },
        { opacity: 1, y: 0, ease: "expo.out", duration: 0.2, scaleX: 1 }
      )
        .fromTo(
          active.dotTwo,
          { opacity: 0, scaleX: 0, transformOrigin: "left center" },
          { opacity: 1, ease: "expo.out", duration: 0.2, scaleX: 1 }
        )
        .fromTo(
          active.line,
          { opacity: 0, scaleX: 0, transformOrigin: "left center" },
          { opacity: 1, scaleX: 1, ease: "power3.out", duration: 0.2 },
          "-=0.05"
        );
    },
    { dependencies: [sort] }
  );

  //${sort === key ? "border-b-2 border-tertiary text-primary-text" : " hover:text-tertiary hover:cursor-pointer"}

  return (
    <div className="inline-flex px-4 md:px-0  justify-center overflow-hidden bg-surface  ">
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onSortChange(key)}
          className={`md:px-4 px-2 py-2 text-sm flex gap-1 flex-col ${sort === key ? "font-bold pointer-events-none" : "font-medium"} items-center justify-center  text-primary-text transition hover:text-tertiary hover:cursor-pointer
            `}
        >
          {label}
          <div
            className={`flex items-center gap-1 transition-opacity duration-200 ${sort === key ? "opacity-100" : "opacity-0"
              }`}
          >
            <div
              ref={(el) => {
                indicatorRefs.current[key].dotOne = el;
              }}
              className="w-2 h-1 rounded-l-lg bg-tertiary"
            />
            <div
              ref={(el) => {
                indicatorRefs.current[key].dotTwo = el;
              }}
              className="w-2 h-1 bg-tertiary"
            />
            <div
              ref={(el) => {
                indicatorRefs.current[key].line = el;
              }}
              className="w-18 h-1 bg-gradient-to-r from-tertiary via-tertiary to-transparent"
            />
          </div>

        </button>
      ))}
      <Link href={"/produkter"} className={`md:px-4 px-2 py-2 text-sm flex gap-1 font-medium     text-primary-text transition hover:text-tertiary hover:cursor-pointer
            `}>Alle destinasjoner</Link>
    </div>
  );
}

