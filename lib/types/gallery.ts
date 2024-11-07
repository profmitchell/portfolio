export type GalleryItemType = "image" | "video" | "shader";

export interface GalleryItem {
  id: string;
  type: GalleryItemType;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  fullImage?: string;
  videoId?: string;
  shaderId?: string;
}