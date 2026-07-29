<script setup lang="ts">
import { ArrowLeft, ChevronRight } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";

// const { data: balikesirData } = await useAsyncData("balikesir-data", () =>
//   $fetch<any[]>("https://pkodlari.com/data/balikesir.json")
// );

// const districts = computed(() => {
//   if (!balikesirData.value) return [];
//   const districtMap: Record<string, { name: string; count: number }> = {};

//   balikesirData.value.forEach((item) => {
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

const pageTitle = "Balıkesir Posta Kodları";
const pageDesc =
  "Balıkesir iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!";

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
            name: "Balıkesir",
            item: "https://pkodlari.com/balikesir",
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
          Balıkesir Posta Kodları
        </h1>
        <p class="text-slate-500 text-sm font-medium uppercase tracking-wider">20 İLÇE</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <!--[--><a
        href="/balikesir/altieylul"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Altıeylül</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            95 mahalle
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
        href="/balikesir/ayvalik"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Ayvalık</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            34 mahalle
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
        href="/balikesir/balya"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Balya</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            46 mahalle
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
        href="/balikesir/bandirma"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Bandırma</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            55 mahalle
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
        href="/balikesir/bigadic"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Bigadiç</h3>
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
        href="/balikesir/burhaniye"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Burhaniye</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            40 mahalle
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
        href="/balikesir/dursunbey"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Dursunbey</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            110 mahalle
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
        href="/balikesir/edremit"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Edremit</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            47 mahalle
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
        href="/balikesir/erdek"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Erdek</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            28 mahalle
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
        href="/balikesir/gomec"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Gömeç</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            13 mahalle
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
        href="/balikesir/gonen"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Gönen</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            101 mahalle
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
        href="/balikesir/havran"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Havran</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            34 mahalle
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
        href="/balikesir/ivrindi"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">İvrindi</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            70 mahalle
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
        href="/balikesir/karesi"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Karesi</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            70 mahalle
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
        href="/balikesir/kepsut"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Kepsut</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            69 mahalle
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
        href="/balikesir/manyas"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Manyas</h3>
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
        href="/balikesir/marmara"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Marmara</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            14 mahalle
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
        href="/balikesir/savastepe"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Savaştepe</h3>
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
        href="/balikesir/sindirgi"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Sındırgı</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            75 mahalle
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
        href="/balikesir/susurluk"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Susurluk</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            54 mahalle
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
  <!-- <div class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="mb-10 flex items-center gap-4">
      <NuxtLink to="/" class="text-slate-400 hover:text-slate-900 transition-colors"
        ><ArrowLeft class="w-5 h-5"
      /></NuxtLink>
      <div>
        <h1 class="text-3xl font-bold text-slate-900 tracking-tight">
          Balıkesir Posta Kodları
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
        :to="`/balikesir/${distSlug}`"
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
