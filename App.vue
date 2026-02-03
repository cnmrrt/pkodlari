<script setup lang="ts">
import { provide } from 'vue';
import { PostalData } from './types';

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
  const response = await $fetch<any>('https://words-from-life-5cb26-default-rtdb.firebaseio.com/postakodlari.json');
  
  const transformed: PostalData = {};
  const entries = Array.isArray(response) ? response : Object.values(response);
  
  entries.forEach((item: any) => {
    if (!item || typeof item !== 'object') return;
    const city = findValue(item, ['il', 'city', 'İL', 'şehir']);
    const dist = findValue(item, ['ilce', 'district', 'İLÇE', 'İlçe']);
    const neigh = findValue(item, ['mahalle', 'neighborhood', 'semt', 'MAHALLE']);
    const zip = findValue(item, ['posta_kodu', 'zip', 'pk', 'POSTA KODU', 'PK']);

    if (city) {
      const cityStr = String(city).trim().toLocaleUpperCase('tr');
      const distStr = String(dist || "MERKEZ").trim().toLocaleUpperCase('tr');
      const neighStr = String(neigh || "MERKEZ").trim().toLocaleUpperCase('tr');
      
      const citySlug = slugify(cityStr);
      const distSlug = slugify(distStr);
      const neighSlug = slugify(neighStr);
      
      const codeStr = String(zip || "00000").trim();

      if (!transformed[citySlug]) {
        transformed[citySlug] = {
            name: cityStr,
            districts: {}
        };
      }
      if (!transformed[citySlug].districts[distSlug]) {
        transformed[citySlug].districts[distSlug] = {
            name: distStr,
            neighborhoods: {}
        };
      }
      transformed[citySlug].districts[distSlug].neighborhoods[neighSlug] = {
          name: neighStr,
          zipCode: codeStr
      };
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
    <main class="max-w-5xl mx-auto px-6 py-12">
      <NuxtPage />
    </main>
    <footer class="py-12 text-center text-slate-400 text-xs font-medium border-t border-slate-200 mt-20">
      Posta Kodu Rehberi &copy; {{ new Date().getFullYear() }} — Tüm hakları saklıdır.
    </footer>
  </div>
</template>
