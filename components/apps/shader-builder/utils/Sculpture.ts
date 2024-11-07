import * as THREE from 'three';
import { sculptToThreeJSMaterial } from 'shader-park-core';

export class Sculpture {
  mesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;

  constructor(code: string) {
    // Create geometry
    const geometry = new THREE.SphereGeometry(1, 45, 45);

    // Create initial material
    this.material = sculptToThreeJSMaterial(code);

    // Create mesh
    this.mesh = new THREE.Mesh(geometry, this.material);
  }

  update(time: number) {
    if (this.material.uniforms.time) {
      this.material.uniforms.time.value = time;
    }
  }

  async refreshMaterial(code: string) {
    try {
      // Update material
      const newMaterial = sculptToThreeJSMaterial(code);
      this.material.vertexShader = newMaterial.vertexShader;
      this.material.fragmentShader = newMaterial.fragmentShader;
      this.material.uniforms = {
        ...this.material.uniforms,
        ...newMaterial.uniforms
      };
      
      // Force material update
      this.material.needsUpdate = true;
    } catch (error) {
      console.error('Error compiling shader:', error);
    }
  }

  dispose() {
    this.material.dispose();
    this.mesh.geometry.dispose();
  }
} 