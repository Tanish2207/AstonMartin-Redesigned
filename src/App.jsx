import './App.css';
import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PresentationControls, Environment, ScrollControls, PerspectiveCamera } from '@react-three/drei'
import { Aston } from './components/Aston';
import * as THREE from 'three'; // Import THREE


function App() {

  return (
    <>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 90 }} style={{ "position": "absolute" }}  >
      
        <color attach="background" args={["#35373b"]} />
        <ambientLight intensity={2} />
        <PresentationControls global>
          <Environment files="/env/metro_noord_2k.hdr" />
          <ScrollControls pages={3} damping={0.2}>
            <Aston scale={1} />
          </ScrollControls>
        </PresentationControls>
      </Canvas>
    </>
  )
}


export default App;
