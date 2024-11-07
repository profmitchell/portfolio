import { NextResponse } from 'next/server';

const DOWNLOADS = {
  plugins: {
    items: [
      {
        id: "variance-synth",
        title: "Variance Synth",
        description: "Free synthesizer plugin",
        downloadUrl: "https://drive.google.com/file/d/your-file-id/view",
        imageUrl: "/images/placeholder.jpg"
      }
    ]
  },
  templates: {
    items: [
      {
        id: "future-bass",
        title: "Future Bass Template",
        description: "Production template for Future Bass",
        downloadUrl: "https://drive.google.com/file/d/your-file-id/view",
        imageUrl: "/images/placeholder.jpg"
      }
    ]
  }
};

export async function GET() {
  return NextResponse.json(DOWNLOADS);
}