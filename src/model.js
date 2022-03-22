
import { React, useRef } from 'react';
import {  useFrame } from '@react-three/fiber'
import { useGLTF,useScroll } from "@react-three/drei";


export default function Plane(props) {
  const ref = useRef()
  const scroll = useScroll()
  const { nodes, materials } = useGLTF("/small-airplane-v3.gltf");
  useFrame(() => (ref.current.position.z = scroll.offset * 120))
  
  return (
    
    
    <group {...props} >
      <group scale={[0.5, 0.5, 0.5]} ref={ref}>
        <mesh
          material={materials.White}
          geometry={nodes["buffer-0-mesh-0"].geometry}
        />
        <mesh
          material={materials.Red}
          geometry={nodes["buffer-0-mesh-0_1"].geometry}
        />
        <mesh
          material={materials.Gray}
          geometry={nodes["buffer-0-mesh-0_2"].geometry}
        />
        <mesh
          material={materials.Black}
          geometry={nodes["buffer-0-mesh-0_3"].geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/small-airplane-v3.gltf");
