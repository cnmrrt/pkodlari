<script setup lang="ts">
import { computed } from 'vue';
import { ArrowLeft, ChevronRight } from 'lucide-vue-next';
import type { CityData } from '~/types';

const { data: zonguldakData } = await useAsyncData<CityData>('zonguldak-specific-data', async () => {
const response = await $fetch<any[]>('/api/data/zonguldak');

const cityObj: CityData = {
name: 'ZONGULDAK',
districts: {}
}                           ;

response.forEach((item: any) => {
const distStr = String(item.ilce || "MERKEZ").trim().toLocaleUpperCase('tr');
const neighStr = String(item.mahalle || "MERKEZ").trim().toLocaleUpperCase('tr');
const distSlug = slugify(distStr)                                                 ;
const neighSlug = slugify(neighStr)                                               ;
const codeStr = String(item.postaKodu || "00000").trim();

if (!cityObj.districts[distSlug]) {
cityObj.districts[distSlug] = {
name: distStr,
neighborhoods: {}
}                                   ;
}

cityObj.districts[distSlug].neighborhoods[neighSlug] = {
name: neighStr,
zipCode: codeStr
}                                                        ;
})                                                       ;

return cityObj ;
})             ;

const pageTitle = computed(() => zonguldakData.value ? `${titleCase(zonguldakData.value.name)} Posta Kodları` : 'Şehir Bulunamadı');
const pageDesc = computed(() => zonguldakData.value ? `${titleCase(zonguldakData.value.name)} iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!` : 'Posta Kodu Rehberi');
useHead({
title: pageTitle,
meta: [{ name: 'description', content: pageDesc }],
script: [
{
type: 'application/ld+json',
children: JSON.stringify({
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [
{
"@type": "ListItem",
"position": 1,
"name": "Anasayfa",
"item": `https://postakodu.com/`
},
{
"@type": "ListItem",
"position": 2,
"name": "Zonguldak",
"item": `https://postakodu.com/zonguldak`
}
]
})
}
]
})                                                                                                                                                                                            ;
usePageSeo({ title: pageTitle, description: pageDesc })                                                                                                                                       ;

const districts = computed(() => {
if (!zonguldakData.value) return []                                                                              ;
return Object.entries(zonguldakData.value.districts).sort(([, a], [, b]) => a.name.localeCompare(b.name, 'tr'));
})                                                                                                          ;

const isValid = computed(() => !!zonguldakData.value) ;
</script>

<template>
<div v-if="isValid" class="animate-in fade-in duration-500 max-w-4xl mx-auto">
<div class="mb-10 flex items-center gap-4">
<NuxtLink to="/" class="text-slate-400 hover:text-slate-900 transition-colors"><ArrowLeft class="w-5 h-5" /></NuxtLink>
<div>
<h1 class="text-3xl font-bold text-slate-900 tracking-tight">{{ titleCase(zonguldakData.name) }} Posta Kodları</h1>
<p class="text-slate-500 text-sm font-medium uppercase tracking-wider">{{ districts.length }} İLÇE</p>
</div>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<NuxtLink
v-for="([distSlug, distItem]) in districts"
:key="distSlug"
:to="`/zonguldak/${distSlug}`"
class="soft-card p-6 rounded-xl flex items-center justify-between"
>
<div>
<h3 class="font-bold text-slate-900 text-lg">{{ titleCase(distItem.name) }}</h3>
<p class="text-xs text-slate-400 font-medium uppercase tracking-wider">{{ Object.keys(distItem.neighborhoods || {}).length }} mahalle</p>
</div>
<ChevronRight class="w-5 h-5 text-slate-300" />
</NuxtLink>
</div>
</div>
</template>
