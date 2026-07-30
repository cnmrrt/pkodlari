<script setup lang="ts">
import { ref, computed } from "vue";
import { ArrowLeft, Search, ChevronRight } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";

const route = useRoute();
const filter = ref("");

useHead({
  title: "Gaziantep Şahinbey Posta Kodları",
  meta: [
    {
      name: "description",
      content:
        "Gaziantep ilinin Şahinbey ilçesine bağlı mahallelerin posta kodlarını görmek için tıklayın!",
    },
  ],
  script: [
    computed(() => {
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
              item: "https://pkodlari.com/gaziantep",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Gaziantep Şahinbey Posta Kodları",
              item: `https://pkodlari.com/gaziantep/sahinbey`,
            },
          ],
        }),
      };
    }),
  ],
});

usePageSeo({
  title: "Gaziantep Şahinbey Posta Kodları",
  description:
    "Gaziantep ilinin Şahinbey ilçesine bağlı mahallelerin posta kodlarını görmek için tıklayın!",
});
</script>

<template>
  <div class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div class="flex items-center gap-4">
        <a href="/gaziantep" class="text-slate-400 hover:text-slate-900 transition-colors"
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
            Şahinbey Posta Kodları
          </h1>
          <p class="text-slate-500 text-sm font-medium uppercase tracking-wider">
            Gaziantep
          </p>
        </div>
      </div>
      <!-- <div class="relative w-full md:w-64">
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
          class="lucide lucide-search-icon absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path></svg
        ><input
          type="text"
          placeholder="Mahallelerde ara..."
          class="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-400 transition-all text-sm"
        />
      </div> -->
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <a
        href="/gaziantep/sahinbey/23-nisan-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            23 Nisan Mahallesi
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
            >27070</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/25-aralik-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            25 Aralık Mahallesi
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
            >27100</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/60yil-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            60.Yıl Mahallesi
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
            >27070</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/75yil-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            75.Yıl Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/abdulhamid-han-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Abdülhamid Han Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/akbayir-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Akbayır Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/akbulut-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Akbulut Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/akkent-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Akkent Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/akpinar-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Akpınar Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/akyazi-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Akyazı Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/akyol-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Akyol Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27220</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/alaybey-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Alaybey Mahallesi
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
            >27220</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/alibaba-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Alibaba Mahallesi
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
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/alleben-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Alleben Mahallesi
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
            >27220</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/almali-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Almalı Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/aydinbaba-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Aydınbaba Mahallesi
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
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/baglarbasi-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Bağlarbaşı Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/bahcelievler-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Bahçelievler Mahallesi
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
            >27220</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/barak-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Barak Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27100</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/bayramli-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Bayramlı Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/bekirbey-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Bekirbey Mahallesi
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
            >27400</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/bekisli-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Bekişli Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/belenkoy-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Belenköy Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/beskuyu-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Beşkuyu Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/bestepe-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Beştepe Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/bey-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Bey Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27220</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/beyazlar-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Beyazlar Mahallesi
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
            >27070</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/beydilli-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Beydilli Mahallesi
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
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/binevler-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Binevler Mahallesi
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
            >27070</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/bostancik-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Bostancık Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/boyaci-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Boyacı Mahallesi
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
            >27400</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/bozca-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Bozca Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/bozoklar-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Bozoklar Mahallesi
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
            >27100</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/burc-esentepe-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Burç Esentepe Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/burc-karakuyu-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Burç Karakuyu Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/bulbulzade-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Bülbülzade Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/cabi-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Cabi Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27400</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/cebeler-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Cebeler Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/cengiz-topel-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Cengiz Topel Mahallesi
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
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/cevizli-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Cevizli Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/cumhuriyet-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Cumhuriyet Mahallesi
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
            >27200</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/cagdas-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Çağdaş Mahallesi
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
            >27070</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/camlica-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Çamlıca Mahallesi
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
            >27200</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/camtepe-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Çamtepe Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/capali-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Çapalı Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/cevreli-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Çevreli Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/cimenli-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Çimenli Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/coreklik-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Çöreklik Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/cubukdiken-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Çubukdiken Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/damlacik-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Damlacık Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/deniz-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Deniz Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27070</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/dereduzu-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Deredüzü Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/doganca-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Doğanca Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/dokur-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Dokur Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/dumlupinar-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Dumlupınar Mahallesi
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
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/durantas-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Durantaş Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/duztepe-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Düztepe Mahallesi
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
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/ekinli-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Ekinli Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/ertugrulgazi-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Ertuğrulgazi Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/firat-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Fırat Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27100</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/fidanlik-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Fidanlık Mahallesi
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
            >27070</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/gazitepe-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Gazitepe Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/geneyik-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Geneyik Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/gercigin-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Gerciğin Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/geylani-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Geylani Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/gulluce-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Güllüce Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/gulpinar-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Gülpınar Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/gumustekin-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Gümüştekin Mahallesi
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
            >27200</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/gunes-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Güneş Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/guneykent-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Güneykent Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/guzelvadi-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Güzelvadi Mahallesi
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
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/hacikopru-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Hacıköprü Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/hacikoy-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Hacıköy Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/hosgor-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Hoşgör Mahallesi
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
            >27200</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/ibn-i-sina-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            İbn-İ Sina Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/inonu-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">İnönü Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/istiklal-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            İstiklal Mahallesi
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
            >27070</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kabarcik-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Kabarcık Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kahvelipinar-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Kahvelipınar Mahallesi
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
            >27200</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kale-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Kale Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kaleboynu-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Kaleboynu Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kapcagiz-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Kapçağız Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/karacomak-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Karaçomak Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/karagoz-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Karagöz Mahallesi
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
            >27400</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/karatas-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Karataş Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/karayilan-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Karayılan Mahallesi
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
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kavaklik-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Kavaklık Mahallesi
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
            >27070</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kavsak-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Kavşak Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kazikli-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Kazıklı Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kepenek-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Kepenek Mahallesi
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
            >27400</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kerer-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Kerer Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kibris-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Kıbrıs Mahallesi
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
            >27200</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kilincoglu-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Kılınçoğlu Mahallesi
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
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/killik-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Killik Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kolejtepe-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Kolejtepe Mahallesi
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
            >27070</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/konak-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Konak Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27070</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kozluca-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Kozluca Mahallesi
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
            >27400</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kumruhamurkesen-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Kumruhamurkesen Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kurbanbaba-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Kurbanbaba Mahallesi
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
            >27200</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kuscu-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Kuşçu Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kucukkizilhisar-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Küçükkızılhisar Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kulecik-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Külecik Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/kurum-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Kürüm Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/malazgirt-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Malazgirt Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/mavikent-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Mavikent Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/mimar-sinan-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Mimar Sinan Mahallesi
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
            >27070</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/morcali-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Morcalı Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/muhacirosman-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Muhacirosman Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/narlica-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Narlıca Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/narlitepe-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Narlıtepe Mahallesi
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
            >27100</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/nuripazarbasi-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Nuripazarbaşı Mahallesi
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
            >27200</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/ocaklar-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Ocaklar Mahallesi
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
            >27100</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/onur-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Onur Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27200</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/ortaklar-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Ortaklar Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/osmanli-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Osmanlı Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/ozanli-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Ozanlı Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/ogretmenevleri-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Öğretmenevleri Mahallesi
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
            >27070</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/perilikaya-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Perilikaya Mahallesi
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
            >27100</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/sacakli-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Saçaklı Mahallesi
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
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/saribasak-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Sarıbaşak Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/sarikaya-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Sarıkaya Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/sarisalkim-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Sarısalkım Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/sarit-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Sarıt Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/savcili-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Savcılı Mahallesi
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
            >27200</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/selcuklu-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Selçuklu Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/serince-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Serince Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/serinevler-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Serinevler Mahallesi
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
            >27100</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/sirasogut-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Sırasöğüt Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/sultan-selim-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Sultan Selim Mahallesi
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
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/suyabatmaz-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Suyabatmaz Mahallesi
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
            >27400</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/sahinbey-mulk-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Şahinbey Mülk Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/sahintepe-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Şahintepe Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/sahveli-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Şahveli Mahallesi
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
            >27220</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/senyurt-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Şenyurt Mahallesi
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
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/tekstilkent-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Tekstilkent Mahallesi
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
            >27100</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/tiyekli-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Tiyekli Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/toreli-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Töreli Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/turkmenler-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Türkmenler Mahallesi
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
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/turkozu-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Türközü Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/turktepe-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Türktepe Mahallesi
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
            >27400</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/ufacik-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Ufacık Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/ugurtepe-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Uğurtepe Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/ulas-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Ulaş Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27200</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/ucoklar-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Üçoklar Mahallesi
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
            >27100</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/unaldi-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Ünaldı Mahallesi
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
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/vatan-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Vatan Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27100</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yagdover-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yağdöver Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yamactepe-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yamaçtepe Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yavuzlar-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yavuzlar Mahallesi
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
            >27300</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yayci-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">Yaycı Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm"
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yaylacik-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yaylacık Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yazibagi-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yazıbağı Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yazicik-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yazıcık Mahallesi
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
            >27400</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yeditepe-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yeditepe Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yenikoy-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yeniköy Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yesilevler-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yeşilevler Mahallesi
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
            >27070</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yesilkent-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yeşilkent Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yesilkoy-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yeşilköy Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yesilpinar-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yeşilpınar Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yesilyurt-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yeşilyurt Mahallesi
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
            >27470</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yigmatepe-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yığmatepe Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yoguntas-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yoğuntaş Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/yukaribayir-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Yukarıbayır Mahallesi
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
            >27200</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><a
        href="/gaziantep/sahinbey/zeytinli-mahallesi"
        class="soft-card p-5 flex items-center justify-between group"
        ><div class="min-w-0 pr-4">
          <h4 class="font-semibold text-slate-900 truncate text-base">
            Zeytinli Mahallesi
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
            >27010</span
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
            class="lucide lucide-chevron-right-icon w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></div></a
      ><!---->
    </div>
  </div>
</template>
