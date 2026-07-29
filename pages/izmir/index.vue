<script setup lang="ts">
import { ArrowLeft, ChevronRight } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";

// const { data: izmirData } = await useAsyncData("izmir-data", () =>
//   $fetch<any[]>("https://pkodlari.com/data/izmir.json")
// );

// const districts = computed(() => {
//   if (!izmirData.value) return [];
//   const districtMap: Record<string, { name: string; count: number }> = {};

//   izmirData.value.forEach((item) => {
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

const pageTitle = "İzmir Posta Kodları";
const pageDesc =
  "İzmir iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!";

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
            name: "İzmir",
            item: "https://pkodlari.com/izmir",
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
          İzmir Posta Kodları
        </h1>
        <p class="text-slate-500 text-sm font-medium uppercase tracking-wider">30 İLÇE</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <!--[--><a
        href="/izmir/aliaga"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Aliağa</h3>
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
        href="/izmir/balcova"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Balçova</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            8 mahalle
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
        href="/izmir/bayindir"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Bayındır</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            58 mahalle
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
        href="/izmir/bayrakli"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Bayraklı</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            24 mahalle
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
        href="/izmir/bergama"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Bergama</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            138 mahalle
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
        href="/izmir/beydag"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Beydağ</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            25 mahalle
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
        href="/izmir/bornova"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Bornova</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            45 mahalle
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
        href="/izmir/buca"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Buca</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            48 mahalle
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
        href="/izmir/cesme"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Çeşme</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            25 mahalle
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
        href="/izmir/cigli"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Çiğli</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            27 mahalle
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
        href="/izmir/dikili"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Dikili</h3>
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
        href="/izmir/foca"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Foça</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            16 mahalle
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
        href="/izmir/gaziemir"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Gaziemir</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            17 mahalle
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
        href="/izmir/guzelbahce"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Güzelbahçe</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            12 mahalle
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
        href="/izmir/karabaglar"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Karabağlar</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            58 mahalle
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
        href="/izmir/karaburun"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Karaburun</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            16 mahalle
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
        href="/izmir/karsiyaka"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Karşıyaka</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            27 mahalle
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
        href="/izmir/kemalpasa"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Kemalpaşa</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            51 mahalle
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
        href="/izmir/kinik"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Kınık</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            38 mahalle
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
        href="/izmir/kiraz"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Kiraz</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            56 mahalle
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
        href="/izmir/konak"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Konak</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            113 mahalle
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
        href="/izmir/menderes"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Menderes</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            45 mahalle
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
        href="/izmir/menemen"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Menemen</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            67 mahalle
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
        href="/izmir/narlidere"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Narlıdere</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            11 mahalle
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
        href="/izmir/odemis"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Ödemiş</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            99 mahalle
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
        href="/izmir/seferihisar"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Seferihisar</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            22 mahalle
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
        href="/izmir/selcuk"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Selçuk</h3>
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
        href="/izmir/tire"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Tire</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            89 mahalle
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
        href="/izmir/torbali"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Torbalı</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            62 mahalle
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
        href="/izmir/urla"
        class="soft-card p-6 rounded-xl flex items-center justify-between"
        ><div>
          <h3 class="font-bold text-slate-900 text-lg">Urla</h3>
          <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">
            37 mahalle
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
          İzmir Posta Kodları
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
        :to="`/izmir/${distSlug}`"
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
