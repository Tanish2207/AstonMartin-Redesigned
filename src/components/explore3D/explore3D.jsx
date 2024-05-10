import { Environment, GradientTexture, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader, BackSide } from 'three'
import React from 'react'

function d2r(degrees) {
    return degrees * (Math.PI / 180);
}

const ExploreModel = (props) => {
    const { nodes, materials } = useGLTF('./models/aston_martin_transformed.glb')

    return (
        <group {...props} dispose={null} position={[0, 0, 0]} rotation={[d2r(0), d2r(39), d2r(0)]} >

            <mesh geometry={nodes.amdb11_wheel_03_amdb11_mirror_0.geometry} material={materials.PaletteMaterial002} position={[0.962, 0.376, 1.302]} rotation={[-Math.PI / 2, 0, 0]}>

            </mesh>
            <mesh geometry={nodes.amdb11_bumperbar_F_etkc_0.geometry} material={materials.PaletteMaterial002} rotation={[-Math.PI / 2, 0, 0]} >

            </mesh>
            <mesh geometry={nodes.amdb11_headlight_R_amdb11_signal_R_0.geometry} material={materials.PaletteMaterial003} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.amdb11_headlight_L_amdb11_signal_L_0.geometry} material={materials.PaletteMaterial004} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.amdb11_headlightglass_R_amdb11_glass_0.geometry} material={materials.PaletteMaterial005} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.amdb11_taillight_L_amdb11_signal_RL_0.geometry} material={materials.PaletteMaterial006} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
    )
}

export const Explore3D = () => {
    return (
        <Canvas dpr={[1, 2]} shadows style={{ position: "absolute", paddingTop: "5rem", zIndex: "-6" }}>
            <PerspectiveCamera makeDefault rotation={[d2r(-8), 0, 0]} position={[0.36, 1.7, 5.02]} />
            <color attach="background" args={["#021926"]} />
            <ambientLight intensity={3} />
            <OrbitControls enabled={true} />
            <Environment files="/env/metro_noord_2k.hdr" />
            <ExploreModel scale={1} />
        </Canvas>
    )
}
useGLTF.preload('./models/aston_martin_transformed.glb')
