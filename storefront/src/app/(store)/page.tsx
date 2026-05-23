import { HeroSection } from "@/components/store/HeroSection"
import { CategoryGrid } from "@/components/store/CategoryGrid"
import { FeaturedProducts } from "@/components/store/FeaturedProducts"
import { Separator } from "@/components/ui/separator"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <Separator className="bg-slate-100" />
      <FeaturedProducts />
    </>
  )
}
