import './App.css';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls, Scroll, OrbitControls } from '@react-three/drei'
import { Aston } from './components/Aston';
import { Preloader } from './components/preloader/preloader';
import { Overlay } from './overlay';
import { Footer } from './components/footer/footer';
``
function App() {

  return (
    <>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 50, position: [0, 0, 0], rotation: [0, 0, 0] }} style={{ position: "absolute" }}>

        <color attach="background" args={["#232425"]} />
        <ambientLight intensity={6} />
        {/* <PresentationControls global> */}
        <OrbitControls enabled={false} />
        <Environment files="/env/metro_noord_2k.hdr" />
        <ScrollControls pages={3.45} damping={0.2}>
          <Aston scale={1} />
          <Scroll html style={{ width: "100%", margin: "0", padding: "0" }}>
            {/* <Preloader /> */}
            <Overlay />
            {/* <Footer /> */}
          </ Scroll>
        </ScrollControls>

        {/* </PresentationControls> */}
      </Canvas>
    </>
  )
}


export default App;
