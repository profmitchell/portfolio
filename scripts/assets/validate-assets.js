const glob = require('glob');
const path = require('path');
const fs = require('fs').promises;
const sharp = require('sharp');
const ffmpeg = require('fluent-ffmpeg');

async function validateAssets() {
  const errors = [];
  
  // Validate images
  const images = glob.sync('public/assets/images/**/*.{webp,jpg,png}');
  for (const image of images) {
    try {
      const metadata = await sharp(image).metadata();
      
      if (image.includes('/thumbnails/')) {
        if (metadata.width > 400 || metadata.height > 400) {
          errors.push(`Thumbnail too large: ${image}`);
        }
      } else if (!image.includes('/hero/')) {
        if (metadata.width > 1200 || metadata.height > 1200) {
          errors.push(`Image too large: ${image}`);
        }
      }
    } catch (error) {
      errors.push(`Invalid image: ${image}`);
    }
  }
  
  // Validate audio
  const audioFiles = glob.sync('public/assets/audio/**/*.mp3');
  for (const file of audioFiles) {
    try {
      await new Promise((resolve, reject) => {
        ffmpeg.ffprobe(file, (err, metadata) => {
          if (err) reject(err);
          
          const duration = metadata.format.duration;
          const bitrate = metadata.format.bit_rate;
          
          if (file.includes('-preview') && duration > 31) {
            errors.push(`Preview too long: ${file}`);
          }
          
          if (bitrate > 320000) {
            errors.push(`Bitrate too high: ${file}`);
          }
          
          resolve();
        });
      });
    } catch (error) {
      errors.push(`Invalid audio: ${file}`);
    }
  }
  
  if (errors.length > 0) {
    console.error('Asset validation failed:');
    errors.forEach(error => console.error(`- ${error}`));
    process.exit(1);
  } else {
    console.log('All assets validated successfully');
  }
}

validateAssets();