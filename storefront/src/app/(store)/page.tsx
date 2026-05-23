import { HeroSection } from "@/components/store/HeroSection"
import { CategoryGrid } from "@/components/store/CategoryGrid"
import { Separator } from "@/components/ui/separator"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Separator className="bg-white/5" />
      <CategoryGrid />
    </>
  )
}
