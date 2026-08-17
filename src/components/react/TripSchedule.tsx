import { motion, useReducedMotion } from "framer-motion";
import type { Trip } from "../../lib/types";
import TripCard from "./TripCard";

export default function TripSchedule({ trips, category }: { trips: Trip[]; category: "nusantara" | "global" }) {
  const reduce = useReducedMotion();
  const sorted = [...trips].sort((a, b) => Number(b.viral) - Number(a.viral));

  return (
    <section id="jadwal-trip" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
        Trip yang Sedang Buka Slot
      </h2>
      <p className="mt-2 max-w-[55ch] text-body">
        Update real-time. Semakin populer destinasinya, semakin cepat slot penuh.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((trip, i) => (
          <motion.div
            key={trip.id}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
          >
            <TripCard trip={trip} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
