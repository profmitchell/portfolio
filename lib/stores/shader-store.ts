import { create } from "zustand";
import { ShaderElement, ElementType, Animation } from "@/lib/types/shader";
import { generateShaderCode } from "@/components/apps/shader-builder/utils/codeGenerator";

interface ShaderState {
  elements: ShaderElement[];
  selectedElement: string | null;
  code: string;
  isPlaying: boolean;
  addElement: (type: ElementType) => void;
  removeElement: (id: string) => void;
  updateElement: (id: string, updates: Partial<ShaderElement>) => void;
  setSelectedElement: (id: string | null) => void;
  updateCode: (code: string) => void;
  toggleAnimation: (elementId: string, paramName: string) => void;
  updateAnimation: (elementId: string, paramName: string, updates: Partial<Animation>) => void;
  togglePlayback: () => void;
}

export const useShaderStore = create<ShaderState>((set) => ({
  elements: [],
  selectedElement: null,
  code: "",
  isPlaying: true,
  
  addElement: (type) => set((state) => {
    const newElement: ShaderElement = {
      id: `${type}-${Date.now()}`,
      type,
      params: {},
      animations: {},
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      material: {
        color: [1, 1, 1],
        metalness: 0.5,
        roughness: 0.5
      }
    };
    const newElements = [...state.elements, newElement];
    const newCode = generateShaderCode(newElements);
    return {
      elements: newElements,
      selectedElement: newElement.id,
      code: newCode
    };
  }),

  removeElement: (id) => set((state) => {
    const newElements = state.elements.filter(el => el.id !== id);
    const newCode = generateShaderCode(newElements);
    return {
      elements: newElements,
      selectedElement: state.selectedElement === id ? null : state.selectedElement,
      code: newCode
    };
  }),

  updateElement: (id, updates) => set((state) => {
    const newElements = state.elements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    );
    const newCode = generateShaderCode(newElements);
    return {
      elements: newElements,
      code: newCode
    };
  }),

  setSelectedElement: (id) => set({ selectedElement: id }),

  updateCode: (code) => set({ code }),

  toggleAnimation: (elementId, paramName) => set((state) => {
    const newElements = state.elements.map(el => {
      if (el.id === elementId) {
        const currentAnim = el.animations[paramName];
        const newAnim: Animation | undefined = currentAnim?.enabled ? undefined : {
          enabled: true,
          amplitude: 0.5,
          frequency: 1.0,
          phase: 0.0
        };
        return {
          ...el,
          animations: {
            ...el.animations,
            [paramName]: newAnim
          }
        };
      }
      return el;
    }) as ShaderElement[];
    const newCode = generateShaderCode(newElements);
    return {
      elements: newElements,
      code: newCode
    };
  }),

  updateAnimation: (elementId, paramName, updates) => set((state) => {
    const newElements = state.elements.map(el => {
      if (el.id === elementId && el.animations[paramName]) {
        return {
          ...el,
          animations: {
            ...el.animations,
            [paramName]: {
              ...el.animations[paramName],
              ...updates
            }
          }
        };
      }
      return el;
    });
    const newCode = generateShaderCode(newElements);
    return {
      elements: newElements,
      code: newCode
    };
  }),

  togglePlayback: () => set((state) => ({ isPlaying: !state.isPlaying }))
}));