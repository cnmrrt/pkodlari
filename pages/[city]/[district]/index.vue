<script setup lang="ts">
import { computed, ref } from 'vue';
import { ArrowLeft, Search, ChevronRight, MapPin } from 'lucide-vue-next';
import { buildCityItemFromJson } from '~/utils/cityJson';

const route = useRoute();
const filter = ref('');

const citySlug = computed(() => route.params.city as string);
const districtSlug = computed(() => route.params.district as string);

const { data: cityJson } = await useAsyncData(
  () => `city-data-${citySlug.value}`,
  () => $fetch<any[]>(`/api/data/${citySlug.value}`)
);

const cityItem = computed(() => (cityJson.value ? buildCityItemFromJson(cityJson.value) : null));
const districtItem = computed(() => cityItem.value?.districts[districtSlug.value]);

const pageTitle = computed(() =>
  districtItem.value
    ? `${titleCase(districtItem.value.name)} Posta Kodları`
    : 'İlçe Bulunamadı'
);
const pageDesc = computed(() => {
  if (!cityItem.value || !districtItem.value) return 'Posta Kodu Rehberi';
  return `${titleCase(cityItem.value.name)} ilinin ${titleCase(
    districtItem.value.name
  )} ilçesine bağlı mahallelerin posta kodlarını görmek için tıklayın!`;
});
useHead({
  title: pageTitle,
  meta: [{ name: 'description', content: pageDesc }],
  script: [
    computed(() => {
      if (!cityItem.value || !districtItem.value) return {};
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
            {
              '@type': 'ListItem',
              position: 3,
              name: titleCase(districtItem.value.name),
              item: `https://pkodlari.com/${citySlug.value}/${districtSlug.value}`,
            },
          ],
        }),
      };
    }),
  ],
});
usePageSeo({ title: pageTitle, description: pageDesc });

const isValid = computed(() => !!districtItem.value);

const neighs = computed(() => {
  if (!isValid.value) return [];
  const items = Object.entries(districtItem.value!.neighborhoods);
  return items
    .filter(([, n]) =>
      n.name.toLocaleLowerCase('tr').includes(filter.value.toLocaleLowerCase('tr'))
    )
    .sort(([, a], [, b]) => a.name.localeCompare(b.name, 'tr'));
});
</script>

<template>
  <div v-if="isValid" class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="header">
      <div class="districtTitleContainer">
        <NuxtLink
          :to="`/${citySlug}`"
          
          ><ArrowLeft class="w-5 h-5"
        /></NuxtLink>
        <div>
          <h1>
            {{ titleCase(districtItem.name) }} Posta Kodları
          </h1>
          <p>
            {{ titleCase(cityItem.name) }}
          </p>
        </div>
      </div>
      <div class="neighborhood-search-container">
        <Search />
        <input
          type="text"
          placeholder="Mahallelerde ara..."
          
          v-model="filter"
        />
      </div>
    </div>

    <div class="neighborhoods-links-container">
      <NuxtLink
        v-for="[nSlug, nItem] in neighs"
        :key="nSlug"
        :to="`/${citySlug}/${districtSlug}/${nSlug}`"
        
      >
        <div class="mahalle-name">
          <h4>
            {{ titleCase(nItem.name) }}
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >{{ nItem.zipCode }}</span
          >
          <ChevronRight
           
          />
        </div>
      </NuxtLink>
      <div
        v-if="neighs.length === 0"
        class="col-span-full p-12 text-center text-slate-400 text-sm"
      >
        Sonuç bulunamadı
      </div>
    </div>

    <div
      v-if="districtItem.mapCode"
      class="map-container"
    >
      <div class="map-title">
        <MapPin class="w-4 h-4 text-slate-400" />
        <h3>Konum</h3>
      </div>
      <div
        v-if="districtItem.mapCode.trim().startsWith('<')"
        v-html="districtItem.mapCode"
        class="map"
      ></div>
      <iframe
        v-else
        :src="districtItem.mapCode"
        class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>
