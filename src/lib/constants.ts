import type { Icon } from "@phosphor-icons/react";
import { FlowerLotus, Mountains, Camera, Confetti, UsersFour } from "@phosphor-icons/react";
import type { VibeTag, AddonTag } from "./tags";

export const VIBE_META: Record<VibeTag, { icon: Icon; label: string; color: string }> = {
  chill: { icon: FlowerLotus, label: "Chill & Healing", color: "var(--color-vibe-chill)" },
  adventure: { icon: Mountains, label: "Adventure & Fisik Aktif", color: "var(--color-vibe-adventure)" },
  content: { icon: Camera, label: "Content Hunter", color: "var(--color-vibe-content)" },
  party: { icon: Confetti, label: "Party & Sosial", color: "var(--color-vibe-party)" },
  family: { icon: UsersFour, label: "Family Friendly", color: "var(--color-vibe-family)" },
};

export const ADDON_META: Record<AddonTag, { label: string; price: string }> = {
  drone: { label: "Drone footage", price: "+Rp 150k/orang" },
  fotografer: { label: "Fotografer dedicated", price: "+Rp 200k/orang" },
  "same-day-edit": { label: "Same-day edit reel", price: "+Rp 100k/orang" },
};
