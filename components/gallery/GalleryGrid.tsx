"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { GalleryItem } from "@/lib/types/gallery";
import { MediaViewer } from "./MediaViewer";

interface GalleryGridProps {
  items: GalleryItem[];
}

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

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <Tabs defaultValue="gallery" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="shaders">Shader Examples</TabsTrigger>
      </TabsList>

      <TabsContent value="gallery">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow"
              onClick={() => setSelectedItem(item)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-sm mt-2">{item.category}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="shaders">
        <div className="grid gap-6 md:grid-cols-2">
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
                  loading="lazy"
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
      </TabsContent>

      {selectedItem && (
        <MediaViewer
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </Tabs>
  );
}