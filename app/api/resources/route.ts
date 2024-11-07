import { NextResponse } from "next/server";
import { resources } from "@/lib/resources";

export async function GET() {
  try {
    return NextResponse.json(resources);
  } catch (error) {
    console.error("Error loading resources:", error);
    return NextResponse.json(
      { error: "Failed to load resources" },
      { status: 500 }
    );
  }
}