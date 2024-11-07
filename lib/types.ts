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