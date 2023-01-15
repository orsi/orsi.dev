import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { EffectComposer, Noise, Pixelation, Scanline } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

function Sphere(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.position.x += delta;
  });
  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[1, 5, 5]} />
      <meshBasicMaterial wireframe={true} color={`rgb(60,120,40)`} />
    </mesh>
  );
}

function Pyramid(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.position.x += delta;
  });
  return (
    <mesh {...props} ref={ref}>
      <coneGeometry args={[1, 1, 3]} />
      <meshBasicMaterial wireframe={true} color={`rgb(60,120,40)`} />
    </mesh>
  );
}

function Box(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.position.x += delta;
  });
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial wireframe={true} color={`rgb(60,120,40)`} />
    </mesh>
  );
}

export default function Background() {
  const [shape, setShape] = useState<React.ReactNode>(
    <Box position={[0, 0, 0]} />
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.random();
      const shape =
        random < 0.33 ? (
          <Box position={[-10, Math.random() * 10 - 5, Math.random() * -5]} />
        ) : random < 0.66 ? (
          <Pyramid
            position={[-10, Math.random() * 10 - 5, Math.random() * -5]}
          />
        ) : (
          <Sphere
            position={[-10, Math.random() * 10 - 5, Math.random() * -5]}
          />
        );
      setShape(shape);
    }, 20000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`fixed h-screen w-screen `}>
      <Canvas>
        {shape}
        <Stars count={2000} fade={true} />
        <EffectComposer>
          <Pixelation
            granularity={4} // pixel granularity
          />
          <Scanline density={5.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
