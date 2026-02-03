export const slugify = (s: string) => {
    return String(s)
        .toLocaleLowerCase('tr')
        .replace(/[ıığüşöç]/g, (m: string) => ({ 'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c' }[m] || m))
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
};
