'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

type MagneticButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  ariaLabel?: string
}

const variants = {
  primary:
    'bg-primary text-primary-foreground hover:brightness-110 shadow-[0_8px_40px_-8px_rgba(26,47,251,0.6)]',
  secondary:
    'bg-cream text-background hover:bg-[#e7e3d8]',
  ghost:
    'bg-transparent text-foreground border border-border hover:border-foreground/40 hover:bg-foreground/5',
}

export function MagneticButton({
  children,
  href = '#',
  variant = 'primary',
  className,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * 0.35)
    y.set(relY * 0.35)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={cn(
        'inline-flex h-12 items-center justify-center gap-2 rounded-[87.5px] px-7 text-sm font-medium transition-[filter,background-color,border-color] duration-300 will-change-transform',
        variants[variant],
        className,
      )}
    >
      {children}
    </motion.a>
  )
}
