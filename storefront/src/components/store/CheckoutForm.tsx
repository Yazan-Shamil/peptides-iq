"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Banknote, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/lib/cart-store"
import { formatPrice } from "@/lib/mock-data"

const IRAQI_GOVERNORATES = [
  "Baghdad", "Basra", "Nineveh", "Erbil", "Sulaymaniyah",
  "Kirkuk", "Diyala", "Anbar", "Karbala", "Najaf",
  "Wasit", "Babil", "Qadisiyyah", "Dhi Qar", "Muthanna",
  "Maysan", "Dohuk", "Halabja", "Saladin",
]

interface FormData {
  fullName: string
  phone: string
  governorate: string
  address: string
  notes: string
}

export function CheckoutForm() {
  const router = useRouter()
  const { items, subtotal, clearCart } = useCartStore()
  const [placing, setPlacing] = useState(false)
  const [form, setForm] = useState<FormData>({
    fullName: "",
    phone: "",
    governorate: "",
    address: "",
    notes: "",
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})

  function validate() {
    const e: Partial<FormData> = {}
    if (!form.fullName.trim()) e.fullName = "Full name is required"
    if (!form.phone.trim()) e.phone = "Phone number is required"
    if (!form.governorate) e.governorate = "Please select a governorate"
    if (!form.address.trim()) e.address = "Address is required"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setPlacing(true)
    // Simulate order placement delay
    await new Promise((r) => setTimeout(r, 1200))
    const orderId = `IQ-${Math.floor(10000 + Math.random() * 90000)}`
    clearCart()
    router.push(`/order-confirmation?id=${orderId}`)
  }

  if (items.length === 0) {
    router.push("/cart")
    return null
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left — form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Delivery details */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 space-y-5">
            <h2 className="font-bold text-slate-900">Delivery Details</h2>
            <Separator className="bg-slate-100" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">Full Name</label>
                <Input
                  placeholder="e.g. Ahmed Al-Khalidi"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className={errors.fullName ? "border-red-400" : "border-slate-200"}
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">Phone Number</label>
                <Input
                  placeholder="07XX XXX XXXX"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={errors.phone ? "border-red-400" : "border-slate-200"}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">Governorate</label>
              <select
                value={form.governorate}
                onChange={(e) => handleChange("governorate", e.target.value)}
                className={`w-full rounded-md border px-3 py-2 text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.governorate ? "border-red-400" : "border-slate-200"
                }`}
              >
                <option value="">Select governorate...</option>
                {IRAQI_GOVERNORATES.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              {errors.governorate && <p className="text-xs text-red-500 mt-1">{errors.governorate}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">Street Address</label>
              <Input
                placeholder="Neighborhood, street, building..."
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className={errors.address ? "border-red-400" : "border-slate-200"}
              />
              {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                Order Notes <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <Input
                placeholder="Any special instructions..."
                value={form.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                className="border-slate-200"
              />
            </div>
          </section>

          {/* Payment */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 space-y-4">
            <h2 className="font-bold text-slate-900">Payment Method</h2>
            <Separator className="bg-slate-100" />
            <div className="flex items-center gap-3 rounded-lg border-2 border-blue-600 bg-blue-50 p-4">
              <Banknote className="h-6 w-6 text-blue-600 shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Cash on Delivery</p>
                <p className="text-xs text-slate-500 mt-0.5">Pay when your order arrives at your door</p>
              </div>
              <CheckCircle className="h-5 w-5 text-blue-600 ml-auto shrink-0" />
            </div>
          </section>
        </div>

        {/* Right — summary */}
        <div className="lg:col-span-1">
          <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-4 sticky top-24">
            <h2 className="font-bold text-slate-900 text-lg">Order Summary</h2>
            <Separator className="bg-slate-100" />

            <div className="space-y-3 max-h-60 overflow-y-auto">
              {items.map((item) => (
                <div key={item.variantId} className="flex justify-between text-sm">
                  <div className="min-w-0 mr-2">
                    <p className="text-slate-900 truncate">{item.productTitle}</p>
                    <p className="text-slate-400 text-xs">{item.variantTitle} × {item.quantity}</p>
                  </div>
                  <span className="text-slate-900 font-medium shrink-0">
                    {formatPrice(item.price * item.quantity, item.currency)}
                  </span>
                </div>
              ))}
            </div>

            <Separator className="bg-slate-100" />

            <div className="flex justify-between text-sm text-slate-500">
              <span>Shipping</span>
              <span className="text-emerald-600 font-medium">Free</span>
            </div>
            <div className="flex justify-between font-bold text-slate-900">
              <span>Total</span>
              <span className="text-blue-600 text-lg">{formatPrice(subtotal)}</span>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={placing}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              {placing ? "Placing Order..." : "Place Order"}
            </Button>

            <p className="text-xs text-slate-400 text-center">
              By placing your order you agree to our terms of service
            </p>
          </div>
        </div>
      </div>
    </form>
  )
}
