import { NextResponse } from 'next/response';
import { getDownloads, getDownloadStats } from '@/lib/crm';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const downloads = await getDownloads();
    const stats = await getDownloadStats(params.id);

    // Find the resource in plugins or templates
    const resource = [
      ...downloads.plugins.items,
      ...downloads.templates.items
    ].find(item => item.id === params.id);

    if (!resource) {
      return NextResponse.json(
        { error: 'Resource not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ...resource,
      stats
    });
  } catch (error) {
    console.error('Error fetching resource:', error);
    return NextResponse.json(
      { error: 'Failed to fetch resource' },
      { status: 500 }
    );
  }
}