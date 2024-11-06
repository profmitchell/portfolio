import { GalleryItem } from "../types/gallery";

export const galleryItems: Record<string, GalleryItem[]> = {
  stills: [
    {
      id: "s1",
      type: "image",
      title: "Digital Dreamscape",
      description: "Abstract digital composition exploring dreams and reality",
      category: "Digital Art",
      thumbnail: "/images/gallery/digital-dreamscape-thumb.jpg",
      fullImage: "/images/gallery/digital-dreamscape.jpg"
    },
    {
      id: "s2",
      type: "image",
      title: "Urban Symphony",
      description: "City lights and urban landscapes merge in harmony",
      category: "Photography",
      thumbnail: "/images/gallery/urban-symphony-thumb.jpg",
      fullImage: "/images/gallery/urban-symphony.jpg"
    },
    {
      id: "s3",
      type: "image",
      title: "Abstract Harmony",
      description: "Exploration of form and color in abstract composition",
      category: "Abstract",
      thumbnail: "/images/gallery/abstract-harmony-thumb.jpg",
      fullImage: "/images/gallery/abstract-harmony.jpg"
    }
  ],
  videos: [
    {
      id: "v1",
      type: "video",
      title: "Visual Journey",
      description: "A journey through digital landscapes",
      category: "Animation",
      thumbnail: "/images/gallery/visual-journey-thumb.jpg",
      videoId: "VIDEO_ID_1"
    },
    {
      id: "v2",
      type: "video",
      title: "Motion Study",
      description: "Experimental motion graphics piece",
      category: "Motion Graphics",
      thumbnail: "/images/gallery/motion-study-thumb.jpg",
      videoId: "VIDEO_ID_2"
    }
  ],
  shaders: [
    {
      id: "sh1",
      type: "shader",
      title: "Wave Motion",
      description: "Interactive wave simulation using ShaderPark",
      category: "Shader Art",
      thumbnail: "/images/gallery/wave-motion-thumb.jpg",
      shaderId: "-OB15MeJ89P80a3NBN-F"
    },
    {
      id: "sh2",
      type: "shader",
      title: "Color Flow",
      description: "Dynamic color patterns with procedural generation",
      category: "Shader Art",
      thumbnail: "/images/gallery/color-flow-thumb.jpg",
      shaderId: "-O9oldSvo2zAbo-H2Ri9"
    }
  ]
};