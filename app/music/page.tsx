"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaylistGrid } from "@/components/music/PlaylistGrid";
import { Card, CardContent } from "@/components/ui/card";
import { SiSpotify, SiApplemusic, SiSoundcloud } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function MusicPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Music</h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Explore my music across different genres and projects
          </p>
        </div>

        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background shadow-enhanced">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover-lift"
                asChild
              >
                <a href="https://open.spotify.com/artist/mitchellcohen" target="_blank" rel="noopener noreferrer">
                  <SiSpotify className="h-5 w-5" />
                  Spotify
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover-lift"
                asChild
              >
                <a href="https://music.apple.com/artist/mitchellcohen" target="_blank" rel="noopener noreferrer">
                  <SiApplemusic className="h-5 w-5" />
                  Apple Music
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover-lift"
                asChild
              >
                <a href="https://soundcloud.com/mitchellcohen" target="_blank" rel="noopener noreferrer">
                  <SiSoundcloud className="h-5 w-5" />
                  SoundCloud
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="genres" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-[600px] grid-cols-3">
              <TabsTrigger value="genres">Genres</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="sound-design">Sound Design & Film</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="genres">
            <PlaylistGrid category="genres" />
          </TabsContent>

          <TabsContent value="projects">
            <PlaylistGrid category="projects" />
          </TabsContent>

          <TabsContent value="sound-design">
            <PlaylistGrid category="sound-design" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}