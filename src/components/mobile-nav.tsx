"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="/politics"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={() => setOpen(false)}
          >
            Politics
          </Link>
          <Link
            href="/business"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={() => setOpen(false)}
          >
            Business
          </Link>
          <Link
            href="/technology"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={() => setOpen(false)}
          >
            Technology
          </Link>
          <Link
            href="/sports"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={() => setOpen(false)}
          >
            Sports
          </Link>
          <Link
            href="/entertainment"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={() => setOpen(false)}
          >
            Entertainment
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

