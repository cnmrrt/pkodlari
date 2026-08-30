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
          İzmir Posta Kodları
        </h1>
        <p>30 İLÇE</p>
      </div>
    </div>
    <div class="districts">
      <a
        href="/izmir/aliaga"
        
        ><div>
          <h3>Aliağa</h3>
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
        href="/izmir/balcova"
        
        ><div>
          <h3>Balçova</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/bayindir"
        
        ><div>
          <h3>Bayındır</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/bayrakli"
        
        ><div>
          <h3>Bayraklı</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/bergama"
        
        ><div>
          <h3>Bergama</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/beydag"
        
        ><div>
          <h3>Beydağ</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/bornova"
        
        ><div>
          <h3>Bornova</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/buca"
        
        ><div>
          <h3>Buca</h3>
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
        href="/izmir/cesme"
        
        ><div>
          <h3>Çeşme</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/cigli"
        
        ><div>
          <h3>Çiğli</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/dikili"
        
        ><div>
          <h3>Dikili</h3>
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
        href="/izmir/foca"
        
        ><div>
          <h3>Foça</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/gaziemir"
        
        ><div>
          <h3>Gaziemir</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/guzelbahce"
        
        ><div>
          <h3>Güzelbahçe</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/karabaglar"
        
        ><div>
          <h3>Karabağlar</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/karaburun"
        
        ><div>
          <h3>Karaburun</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/karsiyaka"
        
        ><div>
          <h3>Karşıyaka</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/kemalpasa"
        
        ><div>
          <h3>Kemalpaşa</h3>
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
        href="/izmir/kinik"
        
        ><div>
          <h3>Kınık</h3>
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
        href="/izmir/kiraz"
        
        ><div>
          <h3>Kiraz</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/konak"
        
        ><div>
          <h3>Konak</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/menderes"
        
        ><div>
          <h3>Menderes</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/menemen"
        
        ><div>
          <h3>Menemen</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/narlidere"
        
        ><div>
          <h3>Narlıdere</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/odemis"
        
        ><div>
          <h3>Ödemiş</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/seferihisar"
        
        ><div>
          <h3>Seferihisar</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/selcuk"
        
        ><div>
          <h3>Selçuk</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/tire"
        
        ><div>
          <h3>Tire</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/torbali"
        
        ><div>
          <h3>Torbalı</h3>
          <p>
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
          
        >
          <path d="m9 18 6-6-6-6"></path></svg></a
      ><a
        href="/izmir/urla"
        
        ><div>
          <h3>Urla</h3>
          <p>
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
          İzmir Posta Kodları
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
        :to="`/izmir/${distSlug}`"
        
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
