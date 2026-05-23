import { Product } from "@/types"

export const mockProducts: Product[] = [
  {
    id: "bpc-157",
    title: "BPC-157",
    description:
      "BPC-157 (Body Protection Compound-157) is a synthetic peptide consisting of 15 amino acids. It has been studied for its regenerative properties, particularly in healing tendons, ligaments, muscles, and the gastrointestinal tract. Research suggests it promotes angiogenesis and collagen production.",
    thumbnail: null,
    categories: [{ id: "healing", name: "Healing & Recovery", handle: "healing" }],
    variants: [
      {
        id: "bpc-157-5mg",
        title: "5mg",
        inventory_quantity: 48,
        prices: [{ amount: 4500, currency_code: "USD" }],
      },
      {
        id: "bpc-157-10mg",
        title: "10mg",
        inventory_quantity: 30,
        prices: [{ amount: 8000, currency_code: "USD" }],
      },
    ],
  },
  {
    id: "tb-500",
    title: "TB-500 (Thymosin Beta-4)",
    description:
      "TB-500 is a synthetic version of the naturally occurring peptide Thymosin Beta-4. It is known for its role in tissue repair, wound healing, and reducing inflammation. Studies indicate it can promote cell migration and differentiation, making it valuable in recovery research.",
    thumbnail: null,
    categories: [{ id: "healing", name: "Healing & Recovery", handle: "healing" }],
    variants: [
      {
        id: "tb-500-5mg",
        title: "5mg",
        inventory_quantity: 35,
        prices: [{ amount: 5500, currency_code: "USD" }],
      },
      {
        id: "tb-500-10mg",
        title: "10mg",
        inventory_quantity: 20,
        prices: [{ amount: 9500, currency_code: "USD" }],
      },
    ],
  },
  {
    id: "ipamorelin",
    title: "Ipamorelin",
    description:
      "Ipamorelin is a selective growth hormone secretagogue and ghrelin receptor agonist. It stimulates the pituitary gland to produce growth hormone in a pulsatile manner, closely mimicking the body's natural GH release. Research shows minimal effect on cortisol or prolactin levels.",
    thumbnail: null,
    categories: [{ id: "growth-hormone", name: "Growth Hormone Peptides", handle: "growth-hormone" }],
    variants: [
      {
        id: "ipamorelin-2mg",
        title: "2mg",
        inventory_quantity: 60,
        prices: [{ amount: 3500, currency_code: "USD" }],
      },
      {
        id: "ipamorelin-5mg",
        title: "5mg",
        inventory_quantity: 40,
        prices: [{ amount: 7000, currency_code: "USD" }],
      },
    ],
  },
  {
    id: "cjc-1295",
    title: "CJC-1295 (DAC)",
    description:
      "CJC-1295 with Drug Affinity Complex (DAC) is a long-acting growth hormone releasing hormone analogue. The DAC modification extends its half-life significantly, allowing for less frequent dosing in research protocols. It consistently elevates GH and IGF-1 levels over time.",
    thumbnail: null,
    categories: [{ id: "growth-hormone", name: "Growth Hormone Peptides", handle: "growth-hormone" }],
    variants: [
      {
        id: "cjc-1295-2mg",
        title: "2mg",
        inventory_quantity: 25,
        prices: [{ amount: 4000, currency_code: "USD" }],
      },
      {
        id: "cjc-1295-5mg",
        title: "5mg",
        inventory_quantity: 15,
        prices: [{ amount: 8500, currency_code: "USD" }],
      },
    ],
  },
  {
    id: "aod-9604",
    title: "AOD-9604",
    description:
      "AOD-9604 is a modified fragment of human growth hormone (hGH). Research indicates it stimulates fat breakdown (lipolysis) and inhibits fat formation without affecting blood sugar levels or causing tissue growth associated with full hGH. It is studied for its targeted metabolic effects.",
    thumbnail: null,
    categories: [{ id: "fat-loss", name: "Fat Loss", handle: "fat-loss" }],
    variants: [
      {
        id: "aod-9604-5mg",
        title: "5mg",
        inventory_quantity: 50,
        prices: [{ amount: 4200, currency_code: "USD" }],
      },
    ],
  },
  {
    id: "semax",
    title: "Semax",
    description:
      "Semax is a synthetic peptide based on a fragment of ACTH. Originally developed in Russia, it has been studied extensively for neuroprotective and nootropic properties. Research suggests it modulates brain-derived neurotrophic factor (BDNF) and dopaminergic pathways.",
    thumbnail: null,
    categories: [{ id: "cognitive", name: "Cognitive & Nootropic", handle: "cognitive" }],
    variants: [
      {
        id: "semax-30mg",
        title: "30mg",
        inventory_quantity: 22,
        prices: [{ amount: 5000, currency_code: "USD" }],
      },
    ],
  },
  {
    id: "selank",
    title: "Selank",
    description:
      "Selank is a synthetic anxiolytic peptide based on the endogenous peptide tuftsin. Developed by the Institute of Molecular Genetics in Russia, studies indicate it has anxiolytic, nootropic, and anti-stress properties without sedation or addiction potential.",
    thumbnail: null,
    categories: [{ id: "cognitive", name: "Cognitive & Nootropic", handle: "cognitive" }],
    variants: [
      {
        id: "selank-5mg",
        title: "5mg",
        inventory_quantity: 18,
        prices: [{ amount: 4800, currency_code: "USD" }],
      },
    ],
  },
  {
    id: "ghk-cu",
    title: "GHK-Cu (Copper Peptide)",
    description:
      "GHK-Cu is a naturally occurring copper complex of the tripeptide glycyl-L-histidyl-L-lysine. It has been studied for its roles in wound healing, skin regeneration, and anti-inflammatory effects. Research shows it activates wound healing and stimulates collagen synthesis.",
    thumbnail: null,
    categories: [{ id: "healing", name: "Healing & Recovery", handle: "healing" }],
    variants: [
      {
        id: "ghk-cu-50mg",
        title: "50mg",
        inventory_quantity: 30,
        prices: [{ amount: 3800, currency_code: "USD" }],
      },
      {
        id: "ghk-cu-200mg",
        title: "200mg",
        inventory_quantity: 15,
        prices: [{ amount: 12000, currency_code: "USD" }],
      },
    ],
  },
]

export const mockCategories = [
  { id: "all", name: "All Products", handle: "all" },
  { id: "healing", name: "Healing & Recovery", handle: "healing" },
  { id: "growth-hormone", name: "Growth Hormone", handle: "growth-hormone" },
  { id: "fat-loss", name: "Fat Loss", handle: "fat-loss" },
  { id: "cognitive", name: "Cognitive", handle: "cognitive" },
]

export function formatPrice(amount: number, currency: string = "USD") {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount / 100)
}

export function getProductById(id: string) {
  return mockProducts.find((p) => p.id === id) ?? null
}
