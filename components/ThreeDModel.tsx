import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const ThreeDModel: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const currentMount = mountRef.current;

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1E1E1E); // Match website background
        
        // Camera
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        camera.position.set(0, 1.6, 5); // Start position inside the room

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.toneMapping = THREE.ACESFilmicToneMapping; // More realistic lighting
        renderer.outputEncoding = THREE.sRGBEncoding;
        currentMount.appendChild(renderer.domElement);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 1; // Prevent zooming out too far
        controls.maxDistance = 50; // Prevent zooming out too far
        controls.target.set(0, 1, 0); // Look slightly above the floor

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // Softer, more encompassing light
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5); // Simulate sunlight from a window
        scene.add(directionalLight);


        // Model Loader
        const loader = new GLTFLoader();
        loader.load(
            '/models/interior_scene.glb', // NOTE: Place your INTERIOR SCENE model here
            (gltf) => {
                const model = gltf.scene;
                scene.add(model);
            },
            undefined, // onProgress callback not needed
            (error) => {
                console.error('An error happened while loading the model:', error);
                const errorGeo = new THREE.BoxGeometry(1, 1, 1);
                const errorMat = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
                const errorMesh = new THREE.Mesh(errorGeo, errorMat);
                const errorLabel = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xffffff }));
                errorLabel.position.set(0,0,0.51);
                errorMesh.add(errorLabel)
                scene.add(errorMesh);

                const axesHelper = new THREE.AxesHelper( 2 );
                errorMesh.add( axesHelper );
            }
        );

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Handle resize
        const handleResize = () => {
            if (currentMount) {
                camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            }
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (currentMount && renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} className="w-full h-[50vh] md:h-[70vh] cursor-grab active:cursor-grabbing" />;
};

export default ThreeDModel;