import Reveal from "./Reveal";

const QUOTES = [
  {
    quote: "Ikut trip sendirian karena semua teman sibuk, eh malah pulang punya circle baru yang masih hangout sampai sekarang.",
    name: "Rian",
    trip: "Bromo Trip",
    image: "https://images.pexels.com/photos/17034916/pexels-photo-17034916.jpeg",
  },
  {
    quote: "Trip leader-nya asik, itinerary jalan sesuai jadwal, dan yang bikin beda, beneran matched sama orang-orang yang vibe-nya cocok.",
    name: "Sasa",
    trip: "Labuan Bajo Trip",
    image: "https://images.pexels.com/photos/8998361/pexels-photo-8998361.jpeg",
  },
  {
    quote: "Awalnya ragu solo trip, ternyata ini cara paling gampang buat mulai. Semua orang juga sendirian, jadi gak ada yang canggung.",
    name: "Bayu",
    trip: "Dieng Trip",
    image: "https://images.pexels.com/photos/33967675/pexels-photo-33967675.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section id="cerita-trip" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
        Cerita Mereka Yang Sudah Gabung
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {QUOTES.map((q, i) => (
          <Reveal key={q.name} index={i} className="rounded-card bg-canvas p-6 shadow-sm">
            <img
              src={q.image}
              alt={`Foto ${q.name} saat ${q.trip}`}
              className="h-12 w-12 rounded-full object-cover"
              loading="lazy"
            />
            <p className="mt-4 text-sm leading-relaxed text-body">
              &ldquo;{q.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-ink">
              {q.name}
              <span className="block font-normal text-mute">{q.trip}</span>
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
