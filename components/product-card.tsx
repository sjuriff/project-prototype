'use client'
import Image from 'next/image';
import { Globe, Zap } from 'lucide-react';
import { StaticImageData } from 'next/image';
import PrimaryButton from './buttons/primary-button';
import primaryLine from '@/public/images/primary-line.png';
import Link from 'next/link';
import paths from '@/paths';
import { useState } from 'react';
import { CustomDropdown } from './custom-dropdown';
import { useRouter } from 'next/navigation';
import { usePersistedProduct } from '@/hooks/use-persisted-product';
import { Tier } from '@/types/shopify-product';
import { FaEarthAmericas, FaEarthEurope, FaEarthAsia, FaEarthAfrica, FaGlobe } from "react-icons/fa6"
import GhostButton from './buttons/ghost-button';
import { useCart } from '@/hooks/use-cart';



const regionCodeIcon = (countryCode: string): React.ReactNode => {
  if (countryCode === "US") {
    return <div className="md:w-fit shadow h-fit md:h-1/2 bg-light-yellow rounded-full ">
      <FaEarthAmericas className=" md:w-full text-9xl   md:h-full text-tertiary" />
    </div>;
  } else if (countryCode === "EU") {
    return <div className="md:w-fit shadow h-fit md:h-1/2 bg-light-yellow rounded-full ">
      <FaEarthEurope className=" md:w-full text-9xl  md:h-full text-tertiary" />
    </div>;
  } else if (countryCode === "AS") {
    return <div className="md:w-fit shadow h-fit md:h-1/2 bg-light-yellow rounded-full ">
      <FaEarthAsia className=" md:w-full text-9xl md:h-full text-tertiary" />
    </div>;
  } else if (countryCode === "AF") {
    return <div className="md:w-fit shadow h-fit md:h-1/2 bg-light-yellow rounded-full ">
      <FaEarthAfrica className=" md:w-full text-9xl md:h-full text-tertiary" />
    </div>
  } else {
    return <div className="md:w-fit shadow h-fit md:h-1/2 bg-primary rounded-full ">
      <FaGlobe className=" md:w-full text-9xl md:h-full text-tertiary" />
    </div>

  }

}



interface ProductCardProps {
  id: string;
  sort: string
  imageUrl: string | null;
  title: string;
  countryCode: string;
  tirers: Tier[];
  validity: string;
  currency?: string;
}

export function ProductCard({
  sort,
  id,
  imageUrl,
  title,
  countryCode,
  validity,
  tirers,
  currency = "NOK"
}: ProductCardProps) {

  let isRegion = sort === 'region'

  const [selectedTier, setSelectedTier] = useState<Tier>(tirers[1]);

  const { persistProduct } = usePersistedProduct();

  const router = useRouter();

  const { addItem } = useCart();

  const handleBuyClick = () => {
    addItem({
      id: id,
      title: title,
      data: selectedTier.data,
      countryCode: countryCode,
      validity: selectedTier.validity,
      price: selectedTier.price,
      quantity: 1,
    })

    router.push(paths.checkout("1"));
  };

  const handleReadMoreClick = () => {
    persistProduct({
      id,
      imageUrl,
      title,
      data: selectedTier.data,
      validity: selectedTier.validity,
      countryCode,
      price: selectedTier.price,
      currency,
      tiers: tirers,
    });
    router.push(paths.product("1"));
  }



  console.log('countryCode', countryCode)

  const flagImage: string = 'https://borderly.dev/flag/circle/' + countryCode.toLowerCase() + '.svg'
  const countryOutlineImage: string = 'https://borderly.dev/country/' + countryCode.toLowerCase() + '.svg?fill=FFF9CC&stroke=FFF9CC&strokeWidth=1'



  console.log(isRegion)

  return (
    <div className="product-card opacity-0  w-[300px] relative col-span-12  z-0 lg:col-span-4  xl:col-span-3 2xl:col-span-3 bg-secondary rounded-2xl overflow-hidden shadow-lg">
      {/* Product Image Section */}
      <div className="">
        <div className={`${isRegion ? 'bg-secondary' : 'bg-secondary border-b border-surface'}  flex items-center justify-center relative rounded-t-2xl overflow-hidden aspect-[4/3] `}>
          {!imageUrl && !isRegion &&
            <div className='absolute left-2 top-2 h-6 w-6 shadow-lg rounded-full   overflow-hidden '>
              <Image width={500} height={500} src={flagImage} alt="primary line" className='w-full  h-full object-center object-contain' />
            </div>
          }

          {isRegion ? (
            regionCodeIcon(countryCode)
          ) : (
            <Image
              src={imageUrl ? imageUrl : countryOutlineImage}
              alt={title}
              width={1000}
              height={1000}
              className={`w-full h-full  ${imageUrl ? 'object-cover' : 'object-fit  '}  `}
            />

          )}

        </div>
      </div>


      <div className=' z-0 mt-4'>
        <h3 className="text-primary-text ml-4 font-heading mb-1">{title}</h3>
        <div className="w-full pl-4  right-0 -top-1 z-10">
          <div className="flex w-full  items-center gap-2">
            <div className="w-5 rounded-l-lg h-[10px] bg-primary"></div>
            <div className="w-5 h-[10px] bg-primary"></div>
            <div className="flex-1 h-[10px] bg-gradient-to-r from-primary via-primary to-transparent"></div>
          </div>
        </div>
      </div>
      {/* Product Details Section */}
      <div className="p-6 relative z-0 w-full   pt-6">


        <div className="flex font-body  items-center justify-around mb-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-secondary-text text-sm">Data</span>
            </div>
            <CustomDropdown options={tirers} value={selectedTier.data} onChange={(value) => setSelectedTier(tirers.find((tier) => tier.data === value) || tirers[0])} placeholder={selectedTier.data} className='' />
          </div>

          <div className="flex flex-col font-body items-center">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-secondary-text text-sm">Gyldig i</span>
            </div>
            <p className="text-secondary-text">{selectedTier.validity}</p>
          </div>
        </div>

        <div className="pt-4 border-t font-body border-tertiary-text/20">
          <div className="flex items-end justify-between">
            <span className="text-secondary-text text-sm">Pris</span>
            <div className="flex items-baseline gap-1">
              <span className="text-secondary-text text-2xl"><span className='text-xl'>{currency}</span> {Number(selectedTier.price)}</span>

            </div>
          </div>
        </div>
        <div className='flex mt-4 gap-2 flex-col'>


          <PrimaryButton onClick={handleBuyClick} fullWidth >
            Kjøp nå
          </PrimaryButton>




          <GhostButton onClick={handleReadMoreClick} className="">
            Les mer
          </GhostButton>

        </div>
      </div>
    </div >
  );
}