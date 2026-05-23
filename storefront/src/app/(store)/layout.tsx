import { Navbar } from "@/components/store/Navbar"
import { Footer } from "@/components/store/Footer"
import { WhatsAppButton } from "@/components/store/WhatsAppButton"
import { CartProvider } from "@/lib/cart-store"

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </div>
    </CartProvider>
  )
}
