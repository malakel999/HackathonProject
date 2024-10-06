<template>
    <div ref="threeCanvas" class="three-container">
       
    </div>
  </template>
  
  <script>
  import * as THREE from 'three';
  import earthTexturePath from '../assets/images/earth.jpg'; // Chemin correct pour la Terre
  import moonTexturePath from '../assets/images/moon.jpg'; // Chemin correct pour la Lune
  import cometTexturePath from '../assets/images/nayzak.jpeg'; // Chemin correct pour les comètes (nayzak)
  
  export default {
    mounted() {
      this.initThreeJS();
    },
    methods: {
      initThreeJS() {
        // Création de la scène
        const scene = new THREE.Scene();
  
        // Création de la caméra
        const camera = new THREE.PerspectiveCamera(
          75, // Champ de vision
          window.innerWidth / window.innerHeight, // Ratio largeur/hauteur
          0.1, // Proche
          1000 // Lointain
        );
        
        // Création du renderer (rendu)
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.threeCanvas.appendChild(renderer.domElement);
  
        // Chargement des textures
        const textureLoader = new THREE.TextureLoader();
        const earthTexture = textureLoader.load(earthTexturePath); // Texture pour la Terre
        const moonTexture = textureLoader.load(moonTexturePath); // Texture pour la Lune
        const cometTexture = textureLoader.load(cometTexturePath); // Texture pour les comètes (nayzak)
  
        // Création d'un groupe pour la Terre et la Lune
        const group = new THREE.Group();
        scene.add(group);
  
        // Sphère représentant la Terre avec texture
        const earthGeometry = new THREE.SphereGeometry(2.5, 32, 32);
        const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
        const earth = new THREE.Mesh(earthGeometry, earthMaterial);
        group.add(earth);
  
        // Sphère représentant la Lune avec texture
        const moonGeometry = new THREE.SphereGeometry(0.5, 32, 32); // Plus petite sphère pour la Lune
        const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        moon.position.set(4, 0, 0); // Position initiale de la Lune en orbite autour de la Terre
        group.add(moon);
  
        // Créer des sphères (comètes) avec la texture nayzak
        const comets = [];
        const cometGeometry = new THREE.SphereGeometry(0.2, 32, 32); // Petites sphères pour les comètes
        const cometMaterial = new THREE.MeshBasicMaterial({ map: cometTexture });
  
        // Fonction pour générer un mouvement aléatoire
        function randomMovement() {
          return (Math.random() - 0.5) * 0.01; // Mouvement très lent et aléatoire
        }
  
        // Fonction pour générer une position aléatoire à une distance spécifique de la Terre
        function getRandomPosition(minDistance, maxDistance) {
          let x, y, z, distance;
          do {
            x = Math.random() * 20 - 10; // Génère une position aléatoire
            y = Math.random() * 20 - 10;
            z = Math.random() * 20 - 10;
            distance = Math.sqrt(x * x + y * y + z * z); // Calculer la distance par rapport à l'origine (la Terre)
          } while (distance < minDistance || distance > maxDistance); // Répéter tant que la distance n'est pas dans la plage désirée
          return { x, y, z };
        }
  
        // Initialiser et positionner 5 comètes avec un mouvement aléatoire
        const minDistance = 4; // Distance minimale par rapport à la Terre
        const maxDistance = 8; // Distance maximale par rapport à la Terre
  
        for (let i = 0; i < 5; i++) {
          const comet = new THREE.Mesh(cometGeometry, cometMaterial);
          const position = getRandomPosition(minDistance, maxDistance); // Position à une distance spécifique
          comet.position.set(position.x, position.y, position.z);
          comet.userData.velocity = { // Ajouter un mouvement aléatoire initial pour chaque comète
            x: randomMovement(),
            y: randomMovement(),
            z: randomMovement()
          };
          scene.add(comet);
          comets.push(comet);
        }
  
        // Ajout d'étoiles en arrière-plan
        function addStars() {
          const starGeometry = new THREE.BufferGeometry();
          const starCount = 10000;
          const positions = new Float32Array(starCount * 3);
  
          // Générer des positions aléatoires pour les étoiles
          for (let i = 0; i < starCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 1000; // Étoiles réparties dans un espace de 1000 unités
          }
  
          starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
          // Matériau pour les étoiles (simplement un point lumineux)
          const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.5 // Taille des étoiles
          });
  
          const stars = new THREE.Points(starGeometry, starMaterial);
          scene.add(stars); // Ajouter les étoiles à la scène
        }
  
        addStars(); // Appeler la fonction pour ajouter les étoiles
  
        // Positionnement de la caméra
        camera.position.z = 12;
  
        // Animation de la scène
        const animate = function () {
          requestAnimationFrame(animate);
  
          // Rotation de la Terre et de la Lune
          earth.rotation.y += 0.005;
          group.rotation.y += 0.01; // Rotation du groupe pour simuler l'orbite de la Lune
  
          // Déplacement aléatoire des comètes (nayzak)
          comets.forEach(comet => {
            comet.position.x += comet.userData.velocity.x;
            comet.position.y += comet.userData.velocity.y;
            comet.position.z += comet.userData.velocity.z;
  
            // Si elles dépassent une certaine limite, inverser la direction
            if (comet.position.x > 10 || comet.position.x < -10) {
              comet.userData.velocity.x = -comet.userData.velocity.x;
            }
            if (comet.position.y > 10 || comet.position.y < -10) {
              comet.userData.velocity.y = -comet.userData.velocity.y;
            }
            if (comet.position.z > 10 || comet.position.z < -10) {
              comet.userData.velocity.z = -comet.userData.velocity.z;
            }
          });
  
          // Rendu de la scène
          renderer.render(scene, camera);
        };
  
        animate();
  
        // Gestion du redimensionnement de la fenêtre
        window.addEventListener('resize', () => {
          const width = window.innerWidth;
          const height = window.innerHeight;
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        });
      }
    }
  }
  </script>
  
  <style scoped>
  .three-container {
    width: 100%;
    height: 100vh;
    background-color: black;
  }
  </style>
  