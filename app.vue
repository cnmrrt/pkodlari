<script setup lang="ts">
import { provide } from 'vue';
import type { PostalData } from './types';

const findValue = (obj: any, possibleKeys: string[]) => {
  if (!obj || typeof obj !== 'object') return null;
  const normalize = (s: string) => s.toLocaleLowerCase('tr').replace(/\s+/g, '').replace(/[ıığüşöç]/g, (m: string) => ({'ı':'i','ğ':'g','ü':'u','ş':'s','ö':'o','ç':'c'}[m] || m));
  const normalizedPossible = possibleKeys.map(normalize);
  for (const key of Object.keys(obj)) {
    if (normalizedPossible.includes(normalize(key))) return obj[key];
  }
  return null;
};

// Use useAsyncData for SSR-friendly data fetching
const { data: postalData } = await useAsyncData<PostalData>('postal-data', async () => {
  const response = await $fetch<any>('https://words-from-life-5cb26-default-rtdb.firebaseio.com/posta_kodlari_duzenlenmis/afyonkarahisar.json');
  
  const transformed: PostalData = {};
  const entries = Array.isArray(response) ? response : Object.values(response);
  
  entries.forEach((item: any) => {
    if (!item || typeof item !== 'object') return;
    const city = findValue(item, ['il', 'city', 'İL', 'şehir']);
    const dist = findValue(item, ['ilce', 'district', 'İLÇE', 'İlçe']);
    const neigh = findValue(item, ['mahalle', 'neighborhood', 'semt', 'MAHALLE']);
    const zip = findValue(item, ['posta_kodu', 'zip', 'pk', 'POSTA KODU', 'PK']);
    const map = findValue(item, ['harita', 'map', 'iframe', 'google_map', 'embed']);

    if (city) {
      const cityStr = String(city).trim().toLocaleUpperCase('tr');
      const distStr = String(dist || "MERKEZ").trim().toLocaleUpperCase('tr');
      const neighStr = String(neigh || "MERKEZ").trim().toLocaleUpperCase('tr');
      
      const citySlug = slugify(cityStr);
      const distSlug = slugify(distStr);
      const neighSlug = slugify(neighStr);
      
      const codeStr = String(zip || "00000").trim();
      const mapStr = map ? String(map) : undefined;

      if (!transformed[citySlug]) {
        transformed[citySlug] = {
            name: cityStr,
            districts: {}
        };
      }
      // If we have a map and it seems to be for the city (no district/neigh specified in source - though logic forces them, 
      // but assuming if we found a row with just city, dist/neigh would be 'MERKEZ' or empty in source).
      // Actually, relying on source layout. If a specific map is bound to this item, we assign it to the most specific entity.
      
      if (!transformed[citySlug].districts[distSlug]) {
        transformed[citySlug].districts[distSlug] = {
            name: distStr,
            neighborhoods: {}
        };
      }
      
      transformed[citySlug].districts[distSlug].neighborhoods[neighSlug] = {
          name: neighStr,
          zipCode: codeStr,
          mapCode: mapStr
      };

      // Opportunistic: if map exists and we are at a "summary" level row, we might want to assign to parent.
      // But typical postal code data is one row per neighborhood. 
      // User request: "if json has map element for each data". 
      // We will propagate it up if needed, but for now lets store it on the leaf.
      // If the user meant "city map" is a separate column in every row, then we get 100 copies.
      // We can assign to city/district if they don't have one yet?
      if (mapStr && !transformed[citySlug].mapCode) {
          transformed[citySlug].mapCode = mapStr; 
      }
      if (mapStr && !transformed[citySlug].districts[distSlug].mapCode) {
          transformed[citySlug].districts[distSlug].mapCode = mapStr;
      }
    }
  });
  return transformed;
});

// Provide the data globally
provide('postalData', postalData);
</script>

<template>
  <div>
    <Header />
    <main class="max-w-5xl mx-auto px-6 py-8">
      <NuxtPage />
    </main>
    <footer class="py-12 text-center text-slate-400 text-xs font-medium border-t border-slate-200 mt-20">
      Posta Kodu Rehberi &copy; {{ new Date().getFullYear() }} — Tüm hakları saklıdır.
    </footer>
  </div>
</template>
