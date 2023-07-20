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
        scale={isMobile ? 0.080 : 0.14} // Change the scale value to make it smaller (e.g., 0.5)
        position={isMobile ? [2, -60.2, -80.5] : [0, -35.25, -60.5]}
        rotation={[-0.01, -0.1, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    //? ADD THE EVENT LISTENER FRO CHANGES TO THE SCREEN SIZE
    const mediaQuery = window.matchMedia("(max-width:500px)");

    //?SET THE INTIAL VALUE OF THE 'isMobile' STATE VARIABLE
    setIsMobile(mediaQuery.matches);

    //? DEFINE CALLBACK FUNCTION TO HANDLE CHANGES TO MEDIA QUERY
    const handleMediaQueryChnage = (e) => {
      setIsMobile(e.matches);
    };

    //? ADD THE CALLBACK FUNCTION AS A LISTEN FRO CHANGES TO THE MEDIA QUERY
    mediaQuery.addEventListener("change", handleMediaQueryChnage);

    //? TO REMOVE THE MEDIA QUERY WHEN THE COMPONENT IS UNMOUNTED
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChnage);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: isMobile ? [80, 60, 70] : [190, 140, 270] , fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}>
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
