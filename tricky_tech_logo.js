import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

// Get canvas and dimensions
const canvas = document.querySelector("#logo");
const width = canvas.offsetWidth;
const height = canvas.offsetHeight;

// Scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
camera.position.set(0, 50, 0.1);
camera.lookAt(new THREE.Vector3(0, 0, 0));

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true , alpha:true});
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 100, 100);
scene.add(directionalLight);

// OrbitControls (optional but helpful)
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// Load FBX model
const loader = new FBXLoader();
loader.load(
  "Neon_Robo_Buddy_0623142532_texture.fbx",
  (object) => {
    object.scale.set(0.2, 0.2, 0.2); // Adjust scale as needed
    object.position.set(0, 0, 0);
    scene.add(object);
  },
  (xhr) => {
    
  },
  (error) => {
    console.error("Model failed to load:", error);
  }
);

// Animate
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();