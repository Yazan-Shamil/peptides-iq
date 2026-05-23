"use client"

import { useState } from "react"
import { MessageCircle, Phone, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+964 7XX XXX XXXX",
    description: "Fastest response — typically within 1 hour",
    href: "https://wa.me/9647XXXXXXXXX",
    color: "text-green-600",
    bg: "bg-green-50 border-green-200",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+964 7XX XXX XXXX",
    description: "Available Saturday–Thursday, 9am–8pm",
    href: "tel:+9647XXXXXXXXX",
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Sat – Thu, 9am – 8pm",
    description: "Iraq Standard Time (UTC+3)",
    href: null,
    color: "text-slate-600",
    bg: "bg-slate-50 border-slate-200",
  },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", message: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main>
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
          <p className="text-slate-500 mt-3 text-lg">
            Have a question about a product or your order? We're here to help.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — contact methods */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Get in Touch</h2>
              <p className="text-slate-500 mt-1 text-sm">
                WhatsApp is the fastest way to reach us for order questions.
              </p>
            </div>

            <div className="space-y-3">
              {contactMethods.map((method) => (
                <div
                  key={method.label}
                  className={`flex items-start gap-4 p-4 rounded-xl border ${method.bg}`}
                >
                  <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <method.icon className={`h-5 w-5 ${method.color}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{method.label}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-semibold ${method.color} hover:underline`}
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-slate-900">{method.value}</p>
                    )}
                    <p className="text-xs text-slate-500 mt-0.5">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/9647XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold gap-2">
                <MessageCircle className="h-5 w-5" />
                Open WhatsApp Chat
              </Button>
            </a>
          </div>

          <Separator className="lg:hidden bg-slate-100" />

          {/* Right — message form */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">Send a Message</h2>
            <p className="text-slate-500 text-sm mb-6">We'll get back to you on WhatsApp.</p>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-3">
                <CheckCircle className="h-12 w-12 text-emerald-500" />
                <p className="font-semibold text-slate-900">Message received!</p>
                <p className="text-sm text-slate-500">We'll contact you on WhatsApp shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Your Name</label>
                  <Input
                    placeholder="Ahmed Al-Khalidi"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    required
                    className="border-slate-200"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">WhatsApp / Phone</label>
                  <Input
                    placeholder="07XX XXX XXXX"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    required
                    className="border-slate-200"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Message</label>
                  <textarea
                    placeholder="I have a question about..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    required
                    rows={4}
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
