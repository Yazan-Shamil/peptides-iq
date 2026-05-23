import Link from "next/link"

const categories = [
  {
    name: "Growth Hormone Peptides",
    description: "Ipamorelin, CJC-1295, GHRP-6",
    href: "/products?category=growth-hormone",
    bg: "bg-blue-50 hover:bg-blue-100",
    border: "border-blue-200",
    text: "text-blue-700",
  },
  {
    name: "Healing & Recovery",
    description: "BPC-157, TB-500, GHK-Cu",
    href: "/products?category=healing",
    bg: "bg-emerald-50 hover:bg-emerald-100",
    border: "border-emerald-200",
    text: "text-emerald-700",
  },
  {
    name: "Fat Loss",
    description: "AOD-9604, Tesamorelin, HGH Frag",
    href: "/products?category=fat-loss",
    bg: "bg-orange-50 hover:bg-orange-100",
    border: "border-orange-200",
    text: "text-orange-700",
  },
  {
    name: "Cognitive & Nootropic",
    description: "Semax, Selank, Dihexa",
    href: "/products?category=cognitive",
    bg: "bg-purple-50 hover:bg-purple-100",
    border: "border-purple-200",
    text: "text-purple-700",
  },
]

export function CategoryGrid() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Shop by Category</h2>
        <p className="text-slate-500 mt-2">Find the right peptide for your research</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Link key={cat.name} href={cat.href}>
            <div className={`group rounded-xl border ${cat.border} ${cat.bg} p-6 h-40 flex flex-col justify-end transition-colors cursor-pointer`}>
              <h3 className={`font-semibold text-sm ${cat.text}`}>{cat.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
