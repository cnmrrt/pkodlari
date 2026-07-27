<script setup lang="ts">
import { computed, ref } from "vue";
import { ArrowLeft, Search, ChevronRight, MapPin } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";

const route = useRoute();
const filter = ref("");

const citySlug = computed(() => route.params.city as string);
const districtSlug = computed(() => route.params.district as string);

const { data: cityData } = await useAsyncData(
  () => `city-data-${citySlug.value}`,
  async () => {
    try {
      return await $fetch<any[]>(`https://pkodlari.com/data/${citySlug.value}.json`);
    } catch {
      return [];
    }
  }
);

const cityName = computed(() => titleCase(citySlug.value));

const districtItem = computed(() => {
  if (!cityData.value) return null;
  const filtered = cityData.value.filter(
    (item) => slugify(item.ilce || "MERKEZ") === districtSlug.value
  );
  if (filtered.length === 0) return null;

  return {
    name: filtered[0].ilce || "MERKEZ",
    neighborhoods: filtered
      .map((item) => ({
        name: item.mahalle,
        zipCode: item.postaKodu,
        slug: slugify(item.mahalle),
      }))
      .sort((a, b) => a.name.localeCompare(b.name, "tr")),
  };
});

const pageTitle = computed(() =>
  districtItem.value
    ? `${titleCase(districtItem.value.name)} Posta Kodları`
    : "İlçe Bulunamadı"
);
const pageDesc = computed(() => {
  if (!districtItem.value) return "Posta Kodu Rehberi";
  return `${cityName.value} ilinin ${titleCase(
    districtItem.value.name
  )} ilçesine bağlı mahallelerin posta kodlarını görmek için tıklayın!`;
});

useHead({
  title: pageTitle,
  meta: [{ name: "description", content: pageDesc }],
  script: [
    computed(() => {
      if (!districtItem.value) return {};
      return {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Anasayfa",
              item: "https://pkodlari.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: cityName.value,
              item: `https://pkodlari.com/${citySlug.value}`,
            },
            {
              "@type": "ListItem",
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
  if (!districtItem.value) return [];
  return districtItem.value.neighborhoods.filter((neigh) =>
    neigh.name.toLocaleLowerCase("tr").includes(filter.value.toLocaleLowerCase("tr"))
  );
});
</script>

<template>
  <div v-if="isValid" class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div class="flex items-center gap-4">
        <NuxtLink
          :to="`/${citySlug}`"
          class="text-slate-400 hover:text-slate-900 transition-colors"
          ><ArrowLeft class="w-5 h-5"
        /></NuxtLink>
        <div>
          <h1 class="text-3xl font-bold text-slate-900 tracking-tight">
            {{ titleCase(districtItem.name) }} Posta Kodları
          </h1>
          <p class="text-slate-500 text-sm font-medium uppercase tracking-wider">
            {{ cityName }}
          </p>
        </div>
      </div>
      <div class="relative w-full md:w-64">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Mahallelerde ara..."
          class="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-400 transition-all text-sm"
          v-model="filter"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <NuxtLink
        v-for="nItem in neighs"
        :key="nItem.slug"
        :to="`/${citySlug}/${districtSlug}/${nItem.slug}`"
        class="soft-card p-5 flex items-center justify-between group"
      >
        <div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            {{ titleCase(nItem.name) }}
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >{{ nItem.zipCode }}</span
          >
          <ChevronRight
            class="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
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
      class="mt-12 bg-white border border-slate-200 rounded-[2rem] p-4 md:p-6 shadow-sm overflow-hidden"
    >
      <div class="mb-4 flex items-center gap-2 px-2">
        <MapPin class="w-4 h-4 text-slate-400" />
        <h3 class="font-bold text-slate-900 text-sm uppercase tracking-wide">Konum</h3>
      </div>
      <div
        v-if="districtItem.mapCode.trim().startsWith('<')"
        v-html="districtItem.mapCode"
        class="w-full aspect-video rounded-2xl overflow-hidden [&>iframe]:w-full [&>iframe]:h-full"
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
