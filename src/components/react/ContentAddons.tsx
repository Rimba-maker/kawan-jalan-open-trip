import { motion, useReducedMotion } from "framer-motion";
import { ADDON_META } from "../../lib/constants";

export default function ContentAddons() {
  const reduce = useReducedMotion();
  const addons = Object.entries(ADDON_META);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
        Pulang Bawa Konten, Bukan Cuma Kenangan
      </h2>
      <p className="mt-3 max-w-[60ch] text-body">
        Banyak peserta kami adalah content creator atau yang suka posting momen liburan. Beberapa trip dilengkapi
        dokumentasi profesional.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {addons.map(([key, meta], i) => (
          <motion.div
            key={key}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={reduce ? undefined : { y: -3 }}
            className="group rounded-card bg-canvas p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="font-display text-base font-extrabold text-ink">{meta.label}</h3>
            <p
              className={`mt-3 text-lg font-bold text-primary opacity-70 transition-opacity duration-300 ${
                reduce ? "" : "group-hover:opacity-100"
              }`}
            >
              {meta.price}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
