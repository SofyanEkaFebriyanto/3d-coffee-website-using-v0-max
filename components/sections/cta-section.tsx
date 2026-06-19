'use client'

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check, Loader2 } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function CtaSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  function validate(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate(email)) {
      setStatus('error')
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setStatus('loading')
    // Simulated submission — wire to a real endpoint/database later.
    await new Promise((r) => setTimeout(r, 1100))
    setStatus('success')
    setEmail('')
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-6 pb-24 md:px-10 md:pb-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-card px-6 py-16 md:px-16 md:py-24">
            {/* Accent glow */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-[120px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-copper/20 blur-[120px]"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-4xl font-medium leading-[1.02] tracking-tight md:text-6xl">
                Begin your ritual.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Join the list for early access to seasonal micro-lots, brewing
                guides, and members-only releases.
              </p>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <div className="flex-1 text-left">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (status === 'error') setStatus('idle')
                    }}
                    placeholder="you@example.com"
                    aria-invalid={status === 'error'}
                    aria-describedby="email-feedback"
                    className={cn(
                      'h-12 w-full rounded-[87.5px] border border-border bg-background px-5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary',
                      status === 'error' && 'border-destructive',
                    )}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[87.5px] bg-primary px-7 text-sm font-medium text-primary-foreground transition-[filter] duration-300 hover:brightness-110 disabled:opacity-70"
                >
                  {status === 'loading' && (
                    <Loader2 size={16} className="animate-spin" />
                  )}
                  {status === 'success' && <Check size={16} />}
                  {status === 'idle' && <ArrowUpRight size={16} />}
                  {status === 'error' && <ArrowUpRight size={16} />}
                  {status === 'success' ? 'You are in' : 'Join the list'}
                </button>
              </form>

              <div
                id="email-feedback"
                aria-live="polite"
                className="mt-4 min-h-5 text-sm"
              >
                <AnimatePresence mode="wait">
                  {status === 'error' && (
                    <motion.p
                      key="error"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-destructive"
                    >
                      {error}
                    </motion.p>
                  )}
                  {status === 'success' && (
                    <motion.p
                      key="success"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-copper"
                    >
                      Thanks — check your inbox for a welcome pour.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
