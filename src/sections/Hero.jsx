import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

// 3D Laptop with screen and keyboard
const Laptop = (props) => {
  return (
    <group {...props}>
      {/* Keyboard base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.05, 1]} />
        <meshStandardMaterial color="#4ade80" />
      </mesh>

      {/* Laptop screen */}
      <mesh position={[0, 0.45, -0.45]}>
        <boxGeometry args={[1.5, 0.75, 0.05]} />
        <meshStandardMaterial color="#22d3ee" />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, 0.025, 0]}>
        <boxGeometry args={[0.4, 0.02, 0.3]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>

      {/* Subtle floating skill spheres */}
      <Float floatIntensity={0.6} rotationIntensity={0.8}>
        <mesh position={[-1.2, 0.5, 0]}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial color="#facc15" />
        </mesh>
        <mesh position={[1.2, 0.7, 0]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial color="#f472b6" />
        </mesh>
      </Float>
    </group>
  );
};

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 5] }}>
          {/* Lights */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, 3, 5]} intensity={0.5} />

          <Suspense fallback={<Loader />}>
            {/* Right-aligned, larger laptop */}
            <Float>
              <Laptop
                scale={isMobile ? 0.6 : 1.5}      // 1.5x larger on desktop
                position={isMobile ? [0.5, -0.5, 0] : [2, 0, 0]} // more right
              />
            </Float>
            <Rig />
          </Suspense>

          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </figure>
    </section>
  );
};

// Camera follows subtle mouse movement
function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 5],
      0.5,
      delta
    );
  });
}

export default Hero;
