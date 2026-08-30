<script setup lang="ts">
import { ArrowLeft, ChevronRight } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";


// const { data: ankaraData } = await useAsyncData("ankara-data", () =>
//   $fetch<any[]>("https://pkodlari.com/data/ankara/all.json")
// );

// const districts = computed(() => {
//   if (!ankaraData.value) return [];
//   const districtMap: Record<string, { name: string; count: number }> = {};

//   ankaraData.value.forEach((item) => {
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
const currentYear = new Date().getFullYear();
const pageTitle = `Ankara Posta Kodları ${currentYear}`;
const pageDesc =
  "Ankara iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!";

useHead({
  title: pageTitle,
  meta: [
    {
      name: "description",
      content:
        "Ankara iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!",
    },
  ],
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
            name: "Ankara",
            item: "https://pkodlari.com/ankara",
          },
        ],
      }),
    },
  ],
});

usePageSeo({
  title: "Ankara Posta Kodları",
  description:
    "Ankara iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!",
});
</script>

<template>
  <div class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="cityTitleContainer">
      <a href="/" 
        ><svg
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
          <path d="M19 12H5"></path>
          </svg
      ></a>
      <div>
        <h1>
          Ankara Posta Kodları ve İlçeleri
        </h1>
        <p>25 İLÇE</p>
      </div>
    </div>
    <div class="districts">
      <a
        href="/ankara/akyurt"
        
        ><div>
          <h3>Akyurt</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/altindag"
        
        ><div>
          <h3>Altındağ</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/ayas"
        
        ><div>
          <h3>Ayaş</h3>
          <p>
            33 mahalle
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/bala"
        
        ><div>
          <h3>Bala</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/beypazari"
        
        ><div>
          <h3>Beypazarı</h3>
          <p>
            78 mahalle
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/camlidere"
        
        ><div>
          <h3>Çamlıdere</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/cankaya"
        
        ><div>
          <h3>Çankaya</h3>
          <p>
            124 mahalle
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/cubuk"
        
        ><div>
          <h3>Çubuk</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/elmadag"
        
        ><div>
          <h3>Elmadağ</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/etimesgut"
        
        ><div>
          <h3>Etimesgut</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/evren"
        
        ><div>
          <h3>Evren</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/golbasi"
        
        ><div>
          <h3>Gölbaşı</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/gudul"
        
        ><div>
          <h3>Güdül</h3>
          <p>
            31 mahalle
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/haymana"
        
        ><div>
          <h3>Haymana</h3>
          <p>
            78 mahalle
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/kahramankazan"
        
        ><div>
          <h3>Kahramankazan</h3>
          <p>
            49 mahalle
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/kalecik"
        
        ><div>
          <h3>Kalecik</h3>
          <p>
            57 mahalle
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/kecioren"
        
        ><div>
          <h3>Keçiören</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/kizilcahamam"
        
        ><div>
          <h3>Kızılcahamam</h3>
          <p>
            109 mahalle
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/mamak"
        
        ><div>
          <h3>Mamak</h3>
          <p>
            64 mahalle
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/nallihan"
        
        ><div>
          <h3>Nallıhan</h3>
          <p>
            84 mahalle
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/polatli"
        
        ><div>
          <h3>Polatlı</h3>
          <p>
            96 mahalle
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/pursaklar"
        
        ><div>
          <h3>Pursaklar</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/sincan"
        
        ><div>
          <h3>Sincan</h3>
          <p>
            63 mahalle
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/sereflikochisar"
        
        ><div>
          <h3>Şereflikoçhisar</h3>
          <p>
            65 mahalle
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ankara/yenimahalle"
        
        ><div>
          <h3>Yenimahalle</h3>
          <p>
            57 mahalle
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      >
    </div>
  </div>
  <!--<div class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="cityTitleContainer">
      <NuxtLink to="/" 
        ><ArrowLeft class="w-5 h-5"
      /></NuxtLink>
      <div>
        <h1>
          Ankara Posta Kodları
        </h1>
        <p>
          {{ districts.length }} İLÇE
        </p>
      </div>
    </div>

    <div class="districts">
      <NuxtLink
        v-for="[distSlug, distItem] in districts"
        :key="distSlug"
        :to="`/ankara/${distSlug}`"
        
      >
        <div>
          <h3>{{ titleCase(distItem.name) }}</h3>
          <p>
            {{ distItem.count }} mahalle
          </p>
        </div>
        <ChevronRight class="w-5 h-5 text-slate-300" />
      </NuxtLink>
    </div>
  </div>-->
</template>
