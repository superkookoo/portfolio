import { TimelineItem } from '@/data/experience'

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-6 border-l border-border">
      {items.map((item) => (
        <div key={item.id} className="relative pb-8 last:pb-0">
          {/* Bullet point */}
          <div className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-gold" />

          {/* Content */}
          <div>
            <h4 className="text-foreground font-medium text-lg mb-1">{item.title}</h4>
            <p className="text-muted-foreground text-sm mb-1">{item.subtitle}</p>
            <p className="text-muted-foreground/60 text-xs uppercase tracking-wider">
              {item.period}
            </p>
            {item.description && (
              <p className="text-muted-foreground mt-2">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
