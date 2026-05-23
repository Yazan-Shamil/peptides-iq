import { Navbar } from "@/components/store/Navbar"
import { Footer } from "@/components/store/Footer"
import { CartProvider } from "@/lib/cart-store"

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </CartProvider>
  )
}
