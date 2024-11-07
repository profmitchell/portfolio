import * as THREE from 'three';

interface Environment {
  name: string;
  component: new (scene: THREE.Scene, renderer: THREE.WebGLRenderer) => {
    update: (time: number) => void;
    dispose: () => void;
    updateParams?: (params: Record<string, any>) => void;
  };
}

export const environments: Record<string, Environment> = {
  plain: {
    name: "Plain",
    component: class {
      constructor(scene: THREE.Scene, renderer: THREE.WebGLRenderer) {}
      update(time: number) {}
      dispose() {}
      updateParams(params: Record<string, any>) {}
    }
  }
}; 