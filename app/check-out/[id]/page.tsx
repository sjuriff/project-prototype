'use client'


import { OrderSummary } from "@/components/check-out/order-summary";

import BackButton from "@/components/buttons/back-button";
import {  ReceiptText } from "lucide-react";
import { usePersistedProduct } from "@/hooks/use-persisted-product";
import { useCart } from "@/hooks/use-cart";
import PaymentSection from "@/components/payment-section";

//TODO! Sjekk ut forskjell på UI fra forskjellige land etter implementasjon av flag-api, pågrunn av lengde på navn, må håndteres
interface CheckoutPageProps {
  params: {
    id: string;
  };
}
//Needs to be an asycn function when we fetch real data
export default function CheckoutPage({ params }: CheckoutPageProps) {



  const { items } = useCart()

  const cartItems = items


 




  
  return (
    <main className="bg-surface  flex items-center justify-center  flex flex-col  ">
      <section className="w-full relative  bg-surface  min-h-screen flex items-center justify-center">
        <div className="absolute top-4 left-4 2xl:top-16 2xl:left-16">
          <BackButton />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 ml-4 mt-4">
            <div className="relative w-fit">
              <h1 className="text-primary-text relative z-10   md:text-5xl [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-heading ">Kasse</h1>
              <div className="absolute z-0 -top-8 -right-8 items-center flex justify-center gap-3 p-4 bg-primary rounded-full">
                <ReceiptText className="w-8 h-8 text-primary-text" />
              </div>
            </div>
            <p className="text-secondary-text font-body">Fullfør ditt eSIM kjøp</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <PaymentSection />


            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary products={ cartItems} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}