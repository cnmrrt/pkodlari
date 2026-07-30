<script setup lang="ts">
import { ArrowLeft, ChevronRight } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";

const pageTitle = "Kastamonu Posta Kodları";
const pageDesc =
  "Kastamonu iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!";

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
            name: "Kastamonu",
            item: "https://pkodlari.com/kastamonu",
          },
        ],
      }),
    },
  ],
});

usePageSeo({ title: pageTitle, description: pageDesc });
</script>

<template>
  <div class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="mb-10 flex items-center gap-4">
      <a href="/" class="text-slate-400 hover:text-slate-900 transition-colors"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-arrow-left-icon w-5 h-5"
        >
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path></svg
      ></a>
      <div>
        <h1 class="text-3xl font-bold text-slate-900 tracking-tight">
          Kastamonu Posta Kodları
        </h1>
        <p class="text-slate-500 text-sm font-medium uppercase tracking-wider">20 İLÇE</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <!--[--><a
        href="/kastamonu/abana"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Abana</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            50 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/agli"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Ağlı</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            73 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/arac"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Araç</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            381 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/azdavay"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Azdavay</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            318 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/bozkurt"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Bozkurt</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            192 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/cide"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Cide</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            269 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/catalzeytin"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Çatalzeytin</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            218 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/daday"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Daday</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            271 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/devrekani"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Devrekani</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            237 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/doganyurt"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Doğanyurt</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            87 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/hanonu"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Hanönü</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            134 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/ihsangazi"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">İhsangazi</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            128 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/inebolu"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">İnebolu</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            228 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/kure"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Küre</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            168 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/merkez"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Merkez</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            626 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/pinarbasi"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Pınarbaşı</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            175 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/seydiler"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Seydiler</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            80 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/senpazar"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Şenpazar</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            74 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/taskopru"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Taşköprü</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            444 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/kastamonu/tosya"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Tosya</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            166 mahalle
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><!--]-->
    </div>
  </div>

  <!--<div class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="mb-10 flex items-center gap-4">
      <NuxtLink to="/" class="text-slate-400 hover:text-slate-900 transition-colors"
        ><ArrowLeft class="w-5 h-5"
      /></NuxtLink>
      <div>
        <h1 class="text-3xl font-bold text-slate-900 tracking-tight">
          Kastamonu Posta Kodları
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
        :to="`/kastamonu/${distSlug}`"
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
