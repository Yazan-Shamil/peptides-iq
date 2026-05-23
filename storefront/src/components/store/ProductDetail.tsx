"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ShoppingCart, FlaskConical, ShieldCheck, Truck, Minus, Plus } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Product } from "@/types"
import { formatPrice } from "@/lib/mock-data"
import { useCartStore } from "@/lib/cart-store"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0]?.id ?? "")
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCartStore()

  const selectedVariant = product.variants.find((v) => v.id === selectedVariantId)
  const price = selectedVariant?.prices[0]

  function handleAddToCart() {
    if (!selectedVariant || !price) return
    for (let i = 0; i < quantity; i++) {
      addItem({
        variantId: selectedVariant.id,
        productId: product.id,
        productTitle: product.title,
        variantTitle: selectedVariant.title,
        price: price.amount,
        currency: price.currency_code,
      })
    }
    toast.success(`${product.title} added to cart`, {
      description: `${quantity} × ${selectedVariant.title}`,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="container mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-slate-600">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/products" className="hover:text-slate-600">Products</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-slate-900">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="aspect-square rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200">
          <FlaskConical className="h-24 w-24 text-slate-300" />
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {product.categories.map((c) => (
                <Badge key={c.id} variant="secondary" className="bg-blue-50 text-blue-600 border-blue-100">
                  {c.name}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl font-bold text-slate-900">{product.title}</h1>
          </div>

          <div className="text-2xl font-bold text-blue-600">
            {price ? formatPrice(price.amount, price.currency_code) : "—"}
          </div>

          {/* Variant selector */}
          {product.variants.length > 1 && (
            <div>
              <p className="text-sm font-medium text-slate-700 mb-2">Size / Concentration</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariantId(variant.id)}
                    className={`px-5 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      selectedVariantId === variant.id
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {variant.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <p className="text-sm font-medium text-slate-700 mb-2">Quantity</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="h-9 w-9 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <Minus className="h-4 w-4 text-slate-600" />
              </button>
              <span className="w-8 text-center font-semibold text-slate-900">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="h-9 w-9 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <Plus className="h-4 w-4 text-slate-600" />
              </button>
              <span className="text-sm text-slate-400 ml-1">
                {selectedVariant?.inventory_quantity} in stock
              </span>
            </div>
          </div>

          {/* Add to cart */}
          <Button
            size="lg"
            onClick={handleAddToCart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold gap-2"
          >
            <ShoppingCart className="h-5 w-5" />
            {added ? "Added to Cart!" : "Add to Cart"}
          </Button>

          <Separator className="bg-slate-100" />

          {/* Trust badges */}
          <div className="space-y-2.5 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
              99%+ purity — lab tested and verified
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-blue-600 shrink-0" />
              Nationwide delivery across all Iraqi governorates
            </div>
            <div className="flex items-center gap-2">
              <FlaskConical className="h-4 w-4 text-blue-600 shrink-0" />
              For research purposes only
            </div>
          </div>

          <Separator className="bg-slate-100" />

          {/* Description */}
          <div>
            <h2 className="font-semibold text-slate-900 mb-2">About this product</h2>
            <p className="text-sm text-slate-500 leading-relaxed">{product.description}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
