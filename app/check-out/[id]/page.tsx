import PaymentForm from "@/components/payment-form";
import { OrderSummary } from "@/components/order-summary";
import CustomerForm from "@/components/customer-form";
import BackButton from "@/components/buttons/back-button";
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

export default async function CheckoutPage({ params }: CheckoutPageProps) {

  const { id } = await params


  const popularDestinations: Product[] = [
    {
      id: '1',
      title: "USA",
      data: "5GB",
      validity: "30 dager",
      price: "199",
      currency: "kr",
    },
    {
      id: '2',
      title: "Thailand",
      data: "5GB",
      validity: "30 dager",
      price: "199",
      currency: "kr",
    },
    {
      id: '3',
      title: "Japan",
      data: "5GB",
      validity: "30 dager",
      price: "199",
      currency: "kr",
    },
    {
      id: '4',
      title: "Tyrkia",
      data: "5GB",
      validity: "30 dager",
      price: "229",
      currency: "kr",
    },
    {
      id: '5',

      title: "Vietnam",
      data: "5GB",
      validity: "30 dager",
      price: "199",
      currency: "kr",
    },
    {
      id: '6',

      title: "Canada",
      data: "5GB",
      validity: "30 dager",
      price: "249",
      currency: "kr",
    },

  ]

  const product = popularDestinations.find((product) => product.id === id);
  if (!product) {
    console.error("Product not found");

  }
  return (
    <main className="bg-surface border border-black flex items-center justify-center  flex flex-col  ">
      <section className="w-full relative  bg-surface  min-h-screen flex items-center justify-center">
        <div className="absolute top-4 left-4 2xl:top-16 2xl:left-16">
          <BackButton />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-tertiary-heading text-4xl font-heading mb-2">Checkout</h1>
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
              <OrderSummary product={product!} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}