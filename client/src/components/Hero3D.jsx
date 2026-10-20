import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

function Blob() {
  const ref = useRef();
  useFrame((_, dt) => {
    const y = window.scrollY;
    ref.current.rotation.y += dt * 0.25;
    ref.current.rotation.x = y * 0.0015;             // scroll-driven tilt
    ref.current.position.x = Math.min(y / 500, 1.6); // drifts aside on scroll
    ref.current.scale.setScalar(Math.max(1 - y / 1500, 0.5));
  });
  return (
    <Float speed={2} floatIntensity={1.2}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.6, 8]} />
        <MeshDistortMaterial color="#7c3aed" distort={0.45} speed={2} roughness={0.2} metalness={0.6} />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 5]} intensity={2} color="#22d3ee" />
        <pointLight position={[-4, -2, 2]} intensity={30} color="#8b5cf6" />
        <Blob />
      </Canvas>
    </div>
  );
}
