'use client'

import PaymentForm from "@/components/payment-form";
import { OrderSummary } from "@/components/order-summary";
import CustomerForm from "@/components/customer-form";
import BackButton from "@/components/buttons/back-button";
import { CreditCard } from "lucide-react";
import { usePersistedProduct } from "@/hooks/use-persisted-product";
import { useCart } from "@/hooks/use-cart";
interface Product {
  id: string;
  title: string;
  data: string;
  validity: string;
  price: string;
  currency?: string;
}

interface CheckoutPageProps {
  params: {
    id: string;
  };
}
//Needs to be an asycn function when we fetch real data
export default  function CheckoutPage({ params }: CheckoutPageProps) {

  const {  getProduct, clearProduct} = usePersistedProduct()

  const {items} = useCart()

  const cartItems = items


  const product = getProduct()



  
  if (!product) {
    console.error("Product not found");

  }
  return (
    <main className="bg-surface border border-black flex items-center justify-center  flex flex-col  ">
      <section className="w-full relative  bg-surface  min-h-screen flex items-center justify-center">
        <div className="absolute top-4 left-4 2xl:top-16 2xl:left-16">
          <BackButton  />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex gap-2 mb-2 items-center">
              <h1 className="text-tertiary-heading text-4xl font-heading ">Kasse</h1>
              <CreditCard className="w-6 h-6 text-tertiary" />
            </div>
            <p className="text-secondary-text font-body">Fullfør ditt eSIM kjøp</p>
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
              <OrderSummary products={items.length > 0 ? cartItems : [product!]} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}