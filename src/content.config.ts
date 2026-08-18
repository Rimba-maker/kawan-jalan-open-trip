import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";
import { TRIP_CATEGORIES, VIBE_TAGS, ADDON_TAGS } from "./lib/tags";

const tripSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.enum(TRIP_CATEGORIES),
  viral: z.boolean(),
  vibeTags: z.array(z.enum(VIBE_TAGS)),
  dateStart: z.string(),
  dateEnd: z.string(),
  durationLabel: z.string(),
  price: z.number(),
  priceExcludes: z.string(),
  slotFilled: z.number(),
  slotTotal: z.number(),
  images: z.array(z.string()).min(1),
  addons: z.array(z.enum(ADDON_TAGS)),
});

const trips = defineCollection({
  loader: file("src/data/trips.json"),
  schema: tripSchema,
});

export const collections = { trips };
export type Trip = z.infer<typeof tripSchema>;
