import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

const AshokChakra = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.3;
    }
  });

  const spokes = 24;
  
  return (
    <group ref={groupRef}>
      {/* Outer ring */}
      <mesh>
        <torusGeometry args={[1.8, 0.08, 16, 64]} />
        <meshStandardMaterial color="#000080" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Inner ring */}
      <mesh>
        <torusGeometry args={[0.5, 0.06, 16, 32]} />
        <meshStandardMaterial color="#000080" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Spokes */}
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i / spokes) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 1.15, Math.sin(angle) * 1.15, 0]}
            rotation={[0, 0, angle]}
          >
            <boxGeometry args={[1.3, 0.04, 0.04]} />
            <meshStandardMaterial color="#000080" metalness={0.6} roughness={0.3} />
          </mesh>
        );
      })}
    </group>
  );
};

const HeroScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} className="!absolute inset-0">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#FF9933" />
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <AshokChakra />
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  );
};

export default HeroScene;
