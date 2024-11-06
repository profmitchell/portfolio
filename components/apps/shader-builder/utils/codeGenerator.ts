import * as THREE from 'three';
import * as ShaderPark from 'shader-park-core';
import { ShaderElement } from "@/lib/types/shader";

export function generateShaderCode(elements: ShaderElement[]): string {
  const setupCode = `
setMaxIterations(256);
setStepSize(0.5);
let s = getSpace();
let r = getRayDirection();
`;

  if (elements.length === 0) {
    return `${setupCode}
sphere(1.0);
color(vec3(1.0, 0.8, 0.6));
metal(0.5);
shine(0.5);`;
  }

  const generateParamCode = (element: ShaderElement) => {
    const params = element.params || {};
    switch (element.type) {
      case "sphere":
        return `sphere(${params.radius || 1.0})`;
      case "box":
        return `box(vec3(${params.width || 1.0}, ${params.height || 1.0}, ${
          params.depth || 1.0
        }))`;
      case "torus":
        return `torus(${params.radius || 1.0}, ${params.tube || 0.3})`;
      case "cylinder":
        return `cylinder(${params.radius || 0.5}, ${params.height || 2.0})`;
      case "plane":
        return `plane(vec3(0.0, 1.0, 0.0), 0.0)`;
      default:
        return "sphere(1.0)";
    }
  };

  const generateAnimationCode = (element: ShaderElement) => {
    const animationCode: string[] = [];
    
    if (element.animations) {
      Object.entries(element.animations).forEach(([param, anim]) => {
        if (anim?.enabled) {
          animationCode.push(
            `let ${param}Anim = ${element.params?.[param] || 1.0} + ${
              anim.amplitude || 0.5
            } * sin(time * ${anim.frequency || 1.0} + ${anim.phase || 0.0});`
          );
        }
      });
    }
    
    return animationCode;
  };

  const elementCode = elements
    .map((element) => {
      const animations = generateAnimationCode(element);
      const baseCode = generateParamCode(element);
      const materialCode = `
color(vec3(${element.material?.color.join(", ") || "1.0, 0.8, 0.6"}));
metal(${element.material?.metalness || 0.5});
shine(${element.material?.roughness || 0.5});`;
      
      return [...animations, baseCode, materialCode].join("\n  ");
    })
    .join("\n  blend(0.3);\n  ");

  return `${setupCode}
${elementCode}`;
}

export async function createShaderMesh(code: string): Promise<THREE.Mesh | null> {
  if (!ShaderPark.sculptToThreeJSMesh) {
    console.error('ShaderPark not properly initialized');
    return null;
  }

  try {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const uniforms = {
      time: { value: 0 },
      mouse: { value: new THREE.Vector3() },
      resolution: { value: new THREE.Vector2(800, 600) }
    };

    const mesh = ShaderPark.sculptToThreeJSMesh(code, {
      geometry,
      uniforms,
      material: new THREE.ShaderMaterial({
        uniforms,
        vertexShader: ShaderPark.defaultVertexShader,
        fragmentShader: ShaderPark.defaultFragmentShader,
      })
    });

    if (!mesh) {
      throw new Error('Failed to create mesh');
    }

    return mesh;
  } catch (error) {
    console.error('Failed to create shader mesh:', error);
    const defaultMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    return new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), defaultMaterial);
  }
}