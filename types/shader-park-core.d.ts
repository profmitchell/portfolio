declare module 'shader-park-core' {
  import { ShaderMaterial } from 'three';

  export interface ShaderCode {
    vertexShader: string;
    fragmentShader: string;
    uniforms: Record<string, { value: any }>;
  }

  export function sculptToThreeJSMaterial(code: string): ShaderMaterial;
  export function createSculptureWithGeometry(
    geometry: THREE.BufferGeometry, 
    code: string, 
    uniformCallback?: () => Record<string, any>
  ): THREE.Mesh;

  // Geometry functions
  export function sphere(size: number): void;
  export function box(width: number, height: number, depth: number): void;
  export function box(size: [number, number, number]): void;
  export function torus(outerRingSize: number, innerRingSize: number): void;
  export function cylinder(radius: number, height: number): void;
  export function line(startPosition: [number, number, number], endPosition: [number, number, number], thickness: number): void;
  export function grid(count: number, scale: number, thickness: number): void;

  // Add other functions from the documentation
  export function union(): void;
  export function difference(): void;
  export function intersect(): void;
  export function blend(amount: number): void;
  export function mixGeo(amount: number): void;
  export function shell(thickness: number): void;
  export function expand(amount: number): void;
  export function setSDF(distance: number): void;

  // Space modifiers
  export function setSpace(space: [number, number, number]): void;
  export function displace(x: number, y: number, z: number): void;
  export function displace(position: [number, number, number]): void;
  export function mirrorX(): void;
  export function mirrorY(): void;
  export function mirrorZ(): void;
} 