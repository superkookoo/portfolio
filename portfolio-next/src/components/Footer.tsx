'use client'

import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-8 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-muted-foreground text-sm flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
            <span>&copy; {new Date().getFullYear()} SEOK-YOUNG KOO. All rights reserved.</span>
            <span className="hidden md:inline mx-3 text-border">|</span>
            <span className="text-gold">
              Designed & Built by SEOK-YOUNG KOO
            </span>
          </div>

          {/* Back to top button */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="absolute -top-6 right-4 md:right-8 border-muted-foreground hover:border-gold hover:bg-gold hover:text-black"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
