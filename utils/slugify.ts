export const slugify = (s: string) => {
    return String(s)
        .toLocaleLowerCase('tr')
        .replace(/[ıığüşöç]/g, (m: string) => ({ 'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c' }[m] || m))
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
};

export const findMapValue = (obj: Record<string, unknown> | null | undefined): string | undefined => {
  if (!obj || typeof obj !== 'object') return undefined;
  const keys = ['map', 'harita', 'iframe', 'google_map', 'embed'];
  for (const k of keys) {
    const v = obj[k];
    if (v && typeof v === 'string' && v.trim()) return v.trim();
  }
  return undefined;
};

export const titleCase = (s: string) => {
    if (!s) return '';
    // Use regex to find words and capitalize first letters, including those after slashes or other non-alpha chars
    return s.toLocaleLowerCase('tr').replace(/(^|[^a-züığüşöçı])([a-züığüşöçı])/g, (match, p1, p2) =>
        p1 + p2.toLocaleUpperCase('tr')
    );
};
