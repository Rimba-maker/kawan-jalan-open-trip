import { useState } from "react";
import type { FormEvent } from "react";
import type { Trip } from "../../lib/types";

export default function JoinForm({ trips }: { trips: Trip[] }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();

    fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body })
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  }

  if (status === "success") {
    return (
      <section id="gabung-trip" className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <div className="rounded-card bg-primary-pale p-8 text-center">
          <h2 className="font-display text-xl font-extrabold text-ink">Slot Kamu Sedang Diproses</h2>
          <p className="mt-2 text-sm text-body">
            Tim kami bakal hubungi kamu lewat WhatsApp dalam 1x24 jam buat konfirmasi.
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

      <form
        name="join-trip"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-card bg-canvas p-6 shadow-sm sm:p-8"
      >
        <input type="hidden" name="form-name" value="join-trip" />

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

        {status === "error" && (
          <p className="text-sm text-negative-deep">
            Gagal mengirim. Coba lagi, atau hubungi kami langsung lewat WhatsApp.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-pill bg-primary py-3.5 text-base font-semibold text-on-primary transition-transform hover:brightness-95 active:scale-[0.98] disabled:opacity-60"
        >
          {status === "submitting" ? "Mengirim..." : "Gabung Trip Sekarang"}
        </button>
      </form>
    </section>
  );
}
