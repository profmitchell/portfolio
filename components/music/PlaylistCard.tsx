"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { Track } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { StreamingLinks } from "./StreamingLinks";

interface PlaylistCardProps {
  title: string;
  description: string;
  tracks: Track[];
  onTrackSelect: (track: Track) => void;
  currentTrack: Track | null;
  isPlaying: boolean;
}

export function PlaylistCard({
  title,
  description,
  tracks,
  onTrackSelect,
  currentTrack,
  isPlaying,
}: PlaylistCardProps) {
  return (
    <Card className="flex flex-col hover-lift hover-glow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-2">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="space-y-2"
              >
                <div
                  className="flex items-center justify-between p-2 rounded-md hover:bg-muted cursor-pointer"
                  onClick={() => onTrackSelect(track)}
                >
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                    >
                      {currentTrack?.id === track.id && isPlaying ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                    <div>
                      <p className="font-medium">{track.title}</p>
                      <p className="text-sm text-muted-foreground">{track.artist}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{track.duration}</span>
                </div>
                {track.streamingLinks && (
                  <StreamingLinks 
                    links={track.streamingLinks} 
                    className="pl-12"
                  />
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}