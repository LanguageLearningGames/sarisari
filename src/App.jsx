import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 3, 3] }}>
      <OrbitControls enablePan={true} enableRotate={true} />

      {/* ***PLAYING WITH MULTIPLE 3D OBJECTS*** */}
      <mesh position-x={-0.6}>
        <boxGeometry />
        {/*side={THREE.FrontSide} -> renders the front side of the object*/}
        <meshToonMaterial color="#C4E117" side={THREE.FrontSide} />
      </mesh>
      <mesh position-x={0.6} position-z={-1}>
        <boxGeometry />
        {/*side={THREE.BackSide} -> renders the back side of the object*/}
        <meshToonMaterial color="hotpink" side={THREE.BackSide} />
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 3]} intensity={1} />
      <directionalLight position={[0, 3, 3]} intensity={0.5} />
    </Canvas>
  );
}

export default App;
