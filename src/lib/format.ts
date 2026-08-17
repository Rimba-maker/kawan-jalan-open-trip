const BULAN = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

export function formatIDR(price: number): string {
  return `Rp ${price.toLocaleString("id-ID")}`;
}

export function formatDateRange(startISO: string, endISO: string): string {
  const start = new Date(startISO);
  const end = new Date(endISO);
  const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
  const sameDay = startISO === endISO;

  if (sameDay) {
    return `${start.getDate()} ${BULAN[start.getMonth()]} ${start.getFullYear()}`;
  }
  if (sameMonth) {
    return `${start.getDate()}-${end.getDate()} ${BULAN[start.getMonth()]} ${start.getFullYear()}`;
  }
  return `${start.getDate()} ${BULAN[start.getMonth()]} - ${end.getDate()} ${BULAN[end.getMonth()]} ${end.getFullYear()}`;
}

export function slotPercent(filled: number, total: number): number {
  return Math.round((filled / total) * 100);
}
