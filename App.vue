<script setup lang="ts">
import { ref, onMounted, provide } from 'vue';
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import { PostalData } from './types';

const postalData = ref<PostalData | null>(null);

const findValue = (obj: any, possibleKeys: string[]) => {
  if (!obj || typeof obj !== 'object') return null;
  const normalize = (s: string) => s.toLocaleLowerCase('tr').replace(/\s+/g, '').replace(/[ıığüşöç]/g, (m: string) => ({'ı':'i','ğ':'g','ü':'u','ş':'s','ö':'o','ç':'c'}[m] || m));
  const normalizedPossible = possibleKeys.map(normalize);
  for (const key of Object.keys(obj)) {
    if (normalizedPossible.includes(normalize(key))) return obj[key];
  }
  return null;
};

onMounted(() => {
  fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/postakodlari.json')
    .then(res => res.json())
    .then(rawData => {
      const transformed: PostalData = {};
      const entries = Array.isArray(rawData) ? rawData : Object.values(rawData);
      
      entries.forEach((item: any) => {
        if (!item || typeof item !== 'object') return;
        const city = findValue(item, ['il', 'city', 'İL', 'şehir']);
        const dist = findValue(item, ['ilce', 'district', 'İLÇE', 'İlçe']);
        const neigh = findValue(item, ['mahalle', 'neighborhood', 'semt', 'MAHALLE']);
        const zip = findValue(item, ['posta_kodu', 'zip', 'pk', 'POSTA KODU', 'PK']);

        if (city) {
          const cityStr = String(city).toLocaleUpperCase('tr').trim();
          const distStr = String(dist || "MERKEZ").toLocaleUpperCase('tr').trim();
          const neighStr = String(neigh || "MERKEZ").toLocaleUpperCase('tr').trim();
          const codeStr = String(zip || "00000").trim();
          if (!transformed[cityStr]) transformed[cityStr] = {};
          if (!transformed[cityStr][distStr]) transformed[cityStr][distStr] = {};
          transformed[cityStr][distStr][neighStr] = codeStr;
        }
      });
      postalData.value = transformed;
    });
});

provide('postalData', postalData);
</script>

<template>
  <Header />
  <main class="max-w-5xl mx-auto px-6 py-12">
    <RouterView />
  </main>
  <footer class="py-12 text-center text-slate-400 text-xs font-medium border-t border-slate-200 mt-20">
    Posta Kodu Rehberi &copy; {{ new Date().getFullYear() }} — Tüm hakları saklıdır.
  </footer>
</template>
