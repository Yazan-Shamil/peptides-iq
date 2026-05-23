import { FlaskConical, ShieldCheck, Truck, Award, Users } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const values = [
  {
    icon: ShieldCheck,
    title: "Purity Guaranteed",
    description:
      "Every batch of peptides we carry is third-party tested to verify purity levels of 99% or higher. We never compromise on quality.",
  },
  {
    icon: FlaskConical,
    title: "Research Grade",
    description:
      "All products are manufactured under strict quality control standards and are intended for scientific research purposes only.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "We deliver to all 19 Iraqi governorates. Orders are carefully packaged to maintain peptide integrity during shipping.",
  },
  {
    icon: Award,
    title: "Trusted Source",
    description:
      "We work directly with verified manufacturers and maintain full documentation of origin and testing for every product we sell.",
  },
]

const stats = [
  { value: "99%+", label: "Purity on all products" },
  { value: "19", label: "Iraqi governorates served" },
  { value: "48h", label: "Average delivery time" },
  { value: "100%", label: "Cash on delivery" },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-50 border-b border-slate-100 py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <FlaskConical className="h-7 w-7 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900">About Peptides IQ</h1>
          <p className="text-slate-500 mt-4 text-lg leading-relaxed">
            We are Iraq's first dedicated supplier of pharmaceutical-grade research peptides,
            bringing verified, high-purity compounds to researchers and professionals across the country.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Story</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Peptides IQ was founded with a simple mission: to make high-quality research peptides
            accessible to professionals in Iraq. For too long, researchers and medical professionals
            in Iraq had to navigate unreliable international suppliers with long shipping times,
            customs issues, and uncertain product quality.
          </p>
          <p>
            We changed that. By working directly with verified manufacturers and building a reliable
            local supply chain, we can deliver genuine, lab-tested peptides to your door — anywhere
            in Iraq — within 48 hours, with the convenience of cash on delivery.
          </p>
          <p>
            Every product in our catalog comes with full documentation, including certificates of
            analysis (CoA) from independent testing labs. We believe transparency and quality are
            non-negotiable.
          </p>
        </div>

        <Separator className="my-12 bg-slate-100" />

        {/* Values */}
        <h2 className="text-2xl font-bold text-slate-900 mb-8">What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-white">
              <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <v.icon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">{v.title}</h3>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-12 bg-slate-100" />

        {/* Disclaimer */}
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-5 flex gap-3">
          <Users className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-900">Research Use Only</p>
            <p className="text-sm text-amber-700 mt-1 leading-relaxed">
              All peptides sold by Peptides IQ are intended strictly for scientific research
              purposes. They are not approved for human consumption or therapeutic use. By
              purchasing from us, you confirm that you understand and agree to this.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
