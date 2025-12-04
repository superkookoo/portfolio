import Image from 'next/image'
import { aboutContent } from '@/data/about'
import Timeline from './Timeline'
import { experience, education } from '@/data/experience'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import ScrollArrow from './ScrollArrow'

export default function About() {
  const bioParagraphs = aboutContent.bio.split('\n\n')

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* About Info */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Profile Image */}
          <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* About Text */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-white/50" />
              <span className="text-gold text-sm uppercase tracking-widest">About Me</span>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-8">
              {bioParagraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph.split('\n').map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < paragraph.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              ))}
            </div>

            <Button asChild variant="gold" size="xl" className="w-full md:w-auto">
              <a href="/cv.pdf" download={aboutContent.cvDownloadName}>
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>
        </div>

        {/* Timelines */}
        <div className="border-t border-border pt-16">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-gold text-base md:text-lg uppercase tracking-widest mb-8">Experience</h2>
              <Timeline items={experience} />
            </div>

            <div>
              <h2 className="text-gold text-base md:text-lg uppercase tracking-widest mb-8">Education</h2>
              <Timeline items={education} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Works */}
      <ScrollArrow targetId="#works" direction="down" />
    </section>
  )
}
