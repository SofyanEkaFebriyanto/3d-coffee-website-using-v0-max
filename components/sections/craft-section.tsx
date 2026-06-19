import Image from 'next/image'
import { CRAFT } from '@/lib/site-content'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal'

export function CraftSection({ imageSrc }: { imageSrc: string }) {
  return (
    <section
      id="craft"
      className="mx-auto max-w-[1440px] scroll-mt-24 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <Image
              src={imageSrc}
              alt="Coffee being precision roasted, beans tumbling in warm light"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-copper">
              {CRAFT.eyebrow}
            </p>
            <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              {CRAFT.title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {CRAFT.body}
            </p>
          </Reveal>

          <RevealGroup className="mt-10 flex flex-col gap-px">
            {CRAFT.points.map((p) => (
              <RevealItem
                key={p.title}
                className="border-t border-border py-6"
              >
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
