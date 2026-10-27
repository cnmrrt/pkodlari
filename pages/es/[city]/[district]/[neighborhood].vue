<script setup lang="ts">
import { computed } from 'vue';
import { ArrowLeft, ChevronRight, MapPin, Copy, Check, Share2 } from 'lucide-vue-next';
import type { NeighborhoodItem } from '~/types';
import { buildCityItemFromJson, type CityJsonRow } from '~/utils/cityJson';
import { slugify } from '~/utils/slugify';
import { getSpanishDataUrl } from '~/utils/spanishData';

type NeighborhoodPageData = {
  cityName: string;
  districtName: string;
  neighborhood: NeighborhoodItem;
  neighborhoods: Record<string, NeighborhoodItem>;
};

const route = useRoute();
const copied = ref(false);
const citySlug = computed(() => route.params.city as string);
const districtSlug = computed(() => route.params.district as string);
const neighborhoodSlug = computed(() => route.params.neighborhood as string);
const dataBaseURL = useRuntimeConfig().app.baseURL;
const spanishDataUrl = getSpanishDataUrl(dataBaseURL, import.meta.server);

const { data: pageData } = await useAsyncData<NeighborhoodPageData | null>(
  () => `spanish-neighborhood-page-data-${citySlug.value}-${districtSlug.value}-${neighborhoodSlug.value}`,
  async () => {
    const cityJson = await $fetch<CityJsonRow[]>(spanishDataUrl);
    const city = buildCityItemFromJson(cityJson);
    if (!city || slugify(city.name) !== citySlug.value) return null;
    const district = city?.districts[districtSlug.value];
    const neighborhood = district?.neighborhoods[neighborhoodSlug.value];
    if (!district || !neighborhood) return null;

    return {
      cityName: city.name,
      districtName: district.name,
      neighborhood,
      neighborhoods: district.neighborhoods,
    };
  }
);

const cityItem = computed(() => (pageData.value ? { name: pageData.value.cityName } : null));
const districtItem = computed(() => (pageData.value ? { name: pageData.value.districtName } : null));
const neighborhood = computed(() => pageData.value?.neighborhood);
const otherNeighborhoods = computed(() =>
  Object.entries(pageData.value?.neighborhoods || {})
    .filter(([slug]) => slug !== neighborhoodSlug.value)
    .sort(([, a], [, b]) => a.name.localeCompare(b.name, 'es'))
);
const isValid = computed(() => !!neighborhood.value);
const pageTitle = computed(() =>
  neighborhood.value
    ? `${titleCase(neighborhood.value.name)}: código postal (${titleCase(districtItem.value!.name)}, ${titleCase(cityItem.value!.name)})`
    : 'Código postal no encontrado'
);
const pageDescription = computed(() =>
  neighborhood.value && districtItem.value && cityItem.value
    ? `Consulta el código postal de ${titleCase(neighborhood.value.name)}, en ${titleCase(districtItem.value.name)}, ${titleCase(cityItem.value.name)}.`
    : 'Guía de códigos postales de España.'
);

useHead({
  htmlAttrs: { lang: 'es' },
  title: pageTitle,
  meta: [{ name: 'description', content: pageDescription }],
  script: [
    computed(() => {
      if (!cityItem.value || !districtItem.value || !neighborhood.value) return {};
      return {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://pkodlari.com/es' },
            {
              '@type': 'ListItem',
              position: 2,
              name: titleCase(cityItem.value.name),
              item: `https://pkodlari.com/es/${citySlug.value}`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: titleCase(districtItem.value.name),
              item: `https://pkodlari.com/es/${citySlug.value}/${districtSlug.value}`,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: titleCase(neighborhood.value.name),
              item: `https://pkodlari.com/es/${citySlug.value}/${districtSlug.value}/${neighborhoodSlug.value}`,
            },
          ],
        }),
      };
    }),
  ],
});
usePageSeo({ title: pageTitle, description: pageDescription });

const copyToClipboard = async () => {
  if (!neighborhood.value) return;
  await navigator.clipboard.writeText(neighborhood.value.zipCode);
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
};

