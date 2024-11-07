"use client";

import { useShaderStore } from "@/lib/stores/shader-store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Trash2, ChevronDown, ChevronRight } from "lucide-react";
import { elementDefinitions, ParamDefinition } from "@/lib/types/shader";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

export function CompositionPanel() {
  const selectedElement = useShaderStore((state) => state.selectedElement);
  const elements = useShaderStore((state) => state.elements);
  const updateElement = useShaderStore((state) => state.updateElement);
  const removeElement = useShaderStore((state) => state.removeElement);
  const toggleAnimation = useShaderStore((state) => state.toggleAnimation);
  const updateAnimation = useShaderStore((state) => state.updateAnimation);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    parameters: true,
    material: true
  });

  const element = elements.find((el) => el.id === selectedElement);
  if (!element) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        Select an element to edit its properties
      </div>
    );
  }

  const definition = elementDefinitions[element.type];

  const handleParameterChange = (key: string, value: number) => {
    updateElement(element.id, {
      params: { ...element.params, [key]: value },
    });
  };

  const handleMaterialChange = (
    property: 'color' | 'metalness' | 'roughness',
    value: number | [number, number, number]
  ) => {
    const defaultMaterial = {
      color: [1, 1, 1] as [number, number, number],
      metalness: 0.5,
      roughness: 0.5
    };

    updateElement(element.id, {
      material: {
        ...defaultMaterial,
        ...element.material,
        [property]: value,
      },
    });
  };

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="flex h-full flex-col">
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">{definition.name}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeElement(element.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <Collapsible
            open={openSections["parameters"]}
            onOpenChange={() => toggleSection("parameters")}
          >
            <CollapsibleTrigger className="flex items-center w-full">
              {openSections["parameters"] ? (
                <ChevronDown className="h-4 w-4 mr-2" />
              ) : (
                <ChevronRight className="h-4 w-4 mr-2" />
              )}
              <span className="font-medium">Parameters</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4 space-y-4">
              {Object.entries(definition.params).map(([key, param]) => (
                <div key={key} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>{key}</Label>
                    <span className="text-sm text-muted-foreground">
                      {element.params[key]?.toFixed(2)}
                    </span>
                  </div>
                  <Slider
                    value={[element.params[key] || param.default]}
                    min={param.min}
                    max={param.max}
                    step={param.step}
                    onValueChange={([value]) => handleParameterChange(key, value)}
                  />
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={element.animations[key]?.enabled || false}
                      onCheckedChange={() => toggleAnimation(element.id, key)}
                    />
                    <Label>Animate</Label>
                  </div>
                  {element.animations[key]?.enabled && (
                    <div className="space-y-4 pl-6">
                      <div>
                        <Label>Amplitude</Label>
                        <Slider
                          value={[element.animations[key].amplitude]}
                          min={0}
                          max={1}
                          step={0.01}
                          onValueChange={([value]) => {
                            updateAnimation(element.id, key, { amplitude: value });
                          }}
                        />
                      </div>
                      <div>
                        <Label>Frequency</Label>
                        <Slider
                          value={[element.animations[key].frequency]}
                          min={0}
                          max={5}
                          step={0.1}
                          onValueChange={([value]) => {
                            updateAnimation(element.id, key, { frequency: value });
                          }}
                        />
                      </div>
                      <div>
                        <Label>Phase</Label>
                        <Slider
                          value={[element.animations[key].phase]}
                          min={0}
                          max={Math.PI * 2}
                          step={0.1}
                          onValueChange={([value]) => {
                            updateAnimation(element.id, key, { phase: value });
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>

          <Collapsible
            open={openSections["material"]}
            onOpenChange={() => toggleSection("material")}
          >
            <CollapsibleTrigger className="flex items-center w-full">
              {openSections["material"] ? (
                <ChevronDown className="h-4 w-4 mr-2" />
              ) : (
                <ChevronRight className="h-4 w-4 mr-2" />
              )}
              <span className="font-medium">Material</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4 space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Color</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {["r", "g", "b"].map((channel, index) => (
                      <div key={channel} className="space-y-1">
                        <Label className="text-xs">{channel.toUpperCase()}</Label>
                        <Slider
                          value={[element.material?.color?.[index] ?? 1]}
                          min={0}
                          max={1}
                          step={0.01}
                          onValueChange={([value]) => {
                            const current = element.material?.color ?? [1, 1, 1];
                            const updated = [...current] as [number, number, number];
                            updated[index] = value;
                            handleMaterialChange('color', updated);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Metalness</Label>
                  <Slider
                    value={[element.material?.metalness ?? 0.5]}
                    min={0}
                    max={1}
                    step={0.01}
                    onValueChange={([value]) => handleMaterialChange('metalness', value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Roughness</Label>
                  <Slider
                    value={[element.material?.roughness ?? 0.5]}
                    min={0}
                    max={1}
                    step={0.01}
                    onValueChange={([value]) => handleMaterialChange('roughness', value)}
                  />
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </ScrollArea>
    </div>
  );
}