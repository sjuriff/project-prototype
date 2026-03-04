
import CustomerForm from "./customer-form";
import PaymentMethods from "./payment-methods";
export default function PaymentSection() {
  return (
    <div className="lg:col-span-2 space-y-6">
      <CustomerForm />
      <PaymentMethods  />
    </div>
  )


}