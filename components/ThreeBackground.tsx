import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const currentMount = mountRef.current;

        // Scene
        const scene = new THREE.Scene();
        scene.background = null; // Transparent background
        
        // Camera
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        camera.position.set(0, 0, 5);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        currentMount.appendChild(renderer.domElement);

        // Simple rotating geometry for background
        const geometry = new THREE.IcosahedronGeometry(2, 4);
        const material = new THREE.MeshPhongMaterial({
            color: 0x4f46e5,
            emissive: 0x2d3142,
            wireframe: true,
            transparent: true,
            opacity: 0.1,
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Lighting
        const light = new THREE.DirectionalLight(0xffffff, 0.5);
        light.position.set(5, 5, 5);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            mesh.rotation.x += 0.001;
            mesh.rotation.y += 0.002;
            renderer.render(scene, camera);
        };
        animate();

        // Handle resize
        const handleResize = () => {
            const width = currentMount.clientWidth;
            const height = currentMount.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            currentMount.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeBackground;
