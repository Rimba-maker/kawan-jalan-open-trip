import { motion, useReducedMotion } from "framer-motion";
import type { Trip } from "../../lib/types";
import { VIBE_META } from "../../lib/constants";
import { formatIDR, formatDateRange } from "../../lib/format";

export default function TripCard({ trip }: { trip: Trip }) {
  const reduce = useReducedMotion();
  const percent = Math.round((trip.slotFilled / trip.slotTotal) * 100);
  const slotsLeft = trip.slotTotal - trip.slotFilled;
  const urgent = slotsLeft <= 3;

  return (
    <div className="flex flex-col overflow-hidden rounded-card border border-ink/12 bg-canvas">
      <div className="relative">
        <img
          src={trip.images[0]}
          alt={trip.title}
          width={800}
          height={600}
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
        {trip.viral && (
          <motion.span
            animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: 3, ease: "easeInOut" }}
            className="absolute left-3 top-3 rounded-pill bg-negative px-3 py-1 text-xs font-bold text-canvas"
          >
            🔥 Lagi Viral
          </motion.span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-extrabold leading-snug text-ink">{trip.title}</h3>
        <p className="mt-1 text-sm text-body">
          {formatDateRange(trip.dateStart, trip.dateEnd)} ({trip.durationLabel})
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {trip.vibeTags.map((tag) => {
            const meta = VIBE_META[tag];
            return (
              <span
                key={tag}
                className="rounded-pill px-2.5 py-1 text-xs font-semibold text-canvas"
                style={{ backgroundColor: meta.color }}
              >
                {meta.emoji} {meta.label}
              </span>
            );
          })}
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-xs font-semibold text-body">
            <span>
              Slot terisi {trip.slotFilled} dari {trip.slotTotal}
            </span>
            {urgent && <span className="text-negative">Sisa {slotsLeft} slot</span>}
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-pill bg-canvas-soft">
            <motion.div
              className="h-full rounded-pill bg-primary"
              initial={reduce ? { width: `${percent}%` } : { width: "0%" }}
              whileInView={{ width: `${percent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="font-display text-lg font-extrabold text-ink">{formatIDR(trip.price)}</p>
            <p className="text-xs text-mute">per orang</p>
          </div>
          <a
            href="#gabung-trip"
            className="rounded-pill bg-primary px-4 py-2 text-sm font-semibold text-on-primary transition-transform hover:brightness-95 active:scale-[0.98]"
          >
            Gabung Trip Ini
          </a>
        </div>

        <p className="mt-3 text-xs text-body">{trip.priceExcludes}</p>
      </div>
    </div>
  );
}
