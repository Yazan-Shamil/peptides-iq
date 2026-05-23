import Link from "next/link"
import { FlaskConical, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <FlaskConical className="h-16 w-16 text-slate-200 mb-6" />

      <p className="text-6xl font-bold text-slate-900">404</p>
      <h1 className="text-xl font-semibold text-slate-700 mt-3">Page not found</h1>
      <p className="text-slate-500 mt-2 max-w-sm">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <div className="flex gap-3 mt-8">
        <Link href="/">
          <Button variant="outline" className="border-slate-200 text-slate-700 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Go Home
          </Button>
        </Link>
        <Link href="/products">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Browse Products
          </Button>
        </Link>
      </div>
    </div>
  )
}
