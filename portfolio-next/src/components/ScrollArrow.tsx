'use client'

import { ArrowDown, ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ScrollArrowProps {
  targetId: string
  direction?: 'down' | 'up'
  className?: string
}

export default function ScrollArrow({ targetId, direction = 'down', className }: ScrollArrowProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'absolute bottom-6 right-6 md:bottom-8 md:right-8',
        'w-10 h-10 md:w-12 md:h-12 rounded-full',
        'border border-white/20 hover:border-gold',
        'flex items-center justify-center',
        'text-white/40 hover:text-gold',
        'transition-all duration-300 ease-out',
        'hover:scale-110 active:scale-95',
        'backdrop-blur-sm bg-black/10',
        className
      )}
      aria-label={direction === 'down' ? 'Scroll to next section' : 'Scroll to top'}
    >
      {direction === 'down' ? (
        <ArrowDown className="w-4 h-4 md:w-5 md:h-5" />
      ) : (
        <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
      )}
    </button>
  )
}
