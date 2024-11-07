import { ShaderElement } from "@/lib/types/shader";

export function generateShaderCode(elements: ShaderElement[]): string {
  let code = '';

  // Add default setup
  code += 'setSpace(SURFACE_DISTANCE);\n\n';

  // Process each element
  elements.forEach(element => {
    // Add element-specific code
    switch (element.type) {
      case 'sphere':
        code += `sphere(${element.params.radius});\n`;
        break;
      case 'box':
        const { width, height, depth } = element.params;
        code += `box(vec3(${width}, ${height}, ${depth}));\n`;
        break;
      // Add other element types...
    }

    // Add material properties if present
    if (element.material) {
      const { color, metalness, roughness } = element.material;
      code += `color(vec3(${color.join(', ')}));\n`;
      code += `metal(${metalness});\n`;
      code += `shine(${1 - roughness});\n`;
    }

    // Add animations if present
    Object.entries(element.animations).forEach(([param, anim]) => {
      if (anim?.enabled) {
        code += `// Animate ${param}\n`;
        code += `let ${param}Anim = sin(time * ${anim.frequency} + ${anim.phase}) * ${anim.amplitude};\n`;
      }
    });
  });

  return code;
}