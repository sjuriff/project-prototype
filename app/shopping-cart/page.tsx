'use client'
import { useState } from "react";
import { CartItem } from "@/components/cart-item";
import { ShoppingCart, ArrowLeft, CreditCard } from "lucide-react";

interface CartItemData {
  id: string;
  title: string;
  data: string;
  duration: string;
  price: number;
  quantity: number;
}

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState<CartItemData[]>([
    {
      id: "1",
      title: "Europe",
      data: "5GB",
      duration: "30 days",
      price: 100,
      quantity: 1,
    },
    {
      id: "2",
      title: "USA & Canada",
      data: "3GB",
      duration: "14 days",
      price: 50,
      quantity: 2,
    },
    {
      id: "3",
      title: "Asia Pacific",
      data: "10GB",
      duration: "30 days",
      price: 150,
      quantity: 1,
    },
  ]);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      {/* Header */}
      <header className="bg-white border-b" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button className="flex items-center gap-2 hover:opacity-70 transition-opacity" style={{ color: 'var(--color-tertiary)' }}>
            <ArrowLeft className="w-5 h-5" />
            <span>Continue Shopping</span>
          </button>
          <h1 style={{ color: 'var(--color-primary-text)' }}>Shopping Cart</h1>
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
                  Your Items ({cartItems.length})
                </h2>
              </div>

              {cartItems.length === 0 ? (
                <div className="py-12 text-center">
                  <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p style={{ color: 'var(--color-secondary-text)' }}>
                    Your cart is empty
                  </p>
                </div>
              ) : (
                <div>
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      {...item}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemoveItem}
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
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span style={{ color: 'var(--color-secondary-text)' }}>Subtotal</span>
                  <span style={{ color: 'var(--color-primary-text)' }}>
                    {subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--color-secondary-text)' }}>Tax</span>
                  <span style={{ color: 'var(--color-primary-text)' }}>
                    {tax.toFixed(2)}
                  </span>
                </div>
                <div className="pt-3 border-t" style={{ borderColor: '#e5e7eb' }}>
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--color-primary-text)' }}>Total</span>
                    <span style={{ color: 'var(--color-primary-text)', fontSize: '1.25rem' }}>
                      {total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                className="w-full bg-primary text-primary-text py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                
                disabled={cartItems.length === 0}
              >
                <CreditCard className="w-5 h-5" />
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}