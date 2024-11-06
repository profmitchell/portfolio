const sharp = require('sharp');
const glob = require('glob');
const path = require('path');
const fs = require('fs').promises;

async function generateThumbnails() {
  try {
    const images = glob.sync('public/assets/images/**/*.{webp,jpg,png}');
    
    for (const image of images) {
      if (image.includes('/thumbnails/')) continue;
      
      const thumbnail = path.join(
        'public/assets/images/thumbnails',
        path.basename(image)
      );
      
      await fs.mkdir(path.dirname(thumbnail), { recursive: true });
      
      await sharp(image)
        .resize(400, 400, { fit: 'cover' })
        .webp({ quality: 75 })
        .toFile(thumbnail);
      
      console.log(`Generated thumbnail: ${thumbnail}`);
    }
  } catch (error) {
    console.error('Error generating thumbnails:', error);
    process.exit(1);
  }
}

generateThumbnails();