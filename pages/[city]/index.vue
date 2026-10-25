<script setup lang="ts">
import { computed } from 'vue';
import { ArrowLeft, ChevronRight, MapPin } from 'lucide-vue-next';
import { buildCityItemFromJson, type CityJsonRow } from '~/utils/cityJson';

type CityPageData = {
  name: string;
  mapCode?: string;
  districts: Record<string, { name: string; neighborhoodCount: number }>;
};

const route = useRoute();
const citySlug = computed(() => route.params.city as string);
const dataBaseURL = useRuntimeConfig().app.baseURL;
const cityDataUrl = computed(
  () =>
    import.meta.server
      ? `/api/data/${encodeURIComponent(citySlug.value)}`
      : `${dataBaseURL}data/cities/${encodeURIComponent(citySlug.value)}.json`
);

const { data: cityItem } = await useAsyncData<CityPageData | null>(
  () => `city-page-data-${citySlug.value}`,
  async () => {
    const cityJson = await $fetch<CityJsonRow[]>(cityDataUrl.value);
    const city = buildCityItemFromJson(cityJson);
    if (!city) return null;

    return {
      name: city.name,
      mapCode: city.mapCode,
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
const currentYear = new Date().getFullYear();
const pageTitle = computed(() =>
  cityItem.value ? `${titleCase(cityItem.value.name)} Posta Kodları ve İlçeleri ${currentYear}` : 'Şehir Bulunamadı'
);
const pageDesc = computed(() => {
  if (!cityItem.value) return 'Posta Kodu Rehberi';
  return `${titleCase(
    cityItem.value.name
  )} iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın! Güncel ${currentYear} verileri ile ${titleCase(cityItem.value.name)} posta kodları ve ilçeleri listesi.`;
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
      <NuxtLink to="/">
        <ArrowLeft class="w-5 h-5" />
      </NuxtLink>
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
      <NuxtLink v-for="[distSlug, distItem] in districts" :key="distSlug" :to="`/${citySlug}/${distSlug}`">
        <div>
          <h3>{{ titleCase(distItem.name) }}</h3>
          <p>
            {{ distItem.neighborhoodCount }} mahalle
          </p>
        </div>
        <ChevronRight class="w-5 h-5 text-slate-300" />
      </NuxtLink>
    </div>

    <div v-if="route.path === '/aksaray'">
      <br /><br />
      <h2 style="margin-top: 4rem;">Aksaray Ne Zaman İl Oldu?</h2>
      <p style="line-height: 1.6;">Aksaray, Cumhuriyet döneminde ilk kez <b>1920</b> yılında il olmuş,
        <b>1933</b> yılında ilçe yapılmış ve <b>15 Haziran 1989</b> tarihli ve 3578 sayılı kanunla Niğde'den ayrılarak
        yeniden il statüsü kazanmıştır.</p>

      <ul style="margin-top: 2rem; padding-left: 1.5rem;">
        <li style="list-style: disc; margin: .5rem 0;"><b>1920</b>: Kurtuluş Savaşı sürecinde mutasarrıflıktan vilayete
          (il) dönüştürülmüştür.</li>
        <li style="list-style: disc; margin: .5rem 0;"><b>1933</b>: 20 Mayıs 1933 tarihli ve 2197 sayılı kanunla il
          statüsü kaldırılarak Niğde'ye bağlı bir ilçe haline getirilmiştir.</li>
        <li style="list-style: disc; margin: .5rem 0;"><b>1989</b>: 56 yıl ilçe olarak kaldıktan sonra, 15 Haziran
          1989'da çıkarılan 3578 sayılı yasa ile tekrar bağımsız bir il olmuştur.</li>
      </ul>
    </div>


  </div>
</template>
