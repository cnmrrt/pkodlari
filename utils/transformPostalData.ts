import type { PostalData } from '~/types';
import { slugify, findMapValue } from '~/utils/slugify';

const findValue = (obj: Record<string, unknown>, possibleKeys: string[]) => {
  if (!obj || typeof obj !== 'object') return null;
  const normalize = (s: string) =>
    s
      .toLocaleLowerCase('tr')
      .replace(/\s+/g, '')
      .replace(/[ıığüşöç]/g, (m: string) => ({ ı: 'i', ğ: 'g', ü: 'u', ş: 's', ö: 'o', ç: 'c' }[m] || m));
  const normalizedPossible = possibleKeys.map(normalize);
  for (const key of Object.keys(obj)) {
    if (normalizedPossible.includes(normalize(key))) return obj[key];
  }
  return null;
};

export function transformPostalData(response: unknown): PostalData {
  const transformed: PostalData = {};
  const entries = Array.isArray(response) ? response : Object.values(response as object);

  entries.forEach((item: Record<string, unknown>) => {
    if (!item || typeof item !== 'object') return;

    const city = findValue(item, ['il', 'city', 'İL', 'şehir']);
    const dist = findValue(item, ['ilce', 'district', 'İLÇE', 'İlçe']);
    const neigh = findValue(item, ['mahalle', 'neighborhood', 'semt', 'MAHALLE']);
    const zip = findValue(item, ['posta_kodu', 'zip', 'pk', 'POSTA KODU', 'PK', 'postaKodu']);
    const map = findMapValue(item);

    if (!city) return;

    const cityStr = String(city).trim().toLocaleUpperCase('tr');
    const distStr = String(dist || 'MERKEZ').trim().toLocaleUpperCase('tr');
    const neighStr = String(neigh || 'MERKEZ').trim().toLocaleUpperCase('tr');

    const citySlug = slugify(cityStr);
    const distSlug = slugify(distStr);
    const neighSlug = slugify(neighStr);

    const codeStr = String(zip || '00000').trim();

    if (!transformed[citySlug]) {
      transformed[citySlug] = { name: cityStr, districts: {} };
    }

    if (!transformed[citySlug].districts[distSlug]) {
      transformed[citySlug].districts[distSlug] = { name: distStr, neighborhoods: {} };
    }

    transformed[citySlug].districts[distSlug].neighborhoods[neighSlug] = {
      name: neighStr,
      zipCode: codeStr,
      mapCode: map,
    };

    if (map && !transformed[citySlug].mapCode) {
      transformed[citySlug].mapCode = map;
    }
    if (map && !transformed[citySlug].districts[distSlug].mapCode) {
      transformed[citySlug].districts[distSlug].mapCode = map;
    }
  });

  return transformed;
}
