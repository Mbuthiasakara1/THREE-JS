

import './index.css';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const App = () => {
  const canvasRef = useRef();

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.setZ(30);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.debug.checkShaderErrors = true;

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347 }); // change for testing
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);
    // scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight,pointLight);


    const lightHelper = new THREE.PointLightHelper(pointLight)
    scene.add(lightHelper)
    
    const controls = new OrbitControls(camera,renderer.domElement)
  
    function addStar(){
        const geometry = new THREE.SphereGeometry(0.25,24,24)
        const material =  new THREE.MeshStandardMaterial({ color: 0x666666 })
        const star = new THREE.Mesh(geometry,material)

        const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100))
        star.position.set(x,y,z)
        scene.add(star)
    }

    Array(200).fill().forEach(addStar)


    const textureLoader = new THREE.TextureLoader().load("/images/space.jpg")
    scene.background = textureLoader


    const imageTexture = new THREE.TextureLoader().load("/images/Leonardo_Phoenix_10_Futuristic_Asian_female_android_with_symme_1.jpg")
    const image = new THREE.Mesh(
        new THREE.BoxGeometry(3,3,3),
        new THREE.MeshBasicMaterial({map:imageTexture})
    );
    scene.add(image)
   

    const moonTexture = new THREE.TextureLoader().load("/images/moon.jpg")
     const normalTexture = new THREE.TextureLoader().load("/images/normal.jpg")
    const moon = new THREE.Mesh(
        new THREE.SphereGeometry(3,32,32),
        new THREE.MeshStandardMaterial({
            map:moonTexture,
            normalMap : normalTexture
        })
    )
    scene.add(moon)

    moon.position.z = 30;
    moon.position.setX(-10);

    image.position.z = -5;
    image.position.x = 2;



    function moveCamera(){
        const t = document.body.getBoundingClientRect().top;
        moon.rotation.x += 0.05;
        moon.rotation.y +=0.075;
        moon.rotation.y += 0.05;

        image.rotation.y += 0.01;
        image.rotation.z += 0.01;
      
        camera.position.z = t * -0.01;
        camera.position.x = t * -0.0002;
        camera.rotation.y = t * -0.0002;

    



    }

    document.body.onscroll = moveCamera
    moveCamera();




    function animate() {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;

      controls.update()

      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }, []);

  return (
    <>
      <canvas id="bg" ref={canvasRef}></canvas>
      <main>
        <header>
          <h1>Ryne Developa</h1>
          <p>Welcome to my website</p>
        </header>

        <blockquote>
          <p>I like trying out new stuff and making them intresting</p>
        </blockquote>
        
        <section>
          <h2>My goal</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </section>

        <section className="light">
          <p>Projects</p>
          <p>Look at what ive been creating</p>

          <h2>Accomplishments</h2>
          <p>I am the best that ever existed</p>
        </section>
        
        <blockquote>
          <p>The best way out is always through <br />-Robert Frost</p>
        </blockquote>

        <section className="left">
          <h2>🌮 Work History</h2>

          <h3>McDonalds</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <h3>Burger King</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <h3>Taco Bell</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <blockquote>
          <p>Thanks for watching!</p>
        </blockquote>
      </main>
    </>
  );
};

export default App;
