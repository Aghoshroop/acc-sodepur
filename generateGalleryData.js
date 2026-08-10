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
  'track-field.jpg'
];

// Root images and other folders for Modern Era and Recent Moments
const rootFiles = fs.existsSync(publicImagesPath) ? fs.readdirSync(publicImagesPath).filter(f => f.match(/\.(jpg|jpeg|png|webp|JPG|JPEG|PNG)$/) && !excludedRootFiles.includes(f)) : [];
const subdirs = ['campus', 'facilities', 'performance', 'state-performance', 'sponsors', 'olympians', 'honoured guest'];
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

// 3. Hall Of Moments (rest of acc_history)
for (const file of accHistoryFiles) {
  if (!beginningSpecific.includes(file) && file !== '1st-acc.jpg') {
    addMedia(`acc_history/${file}`, 'HallOfMoments');
  }
}

// 4. Modern Era (from subdirs)
for (const file of modernEraFiles) {
  addMedia(file, 'ModernEra');
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
