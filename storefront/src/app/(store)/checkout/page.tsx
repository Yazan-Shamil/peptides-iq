import { CheckoutForm } from "@/components/store/CheckoutForm"

export default function CheckoutPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
        <p className="text-slate-500 mt-1">Fill in your delivery details below</p>
      </div>
      <CheckoutForm />
    </main>
  )
}
