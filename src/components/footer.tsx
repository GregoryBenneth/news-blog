import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Sections</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/politics" className="text-sm text-muted-foreground hover:underline">
                  Politics
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-sm text-muted-foreground hover:underline">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-sm text-muted-foreground hover:underline">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/sports" className="text-sm text-muted-foreground hover:underline">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="/entertainment" className="text-sm text-muted-foreground hover:underline">
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Subscribe</h3>
            <p className="text-sm text-muted-foreground">Stay updated with our latest news and articles.</p>
            <Link
              href="/subscribe"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} NewsPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

