import { folder, useControls } from "leva";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import CameraControls from "./CameraControls";
import Points from "./Points";

const MyMesh = ({position,scale}) => {
    const refMesh = useRef();
  console.log(refMesh);
    useFrame(({ camera }) => {
        // camera.position.x = position[0];
        // camera.position.y = position[1];
        // camera.position.z = position[2];
        console.log('camera',camera);
        camera.fov = scale;
        camera.updateProjectionMatrix();
        // camera.rotation.x = 0;
        // camera.rotation.y = 0;
        // camera.rotation.z = 0;
        console.log('pppppp',camera.rotation.x);
        
      });
      //frame rotation
    return (<mesh ref={refMesh} />);
  }

export default function AnimationCanvas() {
  
    const { mode, scale, translation, rotation } = useControls("Box", {
      transform: folder({
        scale: 75,
      }),
      translation: [800, 400, 0],
    });
  //  const { mode, scale, position, rotation } = useControls("Box", {


    return (
      <Canvas colorManagement={false} camera={{ position: translation, fov: scale ,}}>
        <Suspense fallback={null}>
          <Points />
        </Suspense>
        <CameraControls />
        <MyMesh position={translation} scale={scale}/>
      </Canvas>
    );
  }