const ffmpeg = require('fluent-ffmpeg');
const glob = require('glob');
const path = require('path');
const fs = require('fs').promises;

async function convertAudio() {
  try {
    const audioFiles = glob.sync('public/assets/audio/**/*.{wav,aiff}');
    
    for (const file of audioFiles) {
      const output = file.replace(/\.(wav|aiff)$/, '.mp3');
      const preview = output.replace(/\.mp3$/, '-preview.mp3');
      
      // Convert to MP3
      await new Promise((resolve, reject) => {
        ffmpeg(file)
          .audioBitrate(320)
          .toFormat('mp3')
          .on('end', resolve)
          .on('error', reject)
          .save(output);
      });
      
      // Create 30s preview
      await new Promise((resolve, reject) => {
        ffmpeg(output)
          .duration(30)
          .audioBitrate(192)
          .toFormat('mp3')
          .on('end', resolve)
          .on('error', reject)
          .save(preview);
      });
      
      console.log(`Converted: ${file} → ${output}`);
      console.log(`Preview: ${preview}`);
    }
  } catch (error) {
    console.error('Error converting audio:', error);
    process.exit(1);
  }
}

convertAudio();