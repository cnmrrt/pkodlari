<script setup lang="ts">
import { inject, computed } from 'vue';
import type { Ref } from 'vue';
import { ArrowLeft, ChevronRight, MapPin } from 'lucide-vue-next';
import type { PostalData } from '~/types';

const route = useRoute()                                         ;
const postalData = inject<Ref<PostalData | null>>('postalData');

const citySlug = computed(() => route.params.city as string)         ;
const cityItem = computed(() => postalData?.value?.[citySlug.value]) ;

const pageTitle = computed(() => cityItem.value ? `${titleCase(cityItem.value.name)} Posta Kodları` : 'Şehir Bulunamadı');
const pageDesc = computed(() => {
if (!cityItem.value) return 'Posta Kodu Rehberi';
return `${titleCase(cityItem.value.name)} iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!`    ;
})                                                                                                                            ;
useHead({
title: pageTitle,
meta: [{ name: 'description', content: pageDesc }],
script: [
computed(() => {
if (!cityItem.value) return {}                                                                                                ;
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
}
]
})
}
})
]
})                                                                                                                            ;
usePageSeo({ title: pageTitle, description: pageDesc })                                                                       ;

const districts = computed(() => {
if (!cityItem.value) return []                                                                              ;
// Return entries so we have slug and item
return Object.entries(cityItem.value.districts).sort(([, a], [, b]) => a.name.localeCompare(b.name, 'tr'));
})                                                                                                          ;

const isValid = computed(() => !!cityItem.value) ;
</script>

<template>
<div v-if="isValid" class="animate-in fade-in duration-500 max-w-4xl mx-auto">
<div class="mb-10 flex items-center gap-4">
<NuxtLink to="/" class="text-slate-400 hover:text-slate-900 transition-colors"><ArrowLeft class="w-5 h-5" /></NuxtLink>
<div>
<h1 class="text-3xl font-bold text-slate-900 tracking-tight">{{ titleCase(cityItem.name) }} Posta Kodları</h1>
<p class="text-slate-500 text-sm font-medium uppercase tracking-wider">{{ districts.length }} İLÇE</p>
</div>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<NuxtLink
v-for="([distSlug, distItem]) in districts"
:key="distSlug"
:to="`/${citySlug}/${distSlug}`"
class="soft-card p-6 rounded-xl flex items-center justify-between"
>
<div>
<h3 class="font-bold text-slate-900 text-lg">{{ titleCase(distItem.name) }}</h3>
<p class="text-xs text-slate-400 font-medium uppercase tracking-wider">{{ Object.keys(distItem.neighborhoods || {}).length }} mahalle</p>
</div>
<ChevronRight class="w-5 h-5 text-slate-300" />
</NuxtLink>
</div>

<div v-if="cityItem.mapCode" class="mt-12 bg-white border border-slate-200 rounded-[2rem] p-4 md:p-6 shadow-sm overflow-hidden">
<div class="mb-4 flex items-center gap-2 px-2">
<MapPin class="w-4 h-4 text-slate-400" />
<h3 class="font-bold text-slate-900 text-sm uppercase tracking-wide">Konum</h3>
</div>
<div v-if="cityItem.mapCode.trim().startsWith('<')" v-html="cityItem.mapCode" class="w-full aspect-video rounded-2xl overflow-hidden [&>iframe]:w-full [&>iframe]:h-full"></div>
<iframe v-else :src="cityItem.mapCode" class="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100" loading="lazy"></iframe>
</div>
</div>
</template>
