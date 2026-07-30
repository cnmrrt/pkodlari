<script setup lang="ts">
import { ref, computed } from "vue";
import { ChevronRight, MapPin, Check, Copy, Share2 } from "lucide-vue-next";

// Inline JSON data mapping
const pageData = ref({
  "il": "İstanbul",
    "ilce": "Sarıyer",
    "mahalle": "Maslak Mahallesi",
    "map": "\u003Ciframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12024.014300500932!2d29.005789818837663!3d41.112612989461994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5bf15c34913%3A0x19571e96a2eaf2f6!2zTWFzbGFrLCBTYXLEsXllci_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1773363121756!5m2!1str!2str\"width=\"600\"height=\"450\"style=\"border:0;\"allowfullscreen=\"\"loading=\"lazy\"referrerpolicy=\"no-referrer-when-downgrade\"\u003E\u003C/iframe\u003E",
    "postaKodu": 34475,
    "semt": "Maslak"
});

const copied = ref(false);

const titleCase = (str: string) => str;

const pageTitle = computed(
  () =>
    `${pageData.value.mahalle} Posta Kodu (${pageData.value.ilce}/${pageData.value.il})`
);

const pageDesc = computed(
  () =>
    `${pageData.value.il} ilinin ${pageData.value.ilce} ilçesine bağlı ${pageData.value.mahalle}'nin posta kodunu görmek için tıklayın!`
);

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
            item: `https://pkodlari.com/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: pageData.value.il,
            item: `https://pkodlari.com/istanbul`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: pageData.value.ilce,
            item: `https://pkodlari.com/istanbul/sariyer`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: pageData.value.mahalle,
            item: `https://pkodlari.com/istanbul/sariyer/maslak-mahallesi`,
          },
        ],
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `${pageData.value.postaKodu} nerenin posta kodu?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${pageData.value.postaKodu} posta kodu ${pageData.value.il} ${pageData.value.ilce} ${pageData.value.mahalle}'ne aittir.`,
            },
          },
        ],
      }),
    },
  ],
});

usePageSeo({ title: pageTitle, description: pageDesc });

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(pageData.value.postaKodu);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch (e) {
    console.error("Clipboard copy failed:", e);
  }
};

const share = () => {
  if (navigator.share) {
    navigator.share({
      title: `${pageData.value.mahalle} Posta Kodu`,
      text: `${pageData.value.il}, ${pageData.value.ilce}, ${pageData.value.mahalle} mahallesinin posta kodu: ${pageData.value.postaKodu}`,
      url: window.location.href,
    });
  }
};
</script>

