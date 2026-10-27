<script setup lang="ts">
import { buildCityItemFromJson, type CityJsonRow } from '~/utils/cityJson';
import { getSpanishDataUrl } from '~/utils/spanishData';
import { slugify } from '~/utils/slugify';

const dataBaseURL = useRuntimeConfig().app.baseURL;
const spanishDataUrl = getSpanishDataUrl(dataBaseURL, import.meta.server);
const { data: cities } = await useAsyncData('spanish-cities', async () => {
  const rows = await $fetch<CityJsonRow[]>(spanishDataUrl);
  const city = buildCityItemFromJson(rows);
  if (!city) return [];

  return [{
    slug: slugify(city.name),
    name: city.name,
    districtCount: Object.keys(city.districts).length,
  }];
});

useHead({
  htmlAttrs: { lang: 'es' },
  title: 'Códigos postales de España',
  meta: [
    {
      name: 'description',
      content: 'Consulta los códigos postales de Madrid y sus barrios.',
    },
  ],
});
usePageSeo({
  title: 'Códigos postales de España',
  description: 'Consulta los códigos postales de Madrid y sus barrios.',
});
</script>

<template>
  <div class="animate-in fade-in duration-500">
    <div class="home-h1-container">
      <h1>Códigos postales de España</h1>
      <p>Consulta los códigos postales de las ciudades, distritos y barrios.</p>
    </div>
    <div class="home-cities">
      <NuxtLink v-for="city in cities" :key="city.slug" :to="`/es/${city.slug}`">
        <div>{{ titleCase(city.name) }}</div>
        <div>{{ city.districtCount }} DISTRITOS</div>
      </NuxtLink>
    </div>
  </div>
</template>
