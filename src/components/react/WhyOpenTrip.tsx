import Reveal from "./Reveal";

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
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
        Kenapa Pilih Open Trip Dibanding Liburan Sendiri?
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {REASONS.map((r, i) => (
          <Reveal key={r.title} index={i} className="rounded-card bg-canvas p-6 shadow-sm">
            <span className="text-3xl" aria-hidden="true">{r.emoji}</span>
            <h3 className="mt-3 font-display text-base font-extrabold text-ink">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{r.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
