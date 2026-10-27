<script setup lang="ts">
import { computed, ref } from 'vue';
import { ArrowLeft, Search, ChevronRight } from 'lucide-vue-next';
import type { DistrictItem } from '~/types';
import { buildCityItemFromJson, type CityJsonRow } from '~/utils/cityJson';
import { slugify } from '~/utils/slugify';
import { getSpanishDataUrl } from '~/utils/spanishData';

type DistrictPageData = {
  cityName: string;
  district: DistrictItem;
};

const route = useRoute();
const filter = ref('');
const citySlug = computed(() => route.params.city as string);
const districtSlug = computed(() => route.params.district as string);
const dataBaseURL = useRuntimeConfig().app.baseURL;
const spanishDataUrl = getSpanishDataUrl(dataBaseURL, import.meta.server);

const { data: pageData } = await useAsyncData<DistrictPageData | null>(
  () => `spanish-district-page-data-${citySlug.value}-${districtSlug.value}`,
  async () => {
    const cityJson = await $fetch<CityJsonRow[]>(spanishDataUrl);
    const city = buildCityItemFromJson(cityJson);
    if (!city || slugify(city.name) !== citySlug.value) return null;
    const district = city?.districts[districtSlug.value];
    if (!district) return null;

    return {
      cityName: city.name,
      district: {
        name: district.name,
        mapCode: district.mapCode,
        neighborhoods: district.neighborhoods,
      },
    };
  }
);

const cityItem = computed(() => (pageData.value ? { name: pageData.value.cityName } : null));
const districtItem = computed(() => pageData.value?.district);
const isValid = computed(() => !!districtItem.value);
const pageTitle = computed(() =>
  districtItem.value
    ? `Códigos postales de ${titleCase(districtItem.value.name)}`
    : 'Distrito no encontrado'
);
const pageDescription = computed(() =>
  cityItem.value && districtItem.value
    ? `Consulta los códigos postales de los barrios de ${titleCase(districtItem.value.name)}, ${titleCase(cityItem.value.name)}.`
    : 'Guía de códigos postales de España.'
);

useHead({
  htmlAttrs: { lang: 'es' },
  title: pageTitle,
  meta: [{ name: 'description', content: pageDescription }],
});
usePageSeo({ title: pageTitle, description: pageDescription });

const neighborhoods = computed(() => {
  if (!isValid.value) return [];
  return Object.entries(districtItem.value!.neighborhoods)
    .filter(([, neighborhood]) =>
      neighborhood.name.toLocaleLowerCase('es').includes(filter.value.toLocaleLowerCase('es'))
    )
    .sort(([, a], [, b]) => a.name.localeCompare(b.name, 'es'));
});
</script>

<template>
  <div v-if="isValid" class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="header">
      <div class="districtTitleContainer">
        <NuxtLink :to="`/es/${citySlug}`">
          <ArrowLeft class="w-5 h-5" />
        </NuxtLink>
        <div>
          <h1>Códigos postales de {{ titleCase(districtItem!.name) }}</h1>
          <p>{{ titleCase(cityItem!.name) }}</p>
        </div>
      </div>
      <div class="neighborhood-search-container">
        <Search />
        <input v-model="filter" type="text" placeholder="Buscar barrios..." />
      </div>
    </div>

    <div class="neighborhoods-links-container">
      <NuxtLink
        v-for="[neighborhoodSlug, neighborhood] in neighborhoods"
        :key="neighborhoodSlug"
        :to="`/es/${citySlug}/${districtSlug}/${neighborhoodSlug}`"
      >
        <div class="mahalle-name">
          <h4>{{ titleCase(neighborhood.name) }}</h4>
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">BARRIO</p>
        </div>
        <div class="mahalle-zip-code">
          <span>{{ neighborhood.zipCode }}</span>
          <ChevronRight />
        </div>
      </NuxtLink>
      <div v-if="neighborhoods.length === 0" class="col-span-full p-12 text-center text-slate-400 text-sm">
        No se encontraron resultados
      </div>
    </div>
  </div>
  <div v-else class="max-w-2xl mx-auto py-12 text-center text-slate-500">
    <h1 class="font-bold text-lg mb-2">Distrito no encontrado</h1>
    <NuxtLink to="/es" class="underline">Volver a las ciudades</NuxtLink>
  </div>
</template>
