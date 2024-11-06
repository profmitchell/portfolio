import { put } from '@vercel/blob';
import { Track } from './types';

export async function uploadTrack(file: File): Promise<Track> {
  try {
    const { url } = await put(file.name, file, {
      access: 'public',
      addRandomSuffix: true,
    });

    // Create track record in database
    // Implementation depends on your database setup
    const track = {
      id: 'generated-id',
      title: file.name.replace(/\.[^/.]+$/, ""),
      artist: "Mitchell Cohen",
      duration: "0:00", // You'll need to extract this from the audio file
      url: url
    };

    return track;
  } catch (error) {
    console.error('Storage Error:', error);
    throw new Error('Failed to upload track');
  }
}