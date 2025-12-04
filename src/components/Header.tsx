'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#intro', label: 'Intro' },
  { href: '#about', label: 'About' },
  { href: '#works', label: 'Works' },
  { href: '#contact', label: 'Reach me at' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if at bottom of page - select last section (contact)
      if (scrollY + windowHeight >= documentHeight - 50) {
        setActiveSection('contact')
        return
      }

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId || '')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      {/* Desktop Navigation - Full Width Bar */}
      <nav className="hidden md:flex">
        {/* Logo */}
        <a
          href="#intro"
          onClick={(e) => handleNavClick(e, '#intro')}
          className="flex-1 flex items-center justify-center h-16 border-r border-border text-gold text-[10px] uppercase tracking-[0.35em] hover:bg-muted/50 transition-colors"
        >
          Seok-young Koo
        </a>

        {/* Nav Items */}
        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={cn(
              'flex-1 flex items-center justify-center h-16 text-[10px] uppercase tracking-[0.35em] transition-colors',
              index < navItems.length - 1 && 'border-r border-border',
              activeSection === item.href.slice(1)
                ? 'bg-muted text-foreground'
                : 'text-foreground hover:bg-muted/50'
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between h-16 px-4 border-b border-border">
        <a
          href="#intro"
          onClick={(e) => handleNavClick(e, '#intro')}
          className="text-gold text-xs uppercase tracking-[0.35em]"
        >
          Seok-young Koo
        </a>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-md transition-all duration-300 z-40',
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
      >
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                'py-6 px-8 text-center text-lg uppercase tracking-widest border-b border-border transition-colors',
                activeSection === item.href.slice(1)
                  ? 'bg-muted text-gold'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
