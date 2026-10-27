<script setup lang="ts">
import { computed } from 'vue';
import { ArrowLeft, ChevronRight } from 'lucide-vue-next';
import { buildCityItemFromJson, type CityJsonRow } from '~/utils/cityJson';
import { slugify } from '~/utils/slugify';
import { getSpanishDataUrl } from '~/utils/spanishData';

type CityPageData = {
  name: string;
  districts: Record<string, { name: string; neighborhoodCount: number }>;
};

const route = useRoute();
const citySlug = computed(() => route.params.city as string);
const dataBaseURL = useRuntimeConfig().app.baseURL;
const spanishDataUrl = getSpanishDataUrl(dataBaseURL, import.meta.server);

const { data: cityItem } = await useAsyncData<CityPageData | null>(
  () => `spanish-city-page-data-${citySlug.value}`,
  async () => {
    const cityJson = await $fetch<CityJsonRow[]>(spanishDataUrl);
    const city = buildCityItemFromJson(cityJson);
    if (!city || slugify(city.name) !== citySlug.value) return null;

    return {
      name: city.name,
      districts: Object.fromEntries(
        Object.entries(city.districts).map(([slug, district]) => [
          slug,
          {
            name: district.name,
            neighborhoodCount: Object.keys(district.neighborhoods).length,
          },
        ])
      ),
    };
  }
);

const pageTitle = computed(() =>
  cityItem.value ? `Códigos postales de ${titleCase(cityItem.value.name)}` : 'Ciudad no encontrada'
);
const pageDescription = computed(() =>
  cityItem.value
    ? `Consulta los códigos postales de los distritos y barrios de ${titleCase(cityItem.value.name)}.`
    : 'Guía de códigos postales de España.'
);

useHead({
  htmlAttrs: { lang: 'es' },
  title: pageTitle,
  meta: [{ name: 'description', content: pageDescription }],
});
usePageSeo({ title: pageTitle, description: pageDescription });

const districts = computed(() =>
  Object.entries(cityItem.value?.districts || {}).sort(([, a], [, b]) =>
    a.name.localeCompare(b.name, 'es')
  )
);
</script>

<template>
  <div v-if="cityItem" class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="cityTitleContainer">
      <NuxtLink to="/es">
        <ArrowLeft class="w-5 h-5" />
      </NuxtLink>
      <div>
        <h1>Códigos postales de {{ titleCase(cityItem.name) }}</h1>
        <p>{{ districts.length }} DISTRITOS</p>
      </div>
    </div>

    <div class="districts">
      <NuxtLink
        v-for="[districtSlug, district] in districts"
        :key="districtSlug"
        :to="`/es/${citySlug}/${districtSlug}`"
      >
        <div>
          <h3>{{ titleCase(district.name) }}</h3>
          <p>{{ district.neighborhoodCount }} barrios</p>
        </div>
        <ChevronRight class="w-5 h-5 text-slate-300" />
      </NuxtLink>
    </div>
  </div>
  <div v-else class="max-w-2xl mx-auto py-12 text-center text-slate-500">
    <h1 class="font-bold text-lg mb-2">Ciudad no encontrada</h1>
    <NuxtLink to="/es" class="underline">Volver a las ciudades</NuxtLink>
  </div>
</template>
