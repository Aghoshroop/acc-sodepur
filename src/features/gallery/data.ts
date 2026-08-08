import { GalleryMedia } from './types';

const createMockMedia = (
  id: string,
  imageUrl: string,
  title: string,
  overrides: Partial<GalleryMedia>
): GalleryMedia => ({
  id,
  imageUrl,
  thumbnailUrl: imageUrl,
  title,
  displayZones: [],
  displayOrder: 0,
  status: 'Published',
  createdAt: Date.now(),
  updatedAt: Date.now(),
  ...overrides,
});

export const STATIC_GALLERY_MEDIA: GalleryMedia[] = [
  createMockMedia('img_0', '/images/acc_history/old-highjump.jpg', 'Training Session', {
    era: 'Founding Era',
    year: 1960,
    displayZones: ["Timeline","Hero"],
  }),
  createMockMedia('img_1', '/images/acc_history/103.jpg', 'Historic Moment', {
    era: 'Golden Era',
    year: 1961,
    displayZones: ["MemoryCorridor"],
  }),
  createMockMedia('img_2', '/images/acc_history/105.jpg', 'Track Event', {
    era: 'Expansion Era',
    year: 1962,
    displayZones: ["HallOfMoments"],
  }),
  createMockMedia('img_3', '/images/acc_history/106.jpg', 'Team Gathering', {
    era: 'Founding Era',
    year: 1963,
    displayZones: ["LegacyWall"],
  }),
  createMockMedia('img_4', '/images/acc_history/107.jpg', 'Team Gathering', {
    era: 'Golden Era',
    year: 1964,
    displayZones: ["Timeline"],
  }),
  createMockMedia('img_5', '/images/acc_history/108.jpg', 'Championship Run', {
    era: 'Expansion Era',
    year: 1965,
    displayZones: ["MemoryCorridor"],
  }),
  createMockMedia('img_6', '/images/acc_history/113.jpg', 'Training Session', {
    era: 'Founding Era',
    year: 1966,
    displayZones: ["HallOfMoments"],
  }),
  createMockMedia('img_7', '/images/acc_history/114.jpg', 'Coaching Session', {
    era: 'Golden Era',
    year: 1967,
    displayZones: ["LegacyWall"],
  }),
  createMockMedia('img_8', '/images/acc_history/116.jpg', 'Training Session', {
    era: 'Expansion Era',
    year: 1968,
    displayZones: ["Timeline"],
  }),
  createMockMedia('img_9', '/images/acc_history/117.jpg', 'Morning Practice', {
    era: 'Founding Era',
    year: 1969,
    displayZones: ["MemoryCorridor"],
  }),
  createMockMedia('img_10', '/images/acc_history/1st-acc.jpg', 'Athletic Meet', {
    era: 'Golden Era',
    year: 1970,
    displayZones: ["HallOfMoments"],
  }),
  createMockMedia('img_11', '/images/acc_history/1st-building.jpg', 'Historic Moment', {
    era: 'Expansion Era',
    year: 1971,
    displayZones: ["LegacyWall"],
  }),
  createMockMedia('img_12', '/images/acc_history/1st-longjump-pit.jpg', 'Historic Moment', {
    era: 'Founding Era',
    year: 1972,
    displayZones: ["Timeline"],
  }),
  createMockMedia('img_13', '/images/acc_history/1stpicnic.jpg', 'Training Session', {
    era: 'Golden Era',
    year: 1973,
    displayZones: ["MemoryCorridor"],
  }),
  createMockMedia('img_14', '/images/acc_history/2000s-acc.jpg', 'Team Gathering', {
    era: 'Modern Era',
    year: 2014,
    displayZones: ["FilmStrip"],
  }),
  createMockMedia('img_15', '/images/acc_history/250.JPG', 'Team Gathering', {
    era: 'Founding Era',
    year: 1975,
    displayZones: ["LegacyWall"],
  }),
  createMockMedia('img_16', '/images/acc_history/26.jpg', 'Coaching Session', {
    era: 'Golden Era',
    year: 1976,
    displayZones: ["Timeline"],
  }),
  createMockMedia('img_17', '/images/acc_history/28.jpg', 'Morning Practice', {
    era: 'Expansion Era',
    year: 1977,
    displayZones: ["MemoryCorridor"],
  }),
  createMockMedia('img_18', '/images/acc_history/29.jpg', 'Historic Moment', {
    era: 'Founding Era',
    year: 1978,
    displayZones: ["HallOfMoments"],
  }),
  createMockMedia('img_19', '/images/acc_history/32.jpg', 'Coaching Session', {
    era: 'Golden Era',
    year: 1979,
    displayZones: ["LegacyWall"],
  }),
  createMockMedia('img_20', '/images/acc_history/34.jpg', 'Team Gathering', {
    era: 'Expansion Era',
    year: 1980,
    displayZones: ["Timeline"],
  }),
  createMockMedia('img_21', '/images/acc_history/63.jpg', 'Coaching Session', {
    era: 'Founding Era',
    year: 1981,
    displayZones: ["MemoryCorridor"],
  }),
  createMockMedia('img_22', '/images/acc_history/67.jpg', 'Athletic Meet', {
    era: 'Golden Era',
    year: 1982,
    displayZones: ["HallOfMoments"],
  }),
  createMockMedia('img_23', '/images/acc_history/70.jpg', 'Team Gathering', {
    era: 'Expansion Era',
    year: 1983,
    displayZones: ["LegacyWall"],
  }),
  createMockMedia('img_24', '/images/acc_history/71.jpg', 'Campus Memories', {
    era: 'Founding Era',
    year: 1984,
    displayZones: ["Timeline"],
  }),
  createMockMedia('img_25', '/images/acc_history/72.jpg', 'Morning Practice', {
    era: 'Golden Era',
    year: 1985,
    displayZones: ["MemoryCorridor"],
  }),
  createMockMedia('img_26', '/images/acc_history/74.jpg', 'Track Event', {
    era: 'Expansion Era',
    year: 1986,
    displayZones: ["HallOfMoments"],
  }),
  createMockMedia('img_27', '/images/acc_history/91.jpg', 'Historic Moment', {
    era: 'Founding Era',
    year: 1987,
    displayZones: ["LegacyWall"],
  }),
  createMockMedia('img_28', '/images/acc_history/94.jpg', 'Championship Run', {
    era: 'Golden Era',
    year: 1988,
    displayZones: ["Timeline"],
  }),
  createMockMedia('img_29', '/images/acc_history/95.jpg', 'Athletic Meet', {
    era: 'Expansion Era',
    year: 1989,
    displayZones: ["MemoryCorridor"],
  }),
  createMockMedia('img_30', '/images/acc_history/97.jpg', 'Field Event', {
    era: 'Founding Era',
    year: 1990,
    displayZones: ["HallOfMoments"],
  }),
  createMockMedia('img_31', '/images/acc_history/98.jpg', 'Track Event', {
    era: 'Golden Era',
    year: 1991,
    displayZones: ["LegacyWall"],
  }),
  createMockMedia('img_32', '/images/acc_history/building.jpg', 'Building', {
    era: 'Expansion Era',
    year: 1992,
    displayZones: ["Timeline"],
  }),
  createMockMedia('img_33', '/images/acc_history/C0014T01.jpg', 'Championship Run', {
    era: 'Founding Era',
    year: 1993,
    displayZones: ["MemoryCorridor"],
  }),
  createMockMedia('img_34', '/images/acc_history/C0024T01.jpg', 'Team Gathering', {
    era: 'Golden Era',
    year: 1994,
    displayZones: ["HallOfMoments"],
  }),
  createMockMedia('img_35', '/images/acc_history/C0029T01.jpg', 'Field Event', {
    era: 'Expansion Era',
    year: 1995,
    displayZones: ["LegacyWall"],
  }),
  createMockMedia('img_36', '/images/acc_history/dronacharya.png', 'Dronacharya', {
    era: 'Founding Era',
    year: 1996,
    displayZones: ["Timeline"],
  }),
  createMockMedia('img_37', '/images/acc_history/DSC_0007.JPG', 'Training Session', {
    era: 'Modern Era',
    year: 2012,
    displayZones: ["ModernACC"],
  }),
  createMockMedia('img_38', '/images/acc_history/DSC_0083.JPG', 'Training Session', {
    era: 'Modern Era',
    year: 2013,
    displayZones: ["FilmStrip"],
  }),
  createMockMedia('img_39', '/images/acc_history/hurdles-old.jpg', 'Hurdles Old', {
    era: 'Founding Era',
    year: 1999,
    displayZones: ["LegacyWall"],
  }),
  createMockMedia('img_40', '/images/acc_history/IMG_2014.jpg', 'Athletic Meet', {
    era: 'Modern Era',
    year: 2015,
    displayZones: ["FilmStrip"],
  }),
  createMockMedia('img_41', '/images/acc_history/IMG_2047.jpg', 'Training Session', {
    era: 'Modern Era',
    year: 2016,
    displayZones: ["ModernACC"],
  }),
  createMockMedia('img_42', '/images/acc_history/IMG_2087.jpg', 'Field Event', {
    era: 'Modern Era',
    year: 2017,
    displayZones: ["FilmStrip","HallOfMoments"],
  }),
  createMockMedia('img_43', '/images/acc_history/IMG_2093.jpg', 'Field Event', {
    era: 'Modern Era',
    year: 2018,
    displayZones: ["ModernACC"],
  }),
  createMockMedia('img_44', '/images/acc_history/IMG_2110.jpg', 'Morning Practice', {
    era: 'Modern Era',
    year: 2019,
    displayZones: ["FilmStrip"],
  }),
  createMockMedia('img_45', '/images/acc_history/IMG_2113.jpg', 'Track Event', {
    era: 'Modern Era',
    year: 2020,
    displayZones: ["ModernACC","HallOfMoments"],
  }),
  createMockMedia('img_46', '/images/acc_history/IMG_2135.jpg', 'Historic Moment', {
    era: 'Modern Era',
    year: 2021,
    displayZones: ["FilmStrip"],
  }),
  createMockMedia('img_47', '/images/acc_history/IMG_2149.jpg', 'Campus Memories', {
    era: 'Modern Era',
    year: 2022,
    displayZones: ["ModernACC"],
  }),
  createMockMedia('img_48', '/images/acc_history/IMG_2173.jpg', 'Coaching Session', {
    era: 'Modern Era',
    year: 2023,
    displayZones: ["FilmStrip","HallOfMoments"],
  }),
  createMockMedia('img_49', '/images/acc_history/IMG_2222.jpg', 'Training Session', {
    era: 'Modern Era',
    year: 2024,
    displayZones: ["ModernACC"],
  }),
  createMockMedia('img_50', '/images/acc_history/IMG_2317.jpg', 'Athletic Meet', {
    era: 'Modern Era',
    year: 2000,
    displayZones: ["FilmStrip"],
  }),
  createMockMedia('img_51', '/images/acc_history/IMG_2323.jpg', 'Training Session', {
    era: 'Modern Era',
    year: 2001,
    displayZones: ["ModernACC","HallOfMoments"],
  }),
  createMockMedia('img_52', '/images/acc_history/IMG_2329.jpg', 'Coaching Session', {
    era: 'Modern Era',
    year: 2002,
    displayZones: ["FilmStrip"],
  }),
  createMockMedia('img_53', '/images/acc_history/IMG_2332.jpg', 'Track Event', {
    era: 'Modern Era',
    year: 2003,
    displayZones: ["ModernACC"],
  }),
  createMockMedia('img_54', '/images/acc_history/IMG_2355.jpg', 'Morning Practice', {
    era: 'Modern Era',
    year: 2004,
    displayZones: ["FilmStrip","HallOfMoments"],
  }),
  createMockMedia('img_55', '/images/acc_history/IMG_2394.jpg', 'Field Event', {
    era: 'Modern Era',
    year: 2005,
    displayZones: ["ModernACC"],
  }),
  createMockMedia('img_56', '/images/acc_history/IMG_2689.jpg', 'Morning Practice', {
    era: 'Modern Era',
    year: 2006,
    displayZones: ["FilmStrip"],
  }),
  createMockMedia('img_57', '/images/acc_history/IMG_7831.JPG', 'Team Gathering', {
    era: 'Modern Era',
    year: 2007,
    displayZones: ["ModernACC","HallOfMoments"],
  }),
  createMockMedia('img_58', '/images/acc_history/ol-annual-sports.jpg', 'Ol Annual Sports', {
    era: 'Golden Era',
    year: 1978,
    displayZones: ["HallOfMoments"],
  }),
  createMockMedia('img_59', '/images/acc_history/old-group-photo.jpg', 'Old Group Photo', {
    era: 'Expansion Era',
    year: 1979,
    displayZones: ["LegacyWall"],
  }),
  createMockMedia('img_60', '/images/acc_history/old-highjump.jpg', 'Old Highjump', {
    era: 'Founding Era',
    year: 1980,
    displayZones: ["Timeline"],
  }),
  createMockMedia('img_61', '/images/acc_history/old-lineup.jpg', 'Old Lineup', {
    era: 'Golden Era',
    year: 1981,
    displayZones: ["MemoryCorridor"],
  }),
  createMockMedia('img_62', '/images/acc_history/old-picnic.jpg', 'Old Picnic', {
    era: 'Expansion Era',
    year: 1982,
    displayZones: ["HallOfMoments"],
  }),
  createMockMedia('img_63', '/images/acc_history/old-sports.jpg', 'Old Sports', {
    era: 'Founding Era',
    year: 1983,
    displayZones: ["LegacyWall"],
  }),
  createMockMedia('img_64', '/images/acc_history/old-training.jpg', 'Old Training', {
    era: 'Golden Era',
    year: 1984,
    displayZones: ["Timeline"],
  }),

  // --- THEN VS NOW (Comparison Pairs) ---
  createMockMedia('then_1', '/images/acc_history/1st-longjump-pit.jpg', 'Old Ground', {
    era: 'Founding Era',
    year: 1970,
    displayZones: [],
    comparisonPairId: 'ground_comparison',
  }),
  createMockMedia('now_1', '/images/synthetic.jpg', 'New Synthetic Track', {
    era: 'Modern Era',
    year: 2024,
    displayZones: [],
    comparisonPairId: 'ground_comparison',
  }),
];

// Utility to fetch based on zone
export const getMediaByZone = (zone: GalleryMedia['displayZones'][0]) => {
  return STATIC_GALLERY_MEDIA.filter(media => media.displayZones.includes(zone));
};

// Utility to get Comparison Pairs
export const getComparisonPairs = () => {
  const pairs: Record<string, { old?: GalleryMedia, new?: GalleryMedia }> = {};
  
  STATIC_GALLERY_MEDIA.forEach(media => {
    if (media.comparisonPairId) {
      if (!pairs[media.comparisonPairId]) {
        pairs[media.comparisonPairId] = {};
      }
      if (media.era === 'Founding Era' || media.era === 'Golden Era' || media.year! < 2000) {
        pairs[media.comparisonPairId].old = media;
      } else {
        pairs[media.comparisonPairId].new = media;
      }
    }
  });
  
  return Object.values(pairs).filter(p => p.old && p.new);
};
