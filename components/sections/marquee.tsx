import { MARQUEE } from '@/lib/site-content'

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE]
  return (
    <div
      className="relative flex overflow-hidden border-y border-border bg-secondary py-5"
      aria-hidden="true"
    >
      <div className="animate-marquee flex shrink-0 items-center gap-10 whitespace-nowrap pr-10">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-sm text-muted-foreground">
            {item}
            <span className="h-1 w-1 rounded-full bg-copper" />
          </span>
        ))}
      </div>
      <div className="animate-marquee flex shrink-0 items-center gap-10 whitespace-nowrap pr-10">
        {items.map((item, i) => (
          <span key={`b-${i}`} className="flex items-center gap-10 text-sm text-muted-foreground">
            {item}
            <span className="h-1 w-1 rounded-full bg-copper" />
          </span>
        ))}
      </div>
    </div>
  )
}
