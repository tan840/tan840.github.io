import React from 'react'
import { Canvas } from '@react-three/fiber'

function Box() {
  return (
    <mesh rotation={[45, 45, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  )
}
