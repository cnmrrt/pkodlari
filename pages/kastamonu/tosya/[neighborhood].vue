<script setup lang="ts">
import { ref, computed } from "vue";
import { ChevronRight, MapPin, Check, Copy, Share2 } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";

const route = useRoute();
const copied = ref(false);

const { data: kastamonuTosyaData } = await useAsyncData("kastamonu-tosya-data", () =>
  $fetch<any[]>(useRequestURL().origin + "/data/kastamonu/tosya.json")
);

const cityName = "Kastamonu";
const citySlug = "kastamonu";
const districtName = "Tosya";
const districtSlug = "tosya";

const neighborhoodSlug = computed(() => route.params.neighborhood as string);

const neighData = computed(() => {
  if (!kastamonuTosyaData.value) return null;
  return kastamonuTosyaData.value.find(
    (item) =>
      slugify(item.ilce || districtName) === districtSlug &&
      slugify(item.mahalle) === neighborhoodSlug.value
  );
});

const isValid = computed(() => !!neighData.value);

const currentDistrictName = computed(() => 
  neighData.value?.ilce ? titleCase(neighData.value.ilce) : titleCase(districtName)
);

const pageTitle = computed(() =>
  neighData.value
    ? `${titleCase(neighData.value.mahalle)} Posta Kodu (${currentDistrictName.value}/${cityName})`
    : "Posta Kodu Bulunamadı"
);

const pageDesc = computed(() =>
  neighData.value
    ? `${cityName} ilinin ${currentDistrictName.value} ilçesine bağlı ${titleCase(
        neighData.value.mahalle
      )}'nin posta kodunu öğrenmek için tıklayın!`
    : "Posta Kodu Rehberi"
);

useHead({
  title: pageTitle,
  meta: [{ name: "description", content: pageDesc }],
  script: [
    computed(() => {
      if (!neighData.value) return {};
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
              name: cityName,
              item: `https://pkodlari.com/${citySlug}`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: currentDistrictName.value,
              item: `https://pkodlari.com/${citySlug}/${districtSlug}`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: titleCase(neighData.value.mahalle),
              item: `https://pkodlari.com/${citySlug}/${districtSlug}/${neighborhoodSlug.value}`,
            },
          ],
        }),
      };
    }),
    computed(() => {
      if (!neighData.value) return {};
      return {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: `${neighData.value.postaKodu} nerenin posta kodu?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `${neighData.value.postaKodu} posta kodu ${cityName} ${currentDistrictName.value} ${titleCase(
                  neighData.value.mahalle
                )}'ne aittir.`,
              },
            },
          ],
        }),
      };
    }),
  ],
});

usePageSeo({ title: pageTitle, description: pageDesc });

const otherNeighborhoods = computed(() => {
  if (!kastamonuTosyaData.value || !neighData.value) return [];

  return kastamonuTosyaData.value
    .filter((item) => slugify(item.ilce || districtName) === districtSlug)
    .map((item) => ({
      name: item.mahalle,
      zipCode: item.postaKodu,
      slug: slugify(item.mahalle),
    }))
    .filter((item) => item.slug !== neighborhoodSlug.value)
    .sort((a, b) => a.name.localeCompare(b.name, "tr"));
});

const copyToClipboard = () => {
  if (neighData.value) {
    navigator.clipboard.writeText(String(neighData.value.postaKodu));
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  }
};

const share = () => {
  if (navigator.share && neighData.value) {
    navigator.share({
      title: `${titleCase(neighData.value.mahalle)} Posta Kodu`,
      text: `${cityName}, ${currentDistrictName.value}, ${titleCase(
        neighData.value.mahalle
      )} mahallesinin posta kodu: ${neighData.value.postaKodu}`,
      url: window.location.href,
    });
  }
};
</script>

<template>
  <div v-if="isValid" class="main-content-neighborhood animate-in fade-in">
    <nav
      class="breadcrumb"
    >
      <NuxtLink to="/" class="hover:text-slate-900 transition-colors">TÜRKİYE</NuxtLink>
      <ChevronRight class="w-3 h-3" />
      <NuxtLink :to="`/${citySlug}`" class="hover:text-slate-900 transition-colors"
        >{{ cityName }}</NuxtLink
      >
      <ChevronRight class="w-3 h-3" />
      <NuxtLink
        :to="`/${citySlug}/${districtSlug}`"
        class="hover:text-slate-900 transition-colors"
        >{{ currentDistrictName }}</NuxtLink
      >
    </nav>

    <div class="main-info-container">
      <div class="main-info-title-container">
        <div class="main-info-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
        </div>
        <h1>
          {{ titleCase(neighData.mahalle) }}
        </h1>
        <p class="main-info-subtitle">
          {{ currentDistrictName }}, {{ cityName }}
        </p>
      </div>

      <div class="post-code-view-container">
        <div class="sub-post-code-view-container">
          <p>
            POSTA KODU
          </p>
          <div class="postCode">
            {{ neighData.postaKodu }}
          </div>
          <button
            @click="copyToClipboard"
            class="copy-btn active:scale-95"
            :class="
              copied
                ? 'green-btn'
                : 'black-btn'
            "
          >
            <Check v-if="copied"/>
            <Copy v-else />
            {{ copied ? "KOPYALANDI" : "KODU KOPYALA" }}
          </button>
        </div>
        <div
          class="btn-bg"
        >
          {{ String(neighData.postaKodu).substring(0, 2) }}
        </div>
      </div>
    </div>

    <div class="share-btn">
      <button
        @click="share"
        class="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest"
      >
        <Share2 class="w-4 h-4" /> PAYLAŞ
      </button>
    </div>

    <div v-if="otherNeighborhoods.length" class="other-neighborhoods">
