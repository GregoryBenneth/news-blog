import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import MobileNav from "./mobile-nav"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">NewsPortal</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/politics" className="text-sm font-medium hover:underline underline-offset-4">
            Politics
          </Link>
          <Link href="/business" className="text-sm font-medium hover:underline underline-offset-4">
            Business
          </Link>
          <Link href="/technology" className="text-sm font-medium hover:underline underline-offset-4">
            Technology
          </Link>
          <Link href="/sports" className="text-sm font-medium hover:underline underline-offset-4">
            Sports
          </Link>
          <Link href="/entertainment" className="text-sm font-medium hover:underline underline-offset-4">
            Entertainment
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button>Subscribe</Button>
        </div>
      </div>
    </header>
  )
}

