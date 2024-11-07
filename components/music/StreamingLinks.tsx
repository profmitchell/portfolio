"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiSpotify, SiApplemusic, SiSoundcloud } from "react-icons/si";
import { StreamingLinks as StreamingLinksType } from "@/lib/types";

interface StreamingLinksProps {
  links?: StreamingLinksType;
  className?: string;
}

export function StreamingLinks({ links, className }: StreamingLinksProps) {
  if (!links) return null;

  return (
    <div className={`flex gap-2 ${className}`}>
      {links.spotify && (
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          asChild
        >
          <a href={links.spotify} target="_blank" rel="noopener noreferrer">
            <SiSpotify className="h-4 w-4" />
            Spotify
          </a>
        </Button>
      )}
      
      {links.appleMusic && (
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          asChild
        >
          <a href={links.appleMusic} target="_blank" rel="noopener noreferrer">
            <SiApplemusic className="h-4 w-4" />
            Apple Music
          </a>
        </Button>
      )}
      
      {links.soundcloud && (
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          asChild
        >
          <a href={links.soundcloud} target="_blank" rel="noopener noreferrer">
            <SiSoundcloud className="h-4 w-4" />
            SoundCloud
          </a>
        </Button>
      )}
    </div>
  );
}