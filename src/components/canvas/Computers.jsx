import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc2/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.11} groundColor="white" />
      <pointLight intensity={0.4} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.11}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.050 : 0.14} // Change the scale value to make it smaller (e.g., 0.5)
        position={isMobile ? [0, -30.2, -80.5] : [0, -30.25, -60.5]}
        rotation={[-0.01, -0.1, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Define media queries for different screen sizes
    const mediaQueryMobile = window.matchMedia("(max-width: 767px)");
    const mediaQueryTablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");

    // Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQueryMobile.matches || mediaQueryTablet.matches);

    // Define callback function to handle changes to media queries
    const handleMediaQueryChange = () => {
      setIsMobile(mediaQueryMobile.matches || mediaQueryTablet.matches);
    };

    // Add the callback function as a listener for changes to the media queries
    mediaQueryMobile.addEventListener("change", handleMediaQueryChange);
    mediaQueryTablet.addEventListener("change", handleMediaQueryChange);

    // To remove the media queries when the component is unmounted
    return () => {
      mediaQueryMobile.removeEventListener("change", handleMediaQueryChange);
      mediaQueryTablet.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: isMobile ? [80, 60, 70] : [190, 140, 270], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
