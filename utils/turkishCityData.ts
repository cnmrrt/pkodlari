import type { CityJsonRow } from '~/utils/cityJson';
import { slugify } from '~/utils/slugify';

let collectionRequest: Promise<CityJsonRow[]> | undefined;

export async function fetchTurkishCityData(
  citySlug: string,
  baseURL: string,
  isServer: boolean
): Promise<CityJsonRow[]> {
  if (isServer) {
    return await $fetch<CityJsonRow[]>(`/api/data/${encodeURIComponent(citySlug)}`);
  }

  collectionRequest ??= $fetch<CityJsonRow[]>(`${baseURL}data/collection.json`).catch((error) => {
    collectionRequest = undefined;
    throw error;
  });

  const collection = await collectionRequest;
  return collection.filter((row) => slugify(String(row.il || '')) === citySlug);
}
