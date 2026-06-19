import { SiteNav } from '@/components/sections/site-nav'
import { Hero } from '@/components/sections/hero'
import { Marquee } from '@/components/sections/marquee'
import { CraftSection } from '@/components/sections/craft-section'
import { OriginsSection } from '@/components/sections/origins-section'
import { RitualSection } from '@/components/sections/ritual-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CtaSection } from '@/components/sections/cta-section'
import { SiteFooter } from '@/components/sections/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <CraftSection imageSrc="/coffee-roasting.png" />
        <OriginsSection />
        <RitualSection />
        <PricingSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
