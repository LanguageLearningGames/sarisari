import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    /*renders an HTML canvas element use to render webgl content
     *shadows prop is used to enable shadows in the scene
     *camera prop is used to set camera properties
     *position prop is used to set the position of the camera
     *fov prop is used to set the field of view of the camera
     */
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      {/* OrbitControls is a component that allows the user to control the camera */}
      <OrbitControls enablePan={true} enableRotate={true} />
      {/* render 3d objects here */}
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}

export default App;
