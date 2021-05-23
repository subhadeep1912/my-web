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

  const obamaTexture = new THREE.TextureLoader().load('https://pbs.twimg.com/media/ETAi5IJXkAA7mre?format=jpg&name=medium' ,undefined, undefined, (err) => {console.log(err); console.log("an error happened")})
  
  // console.log(obamaTexture)

  const geometry = new THREE.SphereGeometry(10)

  const material = new THREE.MeshBasicMaterial({map: obamaTexture})
  // console.log(material)

  const box = new THREE.Mesh(geometry, material)

  const light1 = new THREE.AmbientLight(0xffff)

  const obamaTexture1 = new THREE.TextureLoader().load('https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg')

  function addStar() {
  const geometry = new THREE.BoxGeometry(2, 2, 2)
  const material = new THREE.MeshStandardMaterial({map: obamaTexture1})

  const star = new THREE.Mesh(geometry, material)

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ))
  star.position.set(x, y, z)
  scene.add(star)
}
  Array(200).fill().forEach(addStar)
 
  // const gridHelper = new THREE.GridHelper(100, 100, new THREE.Color(0x000000), new THREE.Color(0x000000) )
  // scene.add(gridHelper)
  scene.add(box, light1)
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
