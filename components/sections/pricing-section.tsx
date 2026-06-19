'use client'

import { Check } from 'lucide-react'
import { PRICING } from '@/lib/site-content'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { cn } from '@/lib/utils'

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 border-y border-border bg-secondary"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-copper">
              Membership
            </p>
            <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              Choose how you want to fall in love with coffee.
            </h2>
          </div>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {PRICING.map((plan) => (
            <RevealItem key={plan.name} className="h-full">
              <article
                className={cn(
                  'flex h-full flex-col rounded-2xl border p-8 transition-colors duration-300',
                  plan.featured
                    ? 'border-primary bg-card shadow-[0_24px_80px_-32px_rgba(26,47,251,0.55)]'
                    : 'border-border bg-card hover:border-foreground/30',
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{plan.name}</h3>
                  {plan.featured && (
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Most loved
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-5xl font-medium tracking-tight">
                    ${plan.price}
                  </span>
                  <span className="mb-1.5 text-sm text-muted-foreground">
                    /{plan.cadence}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>

                <ul className="mt-8 flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        size={18}
                        className={cn(
                          'mt-0.5 shrink-0',
                          plan.featured ? 'text-primary' : 'text-copper',
                        )}
                      />
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  <MagneticButton
                    href="#contact"
                    variant={plan.featured ? 'primary' : 'ghost'}
                    className="w-full"
                  >
                    {plan.cta}
                  </MagneticButton>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
