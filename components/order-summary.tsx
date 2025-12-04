import { Check } from "lucide-react";

export function OrderSummary() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 sticky top-8">
      <h2 className="font-heading text-tertiary-heading mb-6">Order Summary</h2>
      
      {/* Product Details */}
      <div className="mb-6 pb-6 border-b border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-body text-primary-text mb-1">Europe eSIM - 30 Days</h3>
            <p className="text-secondary-text text-sm">20GB High-Speed Data</p>
          </div>
          <p className="font-body text-primary-text">$29.00</p>
        </div>
        
        {/* Features */}
        <div className="space-y-2 mt-4">
          <div className="flex items-start gap-2 text-sm text-secondary-text">
            <Check className="w-4 h-4 text-tertiary mt-0.5 flex-shrink-0" />
            <span>Instant activation</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-secondary-text">
            <Check className="w-4 h-4 text-tertiary mt-0.5 flex-shrink-0" />
            <span>38 European countries</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-secondary-text">
            <Check className="w-4 h-4 text-tertiary mt-0.5 flex-shrink-0" />
            <span>No registration required</span>
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
          <span>Subtotal</span>
          <span>29.00</span>
        </div>
        <div className="flex justify-between text-secondary-text font-body">
          <span>Tax</span>
          <span>0.00</span>
        </div>
      </div>

      {/* Total */}
      <div className="pt-6 border-t border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <span className="font-heading text-primary-text">Total</span>
          <span className="font-heading text-primary-text">29.00</span>
        </div>

        <button className="w-full bg-primary hover:scale-105 text-primary-text font-body py-3 px-4 rounded-lg transition-all">
          Complete Purchase
        </button>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-xs text-secondary-text text-center">
          Secure checkout · Your data is protected
        </p>
      </div>
    </div>
  );
}
