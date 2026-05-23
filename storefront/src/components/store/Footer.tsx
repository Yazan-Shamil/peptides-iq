import Link from "next/link"
import { FlaskConical, MessageCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-500">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 text-slate-900">
              <FlaskConical className="h-5 w-5 text-blue-600" />
              <span className="font-bold tracking-tight">Peptides IQ</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Premium research peptides delivered across Iraq. Quality you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/products" className="hover:text-slate-900 transition-colors">Products</Link>
              <Link href="/cart" className="hover:text-slate-900 transition-colors">Cart</Link>
              <Link href="/about" className="hover:text-slate-900 transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Contact</h4>
            <a
              href="https://wa.me/9647XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-slate-900 transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-green-600" />
              WhatsApp Us
            </a>
            <p className="text-sm">Iraq — Nationwide Delivery</p>
          </div>
        </div>

        <Separator className="my-8 bg-slate-200" />

        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Peptides IQ. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
