import './App.css';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function App() {

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer(
    {
      canvas: document.querySelector('#bg')
    }
  )

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  const control = new OrbitControls(camera, renderer.domElement)
  renderer.render( scene, camera)
  camera.position.setZ(30)
  const geometry = new THREE.BoxGeometry(10, 10, 10)
  const material = new THREE.MeshStandardMaterial({color: 0xff3423})
  const box = new THREE.Mesh(geometry, material)
  const light1 = new THREE.AmbientLight(0xffff)
  const light2 = new THREE.PointLight(0xffff)
  light2.position.setZ(0,0,30)
  const gridHelper = new THREE.GridHelper(100, 100)

  scene.add(box, light1, gridHelper)
  function animate() {
    requestAnimationFrame( animate) ;

    box.rotation.x += 0.01
    box.rotation.y += 0.005
    box.rotation.z += 0.01;
    control.update()
  
  renderer.render( scene, camera)
  }

  animate()
  return (
    <div className="App">
      
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
