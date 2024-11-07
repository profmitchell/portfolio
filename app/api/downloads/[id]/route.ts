import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    // Get the file path from your resources database/config
    const filePath = path.join(process.cwd(), "public", "downloads", id);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return new NextResponse("File not found", { status: 404 });
    }

    // Get file stats
    const stats = fs.statSync(filePath);
    const fileSize = stats.size;

    // Read file
    const fileBuffer = fs.readFileSync(filePath);

    // Set appropriate headers
    const headers = new Headers();
    headers.set("Content-Type", "application/octet-stream");
    headers.set("Content-Disposition", `attachment; filename=${path.basename(filePath)}`);
    headers.set("Content-Length", fileSize.toString());

    return new NextResponse(fileBuffer, { headers });
  } catch (error) {
    console.error("Download error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}