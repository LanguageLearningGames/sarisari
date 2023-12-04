{
  /* ***PLAYING WITH GEOMETRY TYPES*** */
}
{
  /* BOX GEOMETRY creates a cube objec 
          * takes 3 args: width, height, depth
         *(ESLINT error) args property is not 
         unknown, it's a part of the react-three-fiber API */
}

<mesh>
  <boxGeometry args={[1, 1, 1]} />
  //meshBasicMaterial takes 1 arg: color*
  <meshBasicMaterial color={0x00ff00} />
</mesh>;

{
  /* SPHERE GEOMETRY creates a sphere object
   * args: radius, widthSegments, heightSegments */
}
<mesh>
  <sphereGeometry args={[1, 32, 32]} />
  //meshNormalMaterial takes no args -> renders a sphere with a normal map
  <meshNormalMaterial />
</mesh>;

{
  /* PLANE GEOMETRY creates a plane object
   * args: width, height */
}

<mesh>
  <planeGeometry args={[3, 3]} />
  <meshNormalMaterial />
</mesh>;

{
  /* CYLINDER GEOMETRY creates a cylinder object
   * args: radiusTop, radiusBottom, height, radialSegments */
}

<mesh>
  <cylinderGeometry args={[1, 1, 2, 32]} />
  <meshNormalMaterial />
</mesh>;
