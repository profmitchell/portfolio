import { NextResponse } from "next/server";
import { logDownload } from "@/lib/crm";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email, name, resourceId } = data;

    if (!email || !name || !resourceId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const ipAddress = req.headers.get("x-forwarded-for") || 
                     req.headers.get("x-real-ip") ||
                     "0.0.0.0";

    const downloadRecord = await logDownload({
      email,
      name,
      resourceId,
      ipAddress: ipAddress.split(",")[0],
    });

    return NextResponse.json({
      success: true,
      message: "Download logged successfully",
      data: downloadRecord
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Failed to process download" },
      { status: 500 }
    );
  }
}