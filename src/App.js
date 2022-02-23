import './App.css';
import { Canvas } from "react-three-fiber"

import { Environment, OrbitControls,Stats } from "@react-three/drei";

import { Suspense } from "react"
import Plane from "./model";


;

function App() {
  return (
    <Canvas style={{ height: 600, width: 1000 }}>
      <pointLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Plane rotation={[0, Math.PI * 1.25, 0]} />
        <Environment preset="sunset" background />
      </Suspense>
      <OrbitControls />
      <Stats />
    </Canvas>

  );
}

export default App;
