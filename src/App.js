import "./App.css";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "react-three-fiber";
import { Suspense, useMemo, useRef } from "react";
import AnimationCanvas from "./AnimationCanvas";


function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas/>
      </Suspense>
    </div>
  );
}

export default App;
