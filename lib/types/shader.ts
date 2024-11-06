export type ElementType = 
  | "sphere" 
  | "box" 
  | "torus" 
  | "cylinder" 
  | "plane";

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
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  material?: {
    color: [number, number, number];
    metalness: number;
    roughness: number;
  };
}

export interface ElementDefinition {
  name: string;
  params: {
    [key: string]: {
      min: number;
      max: number;
      default: number;
      step: number;
    };
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
      tube: { min: 0.1, max: 1, default: 0.3, step: 0.1 }
    }
  },
  cylinder: {
    name: "Cylinder",
    params: {
      radius: { min: 0.1, max: 2, default: 0.5, step: 0.1 },
      height: { min: 0.1, max: 4, default: 2, step: 0.1 }
    }
  },
  plane: {
    name: "Plane",
    params: {
      width: { min: 0.1, max: 4, default: 1, step: 0.1 },
      height: { min: 0.1, max: 4, default: 1, step: 0.1 }
    }
  }
};