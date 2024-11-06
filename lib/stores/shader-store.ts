import { create } from "zustand";
import { ShaderElement, ElementType, Animation } from "@/lib/types/shader";

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
  
  addElement: (type) => set((state) => ({
    elements: [...state.elements, {
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
    }],
    selectedElement: `${type}-${Date.now()}`
  })),
  
  removeElement: (id) => set((state) => ({
    elements: state.elements.filter(el => el.id !== id),
    selectedElement: state.selectedElement === id ? null : state.selectedElement
  })),
  
  updateElement: (id, updates) => set((state) => ({
    elements: state.elements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    )
  })),
  
  setSelectedElement: (id) => set({ selectedElement: id }),
  
  updateCode: (code) => set({ code }),
  
  toggleAnimation: (elementId, paramName) => set((state) => {
    const element = state.elements.find(el => el.id === elementId);
    if (!element) return state;

    const newElements = state.elements.map(el => {
      if (el.id !== elementId) return el;

      const animations = { ...el.animations };
      if (animations[paramName]) {
        delete animations[paramName];
      } else {
        animations[paramName] = {
          enabled: true,
          amplitude: 0.5,
          frequency: 1,
          phase: 0
        };
      }

      return { ...el, animations };
    });

    return { elements: newElements };
  }),
  
  updateAnimation: (elementId, paramName, updates) => set((state) => {
    const newElements = state.elements.map(el => {
      if (el.id !== elementId) return el;

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
    });

    return { elements: newElements };
  }),

  togglePlayback: () => set((state) => ({ isPlaying: !state.isPlaying }))
}));