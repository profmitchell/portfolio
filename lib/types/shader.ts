export type GeometryType = 'sphere' | 'box' | 'torus' | 'cylinder' | 'line' | 'grid';
export type ModifierType = 'rotate' | 'translate' | 'scale' | 'displace' | 'mirror';
export type MaterialType = 'color' | 'metal' | 'shine' | 'fresnel' | 'occlusion';
export type OperationType = 'blend' | 'union' | 'intersect' | 'difference';
export type NoiseType = 'noise' | 'fractalNoise' | 'sphericalDistribution';

export type ElementType = 
  | GeometryType 
  | ModifierType 
  | MaterialType 
  | OperationType 
  | NoiseType;

export interface ParamDefinition {
  min: number;
  max: number;
  default: number;
  step: number;
}

export interface ElementDefinition {
  name: string;
  params: Record<string, ParamDefinition>;
}

export interface Animation {
  enabled: boolean;
  amplitude: number;
  frequency: number;
  phase: number;
}

export interface ShaderElement {
  id: string;
  type: ElementType;
  params: Record<string, number>;
  animations: Record<string, Animation>;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  material?: {
    color: [number, number, number];
    metalness: number;
    roughness: number;
  };
}

export const elementDefinitions: Record<ElementType, ElementDefinition> = {
  sphere: {
    name: "Sphere",
    params: {
      radius: { min: 0.1, max: 2, default: 1, step: 0.1 }
    }
  },
  box: {
    name: "Box",
    params: {
      width: { min: 0.1, max: 2, default: 1, step: 0.1 },
      height: { min: 0.1, max: 2, default: 1, step: 0.1 },
      depth: { min: 0.1, max: 2, default: 1, step: 0.1 }
    }
  },
  torus: {
    name: "Torus",
    params: {
      radius: { min: 0.1, max: 2, default: 1, step: 0.1 },
      tube: { min: 0.1, max: 1, default: 0.4, step: 0.1 }
    }
  },
  cylinder: {
    name: "Cylinder",
    params: {
      radius: { min: 0.1, max: 2, default: 1, step: 0.1 },
      height: { min: 0.1, max: 4, default: 2, step: 0.1 }
    }
  },
  line: {
    name: "Line",
    params: {
      length: { min: 0.1, max: 5, default: 2, step: 0.1 }
    }
  },
  grid: {
    name: "Grid",
    params: {
      size: { min: 0.1, max: 5, default: 2, step: 0.1 },
      divisions: { min: 1, max: 20, default: 10, step: 1 }
    }
  },
  rotate: {
    name: "Rotate",
    params: {
      angle: { min: -Math.PI, max: Math.PI, default: 0, step: 0.1 }
    }
  },
  translate: {
    name: "Translate",
    params: {
      x: { min: -5, max: 5, default: 0, step: 0.1 },
      y: { min: -5, max: 5, default: 0, step: 0.1 },
      z: { min: -5, max: 5, default: 0, step: 0.1 }
    }
  },
  scale: {
    name: "Scale",
    params: {
      factor: { min: 0.1, max: 5, default: 1, step: 0.1 }
    }
  },
  displace: {
    name: "Displace",
    params: {
      amount: { min: -2, max: 2, default: 0, step: 0.1 }
    }
  },
  mirror: {
    name: "Mirror",
    params: {
      offset: { min: -2, max: 2, default: 0, step: 0.1 }
    }
  },
  color: {
    name: "Color",
    params: {
      r: { min: 0, max: 1, default: 1, step: 0.01 },
      g: { min: 0, max: 1, default: 1, step: 0.01 },
      b: { min: 0, max: 1, default: 1, step: 0.01 }
    }
  },
  metal: {
    name: "Metal",
    params: {
      metalness: { min: 0, max: 1, default: 0.5, step: 0.01 }
    }
  },
  shine: {
    name: "Shine",
    params: {
      glossiness: { min: 0, max: 1, default: 0.5, step: 0.01 }
    }
  },
  fresnel: {
    name: "Fresnel",
    params: {
      intensity: { min: 0, max: 2, default: 1, step: 0.1 }
    }
  },
  occlusion: {
    name: "Occlusion",
    params: {
      strength: { min: 0, max: 1, default: 1, step: 0.1 }
    }
  },
  blend: {
    name: "Blend",
    params: {
      amount: { min: 0, max: 1, default: 0.5, step: 0.01 }
    }
  },
  union: {
    name: "Union",
    params: {
      smoothing: { min: 0, max: 1, default: 0, step: 0.01 }
    }
  },
  intersect: {
    name: "Intersect",
    params: {
      smoothing: { min: 0, max: 1, default: 0, step: 0.01 }
    }
  },
  difference: {
    name: "Difference",
    params: {
      smoothing: { min: 0, max: 1, default: 0, step: 0.01 }
    }
  },
  noise: {
    name: "Noise",
    params: {
      scale: { min: 0.1, max: 10, default: 1, step: 0.1 },
      amplitude: { min: 0, max: 2, default: 1, step: 0.1 }
    }
  },
  fractalNoise: {
    name: "Fractal Noise",
    params: {
      scale: { min: 0.1, max: 10, default: 1, step: 0.1 },
      octaves: { min: 1, max: 8, default: 4, step: 1 }
    }
  },
  sphericalDistribution: {
    name: "Spherical Distribution",
    params: {
      density: { min: 0.1, max: 10, default: 1, step: 0.1 },
      radius: { min: 0.1, max: 2, default: 1, step: 0.1 }
    }
  }
};