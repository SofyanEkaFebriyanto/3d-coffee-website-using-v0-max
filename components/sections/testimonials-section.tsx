import { TESTIMONIALS } from '@/lib/site-content'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal'

export function TestimonialsSection() {
  return (
    <section
      id="voices"
      className="mx-auto max-w-[1440px] scroll-mt-24 px-6 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-copper">
          Voices
        </p>
        <h2 className="max-w-2xl text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          Loved by people who notice the details.
        </h2>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <RevealItem key={t.name} className="h-full">
            <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8">
              <blockquote className="text-lg leading-relaxed text-balance">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm text-copper"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-medium">{t.name}</span>
                  <span className="block text-sm text-muted-foreground">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
