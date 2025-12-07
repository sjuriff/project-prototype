'use client'
import { CartItem } from "@/components/cart-item";
import { ShoppingCart, ArrowLeft, CreditCard } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import PrimaryButton from "@/components/buttons/primary-button";
import Link from "next/link";
import paths from "@/paths";
interface CartItemData {
  id: string;
  title: string;
  data: string;
  validity: string;
  price: number;
  quantity: number;
}


export default function ShoppingCartPage() {
  const {
    items: cartItems,
    removeItem,
    updateQuantity,
    hydrated,
  } = useCart()

  if (!hydrated) return null // or loading skeleton

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      {/* Header */}
      <header className="bg-white border-b" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href={paths.home}>
            <button className="flex hover:cursor-pointer text-secondary-text group items-center gap-2 hover:opacity-70 transition-opacity" >
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-[-2px] transition-transform" />
              <span className="font-heading">Fortsett å handle</span>
            </button>
          </Link>
          <h1 className="font-heading text-lg text-tertiary-heading">Handlevogn</h1>
          <div className="w-[140px]"></div> {/* Spacer for alignment */}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingCart className="w-6 h-6" style={{ color: 'var(--color-tertiary)' }} />
                <h2 style={{ color: 'var(--color-primary-text)' }}>
                  Dine produkter ({cartItems.length})
                </h2>
              </div>

              {cartItems.length === 0 ? (
                <div className="py-12 text-center">
                  <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p style={{ color: 'var(--color-secondary-text)' }}>
                    Handlevognen er tom
                  </p>
                </div>
              ) : (
                <div>
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      {...item}
                      validity={item.validity}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-6">
              <h2 className="mb-6" style={{ color: 'var(--color-primary-text)' }}>
                Bestillingsoversikt
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span style={{ color: 'var(--color-secondary-text)' }}>Delsum</span>
                  <span style={{ color: 'var(--color-primary-text)' }}>
                    {subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--color-secondary-text)' }}>MVA</span>
                  <span style={{ color: 'var(--color-primary-text)' }}>
                    {tax.toFixed(2)}
                  </span>
                </div>
                <div className="pt-3 border-t" style={{ borderColor: '#e5e7eb' }}>
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--color-primary-text)' }}>Totalt beløp</span>
                    <span style={{ color: 'var(--color-primary-text)', fontSize: '1.25rem' }}>
                      {total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <PrimaryButton
                Icon={CreditCard}
                fullWidth


                disabled={cartItems.length === 0}
              >
                Gå til kassen
              </PrimaryButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}