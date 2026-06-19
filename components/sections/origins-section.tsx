'use client'

import { ArrowUpRight } from 'lucide-react'
import { ORIGINS } from '@/lib/site-content'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal'

export function OriginsSection() {
  return (
    <section
      id="origins"
      className="scroll-mt-24 border-y border-border bg-secondary"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-copper">
                The Origins
              </p>
              <h2 className="max-w-xl text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                A passport of flavor, sourced at altitude.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Four rotating single origins, each chosen for a distinct character
              and traced directly to the farm that grew it.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {ORIGINS.map((o) => (
            <RevealItem key={o.name}>
              <article className="group relative flex h-full flex-col justify-between gap-10 border border-border bg-card p-6 transition-colors duration-300 hover:border-foreground/30">
                <div className="flex items-start justify-between">
                  <span className="text-xs text-muted-foreground">
                    {o.altitude}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground transition-colors group-hover:text-copper"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">
                    {o.name}
                  </h3>
                  <p className="mt-1 text-sm text-copper">{o.region}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {o.notes}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
