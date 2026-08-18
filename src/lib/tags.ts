export const TRIP_CATEGORIES = ["nusantara", "global"] as const;
export const VIBE_TAGS = ["chill", "adventure", "content", "party", "family"] as const;
export const ADDON_TAGS = ["drone", "fotografer", "same-day-edit"] as const;

export type TripCategory = (typeof TRIP_CATEGORIES)[number];
export type VibeTag = (typeof VIBE_TAGS)[number];
export type AddonTag = (typeof ADDON_TAGS)[number];
