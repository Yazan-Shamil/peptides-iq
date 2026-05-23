"use client"

import Link from "next/link"
import Image from "next/image"
import { FlaskConical, ShoppingCart } from "lucide-react"
import { toast } from "sonner"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Product } from "@/types"
import { formatPrice } from "@/lib/mock-data"
import { useCartStore } from "@/lib/cart-store"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore()

  const lowestVariant = product.variants
    .sort((a, b) => a.prices[0].amount - b.prices[0].amount)[0]
  const lowestPrice = lowestVariant?.prices[0]

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault()
    if (!lowestVariant || !lowestPrice) return
    addItem({
      variantId: lowestVariant.id,
      productId: product.id,
      productTitle: product.title,
      variantTitle: lowestVariant.title,
      price: lowestPrice.amount,
      currency: lowestPrice.currency_code,
    })
    toast.success(`${product.title} added to cart`, {
      description: lowestVariant.title,
    })
  }

  return (
    <Card className="bg-white border-slate-200 overflow-hidden group hover:border-blue-300 hover:shadow-md transition-all">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square bg-slate-50 overflow-hidden">
          {product.thumbnail ? (
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-slate-300">
              <FlaskConical className="h-10 w-10" />
              <span className="text-xs">Peptides IQ</span>
            </div>
          )}
          <Badge className="absolute top-2 left-2 bg-emerald-100 text-emerald-700 border-emerald-200 text-xs font-semibold">
            In Stock
          </Badge>
        </div>
      </Link>

      <CardContent className="p-4 space-y-3">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-slate-900 text-sm leading-tight hover:text-blue-600 transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          <span className="text-blue-600 font-bold">
            {lowestPrice ? formatPrice(lowestPrice.amount, lowestPrice.currency_code) : "—"}
          </span>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="bg-blue-600 text-white hover:bg-blue-700 h-8 px-3 gap-1.5 text-xs font-semibold"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function ProductCardSkeleton() {
  return (
    <Card className="bg-white border-slate-200 overflow-hidden">
      <div className="aspect-square bg-slate-100 animate-pulse" />
      <CardContent className="p-4 space-y-3">
        <div className="h-4 bg-slate-100 rounded animate-pulse w-3/4" />
        <div className="h-4 bg-slate-100 rounded animate-pulse w-1/2" />
      </CardContent>
    </Card>
  )
}
