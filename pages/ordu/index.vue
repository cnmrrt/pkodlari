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
          <path d="M19 12H5"></path></svg
      ></a>
      <div>
        <h1>
          Ordu Posta Kodları
        </h1>
        <p>19 İLÇE</p>
      </div>
    </div>
    <div class="districts">
      <a
        href="/ordu/akkus"
        
        ><div>
          <h3>Akkuş</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ordu/altinordu"
        
        ><div>
          <h3>Altınordu</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ordu/aybasti"
        
        ><div>
          <h3>Aybastı</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ordu/camas"
        
        ><div>
          <h3>Çamaş</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ordu/catalpinar"
        
        ><div>
          <h3>Çatalpınar</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ordu/caybasi"
        
        ><div>
          <h3>Çaybaşı</h3>
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
        href="/ordu/fatsa"
        
        ><div>
          <h3>Fatsa</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ordu/golkoy"
        
        ><div>
          <h3>Gölköy</h3>
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
        href="/ordu/gulyali"
        
        ><div>
          <h3>Gülyalı</h3>
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
        href="/ordu/gurgentepe"
        
        ><div>
          <h3>Gürgentepe</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ordu/ikizce"
        
        ><div>
          <h3>İkizce</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ordu/kabaduz"
        
        ><div>
          <h3>Kabadüz</h3>
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
        href="/ordu/kabatas"
        
        ><div>
          <h3>Kabataş</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ordu/korgan"
        
        ><div>
          <h3>Korgan</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ordu/kumru"
        
        ><div>
          <h3>Kumru</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ordu/mesudiye"
        
        ><div>
          <h3>Mesudiye</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ordu/persembe"
        
        ><div>
          <h3>Perşembe</h3>
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
        href="/ordu/ulubey"
        
        ><div>
          <h3>Ulubey</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/ordu/unye"
        
        ><div>
          <h3>Ünye</h3>
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
          Ordu Posta Kodları
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
        :to="`/ordu/${distSlug}`"
        
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
