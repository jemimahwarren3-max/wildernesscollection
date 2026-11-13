// Curated photography sourced from Pexels (free-to-use licence).
// Each entry resolves to a stable images.pexels.com CDN URL.
function pexels(id: number, w = 1920) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

export const images = {
  heroSunset: { src: pexels(39455718, 2400), alt: "Vivid sunset colours over the African savannah" },
  elephantSilhouette: { src: pexels(5125390), alt: "Elephant silhouette by a riverbank at sunset" },
  antelopeHerd: { src: pexels(39464976), alt: "Antelope herd at sunset in Botswana's savannah" },
  acaciaTree: { src: pexels(28388503), alt: "Acacia tree silhouetted against a savannah sunset" },
  elephantHerd: { src: pexels(26999484), alt: "Herd of African elephants in a Kenyan national park" },
  elephantRiver: { src: pexels(26990517), alt: "Lone African elephant beside a river in a wildlife reserve" },
  elephantPortrait: { src: pexels(1054672), alt: "Close-up portrait of an African elephant at sunset, Zambia" },
  victoriaFallsAerial: { src: pexels(27878404), alt: "Aerial view of Victoria Falls, Zimbabwe" },
  victoriaFallsRainbow: { src: pexels(16241872), alt: "Rainbow arching over Victoria Falls" },
  victoriaFallsFlow: { src: pexels(757142), alt: "The powerful flow of Victoria Falls, Zimbabwe" },
  lionsResting: { src: pexels(27462254), alt: "Two lions resting in the Serengeti grassland at sunset" },
  lionRoaring: { src: pexels(6404786), alt: "Male lion roaring in South African grassland" },
  infinityPool: { src: pexels(18310406), alt: "Infinity pool with panoramic views at dusk" },
  infinityPoolAerial: { src: pexels(8414476), alt: "Aerial view of an infinity pool surrounded by wilderness" },
  poolEvening: { src: pexels(6129987), alt: "A tranquil lodge pool with wooden structures at dusk" },
  diningCandlelit: { src: pexels(21775093), alt: "Waterfront candlelit dinner with a gourmet meal and wine" },
  diningUnderTree: { src: pexels(11025241), alt: "Dinner table under a tree with warm ambient lighting" },
  lodgePatio: { src: pexels(37790193), alt: "Luxury outdoor patio at a modern safari lodge" },
  lodgeExterior: { src: pexels(39177624), alt: "Guest outside a safari lodge in East Africa" },
  lodgeAerial: { src: pexels(35831683), alt: "Aerial view of an eco lodge surrounded by lush greenery" },
  bedroomCozy: { src: pexels(35772450), alt: "Cozy lodge bedroom with natural tones and textures" },
  bedroomSuite: { src: pexels(17831034), alt: "Beds in a tented suite bedroom" },
  zebraHerd: { src: pexels(5527460), alt: "Zebra herd running across the Serengeti" },
  zebraStride: { src: pexels(787695), alt: "A zebra in full stride through the grass" },
} as const;

export type ImageKey = keyof typeof images;

// Cinematic background footage, sourced from Pexels (free-to-use licence).
export const videos = {
  heroAerialSunset: {
    src: "https://videos.pexels.com/video-files/33660432/14301866_2560_1440_24fps.mp4",
    poster: images.heroSunset.src,
  },
  elephantAerial: {
    src: "https://videos.pexels.com/video-files/33660365/14301734_2560_1440_24fps.mp4",
    poster: images.elephantHerd.src,
  },
  savannahAerial: {
    src: "https://videos.pexels.com/video-files/33660361/14301787_2560_1440_24fps.mp4",
    poster: images.acaciaTree.src,
  },
  zebraRunning: {
    src: "https://videos.pexels.com/video-files/6168935/6168935-uhd_2560_1440_30fps.mp4",
    poster: images.zebraHerd.src,
  },
  victoriaFalls: {
    src: "https://videos.pexels.com/video-files/40467354/17293771_1920_1080_30fps.mp4",
    poster: images.victoriaFallsRainbow.src,
  },
  lionWalking: {
    src: "https://videos.pexels.com/video-files/853900/853900-hd_1920_1080_25fps.mp4",
    poster: images.lionRoaring.src,
  },
  giraffeGrazing: {
    src: "https://videos.pexels.com/video-files/19806861/19806861-uhd_2560_1440_60fps.mp4",
    poster: images.elephantHerd.src,
  },
} as const;

export type VideoKey = keyof typeof videos;
