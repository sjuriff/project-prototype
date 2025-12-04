import PaymentForm from "@/components/payment-form";
import { OrderSummary } from "@/components/order-summary";
import CustomerForm from "@/components/customer-form";

export default function CheckoutPage() {
  return (
    <main className="bg-surface border border-black flex items-center justify-center  flex flex-col  ">
      <section className="w-full  bg-surface  min-h-screen flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-tertiary-heading text-4xl font-heading mb-2">Checkout</h1>
          <p className="text-secondary-text font-body">Complete your eSIM purchase</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            <CustomerForm />
            <PaymentForm />
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}