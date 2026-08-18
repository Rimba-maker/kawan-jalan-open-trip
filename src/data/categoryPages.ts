import type { TripCategory } from "../lib/tags";
import type { Destination } from "../components/react/DestinationGrid";

interface CategoryPageContent {
  seo: { title: string; description: string; keywords: string; ogImageAlt: string };
  hero: { headline: string; subtext: string; heroImage: string; heroImageAlt: string };
  destinationsHeading: string;
  destinations: Destination[];
  inclusions: string[];
  excludesNote: string;
}

const BASE_INCLUSIONS = [
  "Transport PP dari meeting point",
  "Penginapan sesuai itinerary (share room)",
  "Makan sesuai jadwal (umumnya 2-3x/hari)",
  "Tiket masuk destinasi wisata",
  "Trip leader/guide berpengalaman",
  "Dokumentasi grup (foto bersama momen utama)",
  "Asuransi perjalanan dasar",
];

export const CATEGORY_PAGES: Record<TripCategory, CategoryPageContent> = {
  nusantara: {
    seo: {
      title: "Open Trip Nusantara - Bromo, Labuan Bajo, Dieng & Destinasi Viral | Kawan Jalan",
      description:
        "Open trip domestik ke Bromo, Labuan Bajo, Dieng, Svargabumi, dan destinasi viral lainnya. Harga cost-sharing terjangkau, gabung dengan solo traveler seru lainnya.",
      keywords:
        "open trip nusantara, open trip bromo, open trip labuan bajo, open trip dieng, wisata viral indonesia, solo traveler indonesia",
      ogImageAlt: "Foto grup traveler di destinasi domestik ikonik",
    },
    hero: {
      headline: "Liburan Gak Harus Nunggu Ada Teman Yang Bisa Ikut.",
      subtext:
        "Open trip dengan itinerary jelas dan harga terjangkau. Kamu bakal gabung dengan orang-orang seru yang jadi teman traveling seterusnya.",
      heroImage: "https://images.pexels.com/photos/33525676/pexels-photo-33525676.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1080&fit=crop",
      heroImageAlt: "Grup traveler duduk bersama menikmati matahari terbit di Bromo",
    },
    destinationsHeading: "Destinasi Favorit Kawan Jalan",
    destinations: [
      { name: "Bromo", image: "https://images.pexels.com/photos/34390984/pexels-photo-34390984.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Labuan Bajo", image: "https://images.pexels.com/photos/37875517/pexels-photo-37875517.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Dieng", image: "https://images.pexels.com/photos/37701936/pexels-photo-37701936.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Nusa Penida", image: "https://images.pexels.com/photos/8332573/pexels-photo-8332573.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Karimunjawa", image: "https://images.pexels.com/photos/35649388/pexels-photo-35649388.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Raja Ampat", image: "https://images.pexels.com/photos/37424253/pexels-photo-37424253.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Toba", image: "https://images.pexels.com/photos/35985703/pexels-photo-35985703.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Sumba", image: "https://images.pexels.com/photos/31987427/pexels-photo-31987427.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Svargabumi Borobudur", image: "https://images.pexels.com/photos/10804635/pexels-photo-10804635.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Pulau Padar", image: "https://images.pexels.com/photos/28535883/pexels-photo-28535883.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Kawah Putih Ciwidey", image: "https://images.pexels.com/photos/30028410/pexels-photo-30028410.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Taman Nasional Baluran", image: "https://images.pexels.com/photos/4587721/pexels-photo-4587721.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
    ],
    inclusions: BASE_INCLUSIONS,
    excludesNote: "Tidak termasuk: pengeluaran pribadi, tiket pesawat menuju kota keberangkatan (kecuali disebutkan khusus)",
  },
  global: {
    seo: {
      title: "Open Trip Global - Jepang, Vietnam, Malaysia | Kawan Jalan",
      description:
        "Open trip luar negeri ke Jepang, Vietnam, Malaysia bareng traveler Indonesia lainnya. Itinerary matang, harga cost-sharing, teman baru di setiap negara.",
      keywords:
        "open trip luar negeri, open trip jepang, open trip vietnam, open trip malaysia, solo traveler internasional, trip luar negeri murah",
      ogImageAlt: "Foto grup traveler di destinasi internasional ikonik",
    },
    hero: {
      headline: "Liburan ke Luar Negeri, Tapi Gak Sendirian.",
      subtext:
        "Jepang, Vietnam, Malaysia sudah ada itinerary lengkap. Kamu berangkat bareng traveler Indonesia lain yang sama-sama excited jalan-jalan ke luar negeri.",
      heroImage: "https://images.pexels.com/photos/35100545/pexels-photo-35100545.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1080&fit=crop",
      heroImageAlt: "Grup traveler Indonesia berfoto bersama di depan Gunung Fuji",
    },
    destinationsHeading: "Destinasi Favorit Kawan Jalan Global",
    destinations: [
      { name: "Kuala Lumpur", image: "https://images.pexels.com/photos/30575600/pexels-photo-30575600.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Genting Highlands", image: "https://images.pexels.com/photos/8267248/pexels-photo-8267248.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Ha Long Bay", image: "https://images.pexels.com/photos/7276811/pexels-photo-7276811.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Tokyo", image: "https://images.pexels.com/photos/35072455/pexels-photo-35072455.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Kyoto", image: "https://images.pexels.com/photos/38470246/pexels-photo-38470246.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
      { name: "Gunung Fuji", image: "https://images.pexels.com/photos/33341847/pexels-photo-33341847.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" },
    ],
    inclusions: [
      ...BASE_INCLUSIONS,
      "Pendampingan dokumen perjalanan (asistensi info visa, bukan pengurusan visa penuh)",
    ],
    excludesNote:
      "Tidak termasuk: pengeluaran pribadi, tiket pesawat internasional PP, visa (kecuali disebutkan khusus per trip, lihat disclaimer di tiap trip card)",
  },
};
