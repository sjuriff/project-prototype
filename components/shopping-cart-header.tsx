'use client'
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useEffect, useState } from "react"
import Link from "next/link";
import paths from "@/paths";

export default function HeaderShoppingCart({scrollTop, scrollDirection}: {scrollTop: number, scrollDirection: string}) {

  const { items } = useCart()
  const [count, setCount] = useState(items.length)

  useEffect(() => {
    const handler = () => {
      const saved = localStorage.getItem("cart")
      if (saved) {
        const parsed = JSON.parse(saved)
        const total = parsed.reduce((sum: number, i: any) => sum + i.quantity, 0)
        setCount(total)
      }
    }

    window.addEventListener("cart-updated", handler)
    return () => window.removeEventListener("cart-updated", handler)
  }, [])

  return (
    <div className="flex items-center relative justify-center">
      <Link href={paths.cart}>
      <ShoppingCart className={`h-6 w-6   text-tertiary-text`} />
      </Link>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-semibold text-primary-text bg-primary rounded-full">
          {count}
        </span>
      )}
    </div>
  )

}