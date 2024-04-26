import './App.css';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, Environment, ScrollControls, Scroll, OrbitControls } from '@react-three/drei'
import { Aston } from './components/Aston';
import Navbar from './components/navbar';
import Landing from './components/landing';
import Page2 from './components/page2';
import TestDrive from './components/testDrive';


function App() {

  return (
    <>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 90 }} style={{ position : "absolute" }}  >

        <color attach="background" args={["#35373b"]} />
        <ambientLight intensity={3} />
        {/* <PresentationControls global> */}
        <OrbitControls enabled={false}/>
          <Environment files="/env/metro_noord_2k.hdr" />
          <ScrollControls pages={2} damping={0.2}> */
            <Aston scale={1} />
            <Scroll html style={{ width: "100%", margin: "0", padding: "0" }}>
            
              <Navbar />
              <Landing />
              <Page2 />

              <TestDrive/>
             </Scroll>
          </ScrollControls>

        {/* </PresentationControls> */}
      </Canvas>
    </>
  )
}


export default App;
