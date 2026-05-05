'use client'
import Link from "next/link";
import { useScroll } from "@/hooks/use-scroll";
import HeaderShoppingCart from "./shopping-cart-header";
import LanguageSelector from "./flag-dropdown";
import { useState } from "react";
import { User, Briefcase, BriefcaseBusiness, Plane, Lightbulb, Shield, Handshake, HeartHandshake, Info } from "lucide-react";
import DropInMenu from "./drop-in-menu";
import BeamLogo from "./beam-logo";
import paths from "@/paths";
import { usePathname } from "next/navigation";



const menuItems = [
  {
    title: "Destinasjoner",
    href: paths.produkter,
    icon: Plane
  },
  {
    title: "Slik fungerer eSIM",
    href: paths.info,
    icon: Lightbulb
  },
  {
    title: "Integrity VPN",
    href: "#",
    icon: Shield
  },
  {
    title: "Bedrift"
    , href: paths.business,
    icon: Briefcase
  },
  {
    title: "Partnerskap",
    href: paths.partner,
    icon: Handshake
  },
  {
    title: "Support",
    href: paths.support,
    icon: HeartHandshake
  },
  {
    title: "Om oss",
    href: paths.about,
    icon: Info
  },
]

const handleHeaderColor = (pathName: string) => {
  if (pathName === '/business') {
    return 'light-yellow'
  } else if (pathName === '/partner') {
    return 'secondary'
  }
  return 'tertiary'
}

const handleHeaderTextColor = (pathName: string) => {
  if (pathName === '/business') {
    return 'tertiary'
  } else if (pathName === '/partner') {
    return 'secondary-text'
  }
  return 'primary'
}
// ${pathName === '/business' ? 'bg-light-yellow' : 'bg-tertiary'}

export default function Header() {
  const { scrollDirection, scrollTop } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const pathName = usePathname();

  const isBusiness = pathName === '/business';
  const isPartner = pathName === '/partner';


  const headerBackgroundColor = handleHeaderColor(pathName);
  const headerTextColor = handleHeaderTextColor(pathName);
  
  //}  transition-top duration-300 ease-in-out

  return (
    <div id="header-wrapper" className={`sticky w-full overflow-x-clip   md:w-full z-50 transition-top duration-300 ease-in-out  ${scrollDirection === 'down' && !menuOpen ? '-top-20' : 'top-0'}`}>

      <header
        id="header"
        className={`bg-${headerBackgroundColor}  relative left-0    transition-top duration-300 ease-in-out z-50    flex h-20 w-full items-center justify-between  px-4 py-4 font-roboto  lg:h-20  `}
      >
        <Link
          href={'/'}
          className="ml-2 flex items-center lg:ml-12"
        >
          <BeamLogo textColor={headerTextColor} bgColor={headerBackgroundColor} scrollDirection={scrollDirection} />
        </Link>
        <div className={"flex items-center z-50 relative gap-4"}>
          <div className=" gap-2 hidden md:flex mr-4">
            {/*  <PrimaryButton Icon={User}>Logg inn</PrimaryButton> */}
            <Link href={"/partner"} className={` flex text-sm items-center group  border-[#ffffff] text-${headerTextColor}  px-4 py-3 rounded-lg  hover:cursor-pointer  transition-transform`}>
              <Handshake className="mr-2 group-hover:translate-y-[-2px] transition-transform" /> Partnerskap

            </Link>
            <Link href={paths.business} className={` flex text-sm items-center group text-${headerTextColor}  border-[#ffffff]   px-4 py-3 rounded-lg  hover:cursor-pointer  transition-transform`}>
              <BriefcaseBusiness className="mr-2 group-hover:translate-y-[-2px] transition-transform" /> Business
            </Link>
            <button className={` flex text-sm items-center group  border-[#ffffff] text-${headerTextColor}    px-4 py-3 rounded-lg  hover:cursor-pointer  transition-transform`}>
              <User className="mr-2 group-hover:translate-y-[-2px] transition-transform" /> Logg inn
            </button>
            <button className={` text-sm text-${headerTextColor} flex items-center group border-[#ffffff]  ${headerTextColor}  px-4 py-3 rounded-lg  hover:cursor-pointer hover:scale-105 transition-transform`}>
              Registrer deg
            </button>
          </div>
          <LanguageSelector bgColor={headerBackgroundColor} textColor={headerTextColor} />
          <HeaderShoppingCart isBusiness={isBusiness} isPartner={isPartner} mainMenuOpen={menuOpen} setMenuOpen={setMenuOpen}  />
          <div className="ml-8 overflow-hidden">
            <DropInMenu bgColor={headerBackgroundColor} textColor={headerTextColor} open={menuOpen} menuItems={menuItems} menuOpen={setMenuOpen} />
          </div>
        </div>
      </header>
    </div>
  )
}