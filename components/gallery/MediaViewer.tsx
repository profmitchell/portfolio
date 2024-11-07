"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import { GalleryItem } from "@/lib/types/gallery";

interface MediaViewerProps {
  item: GalleryItem;
  onClose: () => void;
}

export function MediaViewer({ item, onClose }: MediaViewerProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/20"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>

      <div className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4">
        {item.type === "video" ? (
          <iframe
            src={`https://www.youtube.com/embed/${item.videoId}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : item.type === "shader" ? (
          <iframe
            src={`https://shaderpark.com/embed/${item.shaderId}`}
            className="w-full h-full rounded-lg bg-black"
            frameBorder="0"
            title={item.title}
            loading="lazy"
          />
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={item.fullImage || item.thumbnail}
              alt={item.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-sm mt-1">{item.description}</p>
        </div>
      </div>
    </div>
  );
}