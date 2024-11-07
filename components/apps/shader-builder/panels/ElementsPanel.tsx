"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useShaderStore } from "@/lib/stores/shader-store";
import { 
  ElementType, 
  GeometryType, 
  ModifierType, 
  MaterialType, 
  OperationType, 
  NoiseType 
} from "@/lib/types/shader";

const categories: Record<string, ElementType[]> = {
  geometry: ['sphere', 'box', 'torus', 'cylinder', 'line', 'grid'] as GeometryType[],
  modifiers: ['rotate', 'translate', 'scale', 'displace', 'mirror'] as ModifierType[],
  materials: ['color', 'metal', 'shine', 'fresnel', 'occlusion'] as MaterialType[],
  operations: ['blend', 'union', 'intersect', 'difference'] as OperationType[],
  noise: ['noise', 'fractalNoise', 'sphericalDistribution'] as NoiseType[]
};

export function ElementsPanel() {
  const addElement = useShaderStore((state) => state.addElement);

  return (
    <div className="flex h-full flex-col">
      <div className="border-b p-4">
        <h2 className="text-sm font-semibold">Elements</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category} className="space-y-2">
              <h3 className="text-sm font-medium capitalize">{category}</h3>
              <div className="grid grid-cols-2 gap-2">
                {items.map((item) => (
                  <Button
                    key={item}
                    variant="outline"
                    size="sm"
                    className="justify-start text-sm"
                    onClick={() => addElement(item)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}