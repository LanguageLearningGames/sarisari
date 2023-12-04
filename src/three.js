import * as THREE from "three";

//Define and Declare a 3d object on a different file to be imported at App.js
//Three.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
//.BoxGeometry is a geometry that can be used to create a box
const geometry = new THREE.BoxGeometry(1, 1, 1);
//.MeshBasicMaterial is a material that can be used to color a mesh
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//.mesh is the combination of geometry and material
const cube = new THREE.Mesh(geometry, material);

let scene = new THREE.Scene();
//Define and Declare a scene
scene.add(cube);
