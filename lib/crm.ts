import { sql } from '@vercel/postgres';

export interface DownloadRecord {
  id: string;
  email: string;
  name: string;
  resourceId: string;
  downloadDate: Date;
  ipAddress?: string;
}

export interface DownloadStats {
  total: number;
  unique: number;
}

export async function logDownload(data: Omit<DownloadRecord, 'id' | 'downloadDate'>): Promise<DownloadRecord> {
  try {
    const { rows } = await sql`
      INSERT INTO downloads (email, name, resource_id, ip_address)
      VALUES (${data.email}, ${data.name}, ${data.resourceId}, ${data.ipAddress})
      RETURNING id, email, name, resource_id as "resourceId", download_date as "downloadDate", ip_address as "ipAddress"
    `;
    return rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to log download');
  }
}

export async function getDownloadStats(resourceId: string): Promise<DownloadStats> {
  try {
    const { rows } = await sql`
      SELECT 
        COUNT(*) as total,
        COUNT(DISTINCT email) as unique
      FROM downloads
      WHERE resource_id = ${resourceId}
    `;
    return rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    return { total: 0, unique: 0 };
  }
}

export async function getRecentDownloads(limit: number = 10): Promise<DownloadRecord[]> {
  try {
    const { rows } = await sql`
      SELECT 
        id,
        email,
        name,
        resource_id as "resourceId",
        download_date as "downloadDate",
        ip_address as "ipAddress"
      FROM downloads
      ORDER BY download_date DESC
      LIMIT ${limit}
    `;
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    return [];
  }
}