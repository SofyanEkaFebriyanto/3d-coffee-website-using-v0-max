'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { RITUAL } from '@/lib/site-content'
import { Reveal } from '@/components/ui/reveal'

export function RitualSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // Scroll-linked progress line.
  const scaleY = useTransform(scrollYProgress, [0.1, 0.85], [0, 1])

  return (
    <section
      id="ritual"
      ref={ref}
      className="mx-auto max-w-[1440px] scroll-mt-24 px-6 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-copper">
          The Ritual
        </p>
        <h2 className="max-w-2xl text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          From cherry to cup, every step is deliberate.
        </h2>
      </Reveal>

      <div className="relative mt-16 pl-8 md:pl-0">
        {/* Progress rail (mobile left, desktop center) */}
        <div className="absolute left-[3px] top-0 h-full w-px bg-border md:left-1/2">
          <motion.div
            style={{ scaleY }}
            className="h-full w-full origin-top bg-copper"
          />
        </div>

        <ol className="flex flex-col gap-12 md:gap-20">
          {RITUAL.map((r, i) => {
            const left = i % 2 === 0
            return (
              <li
                key={r.step}
                className="relative md:grid md:grid-cols-2 md:items-center md:gap-12"
              >
                {/* Node */}
                <span className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full bg-copper md:left-1/2 md:-translate-x-1/2" />

                <Reveal
                  className={
                    left
                      ? 'md:col-start-1 md:pr-12 md:text-right'
                      : 'md:col-start-2 md:pl-12'
                  }
                >
                  <div className="text-sm text-muted-foreground">{r.step}</div>
                  <h3 className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">
                    {r.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground md:inline-block">
                    {r.body}
                  </p>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
