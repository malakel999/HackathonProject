<template>
    <!-- Bind the container to the solarSystemContainer ref -->
    <div id="solar-system" ref="solarSystemContainer"></div>
  </template>
  
  <script setup>
  import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";
  import { OrbitControls } from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";
  import { onMounted, ref } from 'vue';
  
  // Create a reference for the solar system container
  const solarSystemContainer = ref(null);
  
  onMounted(() => {
    // Ensure the renderer is created once the component is mounted and the ref is available
    if (solarSystemContainer.value) {
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setSize(100, 100);
    // console.log(window.innerHeight)

  
      // Append the renderer to the container
      solarSystemContainer.value.appendChild(renderer.domElement);
  
      // Set up the Three.js scene, textures, camera, and objects
      const textureLoader = new THREE.TextureLoader();
      const starTexture = textureLoader.load("./image/stars.jpg");
      const sunTexture = textureLoader.load("./image/sun.jpg");
      const mercuryTexture = textureLoader.load("./image/mercury.jpg");
      const venusTexture = textureLoader.load("./image/venus.jpg");
      const earthTexture = textureLoader.load("./image/earth.jpg");
      const marsTexture = textureLoader.load("./image/mars.jpg");
      const jupiterTexture = textureLoader.load("./image/jupiter.jpg");
      const saturnTexture = textureLoader.load("./image/saturn.jpg");
      const uranusTexture = textureLoader.load("./image/uranus.jpg");
      const neptuneTexture = textureLoader.load("./image/neptune.jpg");
      const plutoTexture = textureLoader.load("./image/pluto.jpg");
      const saturnRingTexture = textureLoader.load("./image/saturn_ring.png");
      const uranusRingTexture = textureLoader.load("./image/uranus_ring.png");
  
      const scene = new THREE.Scene();
  
      const cubeTextureLoader = new THREE.CubeTextureLoader();
      const cubeTexture = cubeTextureLoader.load([
        starTexture,
        starTexture,
        starTexture,
        starTexture,
        starTexture,
        starTexture,
      ]);
      scene.background = cubeTexture;
  
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(-50, 90, 150);
  
      const orbit = new OrbitControls(camera, renderer.domElement);
  
      const sungeo = new THREE.SphereGeometry(15, 50, 50);
      const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
      const sun = new THREE.Mesh(sungeo, sunMaterial);
      scene.add(sun);
  
      const sunLight = new THREE.PointLight(0xffffff, 4, 300);
      scene.add(sunLight);
  
      const ambientLight = new THREE.AmbientLight(0xffffff, 0);
      scene.add(ambientLight);
  
      const genratePlanet = (size, planetTexture, x, ring) => {
        const planetGeometry = new THREE.SphereGeometry(size, 50, 50);
        const planetMaterial = new THREE.MeshStandardMaterial({ map: planetTexture });
        const planet = new THREE.Mesh(planetGeometry, planetMaterial);
        const planetObj = new THREE.Object3D();
        planet.position.set(x, 0, 0);
        if (ring) {
          const ringGeo = new THREE.RingGeometry(ring.innerRadius, ring.outerRadius, 32);
          const ringMat = new THREE.MeshBasicMaterial({
            map: ring.ringmat,
            side: THREE.DoubleSide,
          });
          const ringMesh = new THREE.Mesh(ringGeo, ringMat);
          planetObj.add(ringMesh);
          ringMesh.position.set(x, 0, 0);
          ringMesh.rotation.x = -0.5 * Math.PI;
        }
        scene.add(planetObj);
        planetObj.add(planet);
        return { planetObj, planet };
      };
  
      const planets = [
        { ...genratePlanet(3.2, mercuryTexture, 28), rotaing_speed_around_sun: 0.004, self_rotation_speed: 0.004 },
        { ...genratePlanet(5.8, venusTexture, 44), rotaing_speed_around_sun: 0.015, self_rotation_speed: 0.002 },
        { ...genratePlanet(6, earthTexture, 62), rotaing_speed_around_sun: 0.01, self_rotation_speed: 0.02 },
        { ...genratePlanet(4, marsTexture, 78), rotaing_speed_around_sun: 0.008, self_rotation_speed: 0.018 },
        { ...genratePlanet(12, jupiterTexture, 100), rotaing_speed_around_sun: 0.002, self_rotation_speed: 0.04 },
        { ...genratePlanet(10, saturnTexture, 138, { innerRadius: 10, outerRadius: 20, ringmat: saturnRingTexture }), rotaing_speed_around_sun: 0.0009, self_rotation_speed: 0.038 },
        { ...genratePlanet(7, uranusTexture, 176, { innerRadius: 7, outerRadius: 12, ringmat: uranusRingTexture }), rotaing_speed_around_sun: 0.0004, self_rotation_speed: 0.03 },
        { ...genratePlanet(7, neptuneTexture, 200), rotaing_speed_around_sun: 0.0001, self_rotation_speed: 0.032 },
        { ...genratePlanet(2.8, plutoTexture, 216), rotaing_speed_around_sun: 0.0007, self_rotation_speed: 0.008 },
      ];
  
      function animate() {
        sun.rotateY(0.004);
        planets.forEach(({ planetObj, planet, rotaing_speed_around_sun, self_rotation_speed }) => {
          planetObj.rotateY(rotaing_speed_around_sun);
          planet.rotateY(self_rotation_speed);
        });
        renderer.render(scene, camera);
      }
  
      renderer.setAnimationLoop(animate);
  
      // Handle window resize
      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    }
  });
  </script>
  
  <style scoped>
  #solar-system {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  </style>
  