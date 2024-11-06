"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResourceLibrary } from "@/lib/types";
import { toast } from "sonner";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { ResourceDialog } from "@/components/resources/ResourceDialog";

export default function ResourcesPage() {
  const [resources, setResources] = useState<ResourceLibrary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedResource, setSelectedResource] = useState<any | null>(null);

  useEffect(() => {
    async function loadResources() {
      try {
        const response = await fetch("/api/resources");
        const data = await response.json();
        
        if (data.error) throw new Error(data.error);
        setResources(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to load resources";
        setError(errorMessage);
        toast.error("Failed to load resources");
      } finally {
        setLoading(false);
      }
    }

    loadResources();
  }, []);

  const handleDownload = async (resourceId: string) => {
    try {
      const response = await fetch(`/api/downloads/${resourceId}`);
      
      if (!response.ok) throw new Error("Download failed");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const a = document.createElement("a");
      a.href = url;
      a.download = resourceId;
      document.body.appendChild(a);
      a.click();
      
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast.success("Download started");
    } catch (error) {
      toast.error("Download failed. Please try again.");
    }
  };

  const getRelatedResources = (resource: any) => {
    if (!resources) return [];

    const allResources = Object.entries(resources).flatMap(
      ([category, section]) => section.items
    );

    return allResources
      .filter(r => 
        r.id !== resource.id && 
        (r.category === resource.category || 
         r.genre === resource.genre ||
         r.formats?.some(format => resource.formats?.includes(format)))
      )
      .slice(0, 3);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-muted rounded w-1/3 mx-auto"></div>
          <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-destructive">Error loading resources</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  if (!resources) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">No resources available</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Resource Library
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Download free plugins, templates, samples, and presets for music production
          </p>
        </div>

        <Tabs defaultValue="plugins" className="space-y-8">
          <TabsList className="grid w-full max-w-[600px] grid-cols-4 mx-auto">
            <TabsTrigger value="plugins">Plugins</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="samples">Samples</TabsTrigger>
            <TabsTrigger value="presets">Presets</TabsTrigger>
          </TabsList>

          {Object.entries(resources).map(([key, section]) => (
            <TabsContent key={key} value={key} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {section.items.map((item) => (
                  <ResourceCard
                    key={item.id}
                    item={item}
                    category={key}
                    onDownload={handleDownload}
                    onClick={() => setSelectedResource(item)}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {selectedResource && (
        <ResourceDialog
          resource={selectedResource}
          isOpen={!!selectedResource}
          onClose={() => setSelectedResource(null)}
          onDownload={handleDownload}
          relatedResources={getRelatedResources(selectedResource)}
        />
      )}
    </div>
  );
}