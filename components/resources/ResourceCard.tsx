"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileAudio, Package, Settings, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ResourceCardProps {
  item: any;
  category: string;
  onDownload: (id: string) => void;
  onClick: () => void;
}

export function ResourceCard({ item, category, onDownload, onClick }: ResourceCardProps) {
  const isExternalLink = item.url?.startsWith('http');

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isExternalLink) {
      window.open(item.url, '_blank');
    } else {
      onDownload(item.id);
    }
  };

  const Icon = category === 'plugins' ? Settings : FileAudio;

  return (
    <Card
      className="cursor-pointer hover-lift hover-glow"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {item.formats?.map((format: string, i: number) => (
              <Badge key={i} variant="secondary">{format}</Badge>
            ))}
            {item.daw && <Badge variant="secondary">{item.daw}</Badge>}
            {item.genre && <Badge variant="secondary">{item.genre}</Badge>}
            {item.category && <Badge variant="secondary">{item.category}</Badge>}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {item.size} • {item.downloads?.toLocaleString()} downloads
              {item.version && ` • v${item.version}`}
            </div>
            <Button 
              onClick={handleDownload}
              className="gap-2"
            >
              {isExternalLink ? (
                <>
                  <ExternalLink className="h-4 w-4" />
                  Visit Site
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Download
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}