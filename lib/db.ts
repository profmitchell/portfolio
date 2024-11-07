import { sql } from '@vercel/postgres';
import { Track, Playlist } from './types';

export async function getTracks(): Promise<Track[]> {
  try {
    const { rows } = await sql`
      SELECT * FROM tracks
      ORDER BY created_at DESC
    `;
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch tracks');
  }
}

export async function getPlaylistsByCategory(category: string): Promise<Playlist[]> {
  try {
    const { rows } = await sql`
      SELECT p.*, 
             json_agg(
               json_build_object(
                 'id', t.id,
                 'title', t.title,
                 'artist', t.artist,
                 'duration', t.duration,
                 'url', t.url
               )
             ) as tracks
      FROM playlists p
      LEFT JOIN playlist_tracks pt ON p.id = pt.playlist_id
      LEFT JOIN tracks t ON pt.track_id = t.id
      WHERE p.category = ${category}
      GROUP BY p.id
      ORDER BY p.created_at DESC
    `;
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch playlists');
  }
}