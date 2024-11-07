"use client";

import { Card, CardContent } from "@/components/ui/card";

const shaderExamples = [
  {
    id: "-OB13nR1v4icL1gxMtue",
    title: "Wave Motion",
    description: "Interactive wave simulation"
  },
  {
    id: "-O9lgV0A2KUUj1BUED0u",
    title: "Color Flow",
    description: "Dynamic color patterns"
  },
  {
    id: "-O9ogULXve54AA_dIBav",
    title: "Geometric Forms",
    description: "Procedural geometry"
  },
  {
    id: "-O9jXWrkekUU7i0z8q3o",
    title: "Particle System",
    description: "Interactive particles"
  }
];

export function ShaderGallery() {
  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Shader Park Gallery</h2>
        <p className="text-muted-foreground">Click on any shader to interact</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {shaderExamples.map((shader) => (
          <Card 
            key={shader.id} 
            className="overflow-hidden group hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-0 relative aspect-square">
              <iframe
                src={`https://shaderpark.com/embed/${shader.id}`}
                className="w-full h-full border-0"
                title={shader.title}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                <h3 className="font-semibold text-lg">{shader.title}</h3>
                <p className="text-sm text-gray-200">{shader.description}</p>
                <p className="text-xs mt-2">Click to interact</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 