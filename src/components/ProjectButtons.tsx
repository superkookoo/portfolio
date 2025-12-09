'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProjectButtonsProps {
  viewLink: string
  accentColor: string
}

export function BackButton({ accentColor }: { accentColor: string }) {
  return (
    <div className="fixed top-6 left-6 z-50">
      <Button
        asChild
        variant="outline"
        size="sm"
        className="bg-black/50 backdrop-blur-sm border-white/20"
        style={{
          ['--hover-color' as string]: accentColor
        }}
      >
        <Link href="/#works" className="hover:border-current hover:bg-[var(--hover-color)]">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>
      </Button>
    </div>
  )
}

export function ActionButtons({ viewLink, accentColor }: ProjectButtonsProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed right-[15%] bottom-0 z-50 flex flex-col translate-x-[30px]">
      <a
        href={viewLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-[60px] py-5 text-center text-white text-sm"
        style={{
          animation: `pulse-color 3s infinite`,
          ['--accent' as string]: accentColor,
        }}
      >
        View
      </a>
      <button
        onClick={scrollToTop}
        className="block w-[60px] py-5 text-center text-white bg-black"
      >
        <ArrowUp className="w-4 h-4 mx-auto" />
      </button>

      <style jsx>{`
        @keyframes pulse-color {
          0% { background: rgba(0,0,0,0.5); }
          50% { background: ${accentColor}; }
          100% { background: rgba(0,0,0,0.5); }
        }
      `}</style>
    </div>
  )
}
