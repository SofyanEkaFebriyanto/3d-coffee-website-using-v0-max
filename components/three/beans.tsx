'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 14

type BeanData = {
  radius: number
  height: number
  speed: number
  offset: number
  scale: number
  tilt: number
}

export function Beans() {
  const mesh = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const beans = useMemo<BeanData[]>(() => {
    return Array.from({ length: COUNT }, () => ({
      radius: 2.4 + Math.random() * 2.2,
      height: (Math.random() - 0.5) * 4,
      speed: (Math.random() * 0.5 + 0.25) * (Math.random() > 0.5 ? 1 : -1),
      offset: Math.random() * Math.PI * 2,
      scale: 0.12 + Math.random() * 0.12,
      tilt: Math.random() * Math.PI,
    }))
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.elapsedTime
    beans.forEach((b, i) => {
      const angle = t * b.speed * 0.3 + b.offset
      dummy.position.set(
        Math.cos(angle) * b.radius,
        b.height + Math.sin(t * 0.6 + b.offset) * 0.3,
        Math.sin(angle) * b.radius,
      )
      dummy.rotation.set(t * 0.4 + b.tilt, t * 0.5 + b.offset, b.tilt)
      dummy.scale.setScalar(b.scale)
      dummy.updateMatrix()
      mesh.current!.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, COUNT]}>
      {/* Stretched sphere approximates a coffee bean silhouette */}
      <sphereGeometry args={[1, 16, 12]} />
      <meshStandardMaterial
        color="#3a2114"
        roughness={0.5}
        metalness={0.1}
        emissive="#1a0d07"
        emissiveIntensity={0.3}
      />
    </instancedMesh>
  )
}
