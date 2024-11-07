"use client";

import { useShaderStore } from "@/lib/stores/shader-store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { elementDefinitions } from "@/lib/types/shader";

export function ParametersPanel() {
  const selectedElement = useShaderStore((state) => state.selectedElement);
  const elements = useShaderStore((state) => state.elements);
  const updateElement = useShaderStore((state) => state.updateElement);
  const toggleAnimation = useShaderStore((state) => state.toggleAnimation);
  const updateAnimation = useShaderStore((state) => state.updateAnimation);

  const element = elements.find((el) => el.id === selectedElement);
  if (!element) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        Select an element to edit its parameters
      </div>
    );
  }

  const definition = elementDefinitions[element.type];

  return (
    <div className="flex h-full flex-col">
      <div className="border-b p-4">
        <h2 className="text-sm font-semibold">Parameters</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {Object.entries(definition.params).map(([key, param]) => (
            <div key={key} className="space-y-4">
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
                onValueChange={([value]) => {
                  updateElement(element.id, {
                    params: { ...element.params, [key]: value },
                  });
                }}
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
        </div>
      </ScrollArea>
    </div>
  );
}