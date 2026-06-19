'use client'

import { useEffect, useState } from 'react'

/**
 * Decides whether the heavy WebGL hero should mount.
 * Disables on small/touch screens and when the user prefers reduced motion,
 * falling back to a static cinematic image instead.
 */
export function useEnable3d() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const wide = window.matchMedia('(min-width: 768px)').matches
    const fine = window.matchMedia('(pointer: fine)').matches

    let webgl = false
    try {
      const canvas = document.createElement('canvas')
      webgl = !!(
        canvas.getContext('webgl2') || canvas.getContext('webgl')
      )
    } catch {
      webgl = false
    }

    setEnabled(!reduce && wide && fine && webgl)
  }, [])

  return enabled
}
