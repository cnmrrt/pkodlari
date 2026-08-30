import type { CityItem, DistrictItem, NeighborhoodItem } from '~/types';
import { slugify, findMapValue } from '~/utils/slugify';

type CityJsonRow = {
  il?: string;
  ilce?: string;
  mahalle?: string;
  postaKodu?: string;
  posta_kodu?: string;
  [key: string]: unknown;
};

export function buildCityItemFromJson(rows: CityJsonRow[]): CityItem | null {
  if (!rows.length) return null;

  const cityName = String(rows[0].il || '').trim().toLocaleUpperCase('tr');
  const districts: Record<string, DistrictItem> = {};

  for (const row of rows) {
    const distName = String(row.ilce || 'MERKEZ').trim().toLocaleUpperCase('tr');
    const distSlug = slugify(distName);
    const neighName = String(row.mahalle || 'MERKEZ').trim().toLocaleUpperCase('tr');
    const neighSlug = slugify(neighName);
    const mapCode = findMapValue(row);

    if (!districts[distSlug]) {
      districts[distSlug] = { name: distName, neighborhoods: {} };
    }

    const neighborhood: NeighborhoodItem = {
      name: neighName,
      zipCode: String(row.postaKodu || row.posta_kodu || '00000').trim(),
      mapCode,
    };

    districts[distSlug].neighborhoods[neighSlug] = neighborhood;

    if (mapCode && !districts[distSlug].mapCode) {
      districts[distSlug].mapCode = mapCode;
    }
  }

  const cityItem: CityItem = { name: cityName, districts };
  const cityMap = findMapValue(rows[0]);
  if (cityMap) cityItem.mapCode = cityMap;

  return cityItem;
}
