<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { Search, MapPin, Map, Building2 } from 'lucide-vue-next';
import { PostalData, SearchResult } from '../types';

const props = defineProps<{
  data: PostalData | null
}>();

const query = ref('');
const isFocused = ref(false);

const results = computed(() => {
  if (!props.data || query.value.length < 2) return [];
  const lowerQuery = query.value.toLocaleLowerCase('tr');
  const items: SearchResult[] = [];
  
  Object.entries(props.data).forEach(([city, districts]) => {
    if (city.toLocaleLowerCase('tr').includes(lowerQuery)) items.push({ city, district: '', neighborhood: '', zipCode: '', type: 'city' });
    Object.entries(districts).forEach(([dist, neighs]) => {
      // @ts-ignore
      if (dist.toLocaleLowerCase('tr').includes(lowerQuery)) items.push({ city, district: dist, neighborhood: '', zipCode: '', type: 'district' });
      // @ts-ignore
      Object.entries(neighs).forEach(([n, code]) => {
        // @ts-ignore
        if (n.toLocaleLowerCase('tr').includes(lowerQuery) || code.includes(query.value)) {
           // @ts-ignore
          items.push({ city, district: dist, neighborhood: n, zipCode: code, type: 'neighborhood' });
        }
      });
    });
  });
  return items.slice(0, 6);
});

const onFocus = () => {
  isFocused.value = true;
};

const onBlur = () => {
  setTimeout(() => {
    isFocused.value = false;
  }, 200);
};
</script>

<template>
  <div class="relative w-full max-w-xl mx-auto">
    <div class="flex items-center gap-3 px-4 py-3 bg-white border rounded-xl transition-all" 
         :class="isFocused ? 'ring-2 ring-slate-900/5 border-slate-400' : 'border-slate-200'">
      <Search class="w-5 h-5 text-slate-400" />
      <input 
        type="text" 
        placeholder="İl, ilçe veya mahalle ismi yazın..."
        class="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
        v-model="query"
        @focus="onFocus"
        @blur="onBlur"
      />
    </div>
    
    <div v-if="isFocused && query.length >= 2" class="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-[60] overflow-hidden">
      <div v-if="results.length > 0" class="divide-y divide-slate-100">
        <RouterLink
          v-for="(res, i) in results"
          :key="i"
          :to="res.type === 'city' ? `/city/${res.city}` : res.type === 'district' ? `/city/${res.city}/${res.district}` : `/city/${res.city}/${res.district}/${res.neighborhood}`"
          class="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors"
        >
          <div class="text-slate-400">
            <Map v-if="res.type === 'city'" class="w-4 h-4" />
            <Building2 v-else-if="res.type === 'district'" class="w-4 h-4" />
            <MapPin v-else class="w-4 h-4" />
          </div>
          <div class="flex-1">
            <div class="font-semibold text-sm text-slate-900">{{ res.neighborhood || res.district || res.city }}</div>
            <div class="text-[10px] text-slate-400 uppercase font-medium">{{ [res.city, res.district].filter(Boolean).join(' / ') }}</div>
          </div>
          <div v-if="res.zipCode" class="mono text-xs font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">{{ res.zipCode }}</div>
        </RouterLink>
      </div>
      <div v-else class="p-8 text-center text-slate-400 text-sm">Sonuç bulunamadı</div>
    </div>
  </div>
</template>
