// ParticleGlobe.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleGlobe = () => {
  const globeRef = useRef();

  useEffect(() => {
    let container = globeRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const outerRadius = calculateRadius();
    const innerRadius = outerRadius - 1;
    const outerParticleCount = 2000;
    const rotationSpeed = 0.002;

    camera.position.z = outerRadius * 2.5;

    // Outer Sphere
    const createOuterSphere = () => {
      const geometry = new THREE.BufferGeometry();
      const positions = [];

      for (let i = 0; i < outerParticleCount; i++) {
        const radius = outerRadius * (0.95 + Math.random() * 0.1);
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        positions.push(x, y, z);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );

      const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.06,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
      });

      const outerSphere = new THREE.Points(geometry, material);
      scene.add(outerSphere);

      return outerSphere;
    };

    // Inner Globe with Texture
    const createInnerGlobe = () => {
      const textureLoader = new THREE.TextureLoader();
      const globeTexture = textureLoader.load("https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg");

      const globeGeometry = new THREE.SphereGeometry(innerRadius, 64, 64);
      const globeMaterial = new THREE.MeshBasicMaterial({
        map: globeTexture,
        transparent: true,
        opacity: 0.9,
      });

      const globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
      scene.add(globeMesh);

      return globeMesh;
    };

    const outerSphere = createOuterSphere();
    const innerGlobe = createInnerGlobe();

    // Window Resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize);

    const animate = () => {
      requestAnimationFrame(animate);

      if (innerGlobe) {
        innerGlobe.rotation.y += rotationSpeed;
      }

      outerSphere.rotation.y += 0.0075;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  const calculateRadius = () => {
    const maxRadius = 9;
    const minRadius = 4;
    const width = window.innerWidth;
    return width > 768 ? maxRadius : minRadius;
  };

  return <div className="globe-container" ref={globeRef}></div>;
};

export default ParticleGlobe;
