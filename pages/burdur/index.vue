<script setup lang="ts">
import { ArrowLeft, ChevronRight } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";

// const { data: burdurData } = await useAsyncData("burdur-data", () =>
//   $fetch<any[]>("https://pkodlari.com/data/burdur.json")
// );

// const districts = computed(() => {
//   if (!burdurData.value) return [];
//   const districtMap: Record<string, { name: string; count: number }> = {};

//   burdurData.value.forEach((item) => {
//     const distName = item.ilce || "MERKEZ";
//     const distSlug = slugify(distName);
//     if (!districtMap[distSlug]) {
//       districtMap[distSlug] = { name: distName, count: 0 };
//     }
//     districtMap[distSlug].count++;
//   });

//   return Object.entries(districtMap).sort(([, a], [, b]) =>
//     a.name.localeCompare(b.name, "tr")
//   );
// });

const pageTitle = "Burdur Posta Kodları";
const pageDesc =
  "Burdur iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!";

useHead({
  title: pageTitle,
  meta: [{ name: "description", content: pageDesc }],
  script: [
    {
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
            name: "Burdur",
            item: "https://pkodlari.com/burdur",
          },
        ],
      }),
    },
  ],
});

usePageSeo({ title: pageTitle, description: pageDesc });
</script>

<template>
<div class="animate-in fade-in duration-500 max-w-4xl mx-auto"><div class="mb-10 flex items-center gap-4"><a href="/" class="text-slate-400 hover:text-slate-900 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon w-5 h-5"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></a><div><h1 class="text-3xl font-bold text-slate-900 tracking-tight">Burdur Posta Kodları</h1><p class="text-slate-500 text-sm font-medium uppercase tracking-wider">11 İLÇE</p></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[--><a href="/burdur/aglasun" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Ağlasun</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">23 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/burdur/altinyayla" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Altınyayla</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">15 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/burdur/bucak" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Bucak</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">22 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/burdur/cavdir" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Çavdır</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">24 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/burdur/celtikci" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Çeltikçi</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">16 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/burdur/golhisar" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Gölhisar</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">54 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/burdur/karamanli" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Karamanlı</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">32 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/burdur/kemer" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Kemer</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">16 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/burdur/merkez" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Merkez</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">121 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/burdur/tefenni" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Tefenni</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">27 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/burdur/yesilova" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Yeşilova</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">64 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a></div></div>
  <!--<div class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="mb-10 flex items-center gap-4">
      <NuxtLink to="/" class="text-slate-400 hover:text-slate-900 transition-colors">
        <ArrowLeft class="w-5 h-5" />
      </NuxtLink>
      <div>
        <h1 class="text-3xl font-bold text-slate-900 tracking-tight">
          Burdur Posta Kodları
        </h1>
        <p class="text-slate-500 text-sm font-medium uppercase tracking-wider">
          {{ districts.length }} İLÇE
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <NuxtLink
        v-for="[distSlug, distItem] in districts"
        :key="distSlug"
        :to="`/burdur/${distSlug}`"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
      >
        <div>
          <h3 class="font-bold text-slate-900 text-lg">{{ titleCase(distItem.name) }}</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            {{ distItem.count }} mahalle
          </p>
        </div>
        <ChevronRight class="w-5 h-5 text-slate-300" />
      </NuxtLink>
    </div>
  </div>-->
</template>
