import './App.css';
import { Canvas } from "react-three-fiber"
import {  ScrollControls, useScroll, Environment, Stats, Scroll } from "@react-three/drei";
import { Suspense} from "react"
import Plane from "./model";
import Text from "./text.js";



// function Load_model() {
//   const ref = useRef()
//   const scroll = useScroll()
//   // const gltf = useLoader(GLTFLoader, 'swamp_location/scene.gltf')
//   const gltf = useGLTF('/small-airplane-v3.gltf')
//   useFrame(() => (console.log(ref), ref.current.position.z = scroll.offset * 120))
//   return (
//     <Suspense fallback={null}>
//       <primitive object={gltf.scene} />
//     </Suspense>
//   )
// }



function App() {
  const scroll = useScroll();
  return (
    <>
      <Canvas style={{ height: 625 }} >
        <fog attach="fog" args={['#17171b', 30, 40]} />
        <color attach="background" args={['#17171b']} />
        <pointLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <ScrollControls pages={5} distance={1} >

            <group>
              <Plane rotation={[0, Math.PI, 0]} position={[3, 0, 0]} />
              <Plane rotation={[0, Math.PI, 0]} position={[3, 0, 32]} />
              <Plane rotation={[0, Math.PI, 0]} position={[3, 0, 66]} />
              <Plane rotation={[0, Math.PI, 0]} position={[3, 0, 96]} />
            </group>
            <Environment preset="dawn" background />
            <Scroll html>
              <Text />
            </Scroll>
          </ScrollControls>
        </Suspense>
        {/* <OrbitControls /> */}
        <Stats />
      </Canvas>
      {/* <button onClick={(e) => Load_model}>skip history</button> */}
    </>
  );
}

export default App;
