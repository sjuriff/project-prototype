import { Check } from "lucide-react";
import { CartItemData } from "@/hooks/use-cart";

interface Product {
  id: string;
  title: string;
  data: string;
  validity: string;
  price: string;
  currency?: string;
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




export function OrderSummary({ products }: OrderSummaryProps) {
  const subtotal = products.reduce((sum, item) => {
    const price = getItemPrice(item)
    const qty = hasQuantity(item) ? item.quantity : 1
    return sum + price * qty
  }, 0)

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 sticky top-8">
      <h2 className="font-heading text-xl text-primary-text mb-6">Din ordre</h2>

      {/* Items */}
      {products.map((item) => {
        const price = getItemPrice(item)
        const quantity = hasQuantity(item) ? item.quantity : 1

        return (
          <div
            key={item.id}
            className="mb-6 pb-6 border-b border-gray-100 last:border-b-0"
          >
            <div className="flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-body text-primary-text mb-1">
                    {item.title} eSIM – {item.validity} dager
                  </h3>
                  <p className="text-secondary-text text-sm">
                    {item.data} High-Speed Data
                  </p>
                  {hasQuantity(item) && (
                    <div className="text-sm text-secondary-text mt-2 font-body">
                      Antall: {item.quantity}
                    </div>
                  )}
                </div>


              </div>

              <p className="font-body text-primary-text">
                {price} kr
                {quantity > 1 && ` × ${quantity} = ${price * quantity} kr`}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2 mt-4">
              <div className="flex items-start gap-2 text-sm text-secondary-text">
                <Check className="w-4 h-4 text-tertiary mt-0.5 flex-shrink-0" />
                <span>Umiddelbar aktivering</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-secondary-text">
                <Check className="w-4 h-4 text-tertiary mt-0.5 flex-shrink-0" />
                <span>Dekning i hele {item.title}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-secondary-text">
                <Check className="w-4 h-4 text-tertiary mt-0.5 flex-shrink-0" />
                <span>Ingen registrering</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-secondary-text">
                <Check className="w-4 h-4 text-tertiary mt-0.5 flex-shrink-0" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        )
      })}

      {/* Price Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-secondary-text font-body">
          <span>Delsum</span>
          <span>{subtotal} kr</span>
        </div>
        <div className="flex justify-between text-secondary-text font-body">
          <span>MVA</span>
          <span>0.00</span>
        </div>
      </div>

      {/* Total */}
      <div className="pt-6 border-t border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <span className="font-heading text-primary-text">Total</span>
          <span className="font-heading text-primary-text">{subtotal} kr</span>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-xs text-secondary-text text-center">
          Sikker checkout · Din data er beskyttet
        </p>
      </div>
    </div>
  )
}