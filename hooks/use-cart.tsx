"use client"

import { useEffect, useState } from "react"

export interface CartItemData {
  id: string
  title: string
  data: string
  countryCode: string
  validity: string
  price: number
  quantity: number
}

export function useCart() {
  const [items, setItems] = useState<CartItemData[]>([])
  const [hydrated, setHydrated] = useState(false)


  const loadCart = () => {
    try {
      const saved = localStorage.getItem("cart")
      setItems(saved ? JSON.parse(saved) : [])
    } catch { setItems(items) }
  }

  // Load from localStorage once
  useEffect(() => {
    loadCart()
    setHydrated(true)
  }, [])

  useEffect(() => {
    const handleCartUpdated = () => {
      loadCart()
    }

    window.addEventListener("cart-updated", handleCartUpdated)
    return () => window.removeEventListener("cart-updated", handleCartUpdated)
  }, [])


  const persistCart = (nextItems: CartItemData[]) => {
    setItems(nextItems)
    localStorage.setItem("cart", JSON.stringify(nextItems))
    window.dispatchEvent(new Event("cart-updated"))
  }

  /** Add a new item (does NOT check duplicates) */
  const addItem = (item: CartItemData) => {
    const existing = items.find(i => i.id === item.id && i.data === item.data)

    if (existing) {
      persistCart(
        items.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      )
      return
    }

    persistCart([...items, item])
  }

  /** Remove item by id */

  const removeItem = (id: string, data: string) => {
    persistCart(items.filter(item => !(item.id === id && item.data === data)))
  }
  /** Update quantity for an item */
  const updateQuantity = (id: string, qty: number) => {
    persistCart(
      items
        .map(item => (item.id === id ? { ...item, quantity: qty } : item))
        .filter(item => item.quantity > 0)
    )
  }

  /** Reset everything */
  const reset = () => {
    localStorage.removeItem("cart")
    setItems([])
    window.dispatchEvent(new Event("cart-updated"))
  }

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    reset,
    hydrated,
  }
}
