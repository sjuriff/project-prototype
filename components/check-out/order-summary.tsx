import { Check, Globe, Plane } from "lucide-react";
import { CartItemData } from "@/hooks/use-cart";
import { Product } from "@/types/persistedt-product";
import Image from "next/image";
import { CartItem } from "@/components/cart-item";
import { useCart } from "@/hooks/use-cart";
import PrimaryButton from "../buttons/primary-button";
import Link from "next/link";


export const REGION_CODES = [
  "EU", // Europa
  "AS", // Asia
  "AF", // Afrika
  "NA", // Nord-Amerika
  "SA", // Sør-Amerika
  "OC", // Oseania
  "ME", // Midtøsten (valgfri, men veldig vanlig i eSIM)
  "WW"  // Worldwide / Global (valgfri)
]

export function isRegion(code: string) {
  return REGION_CODES.includes(code);
}
type OrderItem = CartItemData | Product


interface OrderSummaryProps {
  products: OrderItem[]
}

function hasQuantity(item: OrderItem): item is CartItemData {
  return "quantity" in item
}

function getItemPrice(item: OrderItem): number {
  return typeof item.price === "string"
    ? Number(item.price)
    : item.price
}




export function OrderSummary({ }: OrderSummaryProps) {

  const {
    items: cartItems,
    removeItem,
    updateQuantity,
    hydrated,
  } = useCart()


  const subtotal = cartItems.reduce((sum, item) => {
    const price = getItemPrice(item)
    const qty = hasQuantity(item) ? item.quantity : 1
    return sum + price * qty
  }, 0)

  return (
    <div className="bg-light-yellow flex flex-col gap-2 rounded-lg p-6 shadow-sm  sticky top-8">
      <h2 className="font-heading text-xl text-primary-text mb-6">Din ordre</h2>

      {cartItems.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="font-body text-primary-text">Ingen produkter i kassen</p>
          <Link href="/produkter" className="w-full">
            <PrimaryButton Icon={Plane} fullWidth>Se destinasjoner</PrimaryButton>
          </Link>
        </div>
      )}
      {cartItems.map((item) => {
        const price = getItemPrice(item)
        const quantity = hasQuantity(item) ? item.quantity : 1
        const flagImageUrl = `https://flagcdn.com/w320/` + item.countryCode.toLowerCase() + `.png`

        return (
          <CartItem
            key={item.id}
            {...item}
            validity={item.validity}
            onUpdateQuantity={updateQuantity}
            onRemove={removeItem}
          />
        )
      })}

      {/* Total */}
      <div className="pt-6 ">
        <div className="flex justify-between items-center mb-6">
          <span className="font-heading text-primary-text">Total</span>
          <span className="font-heading text-primary-text">{subtotal} kr</span>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-primary-text">
        <p className="text-xs text-primary-text text-center">
          Sikker checkout · Din data er beskyttet
        </p>
      </div>
    </div>
  )
}