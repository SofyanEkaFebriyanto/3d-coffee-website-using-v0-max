'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Builds the lathe profile (radius, height) for a tapered ceramic cup
 * traced from the outer base, up the wall, over the rim and down the inside.
 */
function useCupProfile() {
  return useMemo(() => {
    const pts: THREE.Vector2[] = [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(0.6, 0.0),
      new THREE.Vector2(0.64, 0.04),
      new THREE.Vector2(0.7, 0.86),
      new THREE.Vector2(0.72, 0.94),
      new THREE.Vector2(0.66, 0.94),
      new THREE.Vector2(0.6, 0.14),
      new THREE.Vector2(0.0, 0.14),
    ]
    return pts
  }, [])
}

export function CoffeeCup() {
  const group = useRef<THREE.Group>(null)
  const coffee = useRef<THREE.Mesh>(null)
  const profile = useCupProfile()

  // Gentle continuous rotation + bob for a "floating in space" feel.
  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (group.current) {
      group.current.rotation.y = t * 0.18
      group.current.position.y = Math.sin(t * 0.8) * 0.06 - 0.4
    }
    if (coffee.current) {
      const mat = coffee.current.material as THREE.MeshStandardMaterial
      // Subtle living shimmer on the coffee surface.
      mat.emissiveIntensity = 0.12 + Math.sin(t * 1.6) * 0.05
    }
  })

  return (
    <group ref={group} scale={1.55} rotation={[0.08, 0, 0]}>
      {/* Cup body */}
      <mesh castShadow receiveShadow>
        <latheGeometry args={[profile, 96]} />
        <meshStandardMaterial
          color="#1b1b20"
          roughness={0.28}
          metalness={0.2}
          side={THREE.DoubleSide}
          envMapIntensity={1.1}
        />
      </mesh>

      {/* Coffee surface */}
      <mesh ref={coffee} position={[0, 0.86, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.58, 64]} />
        <meshStandardMaterial
          color="#1a0d07"
          emissive="#c2783f"
          emissiveIntensity={0.12}
          roughness={0.12}
          metalness={0.55}
          envMapIntensity={1.4}
        />
      </mesh>

      {/* Handle */}
      <mesh position={[0.74, 0.5, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <torusGeometry args={[0.26, 0.055, 24, 64, Math.PI * 1.25]} />
        <meshStandardMaterial
          color="#1b1b20"
          roughness={0.28}
          metalness={0.2}
          envMapIntensity={1.1}
        />
      </mesh>

      {/* Saucer */}
      <mesh position={[0, -0.04, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <cylinderGeometry args={[1.05, 1.0, 0.06, 96]} />
        <meshStandardMaterial
          color="#141418"
          roughness={0.35}
          metalness={0.15}
          envMapIntensity={1}
        />
      </mesh>
    </group>
  )
}
