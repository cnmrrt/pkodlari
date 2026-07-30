<script setup lang="ts">
import { ArrowLeft, ChevronRight } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";

const pageTitle = "Gaziantep Posta Kodları";
const pageDesc =
  "Gaziantep iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!";

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
            name: "Gaziantep",
            item: "https://pkodlari.com/gaziantep",
          },
        ],
      }),
    },
  ],
});

usePageSeo({ title: pageTitle, description: pageDesc });
</script>

<template>
<div class="animate-in fade-in duration-500 max-w-4xl mx-auto"><div class="mb-10 flex items-center gap-4"><a href="/" class="text-slate-400 hover:text-slate-900 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon w-5 h-5"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></a><div><h1 class="text-3xl font-bold text-slate-900 tracking-tight">Gaziantep Posta Kodları</h1><p class="text-slate-500 text-sm font-medium uppercase tracking-wider">9 İLÇE</p></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[--><a href="/gaziantep/araban" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Araban</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">49 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/gaziantep/islahiye" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">İslahiye</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">71 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/gaziantep/karkamis" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Karkamış</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">39 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/gaziantep/nizip" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Nizip</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">111 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/gaziantep/nurdagi" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Nurdağı</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">48 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/gaziantep/oguzeli" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Oğuzeli</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">92 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/gaziantep/sahinbey" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Şahinbey</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">164 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/gaziantep/sehitkamil" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Şehitkamil</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">122 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/gaziantep/yavuzeli" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Yavuzeli</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">44 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a></div></div>
  <!--<div class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="mb-10 flex items-center gap-4">
      <NuxtLink to="/" class="text-slate-400 hover:text-slate-900 transition-colors"
        ><ArrowLeft class="w-5 h-5"
      /></NuxtLink>
      <div>
        <h1 class="text-3xl font-bold text-slate-900 tracking-tight">
          Gaziantep Posta Kodları
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
        :to="`/gaziantep/${distSlug}`"
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
