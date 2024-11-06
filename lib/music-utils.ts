import fs from "fs";
import path from "path";
import { promisify } from "util";

const readdir = promisify(fs.readdir);

export interface TrackMetadata {
  title: string;
  artist: string;
  album?: string;
  duration?: number;
  url: string;
}

export async function getTracksFromDirectory(dirPath: string): Promise<TrackMetadata[]> {
  const files = await readdir(dirPath);
  const tracks: TrackMetadata[] = [];

  for (const file of files) {
    if (path.extname(file).toLowerCase() === ".mp3") {
      // Extract title from filename by removing extension and replacing dashes/underscores
      const title = path.parse(file).name
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, l => l.toUpperCase());

      tracks.push({
        title,
        artist: "Mitchell Cohen",
        url: `/music/${file}`
      });
    }
  }

  return tracks.sort((a, b) => a.title.localeCompare(b.title));
}