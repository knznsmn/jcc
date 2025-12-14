export function formatDate(input) {
  if (!input) return '';
  // Accept Date object or ISO-like date string
  const date = typeof input === 'string' ? new Date(input) : input instanceof Date ? input : new Date(String(input));
  if (Number.isNaN(date.getTime())) return String(input);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
