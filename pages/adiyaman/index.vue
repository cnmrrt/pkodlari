<script setup lang="ts">
import { ArrowLeft, ChevronRight } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";

// const { data: adiyamanData } = await useAsyncData("adiyaman-data", () =>
//   $fetch<any[]>("https://pkodlari.com/data/adiyaman.json")
// );

// const districts = computed(() => {
//   if (!adiyamanData.value) return [];
//   const districtMap: Record<string, { name: string; count: number }> = {};

//   adiyamanData.value.forEach((item) => {
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
const pageTitle = `Adıyaman Posta Kodları ve İlçeleri ${currentYear}`;
const pageDesc =
  "Adıyaman iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!";


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
            name: "Adıyaman",
            item: "https://pkodlari.com/adiyaman",
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
    <div class="cityTitleContainer">
      <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg></a>
      <div>
        <h1>
          Adıyaman Posta Kodları ve İlçeleri
        </h1>
        <p>9 İLÇE</p>
      </div>
    </div>
    <div class="districts">
      <a href="/adiyaman/besni">
        <div>
          <h3>Besni</h3>
          <p>
            154 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adiyaman/celikhan">
        <div>
          <h3>Çelikhan</h3>
          <p>
            59 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adiyaman/gerger">
        <div>
          <h3>Gerger</h3>
          <p>
            136 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adiyaman/golbasi">
        <div>
          <h3>Gölbaşı</h3>
          <p>
            79 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adiyaman/kahta">
        <div>
          <h3>Kahta</h3>
          <p>
            239 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adiyaman/merkez">
        <div>
          <h3>Merkez</h3>
          <p>
            310 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adiyaman/samsat">
        <div>
          <h3>Samsat</h3>
          <p>
            40 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adiyaman/sincik">
        <div>
          <h3>Sincik</h3>
          <p>
            93 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adiyaman/tut">
        <div>
          <h3>Tut</h3>
          <p>
            27 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a>
    </div>
  </div>
  <!--<div class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="cityTitleContainer">
      <NuxtLink to="/" 
        ><ArrowLeft class="w-5 h-5"
      /></NuxtLink>
      <div>
        <h1>
          Adıyaman Posta Kodları
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
        :to="`/adiyaman/${distSlug}`"
        
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