<template>
  <div class="animate-in fade-in duration-500 max-w-2xl mx-auto">
    <nav
      class="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-8 overflow-x-auto whitespace-nowrap pb-2"
    >
      <a href="/" class="hover:text-slate-900 transition-colors">TÜRKİYE</a
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
        class="lucide lucide-chevron-right-icon w-3 h-3"
      >
        <path d="m9 18 6-6-6-6"></path></svg
      ><a href="/istanbul" class="hover:text-slate-900 transition-colors">İSTANBUL</a
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
        class="lucide lucide-chevron-right-icon w-3 h-3"
      >
        <path d="m9 18 6-6-6-6"></path></svg
      ><a href="/istanbul/sariyer" class="hover:text-slate-900 transition-colors"
        >Sarıyer</a
      >
    </nav>
    <div class="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
      <div class="text-center mb-10">
        <div class="inline-flex p-3 bg-slate-50 rounded-2xl mb-6">
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
            class="lucide lucide-map-pin-icon w-6 h-6 text-slate-900"
          >
            <path
              d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
            ></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <h1 class="text-4xl font-bold text-slate-900 mb-2 tracking-tight">
          Maslak Mahallesi
        </h1>
        <p class="text-slate-500 font-medium uppercase tracking-widest text-sm">
          Sarıyer, İstanbul
        </p>
      </div>
      <div class="bg-slate-50 rounded-3xl p-8 text-center relative overflow-hidden">
        <div class="relative z-10">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">
            POSTA KODU
          </p>
          <div class="mono text-7xl font-bold text-slate-900 mb-8">34475</div>
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
          34
        </div>
      </div>
    </div>
    <div class="mt-8 flex justify-center">
      <button
        class="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest"
      >
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
          class="lucide lucide-share2-icon w-4 h-4"
        >
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
          <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
        </svg>
        PAYLAŞ
      </button>
    </div>
    <div class="mt-10">
      <h2 class="text-xl font-bold text-slate-900 mb-4">Bu ilçedeki diğer mahalleler</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!--[--><a
          href="/istanbul/sariyer/ayazaga-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Ayazağa Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34475
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/bahcekoy-kemer-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Bahçeköy Kemer Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34473
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/bahcekoy-merkez-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">
              Bahçeköy Merkez Mahallesi
            </h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34473
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/bahcekoy-yeni-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Bahçeköy Yeni Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34473
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/baltalimani-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Baltalimanı Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34470
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/cumhuriyet-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Cumhuriyet Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34457
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/camlitepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Çamlıtepe Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34457
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/cayirbasi-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Çayırbaşı Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34453
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/darussafaka-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Darüşşafaka Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34457
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/demircikoy-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Demirciköy Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34450
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/emirgan-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Emirgan Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34467
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/fatih-sultan-mehmet-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">
              Fatih Sultan Mehmet Mahallesi
            </h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34470
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/ferahevler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Ferahevler Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34457
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/garipce-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Garipçe Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34450
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/gumusdere-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Gümüşdere Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34450
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/huzur-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Huzur Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34475
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/istinye-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">İstinye Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34460
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/kazim-karabekir-pasa-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">
              Kazım Karabekir Paşa Mahallesi
            </h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34450
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/kisirkaya-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Kısırkaya Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34450
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/kirecburnu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Kireçburnu Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34457
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/kocatas-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Kocataş Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34453
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/kumkoy-kilyos-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">
              Kumköy (Kilyos) Mahallesi
            </h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34450
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/maden-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Maden Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34450
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/pinar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Pınar Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34460
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/poligon-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Poligon Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34460
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/ptt-evleri-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Ptt Evleri Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34453
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/resitpasa-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Reşitpaşa Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34467
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/rumelifeneri-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Rumelifeneri Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34450
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/rumelihisari-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Rumelihisarı Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34470
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/rumelikavagi-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Rumelikavağı Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34450
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/sariyer-merkez-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Sarıyer Merkez Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34450
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/tarabya-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Tarabya Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34457
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/uskumrukoy-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Uskumruköy Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34450
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/yeni-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Yeni Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34450
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/yenikoy-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Yeniköy Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34464
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/istanbul/sariyer/zekeriyakoy-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Zekeriyaköy Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              34450
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
            class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><!--]-->
      </div>
    </div>
    <div
      class="mt-12 bg-white border border-slate-200 rounded-[2rem] p-4 md:p-6 shadow-sm overflow-hidden"
    >
      <div class="mb-4 flex items-center gap-2 px-2">
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
          class="lucide lucide-map-pin-icon w-4 h-4 text-slate-400"
        >
          <path
            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
          ></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <h3 class="font-bold text-slate-900 text-sm uppercase tracking-wide">Konum</h3>
      </div>
      <div
        class="w-full aspect-video rounded-2xl overflow-hidden [&amp;&gt;iframe]:w-full [&amp;&gt;iframe]:h-full"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12024.014300500932!2d29.005789818837663!3d41.112612989461994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5bf15c34913%3A0x19571e96a2eaf2f6!2zTWFzbGFrLCBTYXLEsXllci_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1773363121756!5m2!1str!2str"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div class="mt-8 text-center mb-8">
      <h2 class="text-xl font-bold text-slate-900 mb-2">34475 nerenin posta kodu?</h2>
      <p class="text-slate-600">
        34475 posta kodu İstanbul Sarıyer Maslak Mahallesi'ne aittir.
      </p>
    </div>
    <div class="mt-8 text-center mb-8">
      <h2 class="text-xl font-bold text-slate-900 mb-2">
        Sarıyer Maslak Mahallesi Posta Kodu Rehberi
      </h2>
      <p class="text-slate-600">
        İstanbul Sarıyer Maslak Mahallesi'ne ait güncel posta kodu bilgileri aşağıda yer
        almaktadır. Adres formlarında, kargo gönderilerinde ve resmi işlemlerde hata
        payını sıfıra indirmek için bu kodu kullanabilirsiniz.
      </p>
      <br />
      <p><strong>Maslak Mahallesi Posta Kodu: 34475</strong></p>
    </div>
    <div class="mt-8 text-center mb-8">
      <h2 class="text-xl font-bold text-slate-900 mb-2">
        Adres Yazımında Posta Kodunun Önemi
      </h2>
      <p class="text-slate-600">
        Posta kodu, bir adresin en spesifik bileşenidir. Maslak Mahallesi için tanımlanan
        34475 numarasını kullanmak şu avantajları sağlar:
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
    <div class="mt-8 text-center mb-8">
      <h2 class="text-xl font-bold text-slate-900 mb-2">Konum Ve Bölge Bilgileri</h2>
      <p class="text-slate-600">
        Maslak Mahallesi, İstanbul ilinin Sarıyer ilçesine bağlıdır. Posta kodu yapısı
        incelendiğinde ;
      </p>
      <ol>
        <li>İlk 2 hane il plaka kodunu temsil eder.</li>
        <li>Son 3 hane ilçe içerisindeki dağıtım bölgesini ve mahallesini kapsar.</li>
      </ol>
    </div>
  </div>
</template>
