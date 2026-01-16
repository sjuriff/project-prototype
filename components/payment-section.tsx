'use client'

import CustomerForm from "./customer-form";
import PaymentMethods from "./payment-methods";
import PaymentForm from "./payment-form";

import { useState } from "react"


export default function PaymentSection() {
  const [value, setValue] = useState<string>("vipps")


  return (
    <div className="lg:col-span-2 space-y-6">
      <CustomerForm />
      <PaymentMethods value={value} setValue={setValue} />
      <PaymentForm value={value} />
    </div>
  )


}