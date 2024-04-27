import './App.css';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, Environment, ScrollControls, Scroll } from '@react-three/drei'
import { Aston } from './components/Aston';
import Navbar from './components/navbar';
import Landing from './components/landing';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Menu from './components/menu';
import Configure from './components/configure';
import Preloader from './components/preloader';



function App() {

  return (
    <>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 90 }} style={{ "position": "absolute" }}  >

        <color attach="background" args={["#35373b"]} />
        <ambientLight intensity={3} />
        <PresentationControls global>
          <Environment files="/env/metro_noord_2k.hdr" />
          <ScrollControls pages={2} damping={0.2}>
            <Aston scale={1} />
            <Scroll html style={{ width: "100%", margin: "0", padding: "0" }}>
              <Navbar />
              <Preloader/>
              {/* <Configure></Configure> */}
              {/* <Menu/> */}
              {/* <Landing /> */}
              {/* <Page2 /> */}
              {/* <Page3/> */}
            </Scroll>
          </ScrollControls>

        </PresentationControls>
      </Canvas>
      
    </>
  )
}


export default App;
