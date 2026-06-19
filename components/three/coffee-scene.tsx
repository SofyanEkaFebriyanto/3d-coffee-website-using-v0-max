'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import * as THREE from 'three'
import { CoffeeCup } from './coffee-cup'
import { Steam } from './steam'
import { Beans } from './beans'

/** Parallax rig: eases the whole scene toward the pointer for depth. */
function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null)
  const { pointer } = useThree()

  useFrame(() => {
    if (!group.current) return
    group.current.rotation.y +=
      (pointer.x * 0.35 - group.current.rotation.y) * 0.05
    group.current.rotation.x +=
      (-pointer.y * 0.2 - group.current.rotation.x) * 0.05
  })

  return <group ref={group}>{children}</group>
}

export default function CoffeeScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      camera={{ position: [0, 0.6, 6], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        {/* Warm copper key light */}
        <spotLight
          position={[4, 6, 4]}
          angle={0.5}
          penumbra={1}
          intensity={120}
          color="#ffb073"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        {/* Electric blue rim light — the signature accent */}
        <pointLight position={[-5, 1, -3]} intensity={90} color="#1a2ffb" />
        <pointLight position={[0, -3, 2]} intensity={20} color="#c2783f" />

        <Rig>
          <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.5}>
            <CoffeeCup />
            <Steam />
          </Float>
          <Beans />
        </Rig>

        <Environment preset="night" />
      </Suspense>
    </Canvas>
  )
}
