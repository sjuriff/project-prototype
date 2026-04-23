'use client';
import { FaTiktok, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import BeamFooterLogo from "./beam-logo-footer";
import { usePathname } from "next/navigation";

const footerLinks = [

  {
    title: "Info",
    links: [
      { href: "/info", label: "Hva er eSIM?" },
      { href: "#", label: "Kom i gang med eSIM" },
      { href: "#", label: "VPN" },
    ],
  },


  {
    title: "eSIM",
    links: [
      { href: "/produkter", label: "Kjøp eSIM" },
      { href: "#", label: "Bedrift" },
      { href: "#", label: "Bli Partner" },
    ],
  },

  {
    title: "beam",
    links: [
      { href: "/about", label: "Om oss" },
      { href: "#", label: "Kontakt" },
      { href: "/support", label: "Support" },
    ],
  },



];

const socialLinks = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTiktok, href: "#", label: "TikTok" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const pathName = usePathname();
  const isBusiness = pathName === '/business';
  return (
    <footer className={`${isBusiness ? 'bg-light-yellow text-tertiary' : 'bg-tertiary text-tertiary-text'}  `}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand / Logo Section */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">

              <BeamFooterLogo isBusiness={isBusiness} />
            </div>
            <p className="max-w-sm text-sm text-pretty font-body leading-relaxed">
              Rimelig og trygg mobildata på reise
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full  ${isBusiness ? 'bg-tertiary text-tertiary-text': 'bg-primary text-primary-text'}  transition-transform ease-in-out duration-300 hover:scale-110`}
                >
                  <Icon  size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          {footerLinks.map((item) => (
            <div key={item.title}>
              <h4 className={`mb-4 text-sm font-semibold uppercase tracking-wider ${isBusiness ? 'text-tertiary' : 'text-primary'} t font-heading`}>
                {item.title}
              </h4>
              <ul className="space-y-3">
                {item.links.map((link) => (
                  <li className="hover:translate-x-1 transition-transform ease-in-out duration-300" key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-body:"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex  gap-2 mt-12 ">
          <span className={`h-[2px] w-2  ${isBusiness ? 'bg-tertiary' : 'bg-primary'} rounded-l-full`} ></span>
          <span className={`h-[2px] w-2 ${isBusiness ? 'bg-tertiary' : 'bg-primary'}`}></span>
          <span className={`block h-[2px] bg-gradient-to-r ${isBusiness ? 'from-tertiary to-transparent' : 'from-primary to-transparent'} rounded-r-full w-full`} />
        </div>

        <div className="mt-0 flex flex-col items-center justify-between gap-4  pt-8 sm:flex-row">

          <p className="text-xs">
            &copy; {new Date().getFullYear()} Beam. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Bruksvilkår
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

