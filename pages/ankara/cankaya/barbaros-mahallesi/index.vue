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
  <div class="main-content-neighborhood animate-in fade-in">
    <nav
      class="breadcrumb"
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
    <div class="main-info-container">
      <div class="main-info-title-container">
        <div class="main-info-logo">
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
        <h1>
          Barbaros Mahallesi
        </h1>
        <p class="main-info-subtitle">
          Çankaya, Ankara
        </p>
      </div>
      <div class="post-code-view-container">
        <div class="sub-post-code-view-container">
          <p>
            POSTA KODU
          </p>
          <div class="postCode">06680</div>
          <button
            @click="copyToClipboard"
            class="flex items-center gap-2 mx-auto px-8 py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 cursor-pointer"
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
          06
        </div>
      </div>
    </div>
    <div class="share-btn">
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
<h2>Bu ilçedeki diğer mahalleler</h2>      <div class="neighborhoods-links-container">
        <a
          href="/ankara/cankaya/100yil-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>100.Yıl Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/50yil-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>50.Yıl Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/ahlatlibel-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Ahlatlıbel Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/akarlar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Akarlar Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/akpinar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Akpınar Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/alacaatli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Alacaatlı Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/anittepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Anıttepe Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/arka-topraklik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Arka Topraklık Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/asagi-imrahor-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Aşağı İmrahor Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/asagi-ovecler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Aşağı Öveçler Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/asikpasa-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Aşıkpaşa Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/ata-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Ata Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/aydinlar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Aydınlar Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/ayranci-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Ayrancı Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/aziziye-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Aziziye Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/bademlidere-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Bademlidere Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/bagcilar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Bağcılar Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/bahcelievler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Bahçelievler Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/balgat-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Balgat Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/bayraktar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Bayraktar Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/beytepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Beytepe Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/birlik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Birlik Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/boztepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Boztepe Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/buyukesat-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Büyükesat Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/cebeci-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Cebeci Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/cevizlidere-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Cevizlidere Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/cumhuriyet-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Cumhuriyet Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/camlitepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Çamlıtepe Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/cankaya-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Çankaya Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/cavuslu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Çavuşlu Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/cayyolu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Çayyolu Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/cigdem-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Çiğdem Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/cukurambar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Çukurambar Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/devlet-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Devlet Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/dilekler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Dilekler Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/dodurga-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Dodurga Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/dogus-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Doğuş Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/dumlupinar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Dumlupınar Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/ehlibeyt-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Ehlibeyt Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/emek-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Emek Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/ertugrulgazi-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Ertuğrulgazi Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/erzurum-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Erzurum Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/esatoglu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Esatoğlu Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/eti-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Eti Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/evciler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Evciler Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/fakulteler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Fakülteler Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/fidanlik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Fidanlık Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/gaziosmanpasa-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Gaziosmanpaşa Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/gokkusagi-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Gökkuşağı Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/gokturk-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Göktürk Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/guvenevler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Güvenevler Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/guzelyurt-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Güzelyurt Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/harbiye-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Harbiye Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/hilal-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Hilal Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/huzur-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Huzur Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/ileri-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>İleri Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/ilkadim-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>İlkadım Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/ilkbahar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>İlkbahar Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/ilker-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>İlker Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/incesu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>İncesu Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/isci-bloklari-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>İşçi Blokları Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/karahasanli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Karahasanlı Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/karapinar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Karapınar Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/karatas-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Karataş Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/kavaklidere-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kavaklıdere Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/kazim-ozalp-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kazım Özalp Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/keklik-pinari-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Keklik Pınarı Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/kirkkonaklar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kırkkonaklar Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/kizilay-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kızılay Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/kizilirmak-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kızılırmak Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/kocatepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kocatepe Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/konutkent-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Konutkent Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/korkutreis-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Korkutreis Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/koru-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Koru Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/komurcu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kömürcü Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/kucukesat-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Küçükesat Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/kultur-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kültür Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/malazgirt-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Malazgirt Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/maltepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Maltepe Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/mebusevleri-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Mebusevleri Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/mesrutiyet-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Meşrutiyet Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/metin-akkus-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Metin Akkuş Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/metin-oktay-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Metin Oktay Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/mimar-sinan-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Mimar Sinan Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/muhsin-ertugrul-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>
              Muhsin Ertuğrul Mahallesi
            </h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/murat-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Murat Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/mustafa-kemal-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Mustafa Kemal Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/mutlukent-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Mutlukent Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/mursel-uluc-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Mürsel Uluç Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/naci-cakir-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Naci Çakır Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/namik-kemal-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Namık Kemal Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/nasuh-akar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Nasuh Akar Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/oguzlar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Oğuzlar Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/oran-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Oran Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/orta-imrahor-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Orta İmrahor Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/osman-temiz-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Osman Temiz Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/on-cebeci-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Ön Cebeci Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/ovecler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Öveçler Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/prof-dr-ahmet-taner-kislali-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>
              Prof. Dr. Ahmet Taner Kışlalı Mahallesi
            </h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/remzi-oguz-arik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>
              Remzi Oğuz Arık Mahallesi
            </h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/saglik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Sağlık Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/sancak-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Sancak Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/seyranbaglari-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Seyranbağları Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/sokullu-mehmet-pasa-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>
              Sokullu Mehmet Paşa Mahallesi
            </h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/sogutozu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Söğütözü Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/sehit-cengiz-karaca-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>
              Şehit Cengiz Karaca Mahallesi
            </h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/sehit-cevdet-ozdemir-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>
              Şehit Cevdet Özdemir Mahallesi
            </h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/tinaztepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Tinaztepe Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/tohumlar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Tohumlar Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/topraklik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Topraklık Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/umut-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Umut Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/umit-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Ümit Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/universiteler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Üniversiteler Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/yakupabdal-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yakupabdal Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/yasamkent-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yaşamkent Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/yayla-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yayla Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/yesilkent-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yeşilkent Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/yildizevler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yıldızevler Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/yukari-bahcelievler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>
              Yukarı Bahçelievler Mahallesi
            </h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/yukari-dikmen-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yukarı Dikmen Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/yukari-ovecler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yukarı Öveçler Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/yucetepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yücetepe Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        ><a
          href="/ankara/cankaya/zafertepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Zafertepe Mahallesi</h3>
            <p>
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
            
          >
            <path d="m9 18 6-6-6-6"></path></svg></a
        >
      </div>
    </div>
    <div
      class="map-container"
    >
      <div class="map-title">
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
        <h3>Konum</h3>
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
    <div class="page-text">
      <h2>06680 nerenin posta kodu?</h2>
      <p>
        06680 posta kodu Ankara Çankaya Barbaros Mahallesi'ne aittir.
      </p>
    </div>
    <div class="page-text">
      <h2>
        Çankaya Barbaros Mahallesi Posta Kodu Rehberi
      </h2>
      <p>
        Ankara Çankaya Barbaros Mahallesi'ne ait güncel posta kodu bilgileri aşağıda yer
        almaktadır. Adres formlarında, kargo gönderilerinde ve resmi işlemlerde
        kullanabilirsiniz.
      </p>
      <br />
      <p><strong>Barbaros Mahallesi Posta Kodu: 06680</strong></p>
    </div>
    <div class="page-text">
      <h2>
        Adres Yazımında Posta Kodunun Önemi
      </h2>
      <p>
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
    <div class="page-text">
      <h2>Konum Ve Bölge Bilgileri</h2>
      <p>
        Barbaros Mahallesi, Ankara ilinin Çankaya ilçesine bağlıdır. Posta kodunun ilk 2
        hanesi il plaka kodunu, son 3 hanesi ise ilçe ve mahalle dağıtım bölgesini temsil
        eder.
      </p>
    </div>
  </div>
</template>
