'use client'
import Image from 'next/image';
import { Wifi, Globe, Radio, Calendar, Shield, RadioTower } from 'lucide-react';
import PrimaryButton from './buttons/primary-button';
import Link from 'next/link';
import paths from '@/paths';
import { useCart } from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { usePersistedProduct } from '@/hooks/use-persisted-product';
import { Tier } from '@/types/product';
import GhostButton from './buttons/ghost-button';

/**         backgroundColor: '#d6cfc3', // warm paper
                  backgroundImage: "url('/images/polaroid-paper.jpg')", // repeating grain
                  backgroundRepeat: 'repeat',
                  backgroundBlendMode: "overlay",
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom right',
                  boxShadow: `
      0 12px 25px rgba(0,0,0,0.20),
      0 2px 3px rgba(0,0,0,0.10),
      inset 0 0 6px rgba(0,0,0,0.10)  // thickness effect
    ` */
interface ProductDetailCardProps {
  id: string;
  image: string | null;
  title: string;
  description: string;
  price: number;
  countryCode: string;
  data: string;
  validity: string;
  tiers: Tier[]
}



export default function ProductDetailV2({
  id,
  image,
  title,
  description,
  countryCode,
  price,
  data,
  validity,
  tiers
}: ProductDetailCardProps) {


  const [tier, setTier] = useState<Tier>({
    data: data,
    validity: validity,
    price: price
  })

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
    "2GB": { dotOne: null, dotTwo: null, line: null },
    "5GB": { dotOne: null, dotTwo: null, line: null },
    "10GB": { dotOne: null, dotTwo: null, line: null },
    "20GB": { dotOne: null, dotTwo: null, line: null },
  });
  const { addItem } = useCart()
  const { persistProduct } = usePersistedProduct()
  const router = useRouter()


  const flagImage: string = 'https://borderly.dev/flag/circle/' + countryCode.toLowerCase() + '.svg'
  const countryOutlineImage: string = 'https://borderly.dev/country/' + countryCode.toLowerCase() + '.svg?fill=f9f871&stroke=f9f871&strokeWidth=1'




  const handleTierClick = (tier: Tier) => {

    setTier(tier)
  }



  console.log("tiers", tiers)

  const handleAddToCartClick = (id: string, title: string, countryCode: string) => {

    addItem({
      id: id,
      title: title,
      data: tier.data,
      countryCode: countryCode,
      validity: tier.validity,
      price: tier.price,
      quantity: 1,
    })

    router.push(paths.cart)



  }

  const handleBuyClick = () => {
    addItem({
      id,
      title,
      countryCode,
      data: tier.data,
      validity: tier.validity,
      price: tier.price,
      quantity: 1

    });

    router.push(paths.checkout("1"));
  }

  useGSAP(
    () => {
      const active = indicatorRefs.current[tier.data];
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
    { dependencies: [tier] }
  );


  return (
    <div className="md:h-[800px] flex items-center justify-center  ">
      <div className="max-w-6xl h-full ">
        <div className="bg-surface h-full rounded-2xl shadow-lg overflow-hidden">
          <div className="grid  h-full md:grid-cols-16">
            {/* Left side - Polaroid Image */}

            <div className="flex h-full relative col-span-9  flex-col  items-center justify-around    bg-secondary">
              <div className='md:h-10 h-8 w-8 z-10 md:w-10 absolute left-4 top-4'>
                <Image
                  src={flagImage}
                  alt="Paris, France"
                  className="w-full   "
                  width={2000}
                  height={2000}

                />
              </div>
              {image ? (
                <div className=" z-0 relative  w-full h-1/2   "
                >
                  <div className="flex absolute w-full -bottom-1 z-10  items-center gap-4">
                    <div className="w-25   h-4 bg-secondary"></div>
                    <div className="w-25  h-4 bg-secondary"></div>
                    <div className="w-full  h-4 bg-secondary"></div>
                  </div>
                  <div className="relative h-full w-full overflow-hidden ">

                    <Image
                      src={image}
                      alt="Paris, France"
                      className="w-full   h-full opacity-95
    contrast-95
    saturate-90
    mix-blend-multiply  object-cover"
                      width={2000}
                      height={2000}

                    />
                  </div>

                </div>
              ) : (<div className=" relative bg-secondary-heading    flex items-center justify-center   w-full h-1/2 ">
                <div className="flex absolute w-full -bottom-1 z-10  items-center gap-4">
                  <div className="w-25   h-4 bg-secondary"></div>
                  <div className="w-25  h-4 bg-secondary"></div>
                  <div className="w-full  h-4 bg-secondary"></div>
                </div>
                <Image
                  src={countryOutlineImage}
                  alt="Paris, France"
                  className="w-full h-full object-contain"
                  width={2000}
                  height={2000}

                />

              </div>)}


              <div className="space-y-4   w-full flex-col items-center   flex   mt-16   justify-start  h-1/2 ">
                <div className='flex  p-4   md:rounded-lg flex-col gap-4'>
                  <div className="flex items-start  gap-3">
                    <div className="mt-1 p-2 rounded-full bg-surface" >
                      <Wifi className="w-5 h-5 text-secondary-text" />
                    </div>
                    <div className=' font-body text-secondary-text'>
                      <p > High-Speed Data</p>
                      <p >4G/5G-dekning i hele {title}</p>
                    </div>
                  </div>



                  <div className="flex   items-start gap-3">
                    <div className="mt-1  bg-surface p-2 rounded-full" >
                      <Calendar className="w-5 h-5 text-secondary-text" />
                    </div>
                    <div className='text-secondary-text font-body'>
                      <p >{tier?.validity} dagers gyldighet</p>
                      <p >
                        Aktiveres ved første tilkobling</p>
                    </div>
                  </div>

                  <div className="flex  items-start gap-3">
                    <div className="mt-1 bg-surface p-2 rounded-full" >
                      <Shield className="w-5 h-5 text-secondary-text" />
                    </div>
                    <div className='text-secondary-text'>
                      <p>Øyeblikkelig Levering</p>
                      <p >QR-kode sendes umiddelbart via e-post</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Product Details */}
            <div className=" p-4 md:p-8 col-span-7 md:p-12  bg-white">


              <h1 className="mb-2 text-2xl text-primary-text font-semibold  font-heading " >{title} eSIM Data Plan</h1>
              <p className="mb-6 text-secondary-text font-body" >
                Hold deg tilkoblet gjennom hele reisen din i med vårt høyhastighets eSIM-dataabonnement
              </p>

              <div className="flex font-body items-baseline gap-2 mb-8">
                <span className="text-4xl text-primary-text" >{tier?.price} kr</span>
                <span className="text-sm text-secondary-text" >engangsbetaling</span>
              </div>


              <div className='grid grid-cols-12 mb-8 shadow-md gap-y-6 gap-x-4 py-4 px-8 bg-surface  rounded-lg'>
                {tiers.map((item) => (
                  <div className=' col-span-12  md:col-span-6 flex flex-col items-start md:items-center justify-center bg-surface px-2 rounded '>
                    <div onClick={() => handleTierClick(item)} key={item.data} className={` ${item.price === tier.price ? '' : ''} flex relative  hover:cursor-pointer bg-surface  px-4 py-2    items-center justify-center gap-3 `}>
                      {item.popular && <span className={`absolute -top-3 -right-4 ${item.price === tier.price ? 'bg-primary' : 'bg-light-yellow'} text-xs  rounded-full px-1 py-1 font-body text-primary-text `} >Populær</span>}
                      <div className={`mt-1 p-2 rounded-full ${item.price === tier.price ? 'bg-primary text-primary-text' : ' bg-transparent text-primary-text '} `} >
                        <Radio className="w-5 h-5 " />

                      </div>
                      <div className={` font-body flex flex-col ${item.price === tier.price ? 'text-secondary-text' : 'text-secondary-text'} `}>
                        <p className=' font-heading text-sm' >{item.validity}</p>
                        <p >{item.data}</p>
                      </div>

                    </div>
                    <div
                      className={`flex items-center gap-1 w-full transition-opacity duration-200 ${item.price === tier.price ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <div
                        ref={(el) => {
                          indicatorRefs.current[item.data].dotOne = el;
                        }}
                        className="w-2 h-1 rounded-l-lg bg-tertiary"
                      />
                      <div
                        ref={(el) => {
                          indicatorRefs.current[item.data].dotTwo = el;
                        }}
                        className="w-2 h-1 bg-tertiary"
                      />
                      <div
                        ref={(el) => {
                          indicatorRefs.current[item.data].line = el;
                        }}
                        className="w-full h-1 bg-gradient-to-r from-tertiary via-tertiary to-transparent"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className='flex p-4 border mb-8 bg-tertiary items-center justify-center gap-2 rounded-lg flex'>

                <RadioTower className="w-5 h-5 text-tertiary-text" />
                <p className='text-tertiary-text font-body text-base'>Operatørvalg:</p>
                <p className='text-tertiary-text font-body text-base'>Opratør</p>
              </div>


              <div className="flex w-full items-center flex-col gap-4">
                {/* <Link href={paths.checkout(id)}> */}
                <div className='w-full'>
                  <PrimaryButton onClick={handleBuyClick} fullWidth  >

                    Kjøp Nå
                  </PrimaryButton>
                </div>
                {/*  </Link> */}
              {/*   <div className='w-full flex items-center justify-center'>
                  <GhostButton className='w-full'  >
                    Legg til i handlekurv
                  </GhostButton>
                </div> */}
              </div>
              <div className="mt-6 md:p-4  " >
                <p className='text-primary-text text-sm md:text-base font-body' >
                  ✓ Ingen kontrakter eller abonnementer<br />
                  ✓ Behold ditt orginale nummer<br />
                  ✓ Kompatibel med alle eSIM-enheter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}