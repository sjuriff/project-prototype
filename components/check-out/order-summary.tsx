import { Check, Globe, Plane } from "lucide-react";
import { CartItemData } from "@/hooks/use-cart";
import { Product } from "@/types/product";
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
       /*    <div
            key={item.id}
            className="mb-6 pb-6 border-b border-black last:border-b-0"
          >
            <div className="flex flex-col">
              <div className="flex gap-4 mb-4">
                <div className="flex items-center justify-center gap-2 h-12 w-12 bg-secondary rounded-lg">
                  {isRegion(item.countryCode) ? (
                    <Globe className="w-8 h-8 text-primary-text" />
                  ) : (
                    <Image src={flagImageUrl} width={32} height={32} alt={item.countryCode} />
                  )
                  }


                </div>
                <div>
                  <h3 className="font-body text-primary-text mb-1">
                    {item.title} eSIM – {item.validity} dager
                  </h3>
                  <p className="text-primary-text text-sm">
                    {item.data} High-Speed Data
                  </p>
                  {hasQuantity(item) && (
                    <div className="text-sm text-primary-text mt-2 font-body">
                      Antall: {item.quantity}
                    </div>
                  )}
                </div>
              </div>

              <p className="font-body text-primary-text">
                {price} kr
                {quantity > 1 && ` × ${quantity}`}
              </p>
            </div> */

       
      /*       <div className="space-y-2 mt-4 text-primary-text">
              <div className="flex items-start gap-2 text-sm ">
                <Check className="w-4 h-4 text-secondary-text mt-0.5 flex-shrink-0" />
                <span>Umiddelbar aktivering</span>
              </div>
              <div className="flex items-start gap-2 text-sm ">
                <Check className="w-4 h-4 text-secondary-text mt-0.5 flex-shrink-0" />
                <span>Dekning i hele {item.title}</span>
              </div>
              <div className="flex items-start gap-2 text-sm ">
                <Check className="w-4 h-4 text-secondary-text mt-0.5 flex-shrink-0" />
                <span>Ingen registrering</span>
              </div>
              <div className="flex items-start gap-2 text-sm ">
                <Check className="w-4 h-4 text-secondary-text mt-0.5 flex-shrink-0" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
          */
        ) 
      })}

      {/* Price Breakdown */}
   {/*    <div className="space-y-3 mb-6 text-primary-text">
        <div className="flex justify-between  font-body">
          <span>Delsum</span>
          <span>{subtotal} kr</span>
        </div>
      </div> */}

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