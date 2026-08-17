import { motion, useReducedMotion } from "framer-motion";

const REASONS = [
  {
    emoji: "👥",
    title: "Gak Perlu Nunggu Teman Available",
    body: "Semua orang di grup juga berangkat sendiri. Kamu tidak akan jadi satu-satunya solo traveler yang canggung.",
  },
  {
    emoji: "💰",
    title: "Harga Lebih Terjangkau",
    body: "Biaya transport, penginapan, dan guide dibagi rata dengan peserta lain. Liburan seru tanpa bikin dompet nangis.",
  },
  {
    emoji: "📋",
    title: "Itinerary Sudah Matang",
    body: "Tidak perlu riset rute, cari penginapan, atau nego harga sendiri. Tinggal ikut jadwal yang sudah teruji.",
  },
  {
    emoji: "🤝",
    title: "Networking Alami Sambil Liburan",
    body: "Banyak persahabatan (bahkan hubungan) yang dimulai dari open trip. Pengalaman sosial adalah bagian dari produknya, bukan bonus.",
  },
];

export default function WhyOpenTrip() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
        Kenapa Pilih Open Trip Dibanding Liburan Sendiri?
      </h2>

      <div className="mt-10 divide-y divide-black/8 border-t border-black/8">
        {REASONS.map((r, i) => (
          <motion.div
            key={r.title}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="grid gap-2 py-6 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-8"
          >
            <span className="text-3xl leading-none" aria-hidden="true">
              {r.emoji}
            </span>
            <div>
              <h3 className="font-display text-lg font-extrabold text-ink">{r.title}</h3>
              <p className="mt-1.5 max-w-[55ch] text-sm leading-relaxed text-body">{r.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
