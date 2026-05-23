import Link from "next/link"

const categories = [
  {
    name: "Growth Hormone Peptides",
    description: "Ipamorelin, CJC-1295, GHRP-6",
    href: "/products?category=growth-hormone",
    gradient: "from-blue-900/40 to-blue-900/10",
    accent: "border-blue-500/30",
  },
  {
    name: "Healing & Recovery",
    description: "BPC-157, TB-500, GHK-Cu",
    href: "/products?category=healing",
    gradient: "from-green-900/40 to-green-900/10",
    accent: "border-green-500/30",
  },
  {
    name: "Fat Loss",
    description: "AOD-9604, Tesamorelin, HGH Frag",
    href: "/products?category=fat-loss",
    gradient: "from-amber-900/40 to-amber-900/10",
    accent: "border-amber-500/30",
  },
  {
    name: "Cognitive & Nootropic",
    description: "Semax, Selank, Dihexa",
    href: "/products?category=cognitive",
    gradient: "from-purple-900/40 to-purple-900/10",
    accent: "border-purple-500/30",
  },
]

export function CategoryGrid() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Shop by Category</h2>
        <p className="text-zinc-400 mt-2">Find the right peptide for your research</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Link key={cat.name} href={cat.href}>
            <div
              className={`group relative rounded-xl border ${cat.accent} bg-gradient-to-br ${cat.gradient} p-6 h-40 flex flex-col justify-end hover:scale-[1.02] transition-transform cursor-pointer`}
            >
              <h3 className="font-semibold text-white text-sm">{cat.name}</h3>
              <p className="text-xs text-zinc-400 mt-1">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
