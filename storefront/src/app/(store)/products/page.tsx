import { ProductsFilter } from "@/components/store/ProductsFilter"

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">All Products</h1>
        <p className="text-slate-500 mt-1">Research-grade peptides — for scientific use only</p>
      </div>
      <ProductsFilter />
    </main>
  )
}
