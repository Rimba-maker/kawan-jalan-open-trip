import Reveal from "./Reveal";

export default function Inclusions({ items, excludesNote }: { items: string[]; excludesNote: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
        Semua Sudah Termasuk
      </h2>

      <Reveal className="mt-8 rounded-card bg-canvas p-6 shadow-sm sm:p-8">
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-body">
              <span className="mt-0.5 shrink-0 text-positive" aria-hidden="true">
                ✅
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 border-t border-black/5 pt-4 text-xs italic text-mute">{excludesNote}</p>
      </Reveal>
    </section>
  );
}
