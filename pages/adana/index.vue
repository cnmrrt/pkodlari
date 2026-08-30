<script setup lang="ts">
import { ArrowLeft, ChevronRight } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";

// const { data: adanaData } = await useAsyncData("adana-data", () =>
//   $fetch<any[]>("https://pkodlari.com/data/adana.json")
// );

// const districts = computed(() => {
//   if (!adanaData.value) return [];
//   const districtMap: Record<string, { name: string; count: number }> = {};

//   adanaData.value.forEach((item) => {
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
const pageTitle = "Adana Posta Kodları ve İlçeleri";
const pageDesc ="Adana iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!";
useHead({
  title: `Adana Posta Kodları ve İlçeleri ${currentYear}`,
  meta: [
    {
      name: "description",
      content:
        "Adana iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!",
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
            name: "Adana",
            item: "https://pkodlari.com/adana",
          },
        ],
      }),
    },
  ],
});

usePageSeo({
  title: `Adana Posta Kodları ve İlçeleri ${currentYear}`,
  description:
    "Adana iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!",
});
</script>

<template>
  <div class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="cityTitleContainer">
      <a href="/" ><svg xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg></a>
      <div>
        <h1>
          Adana Posta Kodları ve İlçeleri
        </h1>
        <p>15 İLÇE</p>
      </div>
    </div>
    <div class="districts">
      <a href="/adana/aladag">
        <div>
          <h3>Aladağ</h3>
          <p>
            31 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adana/ceyhan">
        <div>
          <h3>Ceyhan</h3>
          <p>
            154 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adana/cukurova">
        <div>
          <h3>Çukurova</h3>
          <p>
            27 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adana/feke">
        <div>
          <h3>Feke</h3>
          <p>
            48 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adana/imamoglu">
        <div>
          <h3>İmamoğlu</h3>
          <p>
            27 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adana/karaisali">
        <div>
          <h3>Karaisalı</h3>
          <p>
            57 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adana/karatas">
        <div>
          <h3>Karataş</h3>
          <p>
            43 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adana/kozan">
        <div>
          <h3>Kozan</h3>
          <p>
            103 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adana/pozanti">
        <div>
          <h3>Pozantı</h3>
          <p>
            21 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adana/saimbeyli">
        <div>
          <h3>Saimbeyli</h3>
          <p>
            28 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adana/saricam">
        <div>
          <h3>Sarıçam</h3>
          <p>
            69 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adana/seyhan">
        <div>
          <h3>Seyhan</h3>
          <p>
            96 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adana/tufanbeyli">
        <div>
          <h3>Tufanbeyli</h3>
          <p>
            33 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adana/yumurtalik">
        <div>
          <h3>Yumurtalık</h3>
          <p>
            24 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a><a href="/adana/yuregir">
        <div>
          <h3>Yüreğir</h3>
          <p>
            107 mahalle
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a>
    </div>
  </div>
  <!-- <div class="animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div class="cityTitleContainer">
      <NuxtLink to="/" 
        ><ArrowLeft class="w-5 h-5"
      /></NuxtLink>
      <div>
        <h1>
          Adana Posta Kodları
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
        :to="`/adana/${distSlug}`"
        
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
  </div> -->
</template>
