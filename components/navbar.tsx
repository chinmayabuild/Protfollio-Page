"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          DevPortfolio
        </Link>

        <div className="hidden md:flex md:gap-6">
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/#hero" className="transition-colors hover:text-foreground/80">
              Home
            </Link>
            <Link href="/#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="/#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/#hero"
              className="transition-colors hover:text-foreground/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="transition-colors hover:text-foreground/80"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="transition-colors hover:text-foreground/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="transition-colors hover:text-foreground/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

