import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  // const handleClick = () => {
  //   window.open(url);
  // };

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.85}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#E0FEF8"
          polygonOffset
          polygonOffsetFactor={-10}
          flatShading
        />
        <Decal
          position={[0, 0, 0.5]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ technology }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={technology.icon}  />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
