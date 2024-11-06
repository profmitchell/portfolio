import { NextResponse } from "next/server";
import { getTracksFromDirectory } from "@/lib/music-utils";
import path from "path";

export async function GET() {
  try {
    const musicDir = path.join(process.cwd(), "public", "music");
    const tracks = await getTracksFromDirectory(musicDir);
    
    return NextResponse.json({ tracks });
  } catch (error) {
    console.error("Error loading music tracks:", error);
    return NextResponse.json(
      { error: "Failed to load music tracks" },
      { status: 500 }
    );
  }
}