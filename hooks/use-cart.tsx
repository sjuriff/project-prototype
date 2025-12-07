"use client"

import { useEffect, useState } from "react"

export interface CartItemData {
  id: string
  title: string
  data: string
  validity: string
  price: number
  quantity: number
}

export function useCart() {
  const [items, setItems] = useState<CartItemData[]>([])
  const [hydrated, setHydrated] = useState(false)

  // Load from localStorage once
  useEffect(() => {
    const saved = localStorage.getItem("cart")
    if (saved) {
      try {
        setItems(JSON.parse(saved))
      } catch { }
    }
    setHydrated(true)
  }, [])

  // Persist on every update
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("cart", JSON.stringify(items))
    }
  }, [items, hydrated])

  /** Add a new item (does NOT check duplicates) */
  const addItem = (item: CartItemData) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id)

      if (existing) {
        return prev.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }

      return [...prev, item]
    })
  }

  /** Remove item by id */
  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  /** Update quantity for an item */
  const updateQuantity = (id: string, qty: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    )
  }

  /** Reset everything */
  const reset = () => {
    setItems([])
    localStorage.removeItem("cart")
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
