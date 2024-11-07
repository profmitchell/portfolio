interface DownloadStats {
  downloads: number;
  lastDownload: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  downloadUrl: string;
  imageUrl: string;
  category: string;
  features?: string[];
}

export interface Downloads {
  plugins: { items: DownloadItem[] };
  templates: { items: DownloadItem[] };
}

export async function getDownloads(): Promise<Downloads> {
  return {
    plugins: {
      items: [
        {
          id: "variance-synth",
          title: "Variance Synth",
          description: "Free synthesizer plugin",
          downloadUrl: "https://drive.google.com/file/d/your-file-id/view",
          imageUrl: "/images/placeholder.jpg",
          category: "Plugins",
          features: [
            "3 oscillators",
            "Modular routing",
            "Built-in effects"
          ]
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
          imageUrl: "/images/placeholder.jpg",
          category: "Templates",
          features: [
            "Project structure",
            "Mixing chain",
            "Sample organization"
          ]
        }
      ]
    }
  };
}

export async function getDownloadStats(id: string): Promise<DownloadStats> {
  return {
    downloads: 0,
    lastDownload: new Date().toISOString()
  };
}

export async function logDownload(userId: string, productId: string): Promise<boolean> {
  console.log(`Download logged: ${userId} - ${productId}`);
  return true;
}