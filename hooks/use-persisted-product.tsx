"use client"

import { useEffect, useState } from "react"
import type { StaticImageData } from "next/image"

/* =========================
   Types (inline)
   ========================= */

export interface Tier {
  data: string
  validity: string
  price: string
}

export interface Product {
  id: string
  imageUrl: string
  title: string
  data: string
  validity: string
  price: string
  currency?: string
  tiers: Tier[]
}

/* =========================
   Stored (JSON-safe) shape
   ========================= */



const STORAGE_KEY = "product"

/* =========================
   Hook
   ========================= */

export function usePersistedProduct() {
  const [hydrated, setHydrated] = useState(false)

  // hydration flag only (no product state)
  useEffect(() => {
    setHydrated(true)
  }, [])

  const getProduct = (): Product | null => {
    if (typeof window === "undefined") return null
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as Product) : null
    } catch {
      return null
    }
  }

  const persistProduct = (product: Product) => {
    const stored: Product = {
      ...product,
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
  }

  const clearProduct = () => {
    localStorage.removeItem(STORAGE_KEY)
  }

  return {
    hydrated,
    getProduct,      // () => StoredProduct | null
    persistProduct,  // (product: Product) => void
    clearProduct,    // () => void
  }
}