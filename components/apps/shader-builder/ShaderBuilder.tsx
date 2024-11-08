"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PreviewPanel } from "./panels/PreviewPanel";
import { ElementsPanel } from "./panels/ElementsPanel";
import { CompositionPanel } from "./panels/CompositionPanel";
import { CodeEditor } from "./panels/CodeEditor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useShaderStore } from "@/lib/stores/shader-store";

export function ShaderBuilder() {
  const [isPlaying, setIsPlaying] = useState(true);
  const code = useShaderStore((state) => state.code);
  const updateCode = useShaderStore((state) => state.updateCode);

  return (
    <div className="h-[800px] rounded-lg border">
      <ResizablePanelGroup direction="horizontal">
        {/* Elements Panel */}
        <ResizablePanel defaultSize={20} minSize={15}>
          <ElementsPanel />
        </ResizablePanel>

        <ResizableHandle />

        {/* Middle Section */}
        <ResizablePanel defaultSize={45}>
          <ResizablePanelGroup direction="vertical">
            {/* Composition Panel */}
            <ResizablePanel defaultSize={60}>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b p-4">
                  <h2 className="text-sm font-semibold">Composition</h2>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? "Pause" : "Play"}
                  </Button>
                </div>
                <div className="flex-1 overflow-auto p-4">
                  <CompositionPanel />
                </div>
              </div>
            </ResizablePanel>

            <ResizableHandle />

            {/* Code Editor Panel */}
            <ResizablePanel defaultSize={40}>
              <div className="flex h-full flex-col">
                <div className="border-b p-4">
                  <h2 className="text-sm font-semibold">Generated Code</h2>
                </div>
                <div className="flex-1">
                  <CodeEditor 
                    value={code}
                    onChange={updateCode}
                  />
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>

        <ResizableHandle />

        {/* Preview Panel */}
        <ResizablePanel defaultSize={35}>
          <div className="flex h-full flex-col">
            <div className="border-b p-4">
              <h2 className="text-sm font-semibold">Preview</h2>
            </div>
            <div className="flex-1">
              <PreviewPanel code={code} isPlaying={isPlaying} />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}