/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 aston_martin.glb --transform 
Files: aston_martin.glb [10.97MB] > C:\Front End\Vite React\three-js-practice\public\models\aston_martin-transformed.glb [804.36KB] (93%)
Author: Black Snow (https://sketchfab.com/BlackSnow02)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/aston-martin-db11-0ce56f01b1ff40b3a4e36bc56873dbc7
Title: Aston Martin db11
*/

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { gsap } from "gsap";



export function Aston(props) {
  const { nodes, materials } = useGLTF('./models/aston_martin_transformed.glb')
  const Car = useRef();
  const scroll = useScroll();
  const tl = useRef();

  // useFrame((state, delta) => {
  //   tl.current.seek(scroll.offset * tl.current.duration())
  // })
  // useLayoutEffect(() => {
  //   tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}});

  //   tl.current
  //   .to(Car.current.rotation, {y: -1}, 2)
  //   .to(Car.current.position, {x: 1}, 2)

  //   .to(Car.current.rotation, {y: 1}, 6)   
  //   .to(Car.current.position, {x: -1}, 6)

  //   .to(Car.current.rotation, {y: 0}, 11)
  //   .to(Car.current.rotation, {x: 1}, 11)
  //   .to(Car.current.position, {x: 0}, 11)

  //   .to(Car.current.rotation, {y: 0}, 13)
  //   .to(Car.current.rotation, {x: -1}, 13)    
  //   .to(Car.current.position, {x: 0}, 13)

  //   .to(Car.current.rotation, {y: 0}, 16)   
  //   .to(Car.current.rotation, {x: 0}, 16) 
  //   .to(Car.current.position, {x: 0}, 16)    

  //   .to(Car.current.rotation, {y: 0}, 20)   
  //   .to(Car.current.rotation, {x: 0}, 20) 
  //   .to(Car.current.position, {x: 0}, 20)   

  // },[])
  
  useLayoutEffect(() =>{
    tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}});
    tl.current
    .to(Car.current.position, {y: 1})
  })

  useFrame((state, delta) => {
    // Car.current.rotation.y += delta *.2 ;
  })
  return (

    <group {...props} dispose={null} ref={Car} position={[0,-1.5,0]} rotation={[Math.PI/2, Math.PI, 0]}>
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

useGLTF.preload('./models/aston_martin_transformed.glb')
