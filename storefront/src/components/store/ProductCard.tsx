import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { Product } from "@/types"

interface ProductCardProps {
  product: Product
}

function formatPrice(amount: number, currency: string = "USD") {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount / 100)
}

export function ProductCard({ product }: ProductCardProps) {
  const lowestPrice = product.variants
    .flatMap((v) => v.prices)
    .sort((a, b) => a.amount - b.amount)[0]

  return (
    <Card className="bg-zinc-900 border-white/10 overflow-hidden group hover:border-amber-400/40 transition-colors">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square bg-zinc-800 overflow-hidden">
          {product.thumbnail ? (
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-zinc-600 text-xs">
              No image
            </div>
          )}
          <Badge className="absolute top-2 left-2 bg-amber-400 text-black text-xs font-semibold">
            In Stock
          </Badge>
        </div>
      </Link>

      <CardContent className="p-4 space-y-3">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-white text-sm leading-tight hover:text-amber-400 transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          <span className="text-amber-400 font-bold">
            {lowestPrice ? formatPrice(lowestPrice.amount, lowestPrice.currency_code) : "—"}
          </span>
          <Button
            size="sm"
            className="bg-amber-400 text-black hover:bg-amber-300 h-8 px-3 gap-1.5 text-xs font-semibold"
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
    <Card className="bg-zinc-900 border-white/10 overflow-hidden">
      <div className="aspect-square bg-zinc-800 animate-pulse" />
      <CardContent className="p-4 space-y-3">
        <div className="h-4 bg-zinc-800 rounded animate-pulse w-3/4" />
        <div className="h-4 bg-zinc-800 rounded animate-pulse w-1/2" />
      </CardContent>
    </Card>
  )
}
