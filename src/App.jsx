import './App.css';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, Environment, ScrollControls, Scroll, OrbitControls } from '@react-three/drei'
import { Aston } from './components/Aston';
import Landing from './components/landing';
import Page2 from './components/page2/page2';
import ArrangeTD from './components/arrangeTD/arrangeTD';
import Overlay from './overlay';




function App() {

  return (
    <>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 50, position: [0,0,0], rotation: [0,0,0]}} style={{ position : "absolute" }}>

        <color attach="background" args={["#021926"]} />
        <ambientLight intensity={6} />
        {/* <PresentationControls global> */}
        <OrbitControls enabled={false}/>
          <Environment files="/env/metro_noord_2k.hdr" />
          <ScrollControls pages={4} damping={0.2}> 
            <Aston scale={1} />
            <Scroll html style={{ width: "100%", margin: "0", padding: "0" }}>
            
             <Overlay />
             </ Scroll>
          </ScrollControls>

        {/* </PresentationControls> */}
      </Canvas>
      
    </>
  )
}


export default App;
