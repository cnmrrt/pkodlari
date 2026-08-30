<script setup lang="ts">
import { ref, computed } from 'vue';
import { Search, MapPin, Map, Building2 } from 'lucide-vue-next';
import type { PostalData, SearchResult } from '~/types';

const props = defineProps<{
  data: PostalData | null
  loading?: boolean
}>();

const query = ref('');
const isFocused = ref(false);

const results = computed(() => {
  if (!props.data || query.value.length < 2) return [];
  // Normalize query for searching
  const lowerQuery = query.value.toLocaleLowerCase('tr'); 


  const items: SearchResult[] = [];
  
  Object.entries(props.data).forEach(([citySlug, cityItem]) => {
    // Search in City Name
    if (cityItem.name.toLocaleLowerCase('tr').includes(lowerQuery)) {
        items.push({ 
            city: cityItem.name, 
            citySlug: citySlug,
            district: '', 
            districtSlug: '',
            neighborhood: '', 
            neighborhoodSlug: '',
            zipCode: '', 
            type: 'city' 
        });
    }

    Object.entries(cityItem.districts).forEach(([distSlug, distItem]) => {
      // Search in District Name
      if (distItem.name.toLocaleLowerCase('tr').includes(lowerQuery)) {
          items.push({ 
              city: cityItem.name, 
              citySlug: citySlug,
              district: distItem.name, 
              districtSlug: distSlug,
              neighborhood: '', 
              neighborhoodSlug: '',
              zipCode: '', 
              type: 'district' 
          });
      }

      Object.entries(distItem.neighborhoods).forEach(([neighSlug, neighItem]) => {
        // Search in Neighborhood Name or Zip Code
        if (neighItem.name.toLocaleLowerCase('tr').includes(lowerQuery) || neighItem.zipCode.includes(query.value)) {
          items.push({ 
              city: cityItem.name, 
              citySlug: citySlug,
              district: distItem.name, 
              districtSlug: distSlug,
              neighborhood: neighItem.name, 
              neighborhoodSlug: neighSlug,
              zipCode: neighItem.zipCode, 
              type: 'neighborhood' 
          });
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
  <div class="home-search-bar-container">
    <div class="first-search-div" 
         :class="isFocused ? 'ring-2 ring-slate-900/5 border-slate-400' : 'border-slate-200'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
      <input 
        type="text" 
        placeholder="İl, ilçe veya mahalle ismi yazın..."
        v-model="query"
        @focus="onFocus"
        @blur="onBlur"
        :disabled="loading"
      />
    </div>
    
    <div v-if="isFocused && query.length >= 2" class="search-detail-container">
      <div v-if="results.length > 0" class="divide-y divide-slate-100">
        <NuxtLink
          v-for="(res, i) in results"
          :key="i"
          :to="res.type === 'city' ? `/${res.citySlug}` : res.type === 'district' ? `/${res.citySlug}/${res.districtSlug}` : `/${res.citySlug}/${res.districtSlug}/${res.neighborhoodSlug}`"
          class="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors"
        >
          <div class="location-icon">
            <Map v-if="res.type === 'city'" class="w-4 h-4" />
            <Building2 v-else-if="res.type === 'district'" class="w-4 h-4" />
            <MapPin v-else class="w-4 h-4" />
          </div>
          <div class="location-info">
            <div>{{ titleCase(res.neighborhood || res.district || res.city) }}</div>
            <div>{{ [titleCase(res.city), titleCase(res.district)].filter(Boolean).join(' / ') }}</div>
          </div>
          <div v-if="res.zipCode" class="search-zip-code">{{ res.zipCode }}</div>
        </NuxtLink>
      </div>
      <div v-else class="p-8 text-center text-slate-400 text-sm">Sonuç bulunamadı</div>
    </div>
  </div>
</template>
