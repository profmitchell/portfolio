# Asset Management Guide

This directory contains all static assets for the website. Each asset type has its own directory with specific requirements and optimization guidelines.

## Directory Structure

```
assets/
├── audio/              # Audio files
│   ├── music/         # Full music tracks
│   ├── previews/      # 30-second previews
│   └── samples/       # Sound effects and samples
│
├── images/            # Image assets
│   ├── artwork/       # Digital art and illustrations
│   ├── photos/        # Photography
│   ├── thumbnails/    # Compressed thumbnails
│   └── ui/            # Interface elements
│
├── videos/            # Video content
│   ├── demos/         # Product demonstrations
│   ├── previews/      # Short previews
│   └── tutorials/     # Educational content
│
└── fonts/            # Typography assets
    ├── primary/      # Primary brand fonts
    └── secondary/    # Secondary/accent fonts
```

## Asset Requirements

### Audio Files
- Format: MP3 (320kbps) for music, WAV for samples
- Sample Rate: 44.1kHz
- Naming: `artist-title-type.mp3`
- Max Size: 15MB per track
- Include metadata (ID3 tags)

### Images
- Formats: WebP (primary), JPEG/PNG (fallback)
- Resolution: 
  - Thumbnails: 400x400px
  - Regular: 1200x1200px max
  - Hero: 1920x1080px
- Optimization: Compress all images
- Naming: `category-name-size.webp`

### Videos
- Format: MP4 (H.264)
- Resolution: 1080p max
- Bitrate: 8Mbps max
- Duration: 
  - Previews: 30s max
  - Tutorials: 10min max
- Include captions/subtitles

### Fonts
- Formats: WOFF2 (primary), WOFF (fallback)
- Include all weights needed
- Self-host critical fonts
- Use variable fonts when possible

## Adding New Assets

1. **Prepare the Asset**
   - Follow format requirements
   - Optimize for web delivery
   - Add required metadata

2. **Choose Location**
   - Place in appropriate directory
   - Create subdirectories if needed
   - Maintain hierarchy

3. **Update References**
   - Add to asset manifest
   - Update relevant components
   - Check responsive behavior

## Optimization Guidelines

### Images
```bash
# Optimize WebP
cwebp -q 75 input.png -o output.webp

# Create thumbnails
convert input.jpg -resize 400x400 thumbnail.jpg
```

### Audio
```bash
# Convert to MP3
ffmpeg -i input.wav -b:a 320k output.mp3

# Create preview
ffmpeg -i input.mp3 -t 30 preview.mp3
```

### Video
```bash
# Optimize MP4
ffmpeg -i input.mp4 -c:v h264 -b:v 8M output.mp4

# Create preview
ffmpeg -i input.mp4 -t 30 -c:v h264 preview.mp4
```

## Best Practices

1. **Version Control**
   - Use Git LFS for large files
   - Keep source files separate
   - Document asset versions

2. **Performance**
   - Lazy load non-critical assets
   - Use responsive images
   - Implement proper caching
   - Consider CDN delivery

3. **Accessibility**
   - Add alt text to images
   - Provide transcripts
   - Include captions
   - Test contrast ratios

4. **Maintenance**
   - Regular optimization audits
   - Remove unused assets
   - Update documentation
   - Monitor asset sizes

## Asset Manifest

Track assets in `asset-manifest.json`:

```json
{
  "images": {
    "logo": {
      "path": "/assets/images/ui/logo.webp",
      "sizes": ["64x64", "128x128"],
      "formats": ["webp", "png"]
    }
  },
  "audio": {
    "tracks": {
      "path": "/assets/audio/music/",
      "formats": ["mp3"],
      "metadata": true
    }
  }
}
```

## Scripts

Use provided utilities in `scripts/assets/`:
- `optimize-images.js`: Bulk image optimization
- `generate-thumbnails.js`: Create image thumbnails
- `convert-audio.js`: Audio format conversion
- `validate-assets.js`: Check asset requirements