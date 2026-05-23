import { notFound } from "next/navigation"
import { getProductById, mockProducts } from "@/lib/mock-data"
import { ProductDetail } from "@/components/store/ProductDetail"

export function generateStaticParams() {
  return mockProducts.map((p) => ({ id: p.id }))
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) notFound()
  return <ProductDetail product={product} />
}
