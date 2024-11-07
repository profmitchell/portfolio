"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";

const reelProjects = [
  {
    title: "Pulse",
    description: "Original musical composition showcasing dynamic production and sound design",
    thumbnail: "/images/reel/pulse-thumb.jpg",
    duration: "3:24",
    videoId: "VIDEO_ID_1",
    type: "Music Video"
  },
  {
    title: "Ocean",
    description: "360° visual experience featuring watercolor digital art",
    thumbnail: "/images/reel/ocean-thumb.jpg",
    duration: "0:45",
    videoId: "VIDEO_ID_2",
    type: "Visual Art"
  },
  {
    title: "Multi-Instrument Performance",
    description: "Live performance featuring piano, drums, bass, and synth",
    thumbnail: "/images/reel/performance-thumb.jpg",
    duration: "1:15",
    videoId: "VIDEO_ID_3",
    type: "Performance"
  }
];

export default function ReelPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Demo Reel</h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Showcasing my work in music production, sound design, and live performance
          </p>
        </div>

        <div className="aspect-video relative rounded-lg overflow-hidden bg-black">
          <iframe
            src={`https://www.youtube.com/embed/VIDEO_ID_1`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reelProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-lift hover-glow">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.videoId}`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      <Play className="h-4 w-4 mr-2" /> {project.duration}
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{project.title}</h3>
                    <span className="text-xs text-muted-foreground">{project.type}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://www.youtube.com/@mitchellcohen" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Full Channel <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}