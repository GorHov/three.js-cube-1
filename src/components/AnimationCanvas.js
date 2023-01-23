import { Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";
import CameraControls from "./CameraControls";
import Controls from "./Controls";
import Points from "./Points";

  const Cube = ({ position, rotation, scale = [1, 1, 1] }) => (
    <group position={position} rotation={rotation} scale={scale}>
          <Points />
    </group>
  );

export default function AnimationCanvas() {

  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const [zRotation, setZRotation] = useState(0);

  const [xScale, setXScale] = useState(1);
  const [yScale, setYScale] = useState(1);
  const [zScale, setZScale] = useState(1);

    return (
      <>
      <Canvas colorManagement={false} camera={{ position: [800, 400, 0], fov: 75 ,}}>
        <Suspense fallback={null}>
        <Cube
            rotation={[
              xRotation * Math.PI,
              yRotation * Math.PI,
              zRotation * Math.PI
            ]}
            scale={[xScale, yScale, zScale]}
        />
        </Suspense>
        <CameraControls />
      </Canvas>
      <Controls
        controls={{
          xRotation,
          yRotation,
          zRotation,
          xScale,
          yScale,
          zScale,
          setXRotation,
          setYRotation,
          setZRotation,
          setXScale,
          setYScale,
          setZScale
        }}
      />
      </>
    );
  }