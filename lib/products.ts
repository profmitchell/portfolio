import fs from "fs/promises";
import path from "path";

const DOWNLOADS_FILE = path.join(process.cwd(), "data", "downloads.json");

interface DownloadStats {
  [key: string]: number;
}

export async function incrementDownloads(productId: string) {
  try {
    let stats: DownloadStats = {};
    
    try {
      const data = await fs.readFile(DOWNLOADS_FILE, "utf-8");
      stats = JSON.parse(data);
    } catch (error) {
      // File doesn't exist or is invalid, start fresh
    }
    
    stats[productId] = (stats[productId] || 0) + 1;
    
    await fs.writeFile(DOWNLOADS_FILE, JSON.stringify(stats, null, 2));
    
    return stats[productId];
  } catch (error) {
    console.error("Error updating download stats:", error);
    throw error;
  }
}

export async function getDownloadCount(productId: string): Promise<number> {
  try {
    const data = await fs.readFile(DOWNLOADS_FILE, "utf-8");
    const stats: DownloadStats = JSON.parse(data);
    return stats[productId] || 0;
  } catch (error) {
    return 0;
  }
}