<h2>Bu ilçedeki diğer mahalleler</h2>      <div class="neighborhoods-links-container">
        <NuxtLink
          v-for="neigh in otherNeighborhoods"
          :key="neigh.slug"
          :to="`/${citySlug}/${districtSlug}/${neigh.slug}`"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
        >
          <div>
            <h3>
              {{ titleCase(neigh.name) }}
            </h3>
            <p>
              {{ neigh.zipCode }}
            </p>
          </div>
          <ChevronRight class="w-5 h-5 text-slate-300" />
        </NuxtLink>
      </div>
    </div>

    <div
      v-if="neighData.map"
      class="map-container"
    >
      <div class="map-title">
        <MapPin class="w-4 h-4 text-slate-400" />
        <h3>Konum</h3>
      </div>
      <div
        v-if="neighData.map.trim().startsWith('<')"
        v-html="neighData.map"
        class="map"
      ></div>
      <iframe
        v-else
        :src="neighData.map"
        class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100"
        loading="lazy"
      ></iframe>
    </div>

    <div class="page-text">
      <h2>
        {{ neighData.postaKodu }} nerenin posta kodu?
      </h2>
      <p>
        {{ neighData.postaKodu }} posta kodu {{ cityName }} {{ currentDistrictName }}
        {{ titleCase(neighData.mahalle) }}'ne aittir.
      </p>
    </div>
    <div class="page-text">
      <h2>
        {{ currentDistrictName }} {{ titleCase(neighData.mahalle) }} Posta Kodu Rehberi
      </h2>
      <p>
        {{ cityName }} {{ currentDistrictName }} {{ titleCase(neighData.mahalle) }}'ne ait
        güncel posta kodu bilgileri aşağıda yer almaktadır. Adres formlarında, kargo
        gönderilerinde ve resmi işlemlerde kullanabilirsiniz.
      </p>
      <br />
      <p>
        <strong
          >{{ titleCase(neighData.mahalle) }} Posta Kodu:
          {{ neighData.postaKodu }}</strong
        >
      </p>
    </div>
    <div class="page-text">
      <h2>
        Adres Yazımında Posta Kodunun Önemi
      </h2>
      <p>
        Posta kodu, bir adresin en spesifik bileşenidir.
        {{ titleCase(neighData.mahalle) }} için tanımlanan
        {{ neighData.postaKodu }} numarasını kullanmak şu avantajları sağlar:
      </p>
      <ul class="text-slate-600 text-left max-w-md mx-auto mt-4 list-disc pl-5">
        <li>
          <b>Sıralama Hızı:</b> PTT ve özel kargo şirketlerinin otomatik ayrıştırma
          makineleri gönderinizi posta koduna göre sınıflandırır.
        </li>
        <li>
          <b>Yanlış Teslimat Önleme:</b> Doğru kod, gönderinizin başka bir şehirdeki adaş
          mahalleye gitmesini engeller.
        </li>
        <li>
          <b>Dijital Doğruluk:</b> Bankacılık ve e-devlet sistemlerinde adres teyidinde
          kullanılır.
        </li>
      </ul>
    </div>
    <div class="page-text">
      <h2>Konum Ve Bölge Bilgileri</h2>
      <p>
        {{ titleCase(neighData.mahalle) }}, {{ cityName }} ilinin
        {{ currentDistrictName }} ilçesine bağlıdır. Posta kodunun ilk 2 hanesi il
        plaka kodunu ({{ String(neighData.postaKodu).substring(0, 2) }}), son 3 hanesi ise ilçe ve mahalle dağıtım bölgesini temsil eder.
      </p>
    </div>
  </div>

  <div v-else class="max-w-2xl mx-auto py-12 text-center text-slate-500">
    <div class="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100">
      <h2 class="font-bold text-lg mb-2">Veri Bulunamadı!</h2>
      <p class="text-sm mb-4">
        Aradığınız mahalle bilgisine ulaşılamadı. Lütfen adresi kontrol edin.
      </p>
      <NuxtLink :to="`/${districtSlug}`" class="mt-6 inline-block text-red-700 underline"
        >{{ districtName }} Sayfasına Dön</NuxtLink
      >
    </div>
  </div>
</template>