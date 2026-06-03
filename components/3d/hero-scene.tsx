"use client";

import { Float, MeshTransmissionMaterial, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { memo, useMemo, useRef } from "react";
import type { Mesh, Points } from "three";
import { BufferAttribute, BufferGeometry, Color } from "three";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

function CameraRig({ reduced }: { reduced: boolean }) {
  const { camera, pointer } = useThree();
  const cameraRef = useRef(camera);

  useFrame((_, delta) => {
    if (reduced) return;
    const activeCamera = cameraRef.current;
    activeCamera.position.x += (pointer.x * 0.8 - activeCamera.position.x) * delta * 1.6;
    activeCamera.position.y += (pointer.y * 0.45 - activeCamera.position.y) * delta * 1.4;
    activeCamera.lookAt(0, 0, 0);
  });

  return null;
}

function seededRandom(seed: number) {
  const value = Math.sin(seed * 92821.17) * 43758.5453;
  return value - Math.floor(value);
}

function ParticleField({ count }: { count: number }) {
  const points = useRef<Points>(null);
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (seededRandom(index + 1) - 0.5) * 12;
      positions[index * 3 + 1] = (seededRandom(index + 11) - 0.5) * 8;
      positions[index * 3 + 2] = (seededRandom(index + 101) - 0.5) * 10;
    }
    const buffer = new BufferGeometry();
    buffer.setAttribute("position", new BufferAttribute(positions, 3));
    return buffer;
  }, [count]);

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.025;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial size={0.025} color={new Color("#69fff1")} transparent opacity={0.72} sizeAttenuation />
    </points>
  );
}

function CoreGeometry() {
  const mesh = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.18;
    mesh.current.rotation.y += delta * 0.24;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.45}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.35, 2]} />
        <MeshTransmissionMaterial
          backside
          samples={8}
          thickness={0.45}
          roughness={0.18}
          transmission={0.72}
          chromaticAberration={0.08}
          color="#7dfdf2"
        />
      </mesh>
    </Float>
  );
}

function Scene({ mobile, reduced }: { mobile: boolean; reduced: boolean }) {
  return (
    <>
      <color attach="background" args={["#080b12"]} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 5, 4]} intensity={1.2} color="#8dfdf2" />
      <pointLight position={[-3, -1, 2]} intensity={1.5} color="#ff65cf" />
      <ParticleField count={mobile ? 650 : 1400} />
      <CoreGeometry />
      <Stars radius={mobile ? 45 : 80} depth={28} count={mobile ? 800 : 1600} factor={3} fade speed={0.35} />
      <CameraRig reduced={reduced} />
      {!mobile && !reduced ? (
        <EffectComposer multisampling={0}>
          <Bloom intensity={0.45} luminanceThreshold={0.25} mipmapBlur />
          <Vignette darkness={0.42} eskil={false} />
        </EffectComposer>
      ) : null}
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  );
}

function HeroSceneComponent() {
  const mobile = useMediaQuery("(max-width: 768px)");
  const reduced = usePrefersReducedMotion();

  return (
    <Canvas
      dpr={mobile ? [1, 1.35] : [1, 1.8]}
      camera={{ position: [0, 0, 5], fov: mobile ? 58 : 48 }}
      gl={{ antialias: !mobile, powerPreference: "high-performance" }}
    >
      <Scene mobile={mobile} reduced={reduced} />
    </Canvas>
  );
}

export const HeroScene = memo(HeroSceneComponent);
