{/* ***PLAYING WITH MATERIAL TYPES*** */}
      {/* MESH BASIC MATERIAL takes no args -> renders a flat color */}

            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              //meshBasicMaterial does not take any lighting from its surroundings
              <meshBasicMaterial color={0x00ff00} />
            </mesh>
        

      {/* MESH STANDARD MATERIAL reacts to light sources in the scene    */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} /> 
        {/*meshStandardMaterial creates a nice shading effect */}
        <meshToonMaterial color={0x00ff00} />
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 3]} intensity={1} />
      <directionalLight position={[0, 3, 3]} intensity={0.5} />
    
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
