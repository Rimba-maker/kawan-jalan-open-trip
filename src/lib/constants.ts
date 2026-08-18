export const VIBE_META = {
  chill: { emoji: "🧘", label: "Chill & Healing", color: "var(--color-vibe-chill)" },
  adventure: { emoji: "🥾", label: "Adventure & Fisik Aktif", color: "var(--color-vibe-adventure)" },
  content: { emoji: "📸", label: "Content Hunter", color: "var(--color-vibe-content)" },
  party: { emoji: "🎉", label: "Party & Sosial", color: "var(--color-vibe-party)" },
  family: { emoji: "👨‍👩‍👧", label: "Family Friendly", color: "var(--color-vibe-family)" },
} as const;

export const ADDON_META = {
  drone: { label: "Drone footage", price: "+Rp 150k/orang" },
  fotografer: { label: "Fotografer dedicated", price: "+Rp 200k/orang" },
  "same-day-edit": { label: "Same-day edit reel", price: "+Rp 100k/orang" },
} as const;
