import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 8); // Centered camera
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    // --- Procedural Modern Chair (Simplified for Silhouette) ---
    const chairGroup = new THREE.Group();

    // Materials - Very Dark/Subtle for background
    const darkMaterial = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.9,
      metalness: 0.1,
      transparent: true,
      opacity: 0.3
    });
    
    const accentMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.5,
      metalness: 0.5,
      transparent: true,
      opacity: 0.4
    });

    // Chair Construction
    // Seat
    const seat = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.15, 1.5), darkMaterial);
    chairGroup.add(seat);

    // Back
    const back = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.2, 0.1), darkMaterial);
    back.position.set(0, 0.65, -0.7);
    chairGroup.add(back);

    // Legs
    const legGeo = new THREE.CylinderGeometry(0.05, 0.03, 0.8);
    const p1 = new THREE.Mesh(legGeo, accentMaterial); p1.position.set(-0.6, -0.4, -0.6); chairGroup.add(p1);
    const p2 = new THREE.Mesh(legGeo, accentMaterial); p2.position.set(0.6, -0.4, -0.6); chairGroup.add(p2);
    const p3 = new THREE.Mesh(legGeo, accentMaterial); p3.position.set(-0.6, -0.4, 0.6); chairGroup.add(p3);
    const p4 = new THREE.Mesh(legGeo, accentMaterial); p4.position.set(0.6, -0.4, 0.6); chairGroup.add(p4);

    // Position Chair behind text area usually
    chairGroup.position.set(2.5, -0.5, -2); 
    chairGroup.rotation.y = -0.5;
    
    // Only add chair if you want a subtle 3D element behind the "Reality" layer
    // Since the user wants "image proper spread", we might hide this or make it very faint.
    // Let's position it far back.
    chairGroup.position.z = -5;
    chairGroup.scale.set(2,2,2);
    
    scene.add(chairGroup);

    // Animation Loop
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      chairGroup.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-multiply" />;
};

export default ThreeBackground;