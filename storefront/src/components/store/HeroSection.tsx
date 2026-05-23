import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Truck, FlaskConical } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-24 md:py-36">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm text-amber-400">
            <FlaskConical className="h-4 w-4" />
            Premium Research Peptides
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            High-Purity Peptides
            <span className="block text-amber-400">Delivered in Iraq</span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
            Pharmaceutical-grade peptides for research purposes. Fast delivery
            to all Iraqi governorates. Cash on delivery available.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/products">
              <Button size="lg" className="bg-amber-400 text-black hover:bg-amber-300 font-semibold gap-2">
                Shop Now <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap gap-6 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-amber-400" />
            99%+ Purity
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-amber-400" />
            Nationwide Delivery
          </div>
          <div className="flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-amber-400" />
            Lab Tested
          </div>
        </div>
      </div>
    </section>
  )
}
