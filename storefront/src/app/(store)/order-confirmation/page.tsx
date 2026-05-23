"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { CheckCircle, MessageCircle, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Suspense } from "react"

function OrderConfirmationContent() {
  const params = useSearchParams()
  const orderId = params.get("id") ?? "—"

  return (
    <main className="container mx-auto px-4 py-20 flex flex-col items-center text-center max-w-lg">
      <div className="h-20 w-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
        <CheckCircle className="h-10 w-10 text-emerald-500" />
      </div>

      <h1 className="text-3xl font-bold text-slate-900">Order Placed!</h1>
      <p className="text-slate-500 mt-2">
        Thank you for your order. We will contact you shortly to confirm delivery.
      </p>

      <div className="mt-8 w-full rounded-xl border border-slate-200 bg-white p-6 text-left space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Order ID</span>
          <span className="font-bold text-slate-900 font-mono">{orderId}</span>
        </div>
        <Separator className="bg-slate-100" />
        <div className="flex items-start gap-3">
          <Package className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-slate-900 text-sm">What happens next?</p>
            <ul className="text-sm text-slate-500 mt-1.5 space-y-1.5 list-disc list-inside">
              <li>We will call or WhatsApp you to confirm your order</li>
              <li>Your order will be packaged and dispatched</li>
              <li>Delivery typically takes 1–3 business days</li>
              <li>Pay cash when the order arrives at your door</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full space-y-3">
        <a href="https://wa.me/9647XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="block">
          <Button variant="outline" className="w-full border-slate-200 text-slate-700 gap-2">
            <MessageCircle className="h-4 w-4 text-green-600" />
            Contact us on WhatsApp
          </Button>
        </a>
        <Link href="/products" className="block">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </main>
  )
}

export default function OrderConfirmationPage() {
  return (
    <Suspense>
      <OrderConfirmationContent />
    </Suspense>
  )
}
