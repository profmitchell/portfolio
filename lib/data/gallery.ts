import { GalleryItem } from "../types/gallery";

export const galleryData = {
  stills: [
    {
      id: "img1",
      type: "image",
      title: "Abstract Waves",
      description: "Digital art exploration of wave patterns",
      category: "Digital Art",
      thumbnail: "/images/gallery/abstract-waves-thumb.jpg",
      fullImage: "/images/gallery/abstract-waves.jpg"
    }
    // ... other still images
  ],
  videos: [
    {
      id: "vid1",
      type: "video",
      title: "Motion Study",
      description: "Experimental motion graphics",
      category: "Animation",
      thumbnail: "/images/gallery/motion-study-thumb.jpg",
      videoId: "VIDEO_ID_1"
    }
    // ... other videos
  ],
  shaders: [
    {
      id: "sh1",
      type: "shader",
      title: "Wave Motion",
      description: "Interactive wave simulation using ShaderPark",
      category: "Shader Art",
      thumbnail: "/images/gallery/wave-motion-thumb.jpg",
      shaderId: "-OB13nR1v4icL1gxMtue"
    },
    {
      id: "sh2",
      type: "shader",
      title: "Color Flow",
      description: "Dynamic color patterns with procedural generation",
      category: "Shader Art",
      thumbnail: "/images/gallery/color-flow-thumb.jpg",
      shaderId: "-O9lgV0A2KUUj1BUED0u"
    },
    {
      id: "sh3",
      type: "shader",
      title: "Geometric Forms",
      description: "Procedural geometry exploration",
      category: "Shader Art",
      thumbnail: "/images/gallery/geometric-forms-thumb.jpg",
      shaderId: "-O9ogULXve54AA_dIBav"
    },
    {
      id: "sh4",
      type: "shader",
      title: "Particle System",
      description: "Interactive particle simulation",
      category: "Shader Art",
      thumbnail: "/images/gallery/particle-system-thumb.jpg",
      shaderId: "-O9jXWrkekUU7i0z8q3o"
    }
  ]
};

export const galleryItems = {
  stills: galleryData.stills,
  videos: galleryData.videos,
  shaders: galleryData.shaders
};