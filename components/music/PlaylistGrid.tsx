"use client";

import { useState } from "react";
import { PlaylistCard } from "./PlaylistCard";
import { MusicPlayer } from "./MusicPlayer";
import { Track, Playlist } from "@/lib/types";
import { GENRE_PLAYLISTS, SOUND_DESIGN_PLAYLISTS } from "@/lib/playlists";

interface PlaylistGridProps {
  category: "genres" | "projects" | "sound-design";
}

export function PlaylistGrid({ category }: PlaylistGridProps) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getPlaylists = (category: string): Playlist[] => {
    switch (category) {
      case "genres":
        return GENRE_PLAYLISTS;
      case "sound-design":
        return SOUND_DESIGN_PLAYLISTS;
      default:
        return [];
    }
  };

  const playlistData = getPlaylists(category);

  const handleTrackSelect = (track: Track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const allTracks = playlistData?.flatMap(playlist => playlist.tracks) || [];

  if (!playlistData || playlistData.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No playlists available for this category.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {currentTrack && (
        <MusicPlayer
          tracks={allTracks}
          initialTrackIndex={allTracks.findIndex(t => t.id === currentTrack.id)}
        />
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {playlistData.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            title={playlist.title}
            description={playlist.description}
            tracks={playlist.tracks}
            onTrackSelect={handleTrackSelect}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
}