import './App.css';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls, Scroll, OrbitControls } from '@react-three/drei'
import { Aston } from './components/Aston';
import Preloader from './components/preloader';
import Overlay from './overlay';
import TestApi from './components/test-api';
``
function App() {

  return (
    <>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 50, position: [0, 0, 0], rotation: [0, 0, 0] }} style={{ position: "absolute" }}>

        <color attach="background" args={["#021926"]} />
        <ambientLight intensity={6} />
        {/* <PresentationControls global> */}
        <OrbitControls enabled={false} />
        <Environment files="/env/metro_noord_2k.hdr" />
        <ScrollControls pages={4} damping={0.2}>
          <Aston scale={1} />
          <Scroll html style={{ width: "100%", margin: "0", padding: "0" }}>
            <Preloader />
            <Overlay />
            <TestApi />
          </ Scroll>
        </ScrollControls>

        {/* </PresentationControls> */}
      </Canvas>

    </>
  )
}


export default App;
