const sharp = require('sharp');
const glob = require('glob');
const path = require('path');
const fs = require('fs').promises;

async function optimizeImages() {
  try {
    const images = glob.sync('public/assets/images/**/*.{jpg,png}');
    
    for (const image of images) {
      const outputWebP = image.replace(/\.(jpg|png)$/, '.webp');
      const outputDir = path.dirname(outputWebP);
      
      await fs.mkdir(outputDir, { recursive: true });
      
      await sharp(image)
        .webp({ quality: 75 })
        .toFile(outputWebP);
      
      // Create thumbnail
      const thumbnail = path.join(
        'public/assets/images/thumbnails',
        path.basename(outputWebP)
      );
      
      await fs.mkdir(path.dirname(thumbnail), { recursive: true });
      
      await sharp(image)
        .resize(400, 400, { fit: 'cover' })
        .webp({ quality: 75 })
        .toFile(thumbnail);
      
      console.log(`Optimized: ${image} → ${outputWebP}`);
      console.log(`Thumbnail: ${thumbnail}`);
    }
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();