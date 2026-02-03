<script setup lang="ts">
import { inject, computed, ref, Ref } from 'vue';
import { ArrowLeft, Search, ChevronRight } from 'lucide-vue-next';
import { PostalData } from '~/types';

const route = useRoute();
const postalData = inject<Ref<PostalData | null>>('postalData');
const filter = ref('');

const citySlug = computed(() => route.params.city as string);
const districtSlug = computed(() => route.params.district as string);

const cityItem = computed(() => postalData?.value?.[citySlug.value]);
const districtItem = computed(() => cityItem.value?.districts[districtSlug.value]);

useHead({
  title: computed(() => districtItem.value ? `${districtItem.value.name} Posta Kodları | Rehber` : 'İlçe Bulunamadı')
});

const isValid = computed(() => !!districtItem.value);

const neighs = computed(() => {
  if (!isValid.value) return [];
  const items = Object.entries(districtItem.value!.neighborhoods);
  return items
    .filter(([, n]) => n.name.toLocaleLowerCase('tr').includes(filter.value.toLocaleLowerCase('tr')))
    .sort(([, a], [, b]) => a.name.localeCompare(b.name, 'tr'));
});
</script>

<template>
  <div v-if="isValid" class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div class="flex items-center gap-4">
        <NuxtLink :to="`/city/${citySlug}`" class="text-slate-400 hover:text-slate-900 transition-colors"><ArrowLeft class="w-5 h-5" /></NuxtLink>
        <div>
          <h1 class="text-3xl font-bold text-slate-900 uppercase tracking-tight">{{ districtItem.name }} Posta Kodları</h1>
          <p class="text-slate-500 text-sm font-medium uppercase tracking-wider">{{ cityItem.name }}</p>
        </div>
      </div>
      <div class="relative w-full md:w-64">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input 
          type="text" 
          placeholder="Mahallelerde ara..."
          class="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-400 transition-all text-sm"
          v-model="filter"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <NuxtLink 
        v-for="([nSlug, nItem]) in neighs"
        :key="nSlug"
        :to="`/city/${citySlug}/${districtSlug}/${nSlug}`"
        class="soft-card p-5 flex items-center justify-between group"
      >
        <div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 uppercase truncate text-base">{{ nItem.name }}</h4>
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">MAHALLE</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm">{{ nItem.zipCode }}</span>
          <ChevronRight class="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
        </div>
      </NuxtLink>
      <div v-if="neighs.length === 0" class="col-span-full p-12 text-center text-slate-400 text-sm">Sonuç bulunamadı</div>
    </div>
  </div>
</template>
