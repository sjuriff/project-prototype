import { CreditCard, Lock, Mail } from "lucide-react";
import RadioExample from "./buttons/payment-radio-buttons";
import VippsIcon from "./vipps-logo";
import KlarnaIcon from "./klarna-logo";
import PrimaryButton from "./buttons/primary-button";
import { FaApple, FaApplePay, FaGooglePay, FaGoogle, FaCcPaypal, FaPaypal } from "react-icons/fa";

interface PaymentMethodsProps {
  value: string;

}

let formContent

export default function PaymentForm({ value }: PaymentMethodsProps) {
  let formContent
  let icon

  if (value === "credit-card") {
    icon = <CreditCard className="w-5 h-5 text-secondary-text" />
    formContent = <form className="space-y-4 items-center">
      <div>
        <label htmlFor="cardNumber" className="block text-sm text-primary-text font-body mb-2">
          Kortnummer
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
            Utløpsdato
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
          Kortholders Navn
        </label>
        <input
          type="text"
          id="cardName"
          placeholder="John Doe"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent font-body text-primary-text"
        />
      </div>

    </form>
  } else if (value === "vipps") {
    icon = <VippsIcon height={50} width={50} />
    formContent = <form className="space-y-4">
      <label htmlFor="phone-number" className="block text-sm text-primary-text font-body mb-2">
        Telefonnummer
      </label>
      <input
        type="number"
        id="phoneNumber"
        name="phone-number"
        placeholder="Skriv inn telefonnummer"
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent font-body text-primary-text"
      />
      <div className="w-full flex items-center justify-center">
        <PrimaryButton>Fullfør betaling</PrimaryButton>
      </div>
    </form>
  } else if (value === "klarna") {
    icon = <KlarnaIcon height={50} width={50} />
    formContent = <form className="space-y-4">
      <label htmlFor="phone-number" className="block text-sm text-primary-text font-body mb-2">
        Telefonnummer
      </label>
      <input
        type="number"
        id="phoneNumber"
        name="phone-number"
        placeholder="Skriv inn telefonnummer"
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent font-body text-primary-text"
      />
      <p className="text-start font-heading ml-4 text-secondary-text">eller</p>
      <label htmlFor="email" className="block text-sm text-primary-text font-body mb-2">
        Email
      </label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-text" />
        <input
          type="email"
          id="email"
          placeholder="john.doe@example.com"
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent font-body text-primary-text"
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <PrimaryButton>Fullfør betaling</PrimaryButton>
      </div>
    </form>

  } else if (value === "apple-pay") {
    icon = <FaApplePay className="w-8 h-8 text-primary-text" />
    formContent = <form className="space-y-4">
      <button className="bg-tertiary flex items-center justify-center gap-2 hover:cursor-pointer text-tertiary-text font-body w-full py-3 rounded-lg">
        <FaApple className="w-5 h-5" />
        <p className="font-body">Betal med Apple Pay</p>
      </button>
    </form>

  } else if (value === "google-pay") {
    icon = <FaGooglePay className="w-8 h-8 text-primary-text" />
    formContent = <form className="space-y-4">
      <button className="bg-tertiary flex items-center justify-center gap-2 hover:cursor-pointer text-tertiary-text font-body w-full py-3 rounded-lg">
        <FaGoogle className="w-5 h-5" />
        <p className="font-body">Betal med Google Pay</p>
      </button>
    </form>
  } else if (value === "paypal") {
    icon = <FaCcPaypal className="w-8 h-8 text-primary-text" />
    formContent = <form className="space-y-4">
      <button className="bg-tertiary flex items-center justify-center gap-2 hover:cursor-pointer text-tertiary-text font-body w-full py-3 rounded-lg">
        <FaPaypal className="w-5 h-5" />
        <p className="font-body">Betal med PayPal</p>
      </button>
    </form>

  }


  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col items-start gap-2">
          <h2 className="font-heading text-xl text-primary-text">Betalings detaljer</h2>
          {icon}
        </div>
        <div className="flex items-center gap-2 text-secondary-text">
          <Lock className="w-4 h-4" />
          <span className="text-xs">Sikker</span>
        </div>
      </div>

      {formContent}
    </div>
  );
}
