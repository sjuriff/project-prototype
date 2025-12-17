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

interface Tier {
  data: string;
  validity: string;
  price: string;
}

interface ProductCardProps {
  id: string;
  imageUrl: StaticImageData;
  title: string;
  data: string;
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
  validity,
  tirers,
  price,
  currency = "NOK"
}: ProductCardProps) {

   const [selectedTier, setSelectedTier] = useState<Tier>(tirers[1]);


 
  return (
    <div className="w-[320px]  xl:col-span-4 2xl:col-span-4 bg-gradient-to-t from-tertiary to-tertiary/80 rounded-2xl overflow-hidden shadow-lg">
      {/* Product Image Section */}
      <div className="p-6 pb-2 ">
        <div className="bg-white rounded-xl overflow-hidden aspect-[4/3] mb-4">
          <Image
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-tertiary-text font-heading mb-1">{title}</h3>
      </div>

      {/* Separator with dots and line */}
      <div className="flex px-5 items-center gap-2">
        <div className="w-5 rounded-l-lg h-[10px] bg-primary"></div>
        <div className="w-5 h-[10px] bg-primary"></div>
        <div className="flex-1 h-[10px] bg-gradient-to-r from-primary via-primary to-transparent"></div>
      </div>

      {/* Product Details Section */}
      <div className="p-6  pt-6">
        <div className="flex font-body  items-center justify-around mb-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-tertiary-text text-sm">Data</span>
            </div>
            <CustomDropdown options={tirers} value={selectedTier.data} onChange={(value) => setSelectedTier(tirers.find((tier) => tier.data === value) || tirers[0])} placeholder={selectedTier.data} className='' />
          </div>

          <div className="flex flex-col font-body items-center">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-tertiary-text text-sm">Gyldig i</span>
            </div>
            <p className="text-tertiary-text">{selectedTier.validity}</p>
          </div>
        </div>

        <div className="pt-4 border-t font-body border-tertiary-text/20">
          <div className="flex items-end justify-between">
            <span className="text-tertiary-text/80 text-sm">Pris</span>
            <div className="flex items-baseline gap-1">
              <span className="text-tertiary-text text-2xl"><span className='text-xl'>{currency}</span> {selectedTier.price}</span>

            </div>
          </div>
        </div>
        <div className='flex mt-4 flex-col'>

          <Link className='w-full ' href={paths.checkout(id)}>
            <PrimaryButton fullWidth >
              Kjøp nå
            </PrimaryButton>

          </Link>

          <Link href={paths.product(id)}>
            <button className="w-full font-heading mt-4 bg-transparent border-primary border hover:scale-102 hover:cursor-pointer  text-tertiary-text py-3 px-4 rounded-lg transition-all ease-in-out">
              Les mer
            </button>
          </Link>
        </div>
      </div>
    </div >
  );
}