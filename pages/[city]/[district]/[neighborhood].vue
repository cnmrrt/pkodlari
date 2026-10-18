<script setup lang="ts">
import { computed, ref } from 'vue';
import { ChevronRight, MapPin, Check, Copy, Share2 } from 'lucide-vue-next';
import type { NeighborhoodItem } from '~/types';
import { buildCityItemFromJson, type CityJsonRow } from '~/utils/cityJson';

type NeighborhoodPageData = {
  cityName: string;
  districtName: string;
  districtMapCode?: string;
  neighborhood: NeighborhoodItem;
  neighborhoods: Record<string, NeighborhoodItem>;
};

const route = useRoute();
const copied = ref(false);

const citySlug = computed(() => route.params.city as string);
const districtSlug = computed(() => route.params.district as string);
const neighborhoodSlug = computed(() => route.params.neighborhood as string);
const dataBaseURL = useRuntimeConfig().app.baseURL;

const { data: pageData } = await useAsyncData<NeighborhoodPageData | null>(
  () =>
    `neighborhood-page-data-${citySlug.value}-${districtSlug.value}-${neighborhoodSlug.value}`,
  async () => {
    const cityJson = await $fetch<CityJsonRow[]>(
      import.meta.server
        ? `/api/data/${encodeURIComponent(citySlug.value)}`
        : `${dataBaseURL}data/cities/${encodeURIComponent(citySlug.value)}.json`
    );
    const city = buildCityItemFromJson(cityJson);
    const district = city?.districts[districtSlug.value];
    const neighborhood = district?.neighborhoods[neighborhoodSlug.value];
    if (!city || !district || !neighborhood) return null;

    return {
      cityName: city.name,
      districtName: district.name,
      districtMapCode: district.mapCode,
      neighborhood,
      neighborhoods: district.neighborhoods,
    };
  }
);

const cityItem = computed(() => (pageData.value ? { name: pageData.value.cityName } : null));
const districtItem = computed(() =>
  pageData.value
    ? { name: pageData.value.districtName, mapCode: pageData.value.districtMapCode }
    : null
);
const neighItem = computed(() => pageData.value?.neighborhood);
const sameDistrictNeighborhoods = computed(() =>
  Object.entries(pageData.value?.neighborhoods || {})
    .filter(([slug]) => slug !== neighborhoodSlug.value)
    .sort(([, a], [, b]) => a.name.localeCompare(b.name, 'tr'))
);

