"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryItems } from "@/lib/data/gallery";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Visual Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            A collection of digital art, photography, and visual experiments
          </p>
        </div>

        <Tabs defaultValue="stills" className="space-y-8">
          <div className="sticky top-16 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              <TabsTrigger
                value="stills"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Stills
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Videos
              </TabsTrigger>
              <TabsTrigger
                value="shaders"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Shader Gallery
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="stills">
            <GalleryGrid items={galleryItems.stills} />
          </TabsContent>

          <TabsContent value="videos">
            <GalleryGrid items={galleryItems.videos} />
          </TabsContent>

          <TabsContent value="shaders">
            <GalleryGrid items={galleryItems.shaders} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}