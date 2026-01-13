'use client'
import Link from "next/link";
import Image from "next/image";
import beamLogo from '../public/images/logo.png'
import { useScroll } from "@/hooks/use-scroll";
import HeaderShoppingCart from "./shopping-cart-header";
import { useRef } from "react";
import LanguageSelector from "./flag-dropdown";
import PrimaryButton from "./buttons/primary-button";
import { User } from "lucide-react";
import DropInMenu from "./drop-in-menu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);



export default function Header() {
  const { scrollDirection, scrollTop } = useScroll();

  const dotOneRef = useRef<HTMLDivElement>(null)
  const dotTwoRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  //${scrollDirection === 'down' ? '-translate-y-[80px]' : 'translate-y-0'}



  useGSAP(() => {
    const tl = gsap.timeline()

    if(scrollDirection === 'down') return
    tl.fromTo(lineRef.current, { opacity: 0, scaleX: 0, transformOrigin: "right center" }, { opacity: 1, scaleX: 1, ease: "power1.out", duration: 0.5, })

    tl.fromTo(dotTwoRef.current, { opacity: 0, scaleX: 0, transformOrigin: "right center" }, { opacity: 1, ease: "expo.out", delay: 0.2, duration: 0.3, scaleX: 1, })
    tl.fromTo(dotOneRef.current, { opacity: 0, scaleX: 0, transformOrigin: "right center" }, { opacity: 1, ease: "expo.out", duration: 0.3, scaleX: 1, })

  }, [scrollDirection])

  return (
    <header
      id="header"
      className={`absolute bg-tertiary ${scrollDirection === 'down' ? '-top-20' : 'top-0'}   sticky left-0  z-50 flex h-20 w-full items-center justify-between  px-4 py-4 font-roboto transition-all duration-300 ease-in-out lg:h-20  `}
    >
      <Link
        href={'/'}
        className="ml-2 flex items-center lg:ml-12"
      >

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-logo text-primary [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">beam</h1>
          <div className="flex  items-center gap-1">
            <div ref={dotOneRef} className="w-2 opacity-0 rounded-l-lg h-1 bg-primary"></div>
            <div ref={dotTwoRef} className="w-2 opacity-0 h-1 bg-primary"></div>
            <div ref={lineRef} className="w-18 opacity-0 h-1 bg-gradient-to-r from-primary via-primary to-transparent"></div>
          </div>

        </div>

        {/* <Image
          id="sim-logo"
          src={beamLogo}
          alt="anteambulo logo "
          className={`max-h-12 w-auto transition-all duration-300 hover:scale-110 lg:max-h-14 2xl:max-h-14 ${scrollTop > 50 ? 'opacity-0' : 'opacity-100'}`}
        /> */}

      </Link>
      <div className={"flex items-center gap-4"}>
        <div className="flex gap-2 mr-4">
          {/*  <PrimaryButton Icon={User}>Logg inn</PrimaryButton> */}
          <button className={` flex text-sm items-center group  border-[#ffffff]  text-primary px-4 py-3 rounded-lg  hover:cursor-pointer  transition-transform`}>
            <User className="mr-2 group-hover:translate-y-[-2px] transition-transform" /> Logg inn
          </button>
          <button className={` text-sm text-primary px-4 py-3 rounded-lg  hover:cursor-pointer hover:scale-105 transition-transform`}>
            Registrer deg
          </button>

        </div>
        <LanguageSelector scrollTop={scrollTop} scrollDirection={scrollDirection} />
        <HeaderShoppingCart scrollDirection={scrollDirection} scrollTop={scrollTop} />
        <div className="ml-8">
          <DropInMenu scrollDirection={scrollDirection} scrollTop={scrollTop} />
        </div>



      </div>
    </header>
  )
}