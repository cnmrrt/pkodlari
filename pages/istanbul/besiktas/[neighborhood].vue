<script setup lang="ts">
import { ref, computed } from "vue";
import { ChevronRight, MapPin, Check, Copy, Share2 } from "lucide-vue-next";
import { slugify, titleCase } from "~/utils/slugify";

const route = useRoute();
const copied = ref(false);

const { data: istanbulBesiktasData } = await useAsyncData("istanbul-besiktas-data", () =>
  $fetch<any[]>("https://pkodlari.com/data/istanbul/besiktas.json")
);

const cityName = "İstanbul";
const citySlug = "istanbul";
const districtName = "BEŞİKTAŞ";
const districtSlug = "besiktas";

const neighborhoodSlug = computed(() => route.params.neighborhood as string);

const neighData = computed(() => {
  if (!istanbulBesiktasData.value) return null;
  return istanbulBesiktasData.value.find(
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
  if (!istanbulBesiktasData.value || !neighData.value) return [];

  return istanbulBesiktasData.value
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
  <div v-if="isValid" class="animate-in fade-in duration-500 max-w-2xl mx-auto">
    <nav
      class="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-8 overflow-x-auto whitespace-nowrap pb-2"
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

    <div class="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
      <div class="text-center mb-10">
        <div class="inline-flex p-3 bg-slate-50 rounded-2xl mb-6">
          <MapPin class="w-6 h-6 text-slate-900" />
        </div>
        <h1 class="text-4xl font-bold text-slate-900 mb-2 tracking-tight">
          {{ titleCase(neighData.mahalle) }}
        </h1>
        <p class="text-slate-500 font-medium uppercase tracking-widest text-sm">
          {{ currentDistrictName }}, {{ cityName }}
        </p>
      </div>

      <div class="bg-slate-50 rounded-3xl p-8 text-center relative overflow-hidden">
        <div class="relative z-10">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">
            POSTA KODU
          </p>
          <div class="mono text-7xl font-bold text-slate-900 mb-8">
            {{ neighData.postaKodu }}
          </div>
          <button
            @click="copyToClipboard"
            class="flex items-center gap-2 mx-auto px-8 py-4 rounded-2xl font-bold text-sm transition-all active:scale-95"
            :class="
              copied
                ? 'bg-green-600 text-white'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            "
          >
            <Check v-if="copied" class="w-4 h-4" />
            <Copy v-else class="w-4 h-4" />
            {{ copied ? "KOPYALANDI" : "KODU KOPYALA" }}
          </button>
        </div>
        <div
          class="absolute -bottom-10 -right-10 mono text-[12rem] font-black text-slate-200/50 select-none"
        >
          {{ String(neighData.postaKodu).substring(0, 2) }}
        </div>
      </div>
    </div>

    <div class="mt-8 flex justify-center">
      <button
        @click="share"
        class="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest"
      >
        <Share2 class="w-4 h-4" /> PAYLAŞ
      </button>
    </div>

    <div v-if="otherNeighborhoods.length" class="mt-10">
      <h2 class="text-xl font-bold text-slate-900 mb-4">Bu ilçedeki diğer mahalleler</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <NuxtLink
          v-for="neigh in otherNeighborhoods"
          :key="neigh.slug"
          :to="`/${citySlug}/${districtSlug}/${neigh.slug}`"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
        >
          <div>
            <h3 class="font-semibold text-slate-900 text-sm">
              {{ titleCase(neigh.name) }}
            </h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              {{ neigh.zipCode }}
            </p>
          </div>
          <ChevronRight class="w-5 h-5 text-slate-300" />
        </NuxtLink>
      </div>
    </div>

    <div
      v-if="neighData.map"
      class="mt-12 bg-white border border-slate-200 rounded-[2rem] p-4 md:p-6 shadow-sm overflow-hidden"
    >
      <div class="mb-4 flex items-center gap-2 px-2">
        <MapPin class="w-4 h-4 text-slate-400" />
        <h3 class="font-bold text-slate-900 text-sm uppercase tracking-wide">Konum</h3>
      </div>
      <div
        v-if="neighData.map.trim().startsWith('<')"
        v-html="neighData.map"
        class="w-full aspect-video rounded-2xl overflow-hidden [&>iframe]:w-full [&>iframe]:h-full"
      ></div>
      <iframe
        v-else
        :src="neighData.map"
        class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100"
        loading="lazy"
      ></iframe>
    </div>

    <div class="mt-8 text-center mb-8">
      <h2 class="text-xl font-bold text-slate-900 mb-2">
        {{ neighData.postaKodu }} nerenin posta kodu?
      </h2>
      <p class="text-slate-600">
        {{ neighData.postaKodu }} posta kodu {{ cityName }} {{ currentDistrictName }}
        {{ titleCase(neighData.mahalle) }}'ne aittir.
      </p>
    </div>
    <div class="mt-8 text-center mb-8">
      <h2 class="text-xl font-bold text-slate-900 mb-2">
        {{ currentDistrictName }} {{ titleCase(neighData.mahalle) }} Posta Kodu Rehberi
      </h2>
      <p class="text-slate-600">
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
    <div class="mt-8 text-center mb-8">
      <h2 class="text-xl font-bold text-slate-900 mb-2">
        Adres Yazımında Posta Kodunun Önemi
      </h2>
      <p class="text-slate-600">
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
    <div class="mt-8 text-center mb-8">
      <h2 class="text-xl font-bold text-slate-900 mb-2">Konum Ve Bölge Bilgileri</h2>
      <p class="text-slate-600">
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