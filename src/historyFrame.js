import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber'
import { useGLTF, useScroll } from "@react-three/drei";

export default function Model(props) {
    const ref = useRef()
    const scroll = useScroll()
    const { nodes, materials } = useGLTF("/HistoryPanel.glb");
    useFrame(() => (ref.current.position.z = scroll.offset * 120));
    return (
        <group {...props} dispose={null}>
            <group scale={[0.5, 0.5, 0.5]} ref={ref}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials.Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["History-panel_1"].geometry}
                    material={materials.History_1_texture}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["History-panel_2"].geometry}
                    material={materials.History_2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["History-panel_3"].geometry}
                    material={materials.History_3}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["History-panel_4"].geometry}
                    material={materials.History_5}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["History-panel_5"].geometry}
                    material={materials.History_4}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/HistoryPanel.glb");