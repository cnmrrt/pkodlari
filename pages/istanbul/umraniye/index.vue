<script setup lang="ts">
import { ref, computed } from "vue";
import { ArrowLeft, Search, ChevronRight } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";

const filter = ref("");

const { data: rawNeighborhoods } = await useAsyncData("umraniye-data", () =>
  $fetch<any[]>("https://pkodlari.com/data/istanbul/umraniye.json")
);

const cityName = "İstanbul";
const citySlug = "istanbul";
const districtName = "ÜMRANİYE";
const districtSlug = "besiktas";

const districtData = computed(() => {
  if (!rawNeighborhoods.value || rawNeighborhoods.value.length === 0) return null;

  return {
    name: districtName,
    neighborhoods: rawNeighborhoods.value
      .map((item) => ({
        name: item.mahalle,
        zipCode: item.postaKodu,
        slug: slugify(item.mahalle),
      }))
      .sort((a, b) => a.name.localeCompare(b.name, "tr")),
  };
});

const isValid = computed(() => !!districtData.value);

const neighs = computed(() => {
  if (!isValid.value) return [];
  return districtData.value!.neighborhoods.filter((n) =>
    n.name.toLocaleLowerCase("tr").includes(filter.value.toLocaleLowerCase("tr"))
  );
});

const pageTitle = computed(() =>
  districtData.value
    ? `${cityName} ${titleCase(districtData.value.name)} Posta Kodları`
    : "İlçe Bulunamadı"
);

const pageDesc = computed(() =>
  districtData.value
    ? `${cityName} ilinin ${titleCase(
        districtData.value.name
      )} ilçesine bağlı mahallelerin posta kodlarını görmek için tıklayın!`
    : "Posta Kodu Rehberi"
);

useHead({
  title: pageTitle,
  meta: [{ name: "description", content: pageDesc }],
  script: [
    computed(() => {
      if (!districtData.value) return {};
      return {
        type: "application/ld+json",
        children: JSON.stringify({
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
              name: "İstanbul",
              item: `https://pkodlari.com/${citySlug}`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: titleCase(districtData.value.name),
              item: `https://pkodlari.com/${citySlug}/${districtSlug}`,
            },
          ],
        }),
      };
    }),
  ],
});

usePageSeo({ title: pageTitle, description: pageDesc });
</script>

<template>
  <div v-if="isValid" class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div class="flex items-center gap-4">
        <NuxtLink
          to="/istanbul"
          class="text-slate-400 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft class="w-5 h-5" />
        </NuxtLink>
        <div>
          <h1 class="text-3xl font-bold text-slate-900 tracking-tight">
            {{ titleCase(districtData.name) }} Posta Kodları
          </h1>
          <p class="text-slate-500 text-sm font-medium uppercase tracking-wider">
            {{ cityName }}
          </p>
        </div>
      </div>
      <div class="relative w-full md:w-64">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          v-model="filter"
          type="text"
          placeholder="Mahallelerde ara..."
          class="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-400 transition-all text-sm"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <NuxtLink
        v-for="nItem in neighs"
        :key="nItem.slug"
        :to="`/istanbul/${districtSlug}/${nItem.slug}`"
        class="soft-card p-5 flex items-center justify-between group"
      >
        <div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            {{ titleCase(nItem.name) }}
          </h4>
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm">
            {{ nItem.zipCode }}
          </span>
          <ChevronRight class="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
        </div>
      </NuxtLink>
      <div
        v-if="neighs.length === 0"
        class="col-span-full p-12 text-center text-slate-400 text-sm"
      >
        Sonuç bulunamadı
      </div>
    </div>
  </div>

  <div v-else class="py-32 text-center text-slate-400">
    <p>İlçe bulunamadı.</p>
    <NuxtLink :to="`/${citySlug}`" class="text-slate-900 underline mt-4 inline-block">
      {{ cityName }} Sayfasına Dön
    </NuxtLink>
  </div>
</template>