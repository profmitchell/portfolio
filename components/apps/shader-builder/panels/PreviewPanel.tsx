"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { sculptToThreeJSMaterial } from 'shader-park-core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { environments } from '../environments';

interface PreviewPanelProps {
  code: string;
  isPlaying: boolean;
  environment?: keyof typeof environments;
  environmentParams?: Record<string, any>;
}

const DEFAULT_CODE = `
sphere(1.0);
color(vec3(1.0, 0.5, 0.2));
`;

export function PreviewPanel({ 
  code, 
  isPlaying,
  environment = 'plain',
  environmentParams = {} 
}: PreviewPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const sculptureRef = useRef<THREE.Mesh | null>(null);
  const animationFrameRef = useRef<number>();
  const timeRef = useRef(0);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const environmentRef = useRef<any>(null);

  // Create or update sculpture
  const createSculpture = (shaderCode: string) => {
    if (!sceneRef.current) return;

    try {
      // Remove existing sculpture
      if (sculptureRef.current) {
        sceneRef.current.remove(sculptureRef.current);
        if (sculptureRef.current.material instanceof THREE.Material) {
          sculptureRef.current.material.dispose();
        }
        sculptureRef.current.geometry.dispose();
      }

      // Create new sculpture
      const geometry = new THREE.SphereGeometry(1, 45, 45);
      const material = sculptToThreeJSMaterial(shaderCode);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.y = 0;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      
      sculptureRef.current = mesh;
      sceneRef.current.add(mesh);
    } catch (error) {
      console.error('Error creating sculpture:', error);
    }
  };

  // Initial setup
  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    sceneRef.current = new THREE.Scene();
    sceneRef.current.background = new THREE.Color(0x000000);
    
    // Setup camera
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current.position.z = 4;

    // Setup renderer with correct types
    rendererRef.current = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
    });
    
    // Enable shadow maps after creation
    rendererRef.current.shadowMap.enabled = true;
    rendererRef.current.shadowMap.type = THREE.PCFSoftShadowMap;
    
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    rendererRef.current.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    rendererRef.current.setClearColor(new THREE.Color(0x000000), 0);
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Setup controls
    controlsRef.current = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
    controlsRef.current.enableDamping = true;
    controlsRef.current.dampingFactor = 0.25;
    controlsRef.current.zoomSpeed = 0.5;
    controlsRef.current.rotateSpeed = 0.5;

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      if (width === 0 || height === 0) return;

      if (cameraRef.current) {
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
      }
      
      if (rendererRef.current) {
        rendererRef.current.setSize(width, height, false);
      }
    };
    
    // Setup ResizeObserver
    resizeObserverRef.current = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === containerRef.current) {
          handleResize();
        }
      }
    });
    
    resizeObserverRef.current.observe(containerRef.current);
    window.addEventListener('resize', handleResize);

    // Initialize environment with proper type checking
    const selectedEnvironment = environments[environment];
    if (selectedEnvironment) {
      try {
        environmentRef.current = new selectedEnvironment.component(
          sceneRef.current,
          rendererRef.current
        );
      } catch (error) {
        console.error('Error initializing environment:', error);
      }
    }

    // Create initial sculpture
    createSculpture(code || DEFAULT_CODE);

    // Animation loop
    const animate = () => {
      timeRef.current += 0.01;
      animationFrameRef.current = requestAnimationFrame(animate);
      
      if (sculptureRef.current && isPlaying) {
        const material = sculptureRef.current.material as THREE.ShaderMaterial;
        if (material.uniforms?.time) {
          material.uniforms.time.value = timeRef.current;
        }
      }
      
      if (environmentRef.current) {
        environmentRef.current.update(timeRef.current);
      }
      
      controlsRef.current?.update();
      rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
    };
    animate();

    // Cleanup
    return () => {
      resizeObserverRef.current?.disconnect();
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current!);
      rendererRef.current?.dispose();
      if (sculptureRef.current) {
        sceneRef.current?.remove(sculptureRef.current);
        if (sculptureRef.current.material instanceof THREE.Material) {
          sculptureRef.current.material.dispose();
        }
        sculptureRef.current.geometry.dispose();
      }
      containerRef.current?.removeChild(rendererRef.current!.domElement);
      environmentRef.current?.dispose();
    };
  }, []);

  // Update sculpture when code changes
  useEffect(() => {
    createSculpture(code || DEFAULT_CODE);
  }, [code]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full bg-gray-900"
      style={{ 
        position: 'relative',
        overflow: 'hidden'
      }}
    />
  );
}