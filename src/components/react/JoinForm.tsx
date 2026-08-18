import { useState } from "react";
import type { FormEvent } from "react";
import type { Trip } from "../../content.config";

const WHATSAPP_NUMBER = "6281234567890";

export default function JoinForm({ trips }: { trips: Trip[] }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const message = [
      "Halo Kawan Jalan, saya mau gabung trip!",
      "",
      `Nama: ${data.get("nama")}`,
      `WhatsApp: ${data.get("whatsapp")}`,
      `Trip yang diminati: ${data.get("trip")}`,
      `Jumlah peserta: ${data.get("peserta")}`,
      data.get("catatan") ? `Catatan: ${data.get("catatan")}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const opened = window.open(url, "_blank");
    if (!opened) window.location.href = url;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="gabung-trip" className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <div className="rounded-card bg-primary-pale p-8 text-center">
          <h2 className="font-display text-xl font-extrabold text-ink">Yuk Lanjut di WhatsApp</h2>
          <p className="mt-2 text-sm text-body">
            Kami sudah buka WhatsApp dengan pesan kamu. Tinggal kirim, tim kami bakal balas secepatnya buat
            konfirmasi slot.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="gabung-trip" className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
        Pilih Trip, Amankan Slotmu
      </h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-card bg-canvas p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="nama" className="text-sm font-semibold text-ink">
            Nama
          </label>
          <input
            id="nama"
            name="nama"
            type="text"
            required
            className="rounded-md border border-ink/25 px-4 py-2.5 text-sm text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="whatsapp" className="text-sm font-semibold text-ink">
            Nomor WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            placeholder="08xx-xxxx-xxxx"
            className="rounded-md border border-ink/25 px-4 py-2.5 text-sm text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="trip" className="text-sm font-semibold text-ink">
            Trip yang Diminati
          </label>
          <select
            id="trip"
            name="trip"
            required
            className="rounded-md border border-ink/25 px-4 py-2.5 text-sm text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
          >
            <option value="">Pilih trip</option>
            {trips.map((t) => (
              <option key={t.id} value={t.title}>
                {t.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="peserta" className="text-sm font-semibold text-ink">
            Jumlah Peserta
          </label>
          <input
            id="peserta"
            name="peserta"
            type="number"
            min={1}
            defaultValue={1}
            required
            className="rounded-md border border-ink/25 px-4 py-2.5 text-sm text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="catatan" className="text-sm font-semibold text-ink">
            Catatan <span className="font-normal text-mute">(opsional)</span>
          </label>
          <textarea
            id="catatan"
            name="catatan"
            rows={3}
            className="rounded-md border border-ink/25 px-4 py-2.5 text-sm text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-pill bg-primary py-3.5 text-base font-semibold text-on-primary transition-transform hover:brightness-95 active:scale-[0.98]"
        >
          Gabung Trip Sekarang
        </button>
      </form>
    </section>
  );
}
