"use client";

import type { StaticImageData } from "next/image";
import { Plane } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import esimData from "@/dummy-data/esim-products.json";
import { usePersistedProduct } from "@/hooks/use-persisted-product";
import { useCountrySearch } from "@/hooks/use-country-search";
import { Product } from "@/types/shopify-product";


import VippsPayIcon from "@/components/vipps-pay-icon";

gsap.registerPlugin(useGSAP);

type Country = {
  id: string;     // ISO-2 like "US"
  title: string;  // "United States of America"
};

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
  counrties: Product[];
  popular: Product[];

}

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export default function ImageHero(props: HeroProps) {
  const router = useRouter();
  const countries = props.counrties;
  const popularContries = props.popular;

  const { persistProduct } = usePersistedProduct()

  // Use ISO-2 codes to match your dataset (id: "US", "TH", etc.)
  const popularDestinations = [
    { name: "USA", code: "US", flag: "🇺🇸" },
    { name: "Thailand", code: "TH", flag: "🇹🇭" },
    { name: "Japan", code: "JP", flag: "🇯🇵" },
    { name: "Tyrkia", code: "TR", flag: "🇹🇷" },
    { name: "Vietnam", code: "VN", flag: "🇻🇳" },
    { name: "Canada", code: "CA", flag: "🇨🇦" },
  ];

  const textContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textContainerRef.current) return;
    gsap.fromTo(
      textContainerRef.current,
      { x: "-120%" },
      { x: 0, duration: 0.5, ease: "back.out(1.1)" }
    );
  }, []);

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const results = useCountrySearch(countries, query, 8);


  function goToPopularCountry(title: string) {
    const chosenCountry = popularContries.find((c) => c.title === title);
    persistProduct({
      id: chosenCountry?.id ?? "",
      imageUrl: chosenCountry?.imageUrl ?? "",
      title: chosenCountry?.title ?? "",
      data: chosenCountry?.tiers[1].data ?? "",
      validity: chosenCountry?.tiers[1].validity ?? "",
      price: Number(chosenCountry?.tiers[1].price ?? 0),
      currency: "NOK",
      countryCode: chosenCountry?.countryCode ?? "",
      tiers: chosenCountry?.tiers ?? [],
    });
    // ✅ change this if your route differs
    router.push('/product/1');
  }

  function goToCountry(iso: string, title?: string) {
    const chosenCountry = countries.find((c) => c.id === iso);
    persistProduct({
      id: chosenCountry?.id ?? "",
      imageUrl: chosenCountry?.imageUrl ?? "",
      title: chosenCountry?.title ?? "",
      data: chosenCountry?.tiers[1].data ?? "",
      validity: chosenCountry?.tiers[1].validity ?? "",
      price: chosenCountry?.tiers[1].price ?? 0,
      countryCode: chosenCountry?.countryCode ?? "",
      currency: "NOK",
      tiers: chosenCountry?.tiers ?? [],
    });
    // ✅ change this if your route differs
    router.push('/product/1');
    if (title) setQuery(title);
    setOpen(false);
  }

  return (
    <div className="relative w-full h-[600px] xl:min-h-[700px]  xl:h-[calc(100dvh-5rem)] xl:max-h-[950px] 2xl:w-full 2xl:h-[750px] fhd:rounded-b-2xl  overflow-hidden w-full ">
      <div className="absolute w-full h-full z-0">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          className="-scale-x-100 object-[25%_center]   md:object-top object-cover"
        />
      </div>

      {/* Text Card */}
      <div
        ref={textContainerRef}
        className="lg:pt-28 w-[90%] ml-0 pl-0 lg:ml-28 xl:ml-16 xl:pt-12 2xl:pt-28 flex  z-50 -translate-x-[120%] md:w-1/2  justify-center items-center"
      >
        <div className="z-50 bg-transparent w-full flex flex-col gap-4 pl-2 md:px-12 pt-6 md:shadow-md pb-8 md:bg-surface-blue py-4 rounded-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-balance text-primary-text  leading-tight">
            <span className="bg-surface-blue  box-decoration-clone  md:[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">
              Rimelig og trygg mobildata på reise
            </span>
          </h1>

          <p className="text-md pr-10 md:pr-0  leading-tight md:leading-medium   md:text-xl text-balance md:text-pretty font-body text-primary-text md:text-secondary-text">
            <span className="bg-surface-blue/50 w-full  px-1 md:px-0  md:bg-transparent box-decoration-clone md:box-decoration-slice  [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">
              Dropp dyre datapakker. Aktiver eSIM på 2 minutter. Raskt, enkelt & dekning i 190+ land.
            </span>
          </p>

          {/* Search Input + Dropdown */}
          <div className="relative mr-4 md:mr-0  md:pr-0 rounded-full group  focus-within:ring-2 focus-within:ring-tertiary transition">
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              onBlur={() => {
                // delay so dropdown clicks register
                window.setTimeout(() => setOpen(false), 120);
              }}
              placeholder="Hvor skal du reise?"
              className="
                w-full pl-12  pr-4 py-4
                rounded-full border-2 border-secondary-text
                bg-surface-dim shadow-sm
                text-secondary-text
                focus:text-primary-text
                focus:outline-none
                focus:border-transparent
              "
            />

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

            {/* Dropdown */}
            {open && results.length > 0 && (
              <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-secondary-text bg-white shadow-lg">
                {results.map((c) => {
                  const flagImageUrl = `https://flagcdn.com/w320/` + c.countryCode.toLowerCase() + `.png`

                  return (
                    <button
                      key={c.id}
                      type="button"
                      onMouseDown={(e) => e.preventDefault()} // prevents blur before click
                      onClick={() => goToCountry(c.id, c.title)}
                      className="w-full relative text-left z-20 px-4 py-3 hover:bg-surface-dim flex items-center justify-between"
                    >
                      <span className="font-body text-primary-text">{c.title}</span>
                      <div className="  w-8 relative  flex items-center justify-center">
                        <Image className="object-cover " src={flagImageUrl} alt={c.title} width={32} height={32} />
                      </div>

                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Popular chips */}
          <div className="gap-4  flex flex-col md:flex-row items-start md:items-center justify-center w-full">
            {popularDestinations.map((destination) => (
              <button
                key={destination.code}
                type="button"
                onClick={() => goToPopularCountry(destination.name)}
                className="hover:cursor-pointer group flex items-center justify-center gap-2 duration-200 text-sm"
              >
                <span className="text-xl bg-surface/80 group-hover:border-2 transition-all ease-in-out border-primary w-9 h-9 md:h-10 md:w-10 flex items-center justify-center rounded-full">
                  {destination.flag}
                </span>
                <span>{destination.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vipps circle */}
      <div className="absolute -bottom-32 -right-32 md:w-80 md:h-80 z-30">
        <div className="absolute top-20 left-22">
          <VippsPayIcon height={80} width={80} />
        </div>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="100" className="fill-primary opacity-70" />
          <defs>
            <path id="leftArc" d="M100,180 A80,80 0 0,1 100,20" />
          </defs>
          <text className="fill-primary-text">
            <textPath
              href="#leftArc"
              startOffset="78%"
              textAnchor="middle"
              className="font-heading text-[10px] tracking-wide"
            >
              Betal enkelt med Vipps
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}