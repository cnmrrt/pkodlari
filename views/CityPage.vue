<script setup lang="ts">
import { inject, computed, onMounted, watch, Ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { ArrowLeft, ChevronRight } from 'lucide-vue-next';
import { PostalData } from '../types';

const route = useRoute();
const postalData = inject<Ref<PostalData | null>>('postalData');

const city = computed(() => route.params.city as string);

const updateTitle = () => {
  if (city.value) {
    document.title = `${city.value} Posta Kodları | Rehber`;
  }
};

onMounted(updateTitle);
watch(city, updateTitle);

const districts = computed(() => {
  if (!postalData?.value || !city.value || !postalData.value[city.value]) return [];
  return Object.keys(postalData.value[city.value]).sort((a, b) => a.localeCompare(b, 'tr'));
});

const isValid = computed(() => {
    return postalData?.value && city.value && postalData.value[city.value];
});
</script>

<template>
  <div v-if="isValid" class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="mb-10 flex items-center gap-4">
      <RouterLink to="/" class="text-slate-400 hover:text-slate-900 transition-colors"><ArrowLeft class="w-5 h-5" /></RouterLink>
      <div>
        <h1 class="text-3xl font-bold text-slate-900 uppercase tracking-tight">{{ city }} Posta Kodları</h1>
        <p class="text-slate-500 text-sm font-medium uppercase tracking-wider">{{ districts.length }} İLÇE</p>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <RouterLink
        v-for="dist in districts"
        :key="dist"
        :to="`/city/${city}/${dist}`"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
      >
        <div>
          <h3 class="font-bold text-slate-900 uppercase text-lg">{{ dist }}</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">{{ Object.keys(postalData![city][dist] || {}).length }} mahalle</p>
        </div>
        <ChevronRight class="w-5 h-5 text-slate-300" />
      </RouterLink>
    </div>
  </div>
</template>
