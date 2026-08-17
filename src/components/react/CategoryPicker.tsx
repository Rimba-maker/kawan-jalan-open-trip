import { motion, useReducedMotion } from "framer-motion";

const CARDS = [
  {
    href: "/nusantara",
    kicker: "Domestik",
    accent: "var(--color-category-nusantara)",
    title: "Open Trip Nusantara",
    body: "Bromo, Labuan Bajo, sampai spot yang lagi viral di TikTok. Semua di Indonesia, semua deket dari rumah.",
    cta: "Cek Trip Nusantara",
    image: "https://picsum.photos/seed/kategori-nusantara-bromo/900/700",
    alt: "Grup traveler berdiri di tepi kawah Bromo saat sunrise",
  },
  {
    href: "/global",
    kicker: "Luar Negeri",
    accent: "var(--color-category-global)",
    title: "Open Trip Global",
    body: "Jepang, Vietnam, Malaysia. Liburan ke luar negeri nggak perlu ribet urus sendiri, apalagi sendirian.",
    cta: "Cek Trip Global",
    image: "https://picsum.photos/seed/kategori-global-tokyo/900/700",
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
            className="group block overflow-hidden rounded-card border-t-4 bg-canvas shadow-sm transition-shadow hover:shadow-lg"
            style={{ borderTopColor: card.accent }}
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
              <span
                className="text-xs font-bold uppercase tracking-wide"
                style={{ color: card.accent }}
              >
                {card.kicker}
              </span>
              <h3 className="mt-1 font-display text-xl font-extrabold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{card.body}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-ink">
                {card.cta} <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
