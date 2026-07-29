<script setup lang="ts">
import { ArrowLeft, ChevronRight } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";

// const { data: orduData } = await useAsyncData("ordu-data", () =>
//   $fetch<any[]>("https://pkodlari.com/data/ordu.json")
// );

// const districts = computed(() => {
//   if (!orduData.value) return [];
//   const districtMap: Record<string, { name: string; count: number }> = {};

//   orduData.value.forEach((item) => {
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

const pageTitle = "Ordu Posta Kodları";
const pageDesc =
  "Ordu iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!";

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
            name: "Ordu",
            item: "https://pkodlari.com/ordu",
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
          Ordu Posta Kodları
        </h1>
        <p class="text-slate-500 text-sm font-medium uppercase tracking-wider">19 İLÇE</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <!--[--><a
        href="/ordu/akkus"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Akkuş</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            44 mahalle
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
        href="/ordu/altinordu"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Altınordu</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            93 mahalle
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
        href="/ordu/aybasti"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Aybastı</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            21 mahalle
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
        href="/ordu/camas"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Çamaş</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            23 mahalle
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
        href="/ordu/catalpinar"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Çatalpınar</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            23 mahalle
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
        href="/ordu/caybasi"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Çaybaşı</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            26 mahalle
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
        href="/ordu/fatsa"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Fatsa</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            90 mahalle
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
        href="/ordu/golkoy"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Gölköy</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            30 mahalle
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
        href="/ordu/gulyali"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Gülyalı</h3>
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
        href="/ordu/gurgentepe"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Gürgentepe</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            23 mahalle
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
        href="/ordu/ikizce"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">İkizce</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            32 mahalle
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
        href="/ordu/kabaduz"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Kabadüz</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            19 mahalle
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
        href="/ordu/kabatas"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Kabataş</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            18 mahalle
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
        href="/ordu/korgan"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Korgan</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            29 mahalle
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
        href="/ordu/kumru"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Kumru</h3>
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
        href="/ordu/mesudiye"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Mesudiye</h3>
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
        href="/ordu/persembe"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Perşembe</h3>
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
      ><a
        href="/ordu/ulubey"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Ulubey</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            41 mahalle
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
        href="/ordu/unye"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Ünye</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            85 mahalle
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
          Ordu Posta Kodları
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
        :to="`/ordu/${distSlug}`"
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
