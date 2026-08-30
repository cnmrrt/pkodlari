<script setup lang="ts">
import { inject, computed, ref } from "vue";
import type { Ref } from "vue";
import { ArrowLeft, Search, ChevronRight, MapPin } from "lucide-vue-next";

const route = useRoute();

const pageTitle = "Tokat Merkez Posta Kodları"
const pageDesc = "Tokat ilinin Merkez ilçesine bağlı mahallelerin posta kodlarını görmek için tıklayın!"

useHead({
  title: pageTitle,
  meta: [{ name: "description", content: pageDesc }],
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
              item: `https://pkodlari.com/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Tokat Posta Kodları",
              item: `https://pkodlari.com/tokat`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Tokat Merkez Posta Kodları",
              item: `https://pkodlari.com/tokat/merkez`,
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
  <div class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="header">
      <div class="districtTitleContainer">
        <a href="/tokat" 
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
            
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path></svg
        ></a>
        <div>
          <h1>
            Merkez Posta Kodları
          </h1>
          <p>Tokat</p>
        </div>
      </div>
      <!-- <div class="neighborhood-search-container">
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
          
          value=""
        />
      </div> -->
    </div>
    <div class="neighborhoods-links-container">
      <a
        href="/tokat/merkez/acipinar-koyu"
        
        ><div class="mahalle-name">
          <h4>Acıpınar Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/ahmetalan-koyu"
        
        ><div class="mahalle-name">
          <h4>Ahmetalan Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/akdegirmen-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Akdeğirmen Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/akin-mahallesi-camlibel-beldesi"
        
        ><div class="mahalle-name">
          <h4>
            Akın Mahallesi (Çamlıbel Beldesi)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60225</span
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
        href="/tokat/merkez/aktepe-mahallesi-camlibel-beldesi"
        
        ><div class="mahalle-name">
          <h4>
            Aktepe Mahallesi (Çamlıbel Beldesi)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60225</span
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
        href="/tokat/merkez/akyamac-koyu"
        
        ><div class="mahalle-name">
          <h4>Akyamaç Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/akyurt-koyu"
        
        ><div class="mahalle-name">
          <h4>Akyurt Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/alan-koyu"
        
        ><div class="mahalle-name">
          <h4>Alan Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/alaybey-ciftligi-mahallesi-dereyaka-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Alaybey Çiftliği Mahallesi (Dereyaka Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/ali-yucel-mahallesi-guryildiz-beldesi"
        
        ><div class="mahalle-name">
          <h4>
            Ali Yücel Mahallesi (Güryıldız Beldesi)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60240</span
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
        href="/tokat/merkez/alipasa-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Alipaşa Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/altintas-koyu"
        
        ><div class="mahalle-name">
          <h4>Altıntaş Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/altiyuzevler-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Altıyüzevler Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/aluc-koyu"
        
        ><div class="mahalle-name">
          <h4>Aluç Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/asagifirindere-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Aşağıfırındere Köyü
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/ataturk-mahallesi-kemalpasa-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Atatürk Mahallesi (Kemalpaşa Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/avsaragzi-koyu"
        
        ><div class="mahalle-name">
          <h4>Avşarağzı Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/aydinca-mahallesi-aydinca-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Aydınca Mahallesi (Aydınca Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/aydogdu-koyu"
        
        ><div class="mahalle-name">
          <h4>Aydoğdu Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/aydogdu-mahallesi-guzelce-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Aydoğdu Mahallesi (Güzelce Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/bagbasi-koyu"
        
        ><div class="mahalle-name">
          <h4>Bağbaşı Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/bahcelievler-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Bahçelievler Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/bahcelievler-mahallesi-buyukyildiz-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Bahçelievler Mahallesi (Büyükyıldız Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/bahcelievler-mahallesi-emirseyit-beldesi"
        
        ><div class="mahalle-name">
          <h4>
            Bahçelievler Mahallesi (Emirseyit Beldesi)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60235</span
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
        href="/tokat/merkez/bahcelievler-mahallesi-guryildiz-beldesi"
        
        ><div class="mahalle-name">
          <h4>
            Bahçelievler Mahallesi (Güryıldız Beldesi)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60240</span
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
        href="/tokat/merkez/bakisli-koyu"
        
        ><div class="mahalle-name">
          <h4>Bakışlı Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/bakisli-mahallesi-bakisli-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Bakışlı Mahallesi (Bakışlı Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/balibey-yaylasi-mahallesi-kizik-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Balıbey Yaylası Mahallesi (Kızık Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/ballidere-koyu"
        
        ><div class="mahalle-name">
          <h4>Ballıdere Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/batmantas-koyu"
        
        ><div class="mahalle-name">
          <h4>Batmantaş Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/bedestenlioglu-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Bedestenlioğlu Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/bedestenliogluosb-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Bedestenlioğluosb Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/bedirkale-koyu"
        
        ><div class="mahalle-name">
          <h4>Bedirkale Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/behram-mahallesi-camlibel-beldesi"
        
        ><div class="mahalle-name">
          <h4>
            Behram Mahallesi (Çamlıbel Beldesi)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60225</span
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
        href="/tokat/merkez/besoren-koyu"
        
        ><div class="mahalle-name">
          <h4>Beşören Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/binecek-koyu"
        
        ><div class="mahalle-name">
          <h4>Binecek Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/boyali-koyu"
        
        ><div class="mahalle-name">
          <h4>Boyalı Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/bozatalan-mahallesi-emirseyit-beldesi"
        
        ><div class="mahalle-name">
          <h4>
            Bozatalan Mahallesi (Emirseyit Beldesi)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60235</span
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
        href="/tokat/merkez/bula-koyu"
        
        ><div class="mahalle-name">
          <h4>Bula Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/buyuk-beybagi-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Büyük Beybağı Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/buyukbaglar-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Büyükbağlar Köyü
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/camiikebir-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Camiikebir Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/cemalettin-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Cemalettin Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/cumhuriyet-mahallesi-cat-beldesi"
        
        ><div class="mahalle-name">
          <h4>
            Cumhuriyet Mahallesi (Çat Beldesi)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60160</span
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
        href="/tokat/merkez/cumhuriyet-mahallesi-kemalpasa-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Cumhuriyet Mahallesi (Kemalpaşa Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/cumhuriyet-mahallesi-yagmurlu-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Cumhuriyet Mahallesi (Yağmurlu Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/camagzi-koyu"
        
        ><div class="mahalle-name">
          <h4>Çamağzı Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/camalti-koyu"
        
        ><div class="mahalle-name">
          <h4>Çamaltı Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/camdere-koyu"
        
        ><div class="mahalle-name">
          <h4>Çamdere Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/camlik-koyu"
        
        ><div class="mahalle-name">
          <h4>Çamlık Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/caputsuyu-mahallesi-tahtoba-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Çaputsuyu Mahallesi (Tahtoba Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/catalkaya-koyu"
        
        ><div class="mahalle-name">
          <h4>Çatalkaya Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/cay-mahallesi"
        
        ><div class="mahalle-name">
          <h4>Çay Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/cayoren-koyu"
        
        ><div class="mahalle-name">
          <h4>Çayören Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/cekerek-mahallesi-camlibel-beldesi"
        
        ><div class="mahalle-name">
          <h4>
            Çekerek Mahallesi (Çamlıbel Beldesi)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60225</span
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
        href="/tokat/merkez/cerci-koyu"
        
        ><div class="mahalle-name">
          <h4>Çerçi Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/cerdigin-koyu"
        
        ><div class="mahalle-name">
          <h4>Çerdiğin Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/cokelikkisla-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Çökelikkışla Köyü
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/corduk-koyu"
        
        ><div class="mahalle-name">
          <h4>Çördük Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/coregibuyuk-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Çöreğibüyük Köyü
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/cubuklu-koyu"
        
        ><div class="mahalle-name">
          <h4>Çubuklu Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/dayilihaci-koyu"
        
        ><div class="mahalle-name">
          <h4>Dayılıhacı Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/dedeli-merkez-mahallesi-dedeli-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Dedeli Merkez Mahallesi (Dedeli Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/derbent-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Derbent Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/dere-mevki-mahallesi-yakacik-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Dere Mevki Mahallesi (Yakacık Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/dereagzi-koyu"
        
        ><div class="mahalle-name">
          <h4>Dereağzı Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/derekisla-koyu"
        
        ><div class="mahalle-name">
          <h4>Derekişla Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/devevormez-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Devevörmez Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/dodurga-koyu"
        
        ><div class="mahalle-name">
          <h4>Dodurga Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/dogancibaglari-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Doğancıbağları Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/dogukent-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Doğukent Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/dolluk-koyu"
        
        ><div class="mahalle-name">
          <h4>Döllük Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/efe-koyu"
        
        ><div class="mahalle-name">
          <h4>Efe Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/ekincilik-koyu"
        
        ><div class="mahalle-name">
          <h4>Ekincilik Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/erenler-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Erenler Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/esentepe-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Esentepe Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/eski-koyu"
        
        ><div class="mahalle-name">
          <h4>Eski Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/eze-mahallesi-eze-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Eze Mahallesi (Eze Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/fatih-mahallesi-akbelen-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Fatih Mahallesi (Akbelen Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/gaziosmanpasa-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Gaziosmanpaşa Köyü
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/gaziosmanpasa-universitesi-kampusu-mahallesi-tasliciftlik-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Gaziosmanpaşa Üniversitesi Kampüsü Mahallesi (Taşlıçiftlik Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/geyras-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Geyras Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/gezirlik-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Gezirlik Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/gokce-koyu"
        
        ><div class="mahalle-name">
          <h4>Gökçe Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/gokceyol-mahallesi-gokceyol-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Gökçeyol Mahallesi (Gökçeyol Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/gokdere-koyu"
        
        ><div class="mahalle-name">
          <h4>Gökdere Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/golcuk-koyu"
        
        ><div class="mahalle-name">
          <h4>Gölcük Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/gozova-koyu"
        
        ><div class="mahalle-name">
          <h4>Gözova Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/gugumlu-merkez-mahallesi-gugumlu-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Güğümlü Merkez Mahallesi (Güğümlü Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/gulbaharhatun-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Gülbaharhatun Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/gulpinar-koyu"
        
        ><div class="mahalle-name">
          <h4>Gülpınar Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/gultepe-mahallesi-buyukyildiz-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Gültepe Mahallesi (Büyükyıldız Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/gumenek-koyu"
        
        ><div class="mahalle-name">
          <h4>Gümenek Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/gunesli-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Güneşli Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/gunesli-mahallesi-emirseyit-beldesi"
        
        ><div class="mahalle-name">
          <h4>
            Güneşli Mahallesi (Emirseyit Beldesi)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60235</span
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
        href="/tokat/merkez/gunevi-koyu"
        
        ><div class="mahalle-name">
          <h4>Günevi Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/gunevi-mahallesi-gunevi-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Günevi Mahallesi (Günevi Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/guzeldere-koyu"
        
        ><div class="mahalle-name">
          <h4>Güzeldere Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/hanpinar-koyu"
        
        ><div class="mahalle-name">
          <h4>Hanpınar Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/hasanbaba-koyu"
        
        ><div class="mahalle-name">
          <h4>Hasanbaba Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/hasanbaba-mahallesi-hasanbaba-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Hasanbaba Mahallesi (Hasanbaba Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/hocaahmet-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Hocaahmet Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/ihsaniye-koyu"
        
        ><div class="mahalle-name">
          <h4>İhsaniye Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/inanli-mahallesi-kucukbaglar-koyu"
        
        ><div class="mahalle-name">
          <h4>
            İnanlı Mahallesi (Küçükbağlar Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/inonu-mahallesi-kemalpasa-koyu"
        
        ><div class="mahalle-name">
          <h4>
            İnönü Mahallesi (Kemalpaşa Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/kabakbogazi-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Kabakboğazı Köyü
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/kabe-i-mescid-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Kabe-İ Mescid Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/kadivakfi-koyu"
        
        ><div class="mahalle-name">
          <h4>Kadıvakfı Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/kahvepinari-mahallesi-tahtoba-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Kahvepınarı Mahallesi (Tahtoba Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/kaleardi-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Kaleardı Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/kanalalti-mahallesi-guryildiz-beldesi"
        
        ><div class="mahalle-name">
          <h4>
            Kanalaltı Mahallesi (Güryıldız Beldesi)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60240</span
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
        href="/tokat/merkez/karakaya-koyu"
        
        ><div class="mahalle-name">
          <h4>Karakaya Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/karasu-mahallesi-camlibel-beldesi"
        
        ><div class="mahalle-name">
          <h4>
            Karasu Mahallesi (Çamlıbel Beldesi)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60225</span
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
        href="/tokat/merkez/kargin-koyu"
        
        ><div class="mahalle-name">
          <h4>Kargın Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/kargincik-koyu"
        
        ><div class="mahalle-name">
          <h4>Kargıncık Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/karsiyaka-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Karşıyaka Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60200</span
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
        href="/tokat/merkez/karsiyaka-mahallesi-cat-beldesi"
        
        ><div class="mahalle-name">
          <h4>
            Karşıyaka Mahallesi (Çat Beldesi)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60160</span
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
        href="/tokat/merkez/karsiyaka-mahallesi-yagmurlu-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Karşıyaka Mahallesi (Yağmurlu Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/kasikcibaglari-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Kaşıkcıbağları Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/kemer-mahallesi"
        
        ><div class="mahalle-name">
          <h4>Kemer Mahallesi</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/kervansaray-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Kervansaray Köyü
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/keslik-koyu"
        
        ><div class="mahalle-name">
          <h4>Keşlik Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/kilicli-mahallesi-gumenek-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Kılıçlı Mahallesi (Gümenek Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/kisla-mahallesi-kizik-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Kışla Mahallesi (Kızık Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/kizilkaya-koyu"
        
        ><div class="mahalle-name">
          <h4>Kızılkaya Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/kizilkoy-koyu"
        
        ><div class="mahalle-name">
          <h4>Kızılköy Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/kiziloz-koyu"
        
        ><div class="mahalle-name">
          <h4>Kızılöz Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/kizilyazi-mahallesi-tahtoba-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Kızılyazı Mahallesi (Tahtoba Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/killik-koyu"
        
        ><div class="mahalle-name">
          <h4>Killik Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/kocacik-koyu"
        
        ><div class="mahalle-name">
          <h4>Kocacık Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/kocapinar-mahallesi-tahtoba-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Kocapınar Mahallesi (Tahtoba Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/komec-koyu"
        
        ><div class="mahalle-name">
          <h4>Kömeç Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/koyunkendisi-mahallesi-halilalan-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Köyünkendisi Mahallesi (Halilalan Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/kurtulus-mahallesi-yagmurlu-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Kurtuluş Mahallesi (Yağmurlu Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/kucukbey-bagi-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Küçükbey Bağı Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/kucukyildiz-mahallesi-guryildiz-beldesi"
        
        ><div class="mahalle-name">
          <h4>
            Küçükyıldız Mahallesi (Güryıldız Beldesi)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60240</span
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
        href="/tokat/merkez/kumbet-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Kümbet Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/madas-koyu"
        
        ><div class="mahalle-name">
          <h4>Madas Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/mahmutpasa-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Mahmutpaşa Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/mehmetpasa-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Mehmetpaşa Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/merkez-mahallesi-aydinca-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Merkez Mahallesi (Aydınca Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/merkez-mahallesi-cat-beldesi"
        
        ><div class="mahalle-name">
          <h4>
            Merkez Mahallesi (Çat Beldesi)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60160</span
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
        href="/tokat/merkez/merkez-mahallesi-dereyaka-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Merkez Mahallesi (Dereyaka Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/merkez-mahallesi-guncali-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Merkez Mahallesi (Günçalı Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/merkez-mahallesi-guzelce-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Merkez Mahallesi (Güzelce Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/merkez-mahallesi-kizik-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Merkez Mahallesi (Kızık Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/merkez-mahallesi-kucukbaglar-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Merkez Mahallesi (Küçükbağlar Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/merkez-mahallesi-tahtoba-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Merkez Mahallesi (Tahtoba Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/merkez-mahallesi-tasliciftlik-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Merkez Mahallesi (Taşlıçiftlik Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/merkez-mahallesi-yakacik-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Merkez Mahallesi (Yakacık Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/merkez-mahallesi-yelpe-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Merkez Mahallesi (Yelpe Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/musalla-mahallesi-akbelen-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Musalla Mahallesi (Akbelen Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/musullu-koyu"
        
        ><div class="mahalle-name">
          <h4>Musullu Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/mulk-koyu"
        
        ><div class="mahalle-name">
          <h4>Mülk Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/nebi-koyu"
        
        ><div class="mahalle-name">
          <h4>Nebi Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/ogulbey-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Oğulbey Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/ormanbeyli-koyu"
        
        ><div class="mahalle-name">
          <h4>Ormanbeyli Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/orta-mahallesi-avlunlar-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Orta Mahallesi (Avlunlar Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60255</span
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
        href="/tokat/merkez/ortaoren-koyu"
        
        ><div class="mahalle-name">
          <h4>Ortaören Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/ortmelionu-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Örtmeliönü Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/perakende-mahallesi"
        
        ><div class="mahalle-name">
          <h4>
            Perakende Mahallesi
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60100</span
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
        href="/tokat/merkez/pinarli-koyu"
        
        ><div class="mahalle-name">
          <h4>Pınarlı Köyü</h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
        href="/tokat/merkez/saltik-mahallesi-corduk-koyu"
        
        ><div class="mahalle-name">
          <h4>
            Saltık Mahallesi (Çördük Köyü)
          </h4>
          <p
            class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5"
          >
            MAHALLE
          </p>
        </div>
        <div class="mahalle-zip-code">
          <span
           
            >60010</span
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
