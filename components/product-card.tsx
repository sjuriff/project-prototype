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
import { Tier } from '@/types/product';



interface ProductCardProps {
  id: string;
  imageUrl: string | null;
  title: string;
  data: string;
  countryCode: string;
  tirers: Tier[];
  validity: string;
  price: string;
  currency?: string;
}

export function ProductCard({
  id,
  imageUrl,
  title,
  data,
  countryCode,
  validity,
  tirers,
  price,
  currency = "NOK"
}: ProductCardProps) {

  const [selectedTier, setSelectedTier] = useState<Tier>(tirers[1]);

  const { persistProduct } = usePersistedProduct();

  const router = useRouter();

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
      tiers: tirers,
    });

    router.push(paths.checkout(id));
  };

  const handleReadMoreClick = () => {
    persistProduct({
      id,
      imageUrl,
      title,
      data: selectedTier.data,
      validity,
      countryCode,
      price: selectedTier.price,
      currency,
      tiers: tirers,
    });

    router.push(paths.product(id));

  }



  const flagImage: string = 'https://flagcdn.com/w320/' + countryCode.toLowerCase() + '.png'





  return (
    <div className="w-[300px] relative z-0  xl:col-span-3 2xl:col-span-4 bg-secondary rounded-2xl overflow-hidden shadow-lg">
      {/* Product Image Section */}
      <div className="">
        <div className="bg-white relative rounded-t-2xl overflow-hidden aspect-[4/3] ">
          <Image
            src={imageUrl ? imageUrl : flagImage}
            alt={title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
          <span className='h-32 absolute -top-10 -right-10 w-32 rounded-full bg-primary/80'></span>

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
              <span className="text-secondary-text text-2xl"><span className='text-xl'>{currency}</span> {selectedTier.price}</span>

            </div>
          </div>
        </div>
        <div className='flex mt-4 flex-col'>


          <PrimaryButton onClick={handleBuyClick} fullWidth >
            Kjøp nå
          </PrimaryButton>




          <button onClick={handleReadMoreClick} className="w-full font-heading mt-4 bg-transparent border-tertiary border hover:scale-102 hover:cursor-pointer  text-secondary-text py-3 px-4 rounded-lg transition-all ease-in-out">
            Les mer
          </button>

        </div>
      </div>
    </div >
  );
}