const CLOUDINARY_CLOUD_NAME = 'sgtiseox';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;

export interface CloudinaryOptions {
  width?: number;
  height?: number;
  crop?: string;
}

/**
 * Returns an optimized Cloudinary URL for a given public ID.
 * Automatically applies f_auto (format) and q_auto (quality).
 */
export function getCloudinaryUrl(publicId: string, options: CloudinaryOptions = {}) {
  if (!publicId) return '';

  const crop = options.crop || 'fill';
  let transformations = `f_auto,q_auto,c_${crop}`;
  
  if (options.width) transformations += `,w_${options.width}`;
  if (options.height) transformations += `,h_${options.height}`;

  // Ensure publicId doesn't have leading slash
  const cleanPublicId = publicId.startsWith('/') ? publicId.slice(1) : publicId;

  return `${CLOUDINARY_BASE_URL}/${transformations}/${cleanPublicId}`;
}

// ==========================================
// CENTRALIZED IMAGE ASSET MAP
// ==========================================
// All Cloudinary public IDs (without file extensions)

export const NEW_AMBIENCE_CAROUSEL = "scarlett-house/ambience/ybchbhmdktfgylifh8nl";
export const NEW_EXPERIENCES_SET_MENU = "scarlett-house/experiences/o4tuxevzrupjk7bgujkx";
export const EXP_WINE_CHEESE = "scarlett-house/experiences/prmjverc5bsffiqnaajt";
export const EXP_BUGGIE = "scarlett-house/experiences/cbg758vyiqct6tnyszg6";
export const EXP_DELIVERIES = "scarlett-house/experiences/oldetf9yrpgck5mqnbm6";
export const EXP_ATTIC = "scarlett-house/ambience/nipbu1ajseszrzzzqpaw";
export const EXP_BRUNCH = "scarlett-house/experiences/sf8d5e7jyomwjzuuhi1w";

export const EAT_AT_SCARLETT = "scarlett-house/eat-drink/q2m1bj8i9liegitp7hdp";
export const VIEW_FOOD_MENU = "scarlett-house/eat-drink/rdeigxbau6rad1zveyh9";
export const DRINK_AT_SCARLETT = "scarlett-house/eat-drink/f72h6ghycbgsw4gandnw";
export const VIEW_DRINK_MENU = "scarlett-house/eat-drink/nskjkdfy6vlfzqta9x6z";

export const AMBIENCE = [
  "scarlett-house/ambience/RMS03674",
  "scarlett-house/ambience/RMS03694",
  "scarlett-house/ambience/RMS03723",
  "scarlett-house/ambience/RMS03737",
  "scarlett-house/ambience/RMS03768",
  "scarlett-house/ambience/RMS03784",
  "scarlett-house/ambience/RMS03807",
  "scarlett-house/ambience/RMS03827",
  "scarlett-house/ambience/RMS03841",
  "scarlett-house/ambience/RMS03858",
  "scarlett-house/ambience/RMS03876_1",
  "scarlett-house/ambience/RMS03940",
  "scarlett-house/ambience/RMS03985",
  "scarlett-house/ambience/RMS03996",
  "scarlett-house/ambience/RMS04010",
  "scarlett-house/ambience/RMS04045",
  "scarlett-house/ambience/RMS04066",
  "scarlett-house/ambience/RMS04072",
  "scarlett-house/ambience/RMS04090",
  "scarlett-house/ambience/RMS04118",
  "scarlett-house/ambience/SH_Ambience_AtticBar",
  "scarlett-house/ambience/SH_Ambience_Attic_1",
  "scarlett-house/ambience/SH_Ambience_Attic_2",
  "scarlett-house/ambience/SH_Ambience_Redroom_1",
  "scarlett-house/ambience/SH_Ambience_Redroom_2"
];

const FOOD = [
  "scarlett-house/food/IMG_3925",
  "scarlett-house/food/IMG_3926",
  "scarlett-house/food/IMG_3929",
  "scarlett-house/food/IMG_3930"
];

const DRINKS = [
  "scarlett-house/drinks/Bandra_Babe",
  "scarlett-house/drinks/First_Jobbers_Vent_Out_Session_",
  "scarlett-house/drinks/First_Kiss",
  "scarlett-house/drinks/First_Monsoon_Bus_Ride",
  "scarlett-house/drinks/First_Puff",
  "scarlett-house/drinks/IMG_3927",
  "scarlett-house/drinks/IMG_3928",
  "scarlett-house/drinks/Inspiration",
  "scarlett-house/drinks/Monsoon_Bus_Ride",
  "scarlett-house/drinks/Nostalgia_2.0"
];

export const ImageMap = {
  // Hero: Only Hero folder (Fallback to curated Ambience if missing)
  hero: [
    AMBIENCE[23], // SH_Ambience_Redroom_1
    AMBIENCE[24], // SH_Ambience_Redroom_2
    AMBIENCE[20], // SH_Ambience_AtticBar
  ],
  
  // Intro: Only Ambience
  intro: [
    AMBIENCE[0] // RMS03674
  ],
  
  // Locations
  locations: {
    bandra: AMBIENCE[1], // RMS03694 (using as fallback)
    juhu: AMBIENCE[2], // RMS03723 (using as fallback)
  },
  
  // Eat & Drink (Exclusive)
  eat: FOOD,
  drink: DRINKS,
  
  // Carousel: Mix of all three
  carousel: [
    AMBIENCE[14],
    AMBIENCE[21],
    NEW_AMBIENCE_CAROUSEL
  ],
  
  // Spaces: Mostly ambience
  spaces: [
    AMBIENCE[10], // RMS03876_1
    AMBIENCE[11], // RMS03940
  ],
  
  // Parties: Parties folder (Fallback to ambience)
  parties: [
    AMBIENCE[12] // RMS03985
  ],
  
  // Experiences: Matching folder (Fallback to ambience)
  experiences: [
    AMBIENCE[13] // RMS03996
  ]
};

// Helper for selecting random items when necessary (e.g. Carousel)
export function getRandomItems<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}
