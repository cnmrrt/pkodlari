<script setup lang="ts">
import { computed } from 'vue';
import { ArrowLeft, ChevronRight, MapPin } from 'lucide-vue-next';
import { buildCityItemFromJson } from '~/utils/cityJson';

const route = useRoute();
const citySlug = computed(() => route.params.city as string);

const { data: cityJson } = await useAsyncData(
  () => `city-data-${citySlug.value}`,
  () => $fetch<any[]>(`/api/data/${citySlug.value}`)
);

const cityItem = computed(() => (cityJson.value ? buildCityItemFromJson(cityJson.value) : null));

const pageTitle = computed(() =>
  cityItem.value ? `${titleCase(cityItem.value.name)} Posta Kodları` : 'Şehir Bulunamadı'
);
const pageDesc = computed(() => {
  if (!cityItem.value) return 'Posta Kodu Rehberi';
  return `${titleCase(
    cityItem.value.name
  )} iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!`;
});
useHead({
  title: pageTitle,
  meta: [{ name: 'description', content: pageDesc }],
  script: [
    computed(() => {
      if (!cityItem.value) return {};
      return {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Anasayfa',
              item: `https://pkodlari.com/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: titleCase(cityItem.value.name),
              item: `https://pkodlari.com/${citySlug.value}`,
            },
          ],
        }),
      };
    }),
  ],
});
usePageSeo({ title: pageTitle, description: pageDesc });

const districts = computed(() => {
  if (!cityItem.value) return [];
  return Object.entries(cityItem.value.districts).sort(([, a], [, b]) =>
    a.name.localeCompare(b.name, 'tr')
  );
});

const isValid = computed(() => !!cityItem.value);
</script>

<template>
  <div v-if="isValid" class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="cityTitleContainer">
      <NuxtLink to="/" 
        ><ArrowLeft class="w-5 h-5"
      /></NuxtLink>
      <div>
        <h1>
          {{ titleCase(cityItem.name) }} Posta Kodları
        </h1>
        <p>
          {{ districts.length }} İLÇE
        </p>
      </div>
    </div>

    <div class="districts">
      <NuxtLink
        v-for="[distSlug, distItem] in districts"
        :key="distSlug"
        :to="`/${citySlug}/${distSlug}`"
        
      >
        <div>
          <h3>{{ titleCase(distItem.name) }}</h3>
          <p>
            {{ Object.keys(distItem.neighborhoods || {}).length }} mahalle
          </p>
        </div>
        <ChevronRight class="w-5 h-5 text-slate-300" />
      </NuxtLink>
    </div>

    <div
      v-if="cityItem.mapCode"
      class="map-container"
    >
      <div class="map-title">
        <MapPin class="w-4 h-4 text-slate-400" />
        <h3>Konum</h3>
      </div>
      <div
        v-if="cityItem.mapCode.trim().startsWith('<')"
        v-html="cityItem.mapCode"
        class="map"
      ></div>
      <iframe
        v-else
        :src="cityItem.mapCode"
        class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>
