"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { Track } from "@/lib/types";
import { cn } from "@/lib/utils";

interface MusicPlayerProps {
  tracks: Track[];
  initialTrackIndex?: number;
}

export function MusicPlayer({ tracks, initialTrackIndex = 0 }: MusicPlayerProps) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(initialTrackIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const currentTrack = tracks[currentTrackIndex];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleTrackEnd = () => {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      setIsPlaying(true);
    } else {
      setCurrentTrackIndex(0);
      setIsPlaying(false);
    }
  };

  const handleProgressChange = (values: number[]) => {
    if (audioRef.current) {
      const newTime = values[0];
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (values: number[]) => {
    const newVolume = values[0];
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
      } else {
        audioRef.current.volume = 0;
      }
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Card>
      <CardContent className="p-6">
        <audio
          ref={audioRef}
          src={currentTrack?.url}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleTrackEnd}
          onLoadedMetadata={handleTimeUpdate}
        />
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{currentTrack?.title}</h3>
              <p className="text-sm text-muted-foreground">{currentTrack?.artist}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMute}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <div className="w-24">
                <Slider
                  value={[isMuted ? 0 : volume]}
                  min={0}
                  max={1}
                  step={0.1}
                  onValueChange={handleVolumeChange}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Slider
              value={[currentTime]}
              min={0}
              max={duration || 100}
              step={1}
              onValueChange={handleProgressChange}
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentTrackIndex(Math.max(0, currentTrackIndex - 1))}
              disabled={currentTrackIndex === 0}
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            
            <Button
              size="icon"
              onClick={togglePlay}
              className={cn(
                "h-12 w-12 rounded-full",
                isPlaying ? "bg-primary" : "bg-primary hover:bg-primary/90"
              )}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6 ml-1" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentTrackIndex(Math.min(tracks.length - 1, currentTrackIndex + 1))}
              disabled={currentTrackIndex === tracks.length - 1}
            >
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}