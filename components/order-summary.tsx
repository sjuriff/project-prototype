import { Check } from "lucide-react";

interface Product {
  id: string;
  title: string;
  data: string;
  validity: string;
  price: string;
  currency?: string;
}

interface OrderSummaryProps {
  product: Product;
}

export function OrderSummary({ product }: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 sticky top-8">
      <h2 className="font-heading text-tertiary-heading mb-6">Din ordre</h2>

      {/* Product Details */}
      <div className="mb-6  pb-6 border-b border-gray-100">
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-body text-primary-text mb-1">{product.title} eSIM - {product.validity} dager</h3>
              <p className="text-secondary-text text-sm">{product.data} High-Speed Data</p>
            </div>

          </div>
          <p className="font-body text-primary-text">{product.price} kr</p>
        </div>

        {/* Features */}
        <div className="space-y-2 mt-4">
          <div className="flex items-start gap-2 text-sm text-secondary-text">
            <Check className="w-4 h-4 text-tertiary mt-0.5 flex-shrink-0" />
            <span>Umiddelbar aktivering</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-secondary-text">
            <Check className="w-4 h-4 text-tertiary mt-0.5 flex-shrink-0" />
            <span>Dekning i hele {product.title}</span>
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

      {/* Price Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-secondary-text font-body">
          <span>Delsum</span>
          <span>{product.price} kr</span>
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
          <span className="font-heading text-primary-text">{product.price} kr</span>
        </div>

        <button className="w-full bg-primary hover:scale-105 text-primary-text font-body py-3 px-4 rounded-lg transition-all">
          Fullfør kjøp
        </button>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-xs text-secondary-text text-center">
          Sikker checkout · Din data er beskyttet
        </p>
      </div>
    </div>
  );
}
