"use client"

import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/lib/cart-store"
import { formatPrice } from "@/lib/mock-data"

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCartStore()

  if (items.length === 0) {
    return (
      <main className="container mx-auto px-4 py-20 flex flex-col items-center gap-4 text-center">
        <ShoppingCart className="h-16 w-16 text-slate-200" />
        <h1 className="text-2xl font-bold text-slate-900">Your cart is empty</h1>
        <p className="text-slate-500">Add some products to get started.</p>
        <Link href="/products">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-2">Browse Products</Button>
        </Link>
      </main>
    )
  }

  const total = subtotal

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.variantId} className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white">
              <div className="h-20 w-20 rounded-lg bg-slate-100 shrink-0 flex items-center justify-center text-slate-300 text-xs">
                IMG
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900 truncate">{item.productTitle}</p>
                <p className="text-sm text-slate-500">{item.variantTitle}</p>
                <p className="text-blue-600 font-bold mt-1">{formatPrice(item.price, item.currency)}</p>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <button
                  onClick={() => removeItem(item.variantId)}
                  className="text-slate-300 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                    className="h-7 w-7 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                  >
                    <Minus className="h-3 w-3 text-slate-600" />
                  </button>
                  <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                    className="h-7 w-7 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                  >
                    <Plus className="h-3 w-3 text-slate-600" />
                  </button>
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  {formatPrice(item.price * item.quantity, item.currency)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-4 sticky top-24">
            <h2 className="font-bold text-slate-900 text-lg">Order Summary</h2>
            <Separator className="bg-slate-100" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="text-emerald-600 font-medium">Free</span>
              </div>
            </div>
            <Separator className="bg-slate-100" />
            <div className="flex justify-between font-bold text-slate-900">
              <span>Total</span>
              <span className="text-blue-600 text-lg">{formatPrice(total)}</span>
            </div>
            <Link href="/checkout" className="block">
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold gap-2">
                Proceed to Checkout <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/products" className="block text-center text-sm text-slate-400 hover:text-slate-600 transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