const share = async () => {
  if (!navigator.share || !neighborhood.value || !cityItem.value || !districtItem.value) return;
  await navigator.share({
    title: `Código postal de ${titleCase(neighborhood.value.name)}`,
    text: `Código postal de ${titleCase(neighborhood.value.name)}, ${titleCase(districtItem.value.name)}, ${titleCase(cityItem.value.name)}: ${neighborhood.value.zipCode}`,
    url: window.location.href,
  });
};
</script>

<template>
  <div v-if="isValid" class="main-content-neighborhood animate-in fade-in">
    <nav class="breadcrumb">
      <NuxtLink to="/es" class="hover:text-slate-900 transition-colors">ESPAÑA</NuxtLink>
      <ChevronRight class="w-3 h-3" />
      <NuxtLink :to="`/es/${citySlug}`" class="hover:text-slate-900 transition-colors">
        {{ titleCase(cityItem!.name) }}
      </NuxtLink>
      <ChevronRight class="w-3 h-3" />
      <NuxtLink :to="`/es/${citySlug}/${districtSlug}`" class="hover:text-slate-900 transition-colors">
        {{ titleCase(districtItem!.name) }}
      </NuxtLink>
    </nav>

    <div class="main-info-container">
      <div class="main-info-title-container">
        <div class="main-info-logo">
          <MapPin class="w-6 h-6" />
        </div>
        <h1>{{ titleCase(neighborhood!.name) }}</h1>
        <p class="main-info-subtitle">{{ titleCase(districtItem!.name) }}, {{ titleCase(cityItem!.name) }}</p>
      </div>

      <div class="post-code-view-container">
        <div class="sub-post-code-view-container">
          <p>CÓDIGO POSTAL</p>
          <div class="postCode">{{ neighborhood!.zipCode }}</div>
          <button
            class="copy-btn active:scale-95"
            :class="copied ? 'green-btn' : 'black-btn'"
            @click="copyToClipboard"
          >
            <Check v-if="copied" />
            <Copy v-else />
            {{ copied ? 'COPIADO' : 'COPIAR CÓDIGO' }}
          </button>
        </div>
        <div class="btn-bg">{{ neighborhood!.zipCode.substring(0, 2) }}</div>
      </div>
    </div>

    <div class="share-btn">
      <button
        class="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest"
        @click="share"
      >
        <Share2 class="w-4 h-4" /> COMPARTIR
      </button>
    </div>

    <div v-if="neighborhood!.mapCode" class="map-container">
      <div class="map-title">
        <MapPin class="w-4 h-4 text-slate-400" />
        <h3>Ubicación</h3>
      </div>
      <div v-if="neighborhood!.mapCode!.trim().startsWith('<')" v-html="neighborhood!.mapCode" class="map"></div>
      <iframe
        v-else
        :src="neighborhood!.mapCode"
        class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100"
        loading="lazy"
      />
    </div>

    <section v-if="otherNeighborhoods.length" class="mt-8 other-neighborhoods">
      <h2 class="text-lg font-semibold text-slate-900 mb-4">
        Otros barrios de {{ titleCase(districtItem!.name) }}
      </h2>
      <div class="neighborhoods-links-container">
        <NuxtLink
          v-for="[slug, other] in otherNeighborhoods"
          :key="slug"
          :to="`/es/${citySlug}/${districtSlug}/${slug}`"
        >
          <div class="mahalle-name">
            <h3>{{ titleCase(other.name) }}</h3>
            <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">BARRIO</p>
          </div>
          <div class="mahalle-zip-code">
            <span>{{ other.zipCode }}</span>
            <ChevronRight />
          </div>
        </NuxtLink>
      </div>
    </section>

    <div class="page-text">
      <h2>¿A qué zona corresponde el código postal {{ neighborhood!.zipCode }}?</h2>
      <p>
        El código postal {{ neighborhood!.zipCode }} corresponde a {{ titleCase(neighborhood!.name) }},
        {{ titleCase(districtItem!.name) }}, {{ titleCase(cityItem!.name) }}.
      </p>
    </div>
  </div>
  <div v-else class="max-w-2xl mx-auto py-12 text-center text-slate-500">
    <h2 class="font-bold text-lg mb-2">No se encontraron datos</h2>
    <p class="text-sm mb-4">No se pudo encontrar el barrio solicitado. Comprueba la dirección.</p>
    <NuxtLink to="/es" class="mt-6 inline-block text-red-700 underline">Volver al inicio</NuxtLink>
  </div>
</template>
