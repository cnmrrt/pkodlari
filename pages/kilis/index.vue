<script setup lang="ts">
import { ArrowLeft, ChevronRight } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";

const pageTitle = "Kilis Posta Kodları";
const pageDesc =
  "Kilis iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!";

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
            name: "Kilis",
            item: "https://pkodlari.com/kilis",
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
          Kilis Posta Kodları
        </h1>
        <p>4 İLÇE</p>
      </div>
    </div>
    <div class="districts">
      <a
        href="/kilis/elbeyli"
        
        ><div>
          <h3>Elbeyli</h3>
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
        href="/kilis/merkez"
        
        ><div>
          <h3>Merkez</h3>
          <p>
            156 mahalle
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
        href="/kilis/musabeyli"
        
        ><div>
          <h3>Musabeyli</h3>
          <p>
            61 mahalle
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
        href="/kilis/polateli"
        
        ><div>
          <h3>Polateli</h3>
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
          Kilis Posta Kodları
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
        :to="`/kilis/${distSlug}`"
        
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
