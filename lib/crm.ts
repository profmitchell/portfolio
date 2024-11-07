interface Download {
  id: string;
  title: string;
  description: string;
  downloadUrl: string;
  imageUrl: string;
}

export async function logDownload(userId: string, productId: string) {
  console.log(`Download logged: ${userId} - ${productId}`);
  return true;
}

export async function getDownloads(): Promise<{ plugins: { items: Download[] }, templates: { items: Download[] } }> {
  return {
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
}