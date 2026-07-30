<script setup lang="ts">
import { ref, computed } from "vue";
import { ChevronRight, MapPin, Check, Copy, Share2 } from "lucide-vue-next";

// Inline JSON data mapping
const pageData = ref({
  il: "Ankara",
  ilce: "Çankaya",
  mahalle: "Barbaros Mahallesi",
  map:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6527.697614532805!2d32.86388695!3d39.905464550000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fa4bb484dd5%3A0x797ee79bf64098ca!2sBarbaros%2C%2006680%20%C3%87ankaya%2FAnkara!5e1!3m2!1sen!2str!4v1785417909172!5m2!1sen!2str"width="600"height="450"style="border:0;"allowfullscreen=""loading="lazy"referrerpolicy="strict-origin-when-cross-origin"></iframe>',
  postaKodu: "06680",
  semt: "Kavaklıdere",
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
            item: `https://pkodlari.com/ankara`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: pageData.value.ilce,
            item: `https://pkodlari.com/ankara/cankaya`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: pageData.value.mahalle,
            item: `https://pkodlari.com/ankara/cankaya/barbaros-mahallesi`,
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
      ><a href="/ankara" class="hover:text-slate-900 transition-colors">ANKARA</a
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
      ><a href="/ankara/cankaya" class="hover:text-slate-900 transition-colors"
        >Çankaya</a
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
          Barbaros Mahallesi
        </h1>
        <p class="text-slate-500 font-medium uppercase tracking-widest text-sm">
          Çankaya, Ankara
        </p>
      </div>
      <div class="bg-slate-50 rounded-3xl p-8 text-center relative overflow-hidden">
        <div class="relative z-10">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">
            POSTA KODU
          </p>
          <div class="mono text-7xl font-bold text-slate-900 mb-8">06680</div>
          <button
            @click="copyToClipboard"
            class="flex items-center gap-2 mx-auto px-8 py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 cursor-pointer"
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
          06
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
          href="/ankara/cankaya/100yil-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">100.Yıl Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06680
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
          href="/ankara/cankaya/50yil-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">50.Yıl Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06590
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
          href="/ankara/cankaya/ahlatlibel-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Ahlatlıbel Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06805
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
          href="/ankara/cankaya/akarlar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Akarlar Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06705
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
          href="/ankara/cankaya/akpinar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Akpınar Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06450
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
          href="/ankara/cankaya/alacaatli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Alacaatlı Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06810
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
          href="/ankara/cankaya/anittepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Anıttepe Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06570
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
          href="/ankara/cankaya/arka-topraklik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Arka Topraklık Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06590
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
          href="/ankara/cankaya/asagi-imrahor-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Aşağı İmrahor Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06705
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
          href="/ankara/cankaya/asagi-ovecler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Aşağı Öveçler Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06460
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
          href="/ankara/cankaya/asikpasa-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Aşıkpaşa Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06670
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
          href="/ankara/cankaya/ata-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Ata Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06460
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
          href="/ankara/cankaya/aydinlar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Aydınlar Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06460
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
          href="/ankara/cankaya/ayranci-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Ayrancı Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06690
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
          href="/ankara/cankaya/aziziye-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Aziziye Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06690
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
          href="/ankara/cankaya/bademlidere-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Bademlidere Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06670
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
          href="/ankara/cankaya/bagcilar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Bağcılar Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06670
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
          href="/ankara/cankaya/bahcelievler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Bahçelievler Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06490
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
          href="/ankara/cankaya/balgat-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Balgat Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06520
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
          href="/ankara/cankaya/bayraktar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Bayraktar Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06670
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
          href="/ankara/cankaya/beytepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Beytepe Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06800
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
          href="/ankara/cankaya/birlik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Birlik Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06610
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
          href="/ankara/cankaya/boztepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Boztepe Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06670
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
          href="/ankara/cankaya/buyukesat-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Büyükesat Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06680
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
          href="/ankara/cankaya/cebeci-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Cebeci Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06590
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
          href="/ankara/cankaya/cevizlidere-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Cevizlidere Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06520
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
          href="/ankara/cankaya/cumhuriyet-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Cumhuriyet Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06420
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
          href="/ankara/cankaya/camlitepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Çamlıtepe Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06590
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
          href="/ankara/cankaya/cankaya-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Çankaya Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06690
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
          href="/ankara/cankaya/cavuslu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Çavuşlu Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06705
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
          href="/ankara/cankaya/cayyolu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Çayyolu Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06810
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
          href="/ankara/cankaya/cigdem-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Çiğdem Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06530
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
          href="/ankara/cankaya/cukurambar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Çukurambar Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06530
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
          href="/ankara/cankaya/devlet-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Devlet Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06420
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
          href="/ankara/cankaya/dilekler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Dilekler Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06590
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
          href="/ankara/cankaya/dodurga-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Dodurga Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06810
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
          href="/ankara/cankaya/dogus-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Doğuş Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06660
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
          href="/ankara/cankaya/dumlupinar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Dumlupınar Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06550
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
          href="/ankara/cankaya/ehlibeyt-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Ehlibeyt Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06520
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
          href="/ankara/cankaya/emek-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Emek Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06490
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
          href="/ankara/cankaya/ertugrulgazi-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Ertuğrulgazi Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06590
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
          href="/ankara/cankaya/erzurum-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Erzurum Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06590
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
          href="/ankara/cankaya/esatoglu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Esatoğlu Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06660
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
          href="/ankara/cankaya/eti-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Eti Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06570
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
          href="/ankara/cankaya/evciler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Evciler Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06705
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
          href="/ankara/cankaya/fakulteler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Fakülteler Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06590
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
          href="/ankara/cankaya/fidanlik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Fidanlık Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06420
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
          href="/ankara/cankaya/gaziosmanpasa-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Gaziosmanpaşa Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06680
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
          href="/ankara/cankaya/gokkusagi-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Gökkuşağı Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06450
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
          href="/ankara/cankaya/gokturk-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Göktürk Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06670
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
          href="/ankara/cankaya/guvenevler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Güvenevler Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06690
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
          href="/ankara/cankaya/guzelyurt-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Güzelyurt Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06690
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
          href="/ankara/cankaya/harbiye-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Harbiye Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06460
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
          href="/ankara/cankaya/hilal-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Hilal Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06550
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
          href="/ankara/cankaya/huzur-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Huzur Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06460
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
          href="/ankara/cankaya/ileri-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">İleri Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06590
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
          href="/ankara/cankaya/ilkadim-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">İlkadım Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06450
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
          href="/ankara/cankaya/ilkbahar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">İlkbahar Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06550
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
          href="/ankara/cankaya/ilker-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">İlker Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06450
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
          href="/ankara/cankaya/incesu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">İncesu Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06590
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
          href="/ankara/cankaya/isci-bloklari-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">İşçi Blokları Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06530
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
          href="/ankara/cankaya/karahasanli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Karahasanlı Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06705
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
          href="/ankara/cankaya/karapinar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Karapınar Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06450
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
          href="/ankara/cankaya/karatas-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Karataş Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06705
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
          href="/ankara/cankaya/kavaklidere-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Kavaklıdere Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06680
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
          href="/ankara/cankaya/kazim-ozalp-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Kazım Özalp Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06680
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
          href="/ankara/cankaya/keklik-pinari-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Keklik Pınarı Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06450
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
          href="/ankara/cankaya/kirkkonaklar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Kırkkonaklar Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06610
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
          href="/ankara/cankaya/kizilay-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Kızılay Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06420
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
          href="/ankara/cankaya/kizilirmak-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Kızılırmak Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06530
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
          href="/ankara/cankaya/kocatepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Kocatepe Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06420
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
          href="/ankara/cankaya/konutkent-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Konutkent Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06810
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
          href="/ankara/cankaya/korkutreis-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Korkutreis Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06420
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
          href="/ankara/cankaya/koru-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Koru Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06810
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
          href="/ankara/cankaya/komurcu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Kömürcü Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06705
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
          href="/ankara/cankaya/kucukesat-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Küçükesat Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06660
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
          href="/ankara/cankaya/kultur-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Kültür Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06420
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
          href="/ankara/cankaya/malazgirt-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Malazgirt Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06450
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
          href="/ankara/cankaya/maltepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Maltepe Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06570
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
          href="/ankara/cankaya/mebusevleri-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Mebusevleri Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06570
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
          href="/ankara/cankaya/mesrutiyet-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Meşrutiyet Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06420
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
          href="/ankara/cankaya/metin-akkus-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Metin Akkuş Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06450
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
          href="/ankara/cankaya/metin-oktay-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Metin Oktay Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06670
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
          href="/ankara/cankaya/mimar-sinan-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Mimar Sinan Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06670
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
          href="/ankara/cankaya/muhsin-ertugrul-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">
              Muhsin Ertuğrul Mahallesi
            </h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06660
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
          href="/ankara/cankaya/murat-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Murat Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06670
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
          href="/ankara/cankaya/mustafa-kemal-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Mustafa Kemal Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06530
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
          href="/ankara/cankaya/mutlukent-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Mutlukent Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06800
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
          href="/ankara/cankaya/mursel-uluc-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Mürsel Uluç Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06450
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
          href="/ankara/cankaya/naci-cakir-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Naci Çakır Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06450
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
          href="/ankara/cankaya/namik-kemal-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Namık Kemal Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06420
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
          href="/ankara/cankaya/nasuh-akar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Nasuh Akar Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06520
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
          href="/ankara/cankaya/oguzlar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Oğuzlar Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06520
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
          href="/ankara/cankaya/oran-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Oran Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06550
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
          href="/ankara/cankaya/orta-imrahor-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Orta İmrahor Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06705
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
          href="/ankara/cankaya/osman-temiz-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Osman Temiz Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06450
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
          href="/ankara/cankaya/on-cebeci-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Ön Cebeci Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06590
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
          href="/ankara/cankaya/ovecler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Öveçler Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06460
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
          href="/ankara/cankaya/prof-dr-ahmet-taner-kislali-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">
              Prof. Dr. Ahmet Taner Kışlalı Mahallesi
            </h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06810
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
          href="/ankara/cankaya/remzi-oguz-arik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">
              Remzi Oğuz Arık Mahallesi
            </h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06680
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
          href="/ankara/cankaya/saglik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Sağlık Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06420
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
          href="/ankara/cankaya/sancak-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Sancak Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06550
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
          href="/ankara/cankaya/seyranbaglari-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Seyranbağları Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06660
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
          href="/ankara/cankaya/sokullu-mehmet-pasa-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">
              Sokullu Mehmet Paşa Mahallesi
            </h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06460
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
          href="/ankara/cankaya/sogutozu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Söğütözü Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06530
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
          href="/ankara/cankaya/sehit-cengiz-karaca-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">
              Şehit Cengiz Karaca Mahallesi
            </h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06460
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
          href="/ankara/cankaya/sehit-cevdet-ozdemir-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">
              Şehit Cevdet Özdemir Mahallesi
            </h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06460
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
          href="/ankara/cankaya/tinaztepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Tinaztepe Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06660
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
          href="/ankara/cankaya/tohumlar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Tohumlar Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06705
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
          href="/ankara/cankaya/topraklik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Topraklık Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06590
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
          href="/ankara/cankaya/umut-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Umut Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06670
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
          href="/ankara/cankaya/umit-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Ümit Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06810
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
          href="/ankara/cankaya/universiteler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Üniversiteler Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06800
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
          href="/ankara/cankaya/yakupabdal-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Yakupabdal Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06705
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
          href="/ankara/cankaya/yasamkent-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Yaşamkent Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06810
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
          href="/ankara/cankaya/yayla-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Yayla Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06705
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
          href="/ankara/cankaya/yesilkent-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Yeşilkent Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06705
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
          href="/ankara/cankaya/yildizevler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Yıldızevler Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06550
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
          href="/ankara/cankaya/yukari-bahcelievler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">
              Yukarı Bahçelievler Mahallesi
            </h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06490
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
          href="/ankara/cankaya/yukari-dikmen-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Yukarı Dikmen Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06550
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
          href="/ankara/cankaya/yukari-ovecler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Yukarı Öveçler Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06460
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
          href="/ankara/cankaya/yucetepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Yücetepe Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06570
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
          href="/ankara/cankaya/zafertepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3 class="font-semibold text-slate-900 text-sm">Zafertepe Mahallesi</h3>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              06670
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6527.697614532805!2d32.86388695!3d39.905464550000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fa4bb484dd5%3A0x797ee79bf64098ca!2sBarbaros%2C%2006680%20%C3%87ankaya%2FAnkara!5e1!3m2!1sen!2str!4v1785417909172!5m2!1sen!2str"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
    <div class="mt-8 text-center mb-8">
      <h2 class="text-xl font-bold text-slate-900 mb-2">06680 nerenin posta kodu?</h2>
      <p class="text-slate-600">
        06680 posta kodu Ankara Çankaya Barbaros Mahallesi'ne aittir.
      </p>
    </div>
    <div class="mt-8 text-center mb-8">
      <h2 class="text-xl font-bold text-slate-900 mb-2">
        Çankaya Barbaros Mahallesi Posta Kodu Rehberi
      </h2>
      <p class="text-slate-600">
        Ankara Çankaya Barbaros Mahallesi'ne ait güncel posta kodu bilgileri aşağıda yer
        almaktadır. Adres formlarında, kargo gönderilerinde ve resmi işlemlerde
        kullanabilirsiniz.
      </p>
      <br />
      <p><strong>Barbaros Mahallesi Posta Kodu: 06680</strong></p>
    </div>
    <div class="mt-8 text-center mb-8">
      <h2 class="text-xl font-bold text-slate-900 mb-2">
        Adres Yazımında Posta Kodunun Önemi
      </h2>
      <p class="text-slate-600">
        Posta kodu, bir adresin en spesifik bileşenidir. Barbaros Mahallesi için
        tanımlanan 06680 numarasını kullanmak şu avantajları sağlar:
      </p>
      <ul>
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
        Barbaros Mahallesi, Ankara ilinin Çankaya ilçesine bağlıdır. Posta kodunun ilk 2
        hanesi il plaka kodunu, son 3 hanesi ise ilçe ve mahalle dağıtım bölgesini temsil
        eder.
      </p>
    </div>
  </div>
</template>
