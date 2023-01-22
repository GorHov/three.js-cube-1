import { useMemo, useRef } from "react";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";
import circleImg from "../assets/circle.png";

export default function Points() {
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