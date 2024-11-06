"use client";

import { ShaderBuilder } from "@/components/apps/shader-builder/ShaderBuilder";

export default function ShaderBuilderPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Shader Builder
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Create beautiful shaders with an intuitive visual interface
          </p>
        </div>

        <ShaderBuilder />
      </div>
    </div>
  );
}