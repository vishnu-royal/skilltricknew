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
    const oceanParticleCount = 6000;
    const rotationSpeed = 0.002;
    const clippingPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

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

    // Inner Globe with GeoJSON (API call removed in this version)
    const createInnerGlobe = () => {
      const oceanGeometry = new THREE.BufferGeometry();
      const oceanPositions = [];

      const goldenRatio = (1 + Math.sqrt(5)) / 2;
      const increment = Math.PI * 2 * goldenRatio;

      for (let i = 0; i < oceanParticleCount; i++) {
        const phi = Math.acos(1 - (2 * (i + 0.5)) / oceanParticleCount);
        const theta = increment * i;

        const x = innerRadius * Math.sin(phi) * Math.cos(theta);
        const y = innerRadius * Math.sin(phi) * Math.sin(theta);
        const z = innerRadius * Math.cos(phi);

        oceanPositions.push(x, y, z);
      }

      oceanGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(oceanPositions, 3)
      );

      const oceanMaterial = new THREE.PointsMaterial({
        color: 0x1e90ff,
        size: 0.05,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
        clippingPlanes: [clippingPlane],
      });

      const oceanParticles = new THREE.Points(oceanGeometry, oceanMaterial);
      scene.add(oceanParticles);

      return oceanParticles;
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
