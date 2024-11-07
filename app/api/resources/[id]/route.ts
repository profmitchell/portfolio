import { NextResponse } from "next/server";
import { resources } from "@/lib/resources";
import { getDownloadStats } from "@/lib/crm";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    let foundResource = null;

    // Search through all categories for the resource
    for (const category of Object.values(resources)) {
      const resource = category.items.find(item => item.id === id);
      if (resource) {
        // Get download stats
        const stats = await getDownloadStats(id);
        foundResource = {
          ...resource,
          downloads: stats.total
        };
        break;
      }
    }

    if (!foundResource) {
      return NextResponse.json(
        { error: "Resource not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(foundResource);
  } catch (error) {
    console.error("Error loading resource:", error);
    return NextResponse.json(
      { error: "Failed to load resource" },
      { status: 500 }
    );
  }
}