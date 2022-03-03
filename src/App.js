import './App.css';
import { Canvas } from "react-three-fiber"

import { ScrollControls, useScroll, Environment, OrbitControls, Stats, Scroll } from "@react-three/drei";

import { Suspense } from "react"
import Plane from "./model";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Load_model() {
  const gltf = useLoader(GLTFLoader, 'swamp_location/scene.gltf')
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  )
}



function App() {
  const scroll = useScroll();
  return (
    <>
      <Canvas style={{ height: 600 }} >
        <fog attach="fog" args={['#17171b', 30, 40]} />
        <color attach="background" args={['#17171b']} />
        <pointLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <ScrollControls pages={3} distance={2} >
            <Scroll>
              
              <Plane rotation={[0, Math.PI * 1.25, 0]} position={[0,-2,0]}/>
              <Plane rotation={[0, Math.PI * 1.25, 0]} position={[0,3,0]}/>
              <Plane rotation={[0, Math.PI * 1.25, 0]} position={[0,-7,0]}/>
              <Plane rotation={[0, Math.PI * 1.25, 0]} position={[0,-12,0]}/>
              <Plane rotation={[0, Math.PI * 1.25, 0]} position={[0,-17,0]}/>
              {/* <Load_model position={[0,-30,0]} /> */}
            </Scroll>
            
            {/* <Load_model /> */}
            <Environment preset="dawn" background />
            <Scroll html>
              <h1 style={{ top: '100vh', color: 'Black',right:'100vh' }} >html in here (optional)</h1>
              <h1 style={{ top: '100vh', color: 'Black' }}>second page</h1>
            </Scroll>
          </ScrollControls>
        </Suspense>
        {/* <OrbitControls /> */}
        <Stats />
      </Canvas>
      <button onClick={(e) => Load_model}>skip history</button>
    </>
  );
}

export default App;