const pageTitle = computed(() =>
  neighItem.value
    ? `${titleCase(neighItem.value.name)} Posta Kodu (${titleCase(
        districtItem.value!.name
      )}/${titleCase(cityItem.value!.name)})`
    : 'Posta Kodu Bulunamadı'
);
const pageDesc = computed(() => {
  if (!cityItem.value || !districtItem.value || !neighItem.value)
    return 'Posta Kodu Rehberi';
  return `${titleCase(cityItem.value.name)} ilinin ${titleCase(
    districtItem.value.name
  )} ilçesine bağlı ${titleCase(
    neighItem.value.name
  )}'nin posta kodunu görmek için tıklayın!`;
});
useHead({
  title: pageTitle,
  meta: [{ name: 'description', content: pageDesc }],
  script: [
    computed(() => {
      if (!cityItem.value || !districtItem.value || !neighItem.value) return {};
      return {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Anasayfa',
              item: `https://pkodlari.com/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: titleCase(cityItem.value.name),
              item: `https://pkodlari.com/${citySlug.value}`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: titleCase(districtItem.value.name),
              item: `https://pkodlari.com/${citySlug.value}/${districtSlug.value}`,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: titleCase(neighItem.value.name),
              item: `https://pkodlari.com/${citySlug.value}/${districtSlug.value}/${neighborhoodSlug.value}`,
            },
          ],
        }),
      };
    }),
    computed(() => {
      if (!cityItem.value || !districtItem.value || !neighItem.value) return {};
      return {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: `${neighItem.value.zipCode} nerenin posta kodu?`,
              acceptedAnswer: {
                '@type': 'Answer',
                text: `${neighItem.value.zipCode} posta kodu ${titleCase(
                  cityItem.value.name
                )} ${titleCase(districtItem.value.name)} ${titleCase(
                  neighItem.value.name
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

const isValid = computed(() => !!neighItem.value);

const copyToClipboard = () => {
  if (neighItem.value) {
    navigator.clipboard.writeText(neighItem.value.zipCode);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  }
};

const share = () => {
  if (navigator.share && neighItem.value) {
    navigator.share({
      title: `${titleCase(neighItem.value.name)} Posta Kodu`,
      text: `${titleCase(cityItem.value!.name)}, ${titleCase(
        districtItem.value!.name
      )}, ${titleCase(neighItem.value.name)} mahallesinin posta kodu: ${
        neighItem.value.zipCode
      }`,
      url: window.location.href,
    });
  }
};
</script>

<template>
  <div v-if="isValid" class="main-content-neighborhood animate-in fade-in">
    <!-- Breadcrumbs -->
    <nav
      class="breadcrumb"
    >
      <NuxtLink to="/" class="hover:text-slate-900 transition-colors">TÜRKİYE</NuxtLink>
      <ChevronRight class="w-3 h-3" />
      <NuxtLink :to="`/${citySlug}`" class="hover:text-slate-900 transition-colors"
        >{{ titleCase(cityItem!.name) }}
      </NuxtLink>
      <ChevronRight class="w-3 h-3" />
      <NuxtLink
        :to="`/${citySlug}/${districtSlug}`"
        class="hover:text-slate-900 transition-colors"
        >{{ titleCase(districtItem!.name) }}</NuxtLink
      >
    </nav>

    <div class="main-info-container">
      <div class="main-info-title-container">
        <div class="main-info-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
        </div>
        <h1>
          {{ titleCase(neighItem!.name) }}
        </h1>
        <p class="main-info-subtitle">
          {{ titleCase(districtItem!.name) }}, {{ titleCase(cityItem!.name) }}
        </p>
      </div>

      <div class="post-code-view-container">
        <div class="sub-post-code-view-container">
          <p>
            POSTA KODU
          </p>
          <div class="postCode">
            {{ neighItem!.zipCode }}
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
        <!-- Decorative background number -->
        <div
          class="btn-bg"
        >
          {{ neighItem!.zipCode.substring(0, 2) }}
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

    <div
      v-if="neighItem!.mapCode"
      class="map-container"
    >
      <div class="map-title">
        <MapPin class="w-4 h-4 text-slate-400" />
        <h3>Konum</h3>
      </div>
      <div
        v-if="neighItem!.mapCode!.trim().startsWith('<')"
        v-html="neighItem!.mapCode"
        class="map"
      ></div>
      <iframe
        v-else
        :src="neighItem!.mapCode"
        class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100"
        loading="lazy"
      ></iframe>
    </div>

    <section
      v-if="sameDistrictNeighborhoods.length"
      class="mt-8 other-neighborhoods"
    >
      <h2 class="text-lg font-semibold text-slate-900 mb-4">
        {{ titleCase(districtItem!.name) }} İlçesindeki Diğer Mahalleler
      </h2>
      <div class="neighborhoods-links-container">
        <NuxtLink
          v-for="[slug, neighborhood] in sameDistrictNeighborhoods"
          :key="slug"
          :to="`/${citySlug}/${districtSlug}/${slug}`"
        >
          <div class="mahalle-name">
            <h3>{{ titleCase(neighborhood.name) }}</h3>
            <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
              MAHALLE
            </p>
          </div>
          <div class="mahalle-zip-code">
            <span>{{ neighborhood.zipCode }}</span>
            <ChevronRight />
          </div>
        </NuxtLink>
      </div>
    </section>

    <div class="page-text">
      <h2>
        {{ neighItem!.zipCode }} nerenin posta kodu?
      </h2>
      <p>
        {{ neighItem!.zipCode }} posta kodu {{ titleCase(cityItem!.name) }}
        {{ titleCase(districtItem!.name) }} {{ titleCase(neighItem!.name) }}'ne aittir.
      </p>
    </div>
    <div class="page-text">
      <h2>
        {{ titleCase(districtItem!.name) }} {{ titleCase(neighItem!.name) }} Posta Kodu
        Rehberi
      </h2>
      <p>
        {{ titleCase(cityItem!.name) }} {{ titleCase(districtItem!.name) }}
        {{ titleCase(neighItem!.name) }}'ne ait güncel posta kodu bilgileri aşağıda yer
        almaktadır. Adres formlarında, kargo gönderilerinde ve resmi işlemlerde hata
        payını sıfıra indirmek için bu kodu kullanabilirsiniz.
      </p>
      <br />
      <p>
        <strong
          >{{ titleCase(neighItem!.name) }} Posta Kodu: {{ neighItem!.zipCode }}</strong
        >
      </p>
    </div>
    <div class="page-text">
      <h2>
        Adres Yazımında Posta Kodunun Önemi
      </h2>
      <p>
        Posta kodu, bir adresin en spesifik bileşenidir.
        {{ titleCase(neighItem!.name) }} için tanımlanan {{ neighItem!.zipCode }} numarasını
        kullanmak şu avantajları sağlar:
      </p>
      <ul>
        <li>
          <b>Sıralama Hızı:</b> PTT ve özel kargo şirketlerinin otomatik ayrıştırma
          makineleri, gönderinizi adresten önce posta koduna göre sınıflandırır.
        </li>
        <li>
          <b>Yanlış Teslimat Önleme:</b> Türkiye genelinde aynı ismi taşıyan yüzlerce
          mahalle bulunmaktadır. Doğru kod, gönderinizin başka bir şehirdeki adaş
          mahalleye gitmesini engeller.
        </li>
        <li>
          <b>Dijital Doğruluk:</b> Bankacılık ve e-devlet sistemlerinde adres teyidi
          yapılırken sistemler genellikle bu kodu baz alır.
        </li>
      </ul>
    </div>
    <div class="page-text">
      <h2>Konum Ve Bölge Bilgileri</h2>
      <p>
        {{ titleCase(neighItem!.name) }}, {{ titleCase(cityItem!.name) }} ilinin
        {{ titleCase(districtItem!.name) }} ilçesine bağlıdır. Posta kodu yapısı
        incelendiğinde ;
      </p>
      <ol>
        <li>İlk 2 hane il plaka kodunu temsil eder.</li>
        <li>Son 3 hane ilçe içerisindeki dağıtım bölgesini ve mahallesini kapsar.</li>
      </ol>
    </div>
  </div>

  <div v-else class="max-w-2xl mx-auto py-12 text-center text-slate-500">
    <div class="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100">
      <h2 class="font-bold text-lg mb-2">Veri Bulunamadı!</h2>
      <p class="text-sm mb-4">
        Aradığınız mahalle bilgisine ulaşılamadı. Lütfen adresi kontrol edin.
      </p>

      <div
        class="text-left text-xs font-mono bg-white p-4 rounded border border-red-100 overflow-auto max-h-64"
      >
        <p><strong>URL Params:</strong> {{ route.params }}</p>
        <p>
          <strong>City Valid:</strong> {{ !!cityItem ? "YES" : "NO" }} ({{ citySlug }})
        </p>
        <p>
          <strong>District Valid:</strong> {{ !!districtItem ? "YES" : "NO" }} ({{
            districtSlug
          }})
        </p>
        <p><strong>Neighborhood Request:</strong> "{{ neighborhoodSlug }}"</p>
      </div>

      <NuxtLink to="/" class="mt-6 inline-block text-red-700 underline"
        >Ana Sayfaya Dön</NuxtLink
      >
    </div>
  </div>
</template>
