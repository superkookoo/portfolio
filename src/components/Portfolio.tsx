'use client'

import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import ScrollArrow from './ScrollArrow'

export default function Portfolio() {
  return (
    <section id="works" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-gold text-base md:text-lg uppercase tracking-widest">Recent Works</h2>
        </div>

        {/* Projects Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="overflow-hidden bg-card border-border hover:border-gold/50 active:border-gold/50 transition-all duration-500 h-full">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 md:group-hover:scale-110"
                  />

                  {/* Hover Overlay - Desktop only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 md:group-hover:opacity-100 transition-all duration-500 hidden md:flex flex-col justify-end p-6">
                    <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-gold font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                      <span className="text-sm uppercase tracking-wider">View Project</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>

                  {/* Mobile: Always visible gradient at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                </div>

                {/* Card Content */}
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start justify-between gap-3 md:gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-gold text-xs uppercase tracking-widest mb-1 md:mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-foreground text-lg md:text-xl font-medium group-hover:text-gold group-active:text-gold transition-colors">
                        {project.title}
                      </h3>
                      {/* Mobile: Show description below title */}
                      <p className="text-muted-foreground text-sm leading-relaxed mt-2 line-clamp-3 md:hidden">
                        {project.description}
                      </p>
                    </div>
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-border group-hover:border-gold group-hover:bg-gold group-active:border-gold group-active:bg-gold flex items-center justify-center transition-all duration-300 flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-black group-active:text-black transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Scroll to Contact */}
      <ScrollArrow targetId="#contact" direction="down" />
    </section>
  )
}
