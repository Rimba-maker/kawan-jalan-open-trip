export interface Trip {
  id: string;
  title: string;
  category: "nusantara" | "global";
  viral: boolean;
  vibeTags: ("chill" | "adventure" | "content" | "party" | "family")[];
  dateStart: string;
  dateEnd: string;
  durationLabel: string;
  price: number;
  priceExcludes: string;
  slotFilled: number;
  slotTotal: number;
  images: string[];
  addons: ("drone" | "fotografer" | "same-day-edit")[];
}
