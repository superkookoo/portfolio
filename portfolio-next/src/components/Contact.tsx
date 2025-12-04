import { aboutContent } from '@/data/about'
import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          {/* Section Header */}
          <h2 className="text-gold text-sm uppercase tracking-widest mb-4">Get In Touch</h2>
          <p className="font-serif text-4xl md:text-5xl text-foreground mb-12">
            Let&apos;s work together
          </p>

          {/* Contact Links */}
          <div className="space-y-6">
            <a
              href={`mailto:${aboutContent.contact.email}`}
              className="flex items-center gap-4 text-muted-foreground hover:text-gold transition-colors group"
            >
              <div className="w-12 h-12 rounded-full border border-border group-hover:border-gold flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xl">{aboutContent.contact.email}</span>
            </a>

            <a
              href={`tel:${aboutContent.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-4 text-muted-foreground hover:text-gold transition-colors group"
            >
              <div className="w-12 h-12 rounded-full border border-border group-hover:border-gold flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xl">{aboutContent.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
