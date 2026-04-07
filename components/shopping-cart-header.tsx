'use client'
import { ShoppingCart, CreditCard } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import usePortal from "@/hooks/use-portal";
import { useEffect, useState, useRef, useCallback } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import paths from "@/paths";
import { CartItem } from "./cart-item";
import PrimaryButton from "./buttons/primary-button";
import { CartItemHeader } from "./cart-item-header";

interface ShoppingCartHeaderProps {
  mainMenuOpen: boolean
  setMenuOpen: (open: boolean) => void
}


export default function HeaderShoppingCart({mainMenuOpen, setMenuOpen }: ShoppingCartHeaderProps) {

  const {
    items,
    removeItem,
    updateQuantity,
    hydrated,
  } = useCart()

  const [open, setOpen] = useState(false)

  const count = items.reduce((sum, item) => sum + item.quantity, 0)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  const renderPortal = usePortal();

  const handleCartClick = () => {
    setOpen(prev => !prev)
  };

  const closeMenu = () => {
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        dropdownRef.current && buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);


  useEffect(() => {
    if (mainMenuOpen) {
      setOpen(false)
    }
  }, [mainMenuOpen])


  useEffect(() => {
    if (open) {
      setMenuOpen(false)
    }
  }, [open])



  useGSAP(() => {
    if (!dropdownRef.current) return

    if (open) {
      gsap.to(dropdownRef.current, { x: 0, duration: 0.3, ease: "power3.inOut" })
    } else {
      gsap.to(dropdownRef.current, { x: '250%', duration: 0.3, ease: "power3.inOut" })

    }
  }, [open])

  return (
    <div className="flex  items-center hover:cursor-pointer relative justify-center">
      <div ref={buttonRef} className="h-6" onClick={handleCartClick}>
        <button className="hover:cursor-pointer ">
          <ShoppingCart className={`h-6 w-6   text-tertiary-text`} />
        </button>
        {count > 0 && (
          <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-semibold text-primary-text bg-primary rounded-full">
            {count}
          </span>
        )}
      </div>
      {renderPortal(


        <div ref={dropdownRef}
          className="absolute  px-4 translate-x-[250%] flex flex-col gap-2 h-screen items-center z-50  right-0 top-20 bg-tertiary w-screen   shadow-lg md:w-80"
        >
          <h1 className="font-heading mt-4 text-xl text-tertiary-text">Din handlekurv</h1>
          {count > 0 ? items.map((item) => (

            <CartItemHeader
              key={item.id}
              {...item}
              validity={item.validity}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          )) :
            <p className="font-body text-tertiary-text">Ingen produkter i handlekurven</p>
          }

          {count > 0 && (
            <Link
              href={paths.checkout("1")}
              className="w-full ">
              <PrimaryButton onClick={closeMenu} Icon={CreditCard} fullWidth>
                Gå til kassen
              </PrimaryButton>

            </Link>)}

        </div>
      )}
    </div>
  )

}