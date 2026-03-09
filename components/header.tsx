'use client'
import Link from "next/link";
import { useScroll } from "@/hooks/use-scroll";
import HeaderShoppingCart from "./shopping-cart-header";
import LanguageSelector from "./flag-dropdown";
import { useState } from "react";
import { User, Briefcase, BriefcaseBusiness, Plane, Lightbulb, Shield, Handshake, HeartHandshake, Info } from "lucide-react";
import DropInMenu from "./drop-in-menu";
import BeamLogo from "./beam-logo";
import { title } from "process";


const menuItems = [
  {
    title: "Destinasjoner",
    href: "#",
    icon: Plane
  },
  {
    title: "Slik fungerer eSIM",
    href: "#",
    icon: Lightbulb
  },
  {
    title: "Integrety VPN",
    href: "#",
    icon: Shield
  },
  {
    title: "Bedrift"
    , href: "#",
    icon: Briefcase
  },
  {
    title: "Partnerskap",
    href: "#",
    icon: Handshake
  },
  {
    title: "Support",
    href: "#",
    icon: HeartHandshake
  },
  {
    title: "Om oss",
    href: "#",
    icon: Info
  },
]


export default function Header() {
  const { scrollDirection, scrollTop } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  //}  transition-top duration-300 ease-in-out

  return (
    <div id="header-wrapper" className={`sticky z-50 transition-top duration-300 ease-in-out  ${scrollDirection === 'down' && !menuOpen ? '-top-20' : 'top-0'}`}>

      <header
        id="header"
        className={` bg-tertiary relative left-0   transition-top duration-300 ease-in-out z-[60]    flex h-20 w-full items-center justify-between  px-4 py-4 font-roboto  lg:h-20  `}
      >
        <Link
          href={'/'}
          className="ml-2 flex items-center lg:ml-12"
        >
          <BeamLogo scrollDirection={scrollDirection} />
        </Link>
        <div className={"flex items-center relative gap-4"}>
          <div className="flex gap-2 mr-4">
            {/*  <PrimaryButton Icon={User}>Logg inn</PrimaryButton> */}
            <button className={` flex text-sm items-center group  border-[#ffffff]  text-primary px-4 py-3 rounded-lg  hover:cursor-pointer  transition-transform`}>
              <Handshake className="mr-2 group-hover:translate-y-[-2px] transition-transform" /> Partnerskap
        
            </button>
            <button className={` flex text-sm items-center group  border-[#ffffff]  text-primary px-4 py-3 rounded-lg  hover:cursor-pointer  transition-transform`}>
              <BriefcaseBusiness className="mr-2 group-hover:translate-y-[-2px] transition-transform" /> Business
            </button>
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
            <DropInMenu menuItems={menuItems} menuOpen={setMenuOpen} />
          </div>



        </div>
      </header>
    </div>
  )
}