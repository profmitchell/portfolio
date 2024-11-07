"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { GalleryItem } from "@/lib/types/gallery";
import { MediaViewer } from "./MediaViewer";

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow"
            onClick={() => setSelectedItem(item)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-square">
                {item.type === "shader" ? (
                  <iframe
                    src={`https://shaderpark.com/embed/${item.shaderId}`}
                    className="w-full h-full"
                    frameBorder="0"
                    title={item.title}
                    loading="lazy"
                  />
                ) : (
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
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

      {selectedItem && (
        <MediaViewer
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
}