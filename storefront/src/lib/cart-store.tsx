"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { formatPrice } from "@/lib/mock-data"

export interface CartItem {
  variantId: string
  productId: string
  productTitle: string
  variantTitle: string
  price: number
  currency: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (variantId: string) => void
  updateQuantity: (variantId: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
  formattedSubtotal: string
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  function addItem(incoming: Omit<CartItem, "quantity">) {
    setItems((prev) => {
      const existing = prev.find((i) => i.variantId === incoming.variantId)
      if (existing) {
        return prev.map((i) =>
          i.variantId === incoming.variantId ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...incoming, quantity: 1 }]
    })
  }

  function removeItem(variantId: string) {
    setItems((prev) => prev.filter((i) => i.variantId !== variantId))
  }

  function updateQuantity(variantId: string, quantity: number) {
    if (quantity < 1) return removeItem(variantId)
    setItems((prev) =>
      prev.map((i) => (i.variantId === variantId ? { ...i, quantity } : i))
    )
  }

  function clearCart() {
    setItems([])
  }

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const formattedSubtotal = formatPrice(subtotal)

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, itemCount, subtotal, formattedSubtotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCartStore() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCartStore must be used inside CartProvider")
  return ctx
}
