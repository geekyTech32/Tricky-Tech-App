import *as THREE from "three";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/Addons.js';
import { OrthographicCamera } from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
// Setup scene 
const scene= new THREE.Scene()
const canvas = document.querySelector("#three-canvas")
const width=canvas.offsetWidth
const height= canvas.offsetHeight
let mediaRange = window.matchMedia('(min-width: 320px) and (max-width: 884px)')


// setup camera

if (mediaRange.matches){

// setup camera
const aspect =  window.innerWidth / window.innerHeight
const camera = new  THREE.PerspectiveCamera(55, window.innerWidth/ window.innerHeight, 0.5, 1200)

camera.position.set(0,50, 950)
camera.lookAt(scene)


//setting up simple font  animation
const loader = new FontLoader();
loader.load('fonts/Pacifico_Regular.json', (font) => {
  const textGeometry = new TextGeometry('Resume', {
    font: font,
    size: 110,
    height: 0.003,
    bevelEnabled:true,
    bevelSize: 0.02,

   
  });

  const textMaterial = new THREE.MeshBasicMaterial({color: new THREE.Color(255 / 255, 215 / 255, 0 / 255)});
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textGeometry.center()
  scene.add(textMesh);

  const outlineMaterial = new THREE.MeshBasicMaterial({ color: "black", side: THREE.BackSide });
  const outlineMesh = new THREE.Mesh(textGeometry.clone(), outlineMaterial);
  outlineMesh.scale.multiplyScalar(1.05); // Slightly larger
  textMesh.add(outlineMesh);
});






// Renderer
const renderer = new THREE.WebGLRenderer( {canvas:canvas,
  antialias:true,
  alpha:true})
renderer.setSize(width,height )

renderer.setPixelRatio(devicePixelRatio)

// orbit controls 
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.update();


//Renderer Loop
function animate() {
  requestAnimationFrame(animate);
  controls.update()

  renderer.render(scene, camera);
}
animate()
}
else{

  const aspect =  window.innerWidth / window.innerHeight
const camera = new  THREE.PerspectiveCamera(45 , window.innerWidth/ window.innerHeight, 0.1, 1000)

camera.position.set(0,50, 500)
camera.lookAt(scene)


//setting up simple font  animation
const loader = new FontLoader();
loader.load('fonts/Pacifico_Regular.json', (font) => {
  const textGeometry = new TextGeometry('Resume', {
    font: font,
    size: 120,
    height: 0.003,
    bevelEnabled:true,
    bevelSize: 0.02,

   
  });

  const textMaterial = new THREE.MeshBasicMaterial({color: new THREE.Color(255 / 255, 215 / 255, 0 / 255)});
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textGeometry.center()
  scene.add(textMesh);

  const outlineMaterial = new THREE.MeshBasicMaterial({ color: "black", side: THREE.BackSide });
  const outlineMesh = new THREE.Mesh(textGeometry.clone(), outlineMaterial);
  outlineMesh.scale.multiplyScalar(1.05); // Slightly larger
  textMesh.add(outlineMesh);
});






// Renderer
const renderer = new THREE.WebGLRenderer( {canvas:canvas,
  antialias:true,
  alpha:true})
renderer.setSize(width,height )

renderer.setPixelRatio(devicePixelRatio)

// orbit controls 
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.update();


//Renderer Loop
function animate() {
  requestAnimationFrame(animate);
  controls.update()

  renderer.render(scene, camera);
}
animate()
}