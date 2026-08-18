const monthName = (d: Date) => new Intl.DateTimeFormat("id-ID", { month: "long" }).format(d);

export function formatIDR(price: number): string {
  return `Rp ${price.toLocaleString("id-ID")}`;
}

export function formatDateRange(startISO: string, endISO: string): string {
  const start = new Date(startISO);
  const end = new Date(endISO);
  const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
  const sameDay = startISO === endISO;

  if (sameDay) {
    return `${start.getDate()} ${monthName(start)} ${start.getFullYear()}`;
  }
  if (sameMonth) {
    return `${start.getDate()}-${end.getDate()} ${monthName(start)} ${start.getFullYear()}`;
  }
  return `${start.getDate()} ${monthName(start)} - ${end.getDate()} ${monthName(end)} ${end.getFullYear()}`;
}
