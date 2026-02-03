<script setup lang="ts">
import { inject, computed, Ref } from 'vue';
import { Loader2 } from 'lucide-vue-next';
import { PostalData } from '~/types';

const postalData = inject<Ref<PostalData | null>>('postalData');

useHead({
  title: 'Türkiye Posta Kodları'
});

const cityList = computed(() => {
  if (!postalData?.value) return [];
  return Object.values(postalData.value).sort((a, b) => a.name.localeCompare(b.name, 'tr'));
});
</script>

<template>
  <div v-if="!postalData" class="py-32 flex flex-col items-center justify-center">
    <Loader2 class="w-8 h-8 text-slate-400 animate-spin" />
  </div>

  <div v-else class="animate-in fade-in duration-500">
    <div class="text-center mb-12 py-12">
      <h1 class="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Türkiye Posta Kodları</h1>
      <p class="text-slate-500 mb-10">Hızlıca ilçe ve mahalle posta kodlarını sorgulayın.</p>
      <SearchBar :data="postalData" />
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <NuxtLink
        v-for="(cityItem, slug) in postalData"
        :key="slug"
        :to="`/city/${slug}`"
        class="soft-card p-4 rounded-xl text-center"
      >
        <div class="font-semibold text-slate-900 text-sm truncate uppercase">{{ cityItem.name }}</div>
        <div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
          {{ Object.keys(cityItem.districts || {}).length }} İLÇE
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
