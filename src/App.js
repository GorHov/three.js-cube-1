import "./App.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "react-three-fiber";
import circleImg from "./assets/circle.png";
import { Suspense, useMemo, useRef } from "react";
import { folder, useControls } from "leva";
extend({ OrbitControls });

function CameraControls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controlsRef = useRef();
  useFrame(() => controlsRef.current.update());

  return <orbitControls ref={controlsRef} args={[camera, domElement]} />;
}

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);
  const bufferRef = useRef();

  const numberOfSphersPerSide = 10;
  const stepSize = 1 / numberOfSphersPerSide;

  let positions = useMemo(() => {
    let positions = [];

    for (
      let alpha = 0, alphaIndex = 0;
      alpha <= 1;
      alpha += stepSize, alphaIndex++
    ) {
      for (let beta = 0; beta <= 1; beta += stepSize) {
        for (let gamma = 0; gamma <= 1; gamma += stepSize) {
          let x = alpha * 400 - 200;
          let y = beta * 400 - 200;
          let z = gamma * 400 - 200;

          positions.push(x, y, z);
        }
      }
    }

    return new Float32Array(positions);
  }, [numberOfSphersPerSide, stepSize]);

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attachObject={["attributes", "position"]}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x00aaff}
        size={10}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

function AnimationCanvas() {
  const { mode, scale, position } = useControls("Box", {
    transform: folder({
      scale: 1,
    }),
    position: [800, 400, 0],
  });

  return (
    <Canvas colorManagement={false} camera={{ position: position, fov: 75 }}>
      <Suspense fallback={null}>
        <Points />
      </Suspense>
      <CameraControls />
    </Canvas>
  );
}

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}

export default App;
