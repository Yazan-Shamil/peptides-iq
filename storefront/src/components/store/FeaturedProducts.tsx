import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard } from "@/components/store/ProductCard"
import { mockProducts } from "@/lib/mock-data"

const featured = mockProducts.slice(0, 4)

export function FeaturedProducts() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Featured Products</h2>
          <p className="text-slate-500 mt-2">Our most popular research peptides</p>
        </div>
        <Link
          href="/products"
          className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 sm:hidden text-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600"
        >
          View all products <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
