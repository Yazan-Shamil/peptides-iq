import Link from "next/link"
import { FlaskConical, MessageCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-zinc-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 text-white">
              <FlaskConical className="h-5 w-5 text-amber-400" />
              <span className="font-bold tracking-tight">Peptides IQ</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Premium research peptides delivered across Iraq. Quality you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <Link href="/cart" className="hover:text-white transition-colors">Cart</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h4>
            <a
              href="https://wa.me/9647XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-green-500" />
              WhatsApp Us
            </a>
            <p className="text-sm">Iraq — Nationwide Delivery</p>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <p className="text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Peptides IQ. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
