const fs = require('fs');
const path = require('path');

const publicImagesPath = path.join(__dirname, 'public', 'images');
const accHistoryPath = path.join(publicImagesPath, 'acc_history');
const legacyPath = path.join(publicImagesPath, 'legacy');

const accHistoryFiles = fs.existsSync(accHistoryPath) ? fs.readdirSync(accHistoryPath).filter(f => f.match(/\.(jpg|jpeg|png|webp|JPG|JPEG|PNG)$/)) : [];
const legacyFiles = fs.existsSync(legacyPath) ? fs.readdirSync(legacyPath).filter(f => f.match(/\.(jpg|jpeg|png|webp|JPG|JPEG|PNG)$/)) : [];

const excludedRootFiles = [
  'logo.png', 'logo1.png', 
  'Olympic_winter_rings_without_rims.svg.webp', 
  'pexels-giantasparagus-35678274.jpg', 
  'somadi.jpg', 'soma.jpg', 
  'TheAthleteFactory.webp', 
  'track-field.jpg',
  'susmita.jpg', 'sanjay.jpg', 'rudra-pratim-roy.jpg', 'rudrapratimroy.jpg',
  'rudra-pratim-roy-bg.jpg', 'jump.jpeg', 'dronacharya-award.jpg', 'combined-event.jpg',
  '502752264_9586045524837189_7567083716543841592_n.jpg',
  '502661823_9586045534837188_4306523131140361400_n.jpg',
  '502467044_9586045364837205_720541060155550822_n.jpg'
];

// Root images and other folders for Modern Era and Recent Moments
const rootFiles = fs.existsSync(publicImagesPath) ? fs.readdirSync(publicImagesPath).filter(f => f.match(/\.(jpg|jpeg|png|webp|JPG|JPEG|PNG)$/) && !excludedRootFiles.includes(f)) : [];

const excludedDirs = ['acc_history', 'legacy', 'relay', 'paper-cuts', 'olympians', 'athletes', 'administration', 'achievements'];
const allItems = fs.existsSync(publicImagesPath) ? fs.readdirSync(publicImagesPath) : [];
const subdirs = allItems.filter(f => fs.statSync(path.join(publicImagesPath, f)).isDirectory() && !excludedDirs.includes(f));

let modernEraFiles = [];
for (const dir of subdirs) {
  const p = path.join(publicImagesPath, dir);
  if (fs.existsSync(p)) {
    const files = fs.readdirSync(p).filter(f => f.match(/\.(jpg|jpeg|png|webp|JPG|JPEG|PNG)$/));
    modernEraFiles = modernEraFiles.concat(files.map(f => `${dir}/${f}`));
  }
}

// Combine all media
let mediaArray = [];
let idCounter = 1;

function addMedia(url, zone) {
  mediaArray.push({
    id: `img_${idCounter++}`,
    imageUrl: `/images/${url}`,
    thumbnailUrl: `/images/${url}`,
    title: '',
    displayZones: [zone],
    displayOrder: idCounter,
    status: 'Published',
    createdAt: Date.now(),
    updatedAt: Date.now()
  });
}

// 1. The Beginning (legacy + specific old photos)
const beginningSpecific = ['1st-building.jpg', '1st-longjump-pit.jpg', 'old-group-photo.jpg', 'old-picnic.jpg', '1stpicnic.jpg', 'old-sports.jpg', 'old-training.jpg', 'old-highjump.jpg', 'old-lineup.jpg'];
for (const file of beginningSpecific) {
  if (accHistoryFiles.includes(file)) {
    addMedia(`acc_history/${file}`, 'TheBeginning');
  }
}

// 2. Then Vs Now (specific images)
// For Then vs Now we don't necessarily need it in data.ts if we hardcode the two images in the component, but let's add them to ThenVsNow
addMedia('acc_history/1st-acc.jpg', 'ThenVsNow');
addMedia('acc2.jpg', 'ThenVsNow');

const modernEraSpecific = ['IMG_2047.jpg', 'IMG_2087.jpg', '2000s-acc.jpg', '250.JPG'];

// 3. Hall Of Moments (rest of acc_history)
for (const file of accHistoryFiles) {
  if (!beginningSpecific.includes(file) && file !== '1st-acc.jpg' && !modernEraSpecific.includes(file)) {
    addMedia(`acc_history/${file}`, 'HallOfMoments');
  }
}

// 4. Modern Era (from subdirs and specific history files)
for (const file of modernEraFiles) {
  addMedia(file, 'ModernEra');
}
for (const file of modernEraSpecific) {
  if (accHistoryFiles.includes(file)) {
    addMedia(`acc_history/${file}`, 'ModernEra');
  }
}

// 5. Recent Moments (rest of root images)
for (const file of rootFiles) {
  if (file !== 'acc2.jpg') {
    addMedia(file, 'ModernEra');
  }
}
// Recent Moments left intentionally empty for dynamic panel later

const outputContent = `import { GalleryMedia, DisplayZone } from './types';

export const STATIC_GALLERY_MEDIA: GalleryMedia[] = ${JSON.stringify(mediaArray, null, 2)};

export function getMediaByZone(zone: DisplayZone): GalleryMedia[] {
  return STATIC_GALLERY_MEDIA.filter(m => m.displayZones?.includes(zone));
}
`;

fs.writeFileSync(path.join(__dirname, 'src', 'features', 'gallery', 'data.ts'), outputContent);
console.log('Successfully wrote data.ts');
