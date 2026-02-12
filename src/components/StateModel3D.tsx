import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D, Center, RoundedBox, Float } from "@react-three/drei";
import * as THREE from "three";

interface StateModelProps {
  label: string;
  color: string;
}

const RotatingBox = ({ color }: { color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <RoundedBox args={[2, 2, 2]} radius={0.2} smoothness={4}>
          <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
        </RoundedBox>
        {/* Decorative edges */}
        <mesh>
          <RoundedBox args={[2.05, 2.05, 2.05]} radius={0.2} smoothness={4}>
            <meshStandardMaterial color={color} wireframe opacity={0.3} transparent />
          </RoundedBox>
        </mesh>
      </mesh>
    </Float>
  );
};

const StateModel3D = ({ label, color }: StateModelProps) => {
  return (
    <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden bg-card border border-border">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-3, -3, 3]} intensity={0.4} color="#FF9933" />
        <RotatingBox color={color} />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
      <div className="text-center -mt-8 relative z-10">
        <span className="font-body text-xs text-muted-foreground bg-card/80 px-3 py-1 rounded-full backdrop-blur-sm">
          🔄 Drag to rotate • Scroll to zoom — {label}
        </span>
      </div>
    </div>
  );
};

export default StateModel3D;
