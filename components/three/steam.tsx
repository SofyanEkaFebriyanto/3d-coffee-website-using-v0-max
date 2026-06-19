'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/** Generates a soft radial-gradient sprite for steam puffs. */
function useSoftTexture() {
  return useMemo(() => {
    const size = 64
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')!
    const g = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2,
    )
    g.addColorStop(0, 'rgba(255,255,255,0.9)')
    g.addColorStop(0.4, 'rgba(255,255,255,0.35)')
    g.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, size, size)
    const tex = new THREE.CanvasTexture(canvas)
    return tex
  }, [])
}

const COUNT = 90

export function Steam() {
  const points = useRef<THREE.Points>(null)
  const texture = useSoftTexture()

  // Per-particle phase + radius for organic rising motion.
  const { positions, speeds, radii, phases } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3)
    const speeds = new Float32Array(COUNT)
    const radii = new Float32Array(COUNT)
    const phases = new Float32Array(COUNT)
    for (let i = 0; i < COUNT; i++) {
      const r = Math.random() * 0.45
      const a = Math.random() * Math.PI * 2
      positions[i * 3] = Math.cos(a) * r
      positions[i * 3 + 1] = 1.0 + Math.random() * 2.6
      positions[i * 3 + 2] = Math.sin(a) * r
      speeds[i] = 0.25 + Math.random() * 0.4
      radii[i] = r
      phases[i] = Math.random() * Math.PI * 2
    }
    return { positions, speeds, radii, phases }
  }, [])

  useFrame((state, delta) => {
    if (!points.current) return
    const arr = points.current.geometry.attributes.position
      .array as Float32Array
    const t = state.clock.elapsedTime
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3 + 1] += speeds[i] * delta
      // Sway as it rises.
      arr[i * 3] += Math.sin(t * 0.8 + phases[i]) * delta * 0.12
      arr[i * 3 + 2] += Math.cos(t * 0.7 + phases[i]) * delta * 0.12
      if (arr[i * 3 + 1] > 4) {
        const a = Math.random() * Math.PI * 2
        const r = Math.random() * 0.4
        arr[i * 3] = Math.cos(a) * r
        arr[i * 3 + 1] = 1.0
        arr[i * 3 + 2] = Math.sin(a) * r
      }
    }
    arr.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        size={0.55}
        sizeAttenuation
        transparent
        depthWrite={false}
        opacity={0.16}
        color="#f4f1ea"
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
