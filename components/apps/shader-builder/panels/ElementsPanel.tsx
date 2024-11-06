"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useShaderStore } from "@/lib/stores/shader-store";

const categories = {
  geometry: ['sphere', 'box', 'torus', 'cylinder'],
  modifiers: ['rotate', 'translate', 'scale'],
  materials: ['color', 'metal', 'shine'],
  operations: ['blend', 'union', 'intersect', 'subtract'],
  noise: ['perlinNoise', 'fractalNoise']
};

export function ElementsPanel() {
  const [selectedCategory, setSelectedCategory] = useState('geometry');
  const addElement = useShaderStore((state) => state.addElement);

  return (
    <div className="flex h-full flex-col">
      <div className="border-b p-4">
        <h2 className="text-sm font-semibold">Elements</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {Object.entries(categories).map(([category, items]) => (
            <div 
              key={category} 
              className={`space-y-2 p-2 rounded ${
                selectedCategory === category ? 'bg-blue-50' : ''
              }`}
            >
              <button
                className="w-full text-left text-sm font-medium capitalize"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
              {selectedCategory === category && (
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
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}