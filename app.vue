<script setup lang="ts">
import { provide } from 'vue';
import type { PostalData } from './types';

// Fetch pre-transformed data from the server
// This avoids heavy CPU usage during SSR as the server handles transformation and caching
const { data: postalData } = await useAsyncData<PostalData>('postal-data', async () => {
    return $fetch<PostalData>('/api/postal-data');
});

// Provide the data globally to be used by pages and components
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
