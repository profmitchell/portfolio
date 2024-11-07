export interface StreamingLinks {
  spotify?: string;
  appleMusic?: string;
  soundcloud?: string;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  url: string;
  streamingLinks?: StreamingLinks;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  tracks: Track[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  version?: string;
  category?: string;
  format?: string;
  formats?: string[];
  size: string;
  downloads: number;
  driveUrl: string;
  imageUrl?: string;
  features?: string[];
  requirements?: string[];
  specifications?: string[];
  daw?: string;
  genre?: string;
}

export interface ResourceCategory {
  title: string;
  description: string;
  items: Resource[];
}

export interface ResourceLibrary {
  [key: string]: ResourceCategory;
}