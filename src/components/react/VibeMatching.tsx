import { motion, useReducedMotion } from "framer-motion";
import { VIBE_META } from "../../lib/constants";

export default function VibeMatching() {
  const reduce = useReducedMotion();
  const tags = Object.entries(VIBE_META);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
        Bukan Sekadar Gabung Grup, Kami Cocokkan Vibe-nya
      </h2>
      <p className="mt-3 max-w-[65ch] text-body">
        Setiap trip punya vibe berbeda. Ada yang santai untuk healing, ada yang aktif untuk hiking dan adventure,
        ada yang fokus foto-foto konten. Kami tandai tiap trip dengan tag vibe supaya kamu tahu bakal gabung dengan
        orang-orang yang selaras energinya.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {tags.map(([key, meta], i) => (
          <motion.span
            key={key}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={reduce ? undefined : { scale: 1.06 }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            className="group rounded-pill px-4 py-2 text-sm font-semibold text-canvas"
            style={{ backgroundColor: meta.color }}
          >
            <span className="inline-block transition-transform group-hover:-translate-y-0.5" aria-hidden="true">
              {meta.emoji}
            </span>{" "}
            {meta.label}
          </motion.span>
        ))}
      </div>

      <p className="mt-6 max-w-[60ch] text-sm italic text-mute">
        Pilih trip dengan vibe yang sesuai maumu, kamu akan gabung dengan orang yang mencari pengalaman serupa.
      </p>
    </section>
  );
}
