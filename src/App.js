import "./App.css";
import { Suspense } from "react";
import AnimationCanvas from "./components/AnimationCanvas";


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
