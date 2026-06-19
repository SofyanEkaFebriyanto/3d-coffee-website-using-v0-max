'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { HERO, STATS } from '@/lib/site-content'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { useEnable3d } from '@/hooks/use-enable-3d'

const CoffeeScene = dynamic(() => import('@/components/three/coffee-scene'), {
  ssr: false,
})

export function Hero() {
  const enable3d = useEnable3d()
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.2 } },
  }
  const line = {
    hidden: { opacity: 0, y: reduce ? 0 : '110%' },
    show: {
      opacity: 1,
      y: '0%',
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* 3D / fallback layer */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {enable3d ? (
          <div className="pointer-events-auto h-full w-full">
            <CoffeeScene />
          </div>
        ) : (
          <Image
            src="/coffee-hero-fallback.png"
            alt="A premium ceramic coffee cup with rising steam and floating beans, lit with electric blue and copper light"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />
        )}
        {/* Vignette to anchor text legibility */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_10%,transparent_40%,rgba(5,5,6,0.55)_75%,rgba(5,5,6,0.95)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 pt-28 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={line}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs tracking-wide text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-copper" aria-hidden />
            {HERO.eyebrow}
          </motion.p>

          <h1 className="text-pretty text-5xl font-medium leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            {HERO.title.map((l, i) => (
              <span key={l} className="block overflow-hidden">
                <motion.span
                  variants={line}
                  className={i === 1 ? 'inline-block text-copper' : 'inline-block'}
                >
                  {l}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={line}
            className="mt-7 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            variants={line}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <MagneticButton href={HERO.primaryCta.href} variant="primary">
              {HERO.primaryCta.label}
              <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href={HERO.secondaryCta.href} variant="ghost">
              {HERO.secondaryCta.label}
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-px border-t border-border px-6 md:grid-cols-4 md:px-10"
      >
        {STATS.map((s) => (
          <div key={s.label} className="py-6">
            <div className="text-3xl font-medium md:text-4xl">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <motion.div
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </div>
    </section>
  )
}
