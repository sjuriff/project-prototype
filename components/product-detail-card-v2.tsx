'use client'
import Image from 'next/image';
import { Wifi, Globe, Radio, Calendar, Shield, RadioTower } from 'lucide-react';
import PrimaryButton from './buttons/primary-button';

import paths from '@/paths';
import { useCart } from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaEarthAmericas, FaEarthEurope, FaEarthAsia, FaEarthAfrica, FaGlobe } from "react-icons/fa6"
import { Tier } from '@/types/product';
import DurationDropdown from './custom-dropdown-v2';


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


const REGION_CODES = [
  "EU", // Europe
  "NA", // North America
  "SA", // South America
  "AS", // Asia
  "AF", // Africa
  "OC"  // Oceania
]

const regionCodeIcon = (countryCode: string): React.ReactNode => {
  if (countryCode === "US") {
    return <div className="md:w-fit shadow h-fit md:h-1/2 bg-transparent rounded-full ">
      <FaEarthAmericas className=" md:w-full text-9xl   md:h-full shadow text-secondary" />
    </div>;
  } else if (countryCode === "EU") {
    return <div className="md:w-fit shadow h-fit md:h-1/2 bg-transparent rounded-full ">
      <FaEarthEurope className=" md:w-full text-9xl  md:h-full text-secondary" />
    </div>;
  } else if (countryCode === "AS") {
    return <div className="md:w-fit shadow h-fit md:h-1/2 bg-transparent rounded-full ">
      <FaEarthAsia className=" md:w-full text-9xl md:h-full text-secondary" />
    </div>;
  } else if (countryCode === "AF") {
    return <div className="md:w-fit shadow h-fit md:h-1/2 bg-transparent rounded-full ">
      <FaEarthAfrica className=" md:w-full text-9xl md:h-full text-secondary" />
    </div>
  } else {
    return <div className="md:w-fit shadow h-fit md:h-1/2 bg-transparent rounded-full ">
      <FaGlobe className=" md:w-full text-9xl md:h-full text-secondary" />
    </div>

  }

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


  const days = [{ number: "7", price: 155 }, { number: "14", price: 255 }, { number: "30", price: 355 }, { number: "90", price: 655 }]

  const [plan, setPlan] = useState<"set" | "unlimited">("set")


  const isRegion: boolean = REGION_CODES.includes(countryCode)


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
    "set": { dotOne: null, dotTwo: null, line: null },
    "unlimited": { dotOne: null, dotTwo: null, line: null },

  });


  
  const { addItem } = useCart()
  const router = useRouter()


  const flagImage: string = 'https://borderly.dev/flag/circle/' + countryCode.toLowerCase() + '.svg'
  const countryOutlineImage: string = 'https://borderly.dev/country/' + countryCode.toLowerCase() + '.svg?fill=f9f871&stroke=f9f871&strokeWidth=1'




  const handleTierClick = (tier: Tier) => {

    setTier(tier)
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
      const active = indicatorRefs.current[plan];
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
    { dependencies: [plan] }
  );


  return (
    <div className="md:h-[800px] flex items-center justify-center  ">
      <div className="max-w-6xl h-full ">
        <div className="bg-surface h-full rounded-2xl  shadow-lg ">
          <div className="grid   h-full md:grid-cols-16">
            {/* Left side - Polaroid Image */}

            <div className="flex  h-full min-h-0 relative col-span-9    flex-col  items-center md:rounded-2xl   bg-secondary">
              <div className='md:h-10  h-8 w-8 z-10 md:w-10 absolute left-4 top-4'>
                {!isRegion &&
                  <Image
                    src={flagImage}
                    alt="Paris, France"
                    className="w-full   "
                    width={2000}
                    height={2000}

                  />
                }
              </div>
              {image ? (
                <div className=" z-0 rounded-t-2xl md:rounded-l-2xl overflow-hidden relative h-[250px]  w-full md:h-1/2   "
                >
               {/*    <div className="flex absolute w-full -bottom-1 z-10  items-center gap-4">
                    <div className="w-25   h-4 bg-secondary"></div>
                    <div className="w-25  h-4 bg-secondary"></div>
                    <div className="w-full  h-4 bg-secondary"></div>
                  </div> */}
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
              ) : (<div className=" relative bg-secondary-heading rounded-t-2xl md:rounded-t-none md:rounded-l-2xl    flex items-center justify-center   h-[250px]   w-full md:h-1/2 ">
              {/*   <div className="flex absolute w-full -bottom-1 z-10  items-center gap-4">
                  <div className="w-25    h-4 bg-secondary"></div>
                  <div className="w-25  h-4 bg-secondary"></div>
                  <div className="w-full  h-4 bg-secondary"></div>
                </div> */}
                {isRegion ? (
                  <div className='h-full w-full  flex items-center justify-center'>

                    {regionCodeIcon(countryCode)}
                  </div>


                ) : (
                  <Image
                    src={countryOutlineImage}
                    alt="Paris, France"
                    className="w-full h-full object-contain"
                    width={2000}
                    height={2000}

                  />
                )
                }

              </div>)}
              <div className='w-full flex flex-col items-center gap-2 md:gap-4  justify-center  md:py-0 md:h-1/2'>
                <h1 className='font-heading mt-4 md:mt-0 text-2xl md:text-3xl text-tertiary '>Velg et abonnement</h1>
                <div className=' gap-4  text-base gap-16 md:text-base font-heading flex'>
                  <div className='flex flex-col w-20 items-center justify-center gap-1'>
                    <p  onClick={() => setPlan("set")} className='hover:cursor-pointer'>Fast</p>
                    <div
                      className={`flex items-center gap-1 w-full transition-opacity duration-200 ${plan === "set" ? "opacity-100" : "opacity-0"} `}
                    >
                      <div
                        ref={(el) => {
                          indicatorRefs.current["set"].dotOne = el;
                        }}
                        className="w-2 h-1  rounded-l-lg bg-tertiary"
                      />
                      <div
                        ref={(el) => {
                          indicatorRefs.current["set"].dotTwo = el;
                        }}
                        className="w-2 h-1  bg-tertiary"
                      />
                      <div
                        ref={(el) => {
                          indicatorRefs.current["set"].line = el;
                        }}
                        className="w-full  h-1 bg-gradient-to-r from-tertiary via-tertiary to-transparent"
                      />
                    </div>
                  </div>
                  <div className='flex flex-col w-20 items-center justify-center gap-1'>
                    <p className='hover:cursor-pointer' onClick={() => setPlan("unlimited")}>Ubegrenset</p>
                    <div className={`flex items-center  gap-1 w-full transition-opacity duration-200 ${plan === "unlimited" ? "opacity-100" : "opacity-0"} `}
                    >
                      <div
                        ref={(el) => {
                          indicatorRefs.current["unlimited"].dotOne = el;
                        }}
                        className="w-2 h-1 rounded-l-lg bg-tertiary"
                      />
                      <div
                        ref={(el) => {
                          indicatorRefs.current["unlimited"].dotTwo = el;
                        }}
                        className="w-2 h-1 bg-tertiary"
                      />
                      <div
                        ref={(el) => {
                          indicatorRefs.current["unlimited"].line = el;
                        }}
                        className="w-full h-1 bg-gradient-to-r from-tertiary via-tertiary to-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className={`grid grid-cols-12 ${plan === "set" ? "visible" : "hidden"} bg-white shadow md:h-1/2  mb-4 mt-4 md:mt-0  md:mb-8  gap-y-6 gap-x-4  py-4 px-8 bg-secondary  rounded-xl`}>

                  {tiers.map((item) => (
                    <div className=' col-span-12  md:col-span-6 flex flex-col items-start md:items-center justify-center  px-2 rounded '>
                      <div onClick={() => handleTierClick(item)} key={item.data} className={` ${item.price === tier.price ? 'bg-secondary shadow' : 'bg-transparent'} flex relative  hover:cursor-pointer  rounded-xl  px-4 py-2    items-center justify-center gap-3 `}>
                        {item.popular && <span className={`absolute -top-3 -right-4 ${item.price === tier.price ? 'bg-primary' : 'bg-light-yellow'} text-xs  rounded-full px-1 py-1 font-body text-primary-text `} >Populær</span>}
                        <div className={`mt-1 p-2 rounded-full ${item.price === tier.price ? 'bg-tertiary text-primary' : ' bg-transparent text-primary-text '} `} >
                          <Radio className="w-5 h-5 " />

                        </div>
                        <div className={` font-body flex flex-col ${item.price === tier.price ? 'text-primary-text' : 'text-secondary-text'} `}>
                          <p className=' font-heading text-sm' >{item.validity}</p>
                          <p >{item.data}</p>
                        </div>

                      </div>

                    </div>
                  ))}
                </div>

                <div className={`flex flex-col items-center  justify-start  gap-2 relative ${plan === "unlimited" ? "visible" : "hidden"}     h-1/2   mb-8   py-4 px-8 bg-secondary  rounded-lg`}>
                  <p className='font-body  text-sm   text-primary-text'>Hvor lenge skal du resie?</p>
                  <DurationDropdown />
                </div>
              </div>


              {/*   */}
            </div>

            {/* Right side - Product Details */}
            <div className=" p-4 md:p-8 col-span-7 md:p-12  bg-white">
              <h1 className="mb-2 text-2xl text-primary-text font-semibold  font-heading " >{title} eSIM Data Plan</h1>
              <p className="mb-6 text-secondary-text font-body" >
                Hold deg tilkoblet gjennom hele reisen din i med vårt høyhastighets eSIM-dataabonnement
              </p>

              <div className="flex font-body items-baseline gap-2 mb-6">
                <span className="text-4xl text-primary-text" >{tier?.price} kr</span>
                <span className="text-sm text-secondary-text" >engangsbetaling</span>
              </div>
              <div className="space-y-4    w-full flex-col items-center   flex   mb-6   justify-start  h-fit ">
                <div className='flex  items-start  w-full flex-col gap-4'>
                  <div className="flex  items-start  gap-3">
                    <div className="mt-1 p-2 rounded-full bg-light-yellow" >
                      <Wifi className="w-5 h-5 text-secondary-text" />
                    </div>
                    <div className=' font-body text-secondary-text'>
                      <p >{tier?.data} High-Speed Data</p>
                      <p >4G/5G-dekning i hele {title}</p>
                    </div>
                  </div>



                  <div className="flex   items-start gap-3">
                    <div className="mt-1  bg-light-yellow p-2 rounded-full" >
                      <Calendar className="w-5 h-5 text-secondary-text" />
                    </div>
                    <div className='text-secondary-text font-body'>
                      <p >{tier?.validity} dagers gyldighet</p>
                      <p >
                        Aktiveres ved første tilkobling</p>
                    </div>
                  </div>

                  <div className="flex  items-start gap-3">
                    <div className="mt-1 bg-light-yellow p-2 rounded-full" >
                      <Shield className="w-5 h-5 text-secondary-text" />
                    </div>
                    <div className='text-secondary-text'>
                      <p>Øyeblikkelig Levering</p>
                      <p >QR-kode sendes umiddelbart via e-post</p>
                    </div>
                  </div>
                </div>
              </div>



              <div className='flex p-4  mb-8  items-center justify-start gap-2 rounded-lg flex'>

                <RadioTower className="w-5 h-5 text-tertiary" />
                <p className='text-primary-text font-body text-base'>Operatørvalg:</p>
                <p className='text-primary-text font-body text-base'>Opratør</p>
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