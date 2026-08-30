<script setup lang="ts">
import { ArrowLeft, ChevronRight } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";

// const { data: erzurumData } = await useAsyncData("erzurum-data", () =>
//   $fetch<any[]>("https://pkodlari.com/data/erzurum.json")
// );

// const districts = computed(() => {
//   if (!erzurumData.value) return [];
//   const districtMap: Record<string, { name: string; count: number }> = {};

//   erzurumData.value.forEach((item) => {
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

const pageTitle = "Erzurum Posta Kodları";
const pageDesc =
  "Erzurum iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!";

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
            name: "Erzurum",
            item: "https://pkodlari.com/erzurum",
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
          Erzurum Posta Kodları
        </h1>
        <p>20 İLÇE</p>
      </div>
    </div>
    <div class="districts">
      <a
        href="/erzurum/askale"
        
        ><div>
          <h3>Aşkale</h3>
          <p>
            76 mahalle
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
        href="/erzurum/aziziye"
        
        ><div>
          <h3>Aziziye</h3>
          <p>
            73 mahalle
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
        href="/erzurum/cat"
        
        ><div>
          <h3>Çat</h3>
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
        href="/erzurum/hinis"
        
        ><div>
          <h3>Hınıs</h3>
          <p>
            98 mahalle
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
        href="/erzurum/horasan"
        
        ><div>
          <h3>Horasan</h3>
          <p>
            87 mahalle
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
        href="/erzurum/ispir"
        
        ><div>
          <h3>İspir</h3>
          <p>
            101 mahalle
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
        href="/erzurum/karacoban"
        
        ><div>
          <h3>Karaçoban</h3>
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
        href="/erzurum/karayazi"
        
        ><div>
          <h3>Karayazı</h3>
          <p>
            75 mahalle
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
        href="/erzurum/koprukoy"
        
        ><div>
          <h3>Köprüköy</h3>
          <p>
            42 mahalle
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
        href="/erzurum/narman"
        
        ><div>
          <h3>Narman</h3>
          <p>
            46 mahalle
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
        href="/erzurum/oltu"
        
        ><div>
          <h3>Oltu</h3>
          <p>
            72 mahalle
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
        href="/erzurum/olur"
        
        ><div>
          <h3>Olur</h3>
          <p>
            43 mahalle
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
        href="/erzurum/palandoken"
        
        ><div>
          <h3>Palandöken</h3>
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
        href="/erzurum/pasinler"
        
        ><div>
          <h3>Pasinler</h3>
          <p>
            72 mahalle
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
        href="/erzurum/pazaryolu"
        
        ><div>
          <h3>Pazaryolu</h3>
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
        href="/erzurum/senkaya"
        
        ><div>
          <h3>Şenkaya</h3>
          <p>
            71 mahalle
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
        href="/erzurum/tekman"
        
        ><div>
          <h3>Tekman</h3>
          <p>
            71 mahalle
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
        href="/erzurum/tortum"
        
        ><div>
          <h3>Tortum</h3>
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
        href="/erzurum/uzundere"
        
        ><div>
          <h3>Uzundere</h3>
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
        href="/erzurum/yakutiye"
        
        ><div>
          <h3>Yakutiye</h3>
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
      >
    </div>
  </div>
</template>
