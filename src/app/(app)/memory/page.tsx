import fs from 'fs';
import path from 'path';
import MemoryClient from './MemoryClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Memory | Athletic Coaching Camp',
  description: 'The living museum of Athletic Coaching Camp. Discover over five decades of history.',
};

function getAllImages(dirPath: string, arrayOfFiles: string[] = []) {
  try {
    const files = fs.readdirSync(dirPath);

    files.forEach(function(file) {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = getAllImages(fullPath, arrayOfFiles);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
          const normalizedPath = fullPath.replace(/\\/g, '/');
          const publicIndex = normalizedPath.indexOf('/public/images/');
          if (publicIndex !== -1) {
            const urlPath = normalizedPath.substring(publicIndex + 7);
            arrayOfFiles.push(urlPath);
          } else if (normalizedPath.includes('/public/')) {
             const idx = normalizedPath.indexOf('/public/');
             arrayOfFiles.push(normalizedPath.substring(idx + 7));
          }
        }
      }
    });
  } catch (error) {
    console.error("Error reading image directory:", error);
  }

  return arrayOfFiles;
}

export default function MemoryPage() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  let images: string[] = [];
  
  if (fs.existsSync(imagesDir)) {
    images = getAllImages(imagesDir);
  }
  
  // Shuffle at build time.
  const shuffledImages = [...images].sort(() => 0.5 - Math.random());

  return <MemoryClient images={shuffledImages} />;
}
