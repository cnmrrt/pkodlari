<script setup lang="ts">
import { ref, computed } from "vue";
import { ChevronRight, MapPin, Check, Copy, Share2 } from "lucide-vue-next";

// Inline JSON data mapping
const pageData = ref({
  "il": "Gaziantep",
    "ilce": "Şahinbey",
    "mahalle": "Karataş Mahallesi",
    "map": "\u003Ciframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16004.67961723462!2d37.34807564119387!3d37.01570731156389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e081d64556bd%3A0x741d2331cb23dd0e!2sKarata%C5%9F%2C%2027470%20%C5%9Eahinbey%2FGaziantep!5e0!3m2!1str!2str!4v1773363253041!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\u003E\u003C/iframe\u003E",
    "postaKodu": "27470",
    "semt": "Karataş"
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
            item: `https://pkodlari.com/gaziantep`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: pageData.value.ilce,
            item: `https://pkodlari.com/istanbul/sahinbey`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: pageData.value.mahalle,
            item: `https://pkodlari.com/gaziantep/sahinbey/karatas-mahallesi`,
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
    <!-- Breadcrumbs -->
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
      ><a href="/gaziantep" class="hover:text-slate-900 transition-colors">GAZİANTEP</a
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
      ><a href="/gaziantep/sahinbey" class="hover:text-slate-900 transition-colors"
        >Şahinbey</a
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
          Karataş Mahallesi
        </h1>
        <p class="main-info-subtitle">
          Şahinbey, Gaziantep
        </p>
      </div>
      <div class="post-code-view-container">
        <div class="sub-post-code-view-container">
          <p>
            POSTA KODU
          </p>
          <div class="postCode">27470</div>
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
          27
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
          href="/gaziantep/sahinbey/23-nisan-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>23 Nisan Mahallesi</h3>
            <p>
              27070
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/25-aralik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>25 Aralık Mahallesi</h3>
            <p>
              27100
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/60yil-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>60.Yıl Mahallesi</h3>
            <p>
              27070
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/75yil-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>75.Yıl Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/abdulhamid-han-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Abdülhamid Han Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/akbayir-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Akbayır Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/akbulut-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Akbulut Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/akkent-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Akkent Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/akpinar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Akpınar Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/akyazi-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Akyazı Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/akyol-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Akyol Mahallesi</h3>
            <p>
              27220
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/alaybey-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Alaybey Mahallesi</h3>
            <p>
              27220
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/alibaba-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Alibaba Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/alleben-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Alleben Mahallesi</h3>
            <p>
              27220
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/almali-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Almalı Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/aydinbaba-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Aydınbaba Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/baglarbasi-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Bağlarbaşı Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/bahcelievler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Bahçelievler Mahallesi</h3>
            <p>
              27220
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/barak-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Barak Mahallesi</h3>
            <p>
              27100
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/bayramli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Bayramlı Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/bekirbey-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Bekirbey Mahallesi</h3>
            <p>
              27400
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/bekisli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Bekişli Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/belenkoy-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Belenköy Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/beskuyu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Beşkuyu Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/bestepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Beştepe Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/bey-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Bey Mahallesi</h3>
            <p>
              27220
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/beyazlar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Beyazlar Mahallesi</h3>
            <p>
              27070
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/beydilli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Beydilli Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/binevler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Binevler Mahallesi</h3>
            <p>
              27070
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/bostancik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Bostancık Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/boyaci-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Boyacı Mahallesi</h3>
            <p>
              27400
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/bozca-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Bozca Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/bozoklar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Bozoklar Mahallesi</h3>
            <p>
              27100
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/burc-esentepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Burç Esentepe Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/burc-karakuyu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Burç Karakuyu Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/bulbulzade-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Bülbülzade Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/cabi-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Cabi Mahallesi</h3>
            <p>
              27400
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/cebeler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Cebeler Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/cengiz-topel-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Cengiz Topel Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/cevizli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Cevizli Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/cumhuriyet-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Cumhuriyet Mahallesi</h3>
            <p>
              27200
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/cagdas-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Çağdaş Mahallesi</h3>
            <p>
              27070
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/camlica-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Çamlıca Mahallesi</h3>
            <p>
              27200
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/camtepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Çamtepe Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/capali-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Çapalı Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/cevreli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Çevreli Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/cimenli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Çimenli Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/coreklik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Çöreklik Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/cubukdiken-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Çubukdiken Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/damlacik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Damlacık Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/deniz-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Deniz Mahallesi</h3>
            <p>
              27070
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/dereduzu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Deredüzü Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/doganca-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Doğanca Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/dokur-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Dokur Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/dumlupinar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Dumlupınar Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/durantas-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Durantaş Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/duztepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Düztepe Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/ekinli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Ekinli Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/ertugrulgazi-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Ertuğrulgazi Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/firat-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Fırat Mahallesi</h3>
            <p>
              27100
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/fidanlik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Fidanlık Mahallesi</h3>
            <p>
              27070
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/gazitepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Gazitepe Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/geneyik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Geneyik Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/gercigin-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Gerciğin Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/geylani-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Geylani Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/gulluce-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Güllüce Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/gulpinar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Gülpınar Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/gumustekin-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Gümüştekin Mahallesi</h3>
            <p>
              27200
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/gunes-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Güneş Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/guneykent-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Güneykent Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/guzelvadi-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Güzelvadi Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/hacikopru-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Hacıköprü Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/hacikoy-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Hacıköy Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/hosgor-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Hoşgör Mahallesi</h3>
            <p>
              27200
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/ibn-i-sina-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>İbn-İ Sina Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/inonu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>İnönü Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/istiklal-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>İstiklal Mahallesi</h3>
            <p>
              27070
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kabarcik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kabarcık Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kahvelipinar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kahvelipınar Mahallesi</h3>
            <p>
              27200
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kale-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kale Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kaleboynu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kaleboynu Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kapcagiz-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kapçağız Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/karacomak-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Karaçomak Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/karagoz-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Karagöz Mahallesi</h3>
            <p>
              27400
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/karayilan-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Karayılan Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kavaklik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kavaklık Mahallesi</h3>
            <p>
              27070
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kavsak-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kavşak Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kazikli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kazıklı Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kepenek-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kepenek Mahallesi</h3>
            <p>
              27400
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kerer-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kerer Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kibris-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kıbrıs Mahallesi</h3>
            <p>
              27200
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kilincoglu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kılınçoğlu Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/killik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Killik Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kolejtepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kolejtepe Mahallesi</h3>
            <p>
              27070
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/konak-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Konak Mahallesi</h3>
            <p>
              27070
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kozluca-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kozluca Mahallesi</h3>
            <p>
              27400
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kumruhamurkesen-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>
              Kumruhamurkesen Mahallesi
            </h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kurbanbaba-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kurbanbaba Mahallesi</h3>
            <p>
              27200
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kuscu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kuşçu Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kucukkizilhisar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>
              Küçükkızılhisar Mahallesi
            </h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kulecik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Külecik Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/kurum-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Kürüm Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/malazgirt-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Malazgirt Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/mavikent-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Mavikent Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/mimar-sinan-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Mimar Sinan Mahallesi</h3>
            <p>
              27070
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/morcali-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Morcalı Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/muhacirosman-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Muhacirosman Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/narlica-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Narlıca Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/narlitepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Narlıtepe Mahallesi</h3>
            <p>
              27100
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/nuripazarbasi-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Nuripazarbaşı Mahallesi</h3>
            <p>
              27200
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/ocaklar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Ocaklar Mahallesi</h3>
            <p>
              27100
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/onur-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Onur Mahallesi</h3>
            <p>
              27200
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/ortaklar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Ortaklar Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/osmanli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Osmanlı Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/ozanli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Ozanlı Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/ogretmenevleri-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Öğretmenevleri Mahallesi</h3>
            <p>
              27070
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/perilikaya-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Perilikaya Mahallesi</h3>
            <p>
              27100
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/sacakli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Saçaklı Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/saribasak-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Sarıbaşak Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/sarikaya-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Sarıkaya Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/sarisalkim-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Sarısalkım Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/sarit-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Sarıt Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/savcili-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Savcılı Mahallesi</h3>
            <p>
              27200
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/selcuklu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Selçuklu Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/serince-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Serince Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/serinevler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Serinevler Mahallesi</h3>
            <p>
              27100
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/sirasogut-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Sırasöğüt Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/sultan-selim-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Sultan Selim Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/suyabatmaz-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Suyabatmaz Mahallesi</h3>
            <p>
              27400
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/sahinbey-mulk-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Şahinbey Mülk Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/sahintepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Şahintepe Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/sahveli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Şahveli Mahallesi</h3>
            <p>
              27220
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/senyurt-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Şenyurt Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/tekstilkent-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Tekstilkent Mahallesi</h3>
            <p>
              27100
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/tiyekli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Tiyekli Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/toreli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Töreli Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/turkmenler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Türkmenler Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/turkozu-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Türközü Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/turktepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Türktepe Mahallesi</h3>
            <p>
              27400
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/ufacik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Ufacık Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/ugurtepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Uğurtepe Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/ulas-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Ulaş Mahallesi</h3>
            <p>
              27200
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/ucoklar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Üçoklar Mahallesi</h3>
            <p>
              27100
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/unaldi-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Ünaldı Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/vatan-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Vatan Mahallesi</h3>
            <p>
              27100
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yagdover-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yağdöver Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yamactepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yamaçtepe Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yavuzlar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yavuzlar Mahallesi</h3>
            <p>
              27300
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yayci-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yaycı Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yaylacik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yaylacık Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yazibagi-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yazıbağı Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yazicik-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yazıcık Mahallesi</h3>
            <p>
              27400
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yeditepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yeditepe Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yenikoy-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yeniköy Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yesilevler-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yeşilevler Mahallesi</h3>
            <p>
              27070
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yesilkent-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yeşilkent Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yesilkoy-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yeşilköy Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yesilpinar-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yeşilpınar Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yesilyurt-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yeşilyurt Mahallesi</h3>
            <p>
              27470
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yigmatepe-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yığmatepe Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yoguntas-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yoğuntaş Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/yukaribayir-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Yukarıbayır Mahallesi</h3>
            <p>
              27200
            </p>
          </div>
          <svg
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
          href="/gaziantep/sahinbey/zeytinli-mahallesi"
          class="soft-card p-4 rounded-xl flex items-center justify-between"
          ><div>
            <h3>Zeytinli Mahallesi</h3>
            <p>
              27010
            </p>
          </div>
          <svg
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16004.67961723462!2d37.34807564119387!3d37.01570731156389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e081d64556bd%3A0x741d2331cb23dd0e!2sKarata%C5%9F%2C%2027470%20%C5%9Eahinbey%2FGaziantep!5e0!3m2!1str!2str!4v1773363253041!5m2!1str!2str"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div class="page-text">
      <h2>27470 nerenin posta kodu?</h2>
      <p>
        27470 posta kodu Gaziantep Şahinbey Karataş Mahallesi'ne aittir.
      </p>
    </div>
    <div class="page-text">
      <h2>
        Şahinbey Karataş Mahallesi Posta Kodu Rehberi
      </h2>
      <p>
        Gaziantep Şahinbey Karataş Mahallesi'ne ait güncel posta kodu bilgileri aşağıda
        yer almaktadır. Adres formlarında, kargo gönderilerinde ve resmi işlemlerde hata
        payını sıfıra indirmek için bu kodu kullanabilirsiniz.
      </p>
      <br />
      <p><strong>Karataş Mahallesi Posta Kodu: 27470</strong></p>
    </div>
    <div class="page-text">
      <h2>
        Adres Yazımında Posta Kodunun Önemi
      </h2>
      <p>
        Posta kodu, bir adresin en spesifik bileşenidir. Karataş Mahallesi için tanımlanan
        27470 numarasını kullanmak şu avantajları sağlar:
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
        Karataş Mahallesi, Gaziantep ilinin Şahinbey ilçesine bağlıdır. Posta kodu yapısı
        incelendiğinde ;
      </p>
      <ol>
        <li>İlk 2 hane il plaka kodunu temsil eder.</li>
        <li>Son 3 hane ilçe içerisindeki dağıtım bölgesini ve mahallesini kapsar.</li>
      </ol>
    </div>
  </div>
</template>
