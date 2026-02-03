<script setup lang="ts">
import { inject, computed, ref } from 'vue';
import type { Ref } from 'vue';
import { ChevronRight, MapPin, Check, Copy, Info, Share2 } from 'lucide-vue-next';
import type { PostalData } from '~/types';

const route = useRoute();
const postalData = inject<Ref<PostalData | null>>('postalData');
const copied = ref(false);

const citySlug = computed(() => route.params.city as string);
const districtSlug = computed(() => route.params.district as string);
const neighborhoodSlug = computed(() => route.params.neighborhood as string);

const cityItem = computed(() => postalData?.value?.[citySlug.value]);
const districtItem = computed(() => cityItem.value?.districts[districtSlug.value]);
const neighItem = computed(() => districtItem.value?.neighborhoods[neighborhoodSlug.value]);

useHead({
  link: [
    { rel: 'canonical', href: computed(() => `https://pkodlari.com/${citySlug.value}/${districtSlug.value}/${neighborhoodSlug.value}`) }
  ],
  script: [
    computed(() => {
        if (!cityItem.value || !districtItem.value || !neighItem.value) return {};
        return {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Anasayfa",
                        "item": `https://pkodlari.com/`
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": titleCase(cityItem.value.name),
                        "item": `https://pkodlari.com/${citySlug.value}`
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": titleCase(districtItem.value.name),
                        "item": `https://pkodlari.com/${citySlug.value}/${districtSlug.value}`
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": titleCase(neighItem.value.name),
                        "item": `https://pkodlari.com/${citySlug.value}/${districtSlug.value}/${neighborhoodSlug.value}`
                    }
                ]
            })
        }
    })
  ]
});

useSeoMeta({
  title: computed(() => neighItem.value ? `${titleCase(neighItem.value.name)} Posta Kodu` : 'Posta Kodu Bulunamadı'),
  description: computed(() => {
    if (!cityItem.value || !districtItem.value || !neighItem.value) return '';
    return `${titleCase(cityItem.value.name)} ilinin ${titleCase(districtItem.value.name)} ilçesine bağlı ${titleCase(neighItem.value.name)}'nin posta kodunu görmek için tıklayın!`;
  }),
  ogTitle: computed(() => neighItem.value ? `${titleCase(neighItem.value.name)} Posta Kodu` : 'Posta Kodu Bulunamadı'),
  ogDescription: computed(() => {
    if (!cityItem.value || !districtItem.value || !neighItem.value) return '';
    return `${titleCase(cityItem.value.name)} ilinin ${titleCase(districtItem.value.name)} ilçesine bağlı ${titleCase(neighItem.value.name)}'nin posta kodunu görmek için tıklayın!`;
  }),
  ogType: 'website',
  ogUrl: computed(() => `https://pkodlari.com/${citySlug.value}/${districtSlug.value}/${neighborhoodSlug.value}`)
});

const isValid = computed(() => !!neighItem.value);

const copyToClipboard = () => {
    if (neighItem.value) {
        navigator.clipboard.writeText(neighItem.value.zipCode);
        copied.value = true;
        setTimeout(() => copied.value = false, 2000);
    }
};

const share = () => {
    if (navigator.share && neighItem.value) {
        navigator.share({
        title: `${titleCase(neighItem.value.name)} Posta Kodu`,
        text: `${titleCase(cityItem.value.name)}, ${titleCase(districtItem.value.name)}, ${titleCase(neighItem.value.name)} mahallesinin posta kodu: ${neighItem.value.zipCode}`,
        url: window.location.href,
        });
    }
};
</script>

