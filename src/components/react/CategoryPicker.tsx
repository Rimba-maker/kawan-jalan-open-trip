import { motion, useReducedMotion } from "framer-motion";

const CARDS = [
  {
    href: "/nusantara",
    accent: "var(--color-category-nusantara)",
    title: "Open Trip Nusantara",
    body: "Bromo, Labuan Bajo, sampai spot yang lagi viral di TikTok. Semua di Indonesia, semua deket dari rumah.",
    cta: "Cek Trip Nusantara",
    image: "https://images.pexels.com/photos/29231588/pexels-photo-29231588.jpeg",
    alt: "Grup traveler berdiri di tepi kawah Bromo saat sunrise",
  },
  {
    href: "/global",
    accent: "var(--color-category-global)",
    title: "Open Trip Global",
    body: "Jepang, Vietnam, Malaysia. Liburan ke luar negeri nggak perlu ribet urus sendiri, apalagi sendirian.",
    cta: "Cek Trip Global",
    image: "https://images.pexels.com/photos/36092385/pexels-photo-36092385.jpeg",
    alt: "Grup traveler berjalan di persimpangan kota Tokyo pada malam hari",
  },
];

export default function CategoryPicker() {
  const reduce = useReducedMotion();

  return (
    <section id="pilih-kategori" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
        Mau Jalan ke Mana Dulu?
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {CARDS.map((card, i) => (
          <motion.a
            key={card.href}
            href={card.href}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            whileHover={reduce ? undefined : { y: -4 }}
            className="group block overflow-hidden rounded-card bg-canvas shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="overflow-hidden">
              <img
                src={card.image}
                alt={card.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-extrabold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{card.body}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-transform group-hover:translate-x-1">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: card.accent }} aria-hidden="true" />
                <span style={{ color: card.accent }}>{card.cta}</span>
                <span aria-hidden="true" style={{ color: card.accent }}>&rarr;</span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
