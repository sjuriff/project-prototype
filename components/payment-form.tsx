import { CreditCard, Lock } from "lucide-react";

export default function PaymentForm() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-tertiary-heading">Payment Details</h2>
        <div className="flex items-center gap-2 text-secondary-text">
          <Lock className="w-4 h-4" />
          <span className="text-xs">Secure</span>
        </div>
      </div>
      
      <form className="space-y-4">
        <div>
          <label htmlFor="cardNumber" className="block text-sm text-primary-text font-body mb-2">
            Card Number
          </label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-text" />
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent font-body text-primary-text"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiry" className="block text-sm text-primary-text font-body mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiry"
              placeholder="MM / YY"
              maxLength={7}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent font-body text-primary-text"
            />
          </div>

          <div>
            <label htmlFor="cvc" className="block text-sm text-primary-text font-body mb-2">
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              placeholder="123"
              maxLength={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent font-body text-primary-text"
            />
          </div>
        </div>

        <div>
          <label htmlFor="cardName" className="block text-sm text-primary-text font-body mb-2">
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardName"
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent font-body text-primary-text"
          />
        </div>

        {/* Payment Methods */}
   {/*      <div className="pt-4 flex items-center justify-between">
          <span className="text-xs text-secondary-text">We accept</span>
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-surface-dim rounded text-xs text-secondary-text font-body">
              Visa
            </div>
            <div className="px-3 py-1 bg-surface-dim rounded text-xs text-secondary-text font-body">
              Mastercard
            </div>
            <div className="px-3 py-1 bg-surface-dim rounded text-xs text-secondary-text font-body">
              Amex
            </div>
          </div>
        </div> */}
      </form>
    </div>
  );
}
