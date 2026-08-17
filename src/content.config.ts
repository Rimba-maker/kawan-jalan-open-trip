import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const trips = defineCollection({
  loader: file("src/data/trips.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.enum(["nusantara", "global"]),
    viral: z.boolean(),
    vibeTags: z.array(
      z.enum(["chill", "adventure", "content", "party", "family"])
    ),
    dateStart: z.string(),
    dateEnd: z.string(),
    durationLabel: z.string(),
    price: z.number(),
    priceExcludes: z.string(),
    slotFilled: z.number(),
    slotTotal: z.number(),
    images: z.array(z.string()).min(1),
    addons: z.array(z.enum(["drone", "fotografer", "same-day-edit"])),
  }),
});

export const collections = { trips };
