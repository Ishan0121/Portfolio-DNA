import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { DNAEngine } from './DNAEngine';

export function SceneWrapper() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <color attach="background" args={['#050505']} />
      
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#00f0ff" intensity={2} />
      
      <Suspense fallback={null}>
        <DNAEngine />
        <Environment preset="city" />
      </Suspense>

      <EffectComposer>
        <Bloom 
          luminanceThreshold={0.2} 
          luminanceSmoothing={0.9} 
          height={300} 
          intensity={1.5} 
        />
      </EffectComposer>

      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        enableRotate={false}
        maxPolarAngle={Math.PI / 2 + 0.2}
        minPolarAngle={Math.PI / 2 - 0.2}
      />
    </Canvas>
  );
}
