import { useState } from "react";
import { Globe } from "lucide-react";
import PrimaryButton from "@/components/buttons/primary-button";
import { CustomDropdown } from "./custom-dropdown";
import { usePersistedProduct } from "@/hooks/use-persisted-product";
import { useRouter } from 'next/navigation';
import paths from "@/paths";
import Image from "next/image";
import { FaEarthAmericas, FaEarthEurope, FaEarthAsia, FaEarthAfrica, FaGlobe } from "react-icons/fa6"

export interface Tier {
  data: string;
  price: number;
  validity: string;
}

const regionCodeIcon = (countryCode: string): React.ReactNode => {
  if (countryCode === "US") {
    return <div className="md:w-fit shadow h-fit md:h-1/2 bg-tertiary rounded-full ">
      <FaEarthAmericas className=" md:w-full text-4xl  md:h-full text-primary" />
    </div>;
  } else if (countryCode === "EU") {
    return <div className="md:w-fit shadow h-fit md:h-1/2 bg-tertiary rounded-full ">
      <FaEarthEurope className=" md:w-full text-4xl  md:h-full text-primary" />
    </div>;
  } else if (countryCode === "AS") {
    return <div className="md:w-fit shadow h-fit md:h-1/2 bg-tertiary rounded-full ">
      <FaEarthAsia className=" md:w-full text-4xl md:h-full text-primary" />
    </div>;
  } else if (countryCode === "AF") {
    return <div className="md:w-fit shadow h-fit md:h-1/2 bg-tertiary rounded-full ">
      <FaEarthAfrica className=" md:w-full text-4xl md:h-full text-primary" />
    </div>
  } else {
    return <div className="md:w-fit shadow h-fit md:h-1/2 bg-tertiary rounded-full ">
      <FaGlobe className=" md:w-full text-4xl md:h-full text-primary" />
    </div>

  }

}

export interface PersistedProduct {
  id: string;
  imageUrl: string | null;
  title: string;
  countryCode: string;
  data: string;
  validity: string;
  price: number;
  currency: string;
  tiers: Tier[];
}

interface MobileProductCardProps {
  id: string;
  sort: string;
  title: string;
  imageUrl?: string | null;
  countryCode: string;
  tiers: Tier[];
  validity: string;
  currency?: string;
}

export function MobileProductCard({
  id,
  sort,
  title,
  imageUrl = null,
  countryCode,
  tiers,
  validity,
  currency = "NOK",
}: MobileProductCardProps) {
  const [selectedTier, setSelectedTier] = useState<Tier>(tiers[1] ?? tiers[0]);
  const { persistProduct } = usePersistedProduct();

  const isRegion = sort === "region";
  const flagUrl = `https://borderly.dev/flag/circle/${countryCode.toLowerCase()}.svg`;
  const router = useRouter();
    const countryOutlineImage: string = 'https://borderly.dev/country/' + countryCode.toLowerCase() + '.svg?fill=fffce6&stroke=fffce6&strokeWidth=1'



  const handleBuyClick = () => {
    persistProduct({
      id,
      imageUrl,
      title,
      countryCode,
      data: selectedTier.data,
      validity,
      price: selectedTier.price,
      currency,
      tiers: tiers,
    });

    router.push(paths.checkout("1"));
  };



  return (
    <div onClick={handleBuyClick} className="product-card overflow-hidden relative shadow-lg rounded-2xl flex col-span-12 w-full h-28 items-start gap-2   bg-secondary p-3">
      { !isRegion &&
      <div className="absolute z-0  top-0  opacity-50   -right-28 h-full w-full  rounded-2xl ">
      
        <Image
          src={countryOutlineImage}
          alt={`${title} flag`}
          className="h-10 w-10 shrink-0 rounded-full  object-cover" 
          fill
        />
      </div>
}
      <div className="flex z-10 flex-col gap-4 min-w-0  flex w-full flex-col gap-1">
        <div className="flex gap-4 items-center">
          {isRegion ? (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center">
              {regionCodeIcon(countryCode)}
            </div>
          ) : (
            <img
              src={flagUrl}
              alt={`${title} flag`}
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />
          )}

          {/* Info */}

          <span className="truncate text-sm font-heading font-semibold text-product-card-value">
            {title}
          </span>
        </div>
        <div className="flex  items-center justify-center font-body gap-2 text-xs ">
          <div className="w-1/2">
            <CustomDropdown options={tiers} value={selectedTier.data} onChange={(value) => setSelectedTier(tiers.find((tier) => tier.data === value) || tiers[0])} placeholder={selectedTier.data} className='' />
          </div>

          <span className="text-scondary-text">{selectedTier.validity}</span>
          <span className="font-semibold ">
            {Number(selectedTier.price)} kr
          </span>
        </div>
      </div>

      {/* Actions */}
      {/*    <div className="flex shrink-0 flex-col gap-1">
        <PrimaryButton
       
          onClick={handleBuyClick}
        >
          Kjøp
        </PrimaryButton>
        <PrimaryButton
          onClick={handleReadMoreClick}
        >
          Les mer
        </PrimaryButton>
      </div> */}
    </div>
  );
}
