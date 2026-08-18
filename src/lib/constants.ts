import { FlowerLotus, Mountains, Camera, Confetti, UsersFour } from "@phosphor-icons/react";

export const VIBE_META = {
  chill: { icon: FlowerLotus, label: "Chill & Healing", color: "var(--color-vibe-chill)" },
  adventure: { icon: Mountains, label: "Adventure & Fisik Aktif", color: "var(--color-vibe-adventure)" },
  content: { icon: Camera, label: "Content Hunter", color: "var(--color-vibe-content)" },
  party: { icon: Confetti, label: "Party & Sosial", color: "var(--color-vibe-party)" },
  family: { icon: UsersFour, label: "Family Friendly", color: "var(--color-vibe-family)" },
} as const;

export const ADDON_META = {
  drone: { label: "Drone footage", price: "+Rp 150k/orang" },
  fotografer: { label: "Fotografer dedicated", price: "+Rp 200k/orang" },
  "same-day-edit": { label: "Same-day edit reel", price: "+Rp 100k/orang" },
} as const;
