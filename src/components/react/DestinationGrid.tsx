import { motion, useReducedMotion } from "framer-motion";

export interface Destination {
  name: string;
  image: string;
}

export default function DestinationGrid({ heading, destinations }: { heading: string; destinations: Destination[] }) {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">{heading}</h2>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {destinations.map((d, i) => (
          <motion.div
            key={d.name}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-card"
          >
            <img
              src={d.image}
              alt={d.name}
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <span className="text-sm font-semibold text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                {d.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
