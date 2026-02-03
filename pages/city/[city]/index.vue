<script setup lang="ts">
import { inject, computed, Ref } from 'vue';
import { ArrowLeft, ChevronRight } from 'lucide-vue-next';
import { PostalData } from '~/types';

const route = useRoute();
const postalData = inject<Ref<PostalData | null>>('postalData');

const citySlug = computed(() => route.params.city as string);
const cityItem = computed(() => postalData?.value?.[citySlug.value]);

useHead({
  title: computed(() => cityItem.value ? `${cityItem.value.name} Posta Kodları | Rehber` : 'Şehir Bulunamadı')
});

const districts = computed(() => {
  if (!cityItem.value) return [];
  // Return entries so we have slug and item
  return Object.entries(cityItem.value.districts).sort(([, a], [, b]) => a.name.localeCompare(b.name, 'tr'));
});

const isValid = computed(() => !!cityItem.value);
</script>

<template>
  <div v-if="isValid" class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="mb-10 flex items-center gap-4">
      <NuxtLink to="/" class="text-slate-400 hover:text-slate-900 transition-colors"><ArrowLeft class="w-5 h-5" /></NuxtLink>
      <div>
        <h1 class="text-3xl font-bold text-slate-900 uppercase tracking-tight">{{ cityItem.name }} Posta Kodları</h1>
        <p class="text-slate-500 text-sm font-medium uppercase tracking-wider">{{ districts.length }} İLÇE</p>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <NuxtLink
        v-for="([distSlug, distItem]) in districts"
        :key="distSlug"
        :to="`/city/${citySlug}/${distSlug}`"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
      >
        <div>
          <h3 class="font-bold text-slate-900 uppercase text-lg">{{ distItem.name }}</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">{{ Object.keys(distItem.neighborhoods || {}).length }} mahalle</p>
        </div>
        <ChevronRight class="w-5 h-5 text-slate-300" />
      </NuxtLink>
    </div>
  </div>
</template>
