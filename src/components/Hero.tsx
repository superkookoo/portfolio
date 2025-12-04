'use client'

import { aboutContent } from '@/data/about'
import ScrollArrow from './ScrollArrow'

export default function Hero() {
  return (
    <section id="intro" className="min-h-screen flex flex-col justify-center relative pt-16">
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-0 w-[70vw] h-[70vw] pointer-events-none">
        <div className="absolute inset-0 border border-gold/10 rounded-full" />
        <div className="absolute inset-[10%] border border-gold/10 rounded-full" />
        <div className="absolute inset-[20%] border border-gold/10 rounded-full" />
        <div className="absolute inset-[30%] border border-gold/10 rounded-full" />
        <div className="absolute inset-[40%] border border-gold/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Pretitle with line */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-px bg-white/50" />
            <span className="text-gold text-sm uppercase tracking-widest">
              {aboutContent.greeting}
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-8">
            {aboutContent.headline.line1}
            <br />
            {aboutContent.headline.line2}
          </h1>

          {/* Taglines */}
          <div className="space-y-2">
            {aboutContent.taglines.map((tagline, index) => (
              <p key={index} className="font-serif text-xl md:text-2xl text-muted-foreground">
                {tagline}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to About */}
      <ScrollArrow targetId="#about" direction="down" />
    </section>
  )
}
