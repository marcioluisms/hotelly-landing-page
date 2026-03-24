const sharp = require('sharp');
const path = require('path');

async function processImage(filename, width, height) {
  const input = path.join(__dirname, 'public', filename);
  const ext = path.extname(filename);
  const output = path.join(__dirname, 'public', path.basename(filename, ext) + '.webp');
  
  try {
    await sharp(input)
      .resize(width, height)
      .webp()
      .toFile(output);
    console.log(`Processed ${filename} to ${output} (${width}x${height})`);
  } catch (err) {
    console.error(`Error processing ${filename}:`, err);
  }
}

async function main() {
  await processImage('hotelly-concierge.jpg', 662, 662);
  await processImage('icon.png', 105, 105);
  await processImage('hotelly.png', 219, 70);
}

main();