<template>
  <div v-if="isValid" class="animate-in fade-in duration-500 max-w-2xl mx-auto">
    <!-- Breadcrumbs -->
    <nav class="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-8 overflow-x-auto whitespace-nowrap pb-2">
      <NuxtLink to="/" class="hover:text-slate-900 transition-colors">TÜRKİYE</NuxtLink>
      <ChevronRight class="w-3 h-3" />
      <NuxtLink :to="`/${citySlug}`" class="hover:text-slate-900 transition-colors">{{ titleCase(cityItem.name) }}</NuxtLink>
      <ChevronRight class="w-3 h-3" />
      <NuxtLink :to="`/${citySlug}/${districtSlug}`" class="hover:text-slate-900 transition-colors">{{ titleCase(districtItem.name) }}</NuxtLink>
    </nav>

    <div class="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
      <div class="text-center mb-10">
        <div class="inline-flex p-3 bg-slate-50 rounded-2xl mb-6">
          <MapPin class="w-6 h-6 text-slate-900" />
        </div>
        <h1 class="text-4xl font-bold text-slate-900 mb-2 tracking-tight">{{ titleCase(neighItem.name) }}</h1>
        <p class="text-slate-500 font-medium uppercase tracking-widest text-sm">{{ titleCase(districtItem.name) }}, {{ titleCase(cityItem.name) }}</p>
      </div>

      <div class="bg-slate-50 rounded-3xl p-8 text-center relative overflow-hidden">
        <div class="relative z-10">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">POSTA KODU</p>
          <div class="mono text-7xl font-bold text-slate-900 mb-8">{{ neighItem.zipCode }}</div>
          <button 
            @click="copyToClipboard"
            class="flex items-center gap-2 mx-auto px-8 py-4 rounded-2xl font-bold text-sm transition-all active:scale-95"
            :class="copied ? 'bg-green-600 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'"
          >
            <Check v-if="copied" class="w-4 h-4" />
            <Copy v-else class="w-4 h-4" />
            {{ copied ? 'KOPYALANDI' : 'KODU KOPYALA' }}
          </button>
        </div>
        <!-- Decorative background number -->
        <div class="absolute -bottom-10 -right-10 mono text-[12rem] font-black text-slate-200/50 select-none">
          {{ neighItem.zipCode.substring(0, 2) }}
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

    <div v-if="neighItem.mapCode" class="mt-12 bg-white border border-slate-200 rounded-[2rem] p-4 md:p-6 shadow-sm overflow-hidden">
       <div class="mb-4 flex items-center gap-2 px-2">
           <MapPin class="w-4 h-4 text-slate-400" />
           <h3 class="font-bold text-slate-900 text-sm uppercase tracking-wide">Konum</h3>
       </div>
       <div v-if="neighItem.mapCode.trim().startsWith('<')" v-html="neighItem.mapCode" class="w-full aspect-video rounded-2xl overflow-hidden [&>iframe]:w-full [&>iframe]:h-full"></div>
       <iframe v-else :src="neighItem.mapCode" class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100" loading="lazy"></iframe>
    </div>
  </div>

  <div v-else class="max-w-2xl mx-auto py-12 text-center text-slate-500">
    <div class="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100">
        <h2 class="font-bold text-lg mb-2">Veri Bulunamadı!</h2>
        <p class="text-sm mb-4">Aradığınız mahalle bilgisine ulaşılamadı. Lütfen adresi kontrol edin.</p>
        
        <div class="text-left text-xs font-mono bg-white p-4 rounded border border-red-100 overflow-auto max-h-64">
            <p><strong>URL Params:</strong> {{ route.params }}</p>
            <p><strong>City Valid:</strong> {{ !!cityItem ? 'YES' : 'NO' }} ({{ citySlug }})</p>
            <p><strong>District Valid:</strong> {{ !!districtItem ? 'YES' : 'NO' }} ({{ districtSlug }})</p>
            <p><strong>Neighborhood Request:</strong> "{{ neighborhoodSlug }}"</p>
            <div v-if="districtItem">
                <p><strong>Available Neighborhoods (First 5):</strong></p>
                <ul>
                    <li v-for="key in Object.keys(districtItem.neighborhoods).slice(0, 5)" :key="key">{{ key }}</li>
                </ul>
            </div>
        </div>
        
        <NuxtLink to="/" class="mt-6 inline-block text-red-700 underline">Ana Sayfaya Dön</NuxtLink>
    </div>
  </div>
</template>
