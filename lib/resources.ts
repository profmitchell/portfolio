import { ResourceLibrary } from "@/lib/types";

export const resources: ResourceLibrary = {
  plugins: {
    title: "VST/AU Plugins",
    description: "Professional audio plugins for music production and sound design",
    items: [
      {
        id: "variance",
        title: "Variance",
        description: "A versatile synthesizer plugin with randomized variation generation capabilities",
        version: "1.2.0",
        downloads: 2345,
        formats: ["VST3", "AU"],
        size: "156 MB",
        category: "Synthesizer",
        driveUrl: "https://drive.google.com/file/d/1abc...xyz",
        imageUrl: "/images/products/plugins/variance.jpg",
        features: [
          "Randomized variation generator",
          "Multiple oscillator types",
          "Advanced modulation system",
          "Custom preset management"
        ],
        requirements: [
          "macOS 10.15 or later / Windows 10 or later",
          "4GB RAM minimum",
          "VST3 or AU compatible DAW"
        ],
        specifications: [
          "64-bit processing",
          "Multi-core support",
          "GPU acceleration",
          "MIDI learn support"
        ]
      },
      {
        id: "incinerate-lite",
        title: "Incinerate Lite",
        description: "Powerful audio processing plugin for creating intense sound design effects",
        version: "1.0.1",
        downloads: 1567,
        formats: ["VST3", "AU"],
        size: "98 MB",
        category: "Effects",
        driveUrl: "https://drive.google.com/file/d/2def...uvw",
        imageUrl: "/images/products/plugins/incinerate-lite.jpg",
        features: [
          "Multi-stage distortion",
          "Filter section",
          "Modulation matrix",
          "Preset library"
        ],
        requirements: [
          "macOS 10.15 or later / Windows 10 or later",
          "4GB RAM minimum",
          "VST3 or AU compatible DAW"
        ],
        specifications: [
          "32-bit float processing",
          "Low CPU usage",
          "Scalable UI",
          "Parameter automation"
        ]
      },
      {
        id: "space-travel",
        title: "Space Travel",
        description: "Ambient sound design tool for creating atmospheric and spatial effects",
        version: "1.0.0",
        downloads: 890,
        formats: ["VST3", "AU"],
        size: "124 MB",
        category: "Effects",
        driveUrl: "https://drive.google.com/file/d/3ghi...rst",
        imageUrl: "/images/products/plugins/space-travel.jpg",
        features: [
          "Reverb engine",
          "Delay network",
          "Modulation effects",
          "Spatial processing"
        ],
        requirements: [
          "macOS 10.15 or later / Windows 10 or later",
          "4GB RAM minimum",
          "VST3 or AU compatible DAW"
        ],
        specifications: [
          "64-bit processing",
          "Parallel processing",
          "Custom algorithms",
          "Modular routing"
        ]
      }
    ]
  },
  templates: {
    title: "DAW Templates",
    description: "Professional project templates for various music genres and styles",
    items: [
      {
        id: "infinite-mellow",
        title: "Infinite Mellow",
        description: "A free instrument for Logic Pro X, offering mellow and ambient sounds",
        daw: "Logic Pro X",
        downloads: 1234,
        size: "450 MB",
        genre: "Ambient",
        driveUrl: "https://drive.google.com/file/d/4jkl...mno",
        imageUrl: "/images/products/templates/infinite-mellow.jpg",
        features: [
          "Ambient sound design",
          "Multiple articulations",
          "Custom effect chains",
          "Modulation options"
        ],
        requirements: [
          "Logic Pro X 10.5 or later",
          "8GB RAM recommended",
          "macOS 10.15 or later"
        ]
      },
      {
        id: "badman-bass",
        title: "Badman Bass",
        description: "A bass instrument tailored for Logic Pro, delivering robust and deep bass tones",
        daw: "Logic Pro",
        downloads: 987,
        size: "380 MB",
        genre: "Bass Music",
        driveUrl: "https://drive.google.com/file/d/5pqr...stu",
        imageUrl: "/images/products/templates/badman-bass.jpg",
        features: [
          "Deep bass tones",
          "Multiple bass types",
          "Processing chain",
          "MIDI patterns"
        ],
        requirements: [
          "Logic Pro X 10.5 or later",
          "8GB RAM recommended",
          "macOS 10.15 or later"
        ]
      },
      {
        id: "nomad-guitar",
        title: "Nomad Guitar",
        description: "Custom-made software sampler instrument featuring eclectic guitar sounds",
        daw: "Logic Pro X",
        downloads: 543,
        size: "480 MB",
        genre: "Guitar",
        driveUrl: "https://drive.google.com/file/d/6vwx...yza",
        imageUrl: "/images/products/templates/nomad-guitar.jpg",
        features: [
          "7-string guitar samples",
          "Multiple articulations",
          "Effect chains",
          "Performance controls"
        ],
        requirements: [
          "Logic Pro X 10.5 or later",
          "8GB RAM recommended",
          "macOS 10.15 or later"
        ]
      }
    ]
  }
};