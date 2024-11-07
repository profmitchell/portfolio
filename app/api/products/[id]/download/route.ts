import { NextResponse } from "next/server";
import { incrementDownloads } from "@/lib/products";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    // Increment download count
    await incrementDownloads(id);
    
    // Generate temporary download URL
    const downloadUrl = `/downloads/${id}`;
    
    return NextResponse.json({ downloadUrl });
  } catch (error) {
    console.error("Error processing download:", error);
    return NextResponse.json(
      { error: "Failed to process download" },
      { status: 500 }
    );
  }
}