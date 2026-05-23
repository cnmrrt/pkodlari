<script setup lang="ts">
import { ref, computed } from 'vue';
import { ArrowLeft, Search, ChevronRight } from 'lucide-vue-next';
import { slugify, titleCase } from '~/utils/slugify';

const route = useRoute() ;
const filter = ref('');

const { data: muglaData } = await useAsyncData('mugla-data', () =>
$fetch<any[]>('https://pkodlari.com/data/mugla.json')
)                                                                                                               ;

const districtSlug = computed(() => route.params.district as string) ;

const districtData = computed(() => {
if (!muglaData.value) return null                                                                      ;
const filtered = muglaData.value.filter(item => slugify(item.ilce || 'MERKEZ') === districtSlug.value) ;
if (filtered.length === 0) return null                                                                 ;

return {
name: filtered[0].ilce || 'MERKEZ',
neighborhoods: filtered.map(item => ({
name: item.mahalle,
zipCode: item.postaKodu,
slug: slugify(item.mahalle)
})).sort((a, b) => a.name.localeCompare(b.name, 'tr'))
}                                                      ;
})                                                     ;

const isValid = computed(() => !!districtData.value) ;

const neighs = computed(() => {
if (!isValid.value) return []                                                 ;
return districtData.value!.neighborhoods.filter(n =>
n.name.toLocaleLowerCase('tr').includes(filter.value.toLocaleLowerCase('tr'))
)                                                                             ;
})                                                                            ;

const pageTitle = computed(() => districtData.value ? `Muğla ${titleCase(districtData.value.name)} Posta Kodları` : 'İlçe Bulunamadı');
const pageDesc = computed(() => districtData.value ? `Muğla ilinin ${titleCase(districtData.value.name)} ilçesine bağlı mahallelerin posta kodlarını görmek için tıklayın!` : 'Posta Kodu Rehberi');

useHead({
title: pageTitle,
meta: [{ name: 'description', content: pageDesc }],
script: [
computed(() => {
if (!districtData.value) return {}                         ;
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
"item": "https://pkodlari.com/"
},
{
"@type": "ListItem",
"position": 2,
"name": "Muğla",
"item": "https://pkodlari.com/mugla"
},
{
"@type": "ListItem",
"position": 3,
"name": titleCase(districtData.value.name),
"item": `https://pkodlari.com/mugla/${districtSlug.value}`
}
]
})
}                                                          ;
})
]
})                                                         ;

usePageSeo({ title: pageTitle, description: pageDesc }) ;
</script>

<template>
<div v-if="isValid" class="animate-in fade-in duration-500 max-w-4xl mx-auto">
<div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div class="flex items-center gap-4">
<NuxtLink to="/mugla" class="text-slate-400 hover:text-slate-900 transition-colors"><ArrowLeft class="w-5 h-5" /></NuxtLink>
<div>
<h1 class="text-3xl font-bold text-slate-900 tracking-tight">{{ titleCase(districtData.name) }} Posta Kodları</h1>
<p class="text-slate-500 text-sm font-medium uppercase tracking-wider">Muğla</p>
</div>
</div>
<div class="relative w-full md:w-64">
<Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
<input
type="text"
placeholder="Mahallelerde ara..."
class="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-400 transition-all text-sm"
v-model="filter"
/>
</div>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<NuxtLink
v-for="nItem in neighs"
:key="nItem.slug"
:to="`/mugla/${districtSlug}/${nItem.slug}`"
class="soft-card p-5 flex items-center justify-between group"
>
<div class="min-w-0 pr-4">
<h4 class="font-semibold text-slate-900 truncate text-base">{{ titleCase(nItem.name) }}</h4>
<p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">MAHALLE</p>
</div>
<div class="flex items-center gap-3">
<span class="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm">{{ nItem.zipCode }}</span>
<ChevronRight class="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
</div>
</NuxtLink>
<div v-if="neighs.length === 0" class="col-span-full p-12 text-center text-slate-400 text-sm">Sonuç bulunamadı</div>
</div>
<h2 class="text-2xl font-bold text-slate-900 tracking-tight mt-20 mb-5 ml-1">Muğla İlçeleri</h2>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[--><a href="/mugla/bodrum" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Bodrum</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">56 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/dalaman" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Dalaman</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">25 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/datca" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Datça</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">12 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/fethiye" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Fethiye</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">41 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/kavaklidere" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Kavaklıdere</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">15 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/koycegiz" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Köyceğiz</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">25 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/marmaris" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Marmaris</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">30 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/mentese" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Menteşe</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">66 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/milas" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Milas</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">132 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/ortaca" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Ortaca</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">27 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/seydikemer" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Seydikemer</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">65 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/ula" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Ula</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">30 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/yatagan" class="soft-card p-6 rounded-xl flex items-center justify-between"><div><h3 class="font-bold text-slate-900 text-lg">Yatağan</h3><p class="text-xs text-slate-400 font-medium uppercase tracking-wider">50 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300"><path d="m9 18 6-6-6-6"></path></svg></a><!--]--></div>

</div>
<div v-else class="py-32 text-center text-slate-400">
<p>İlçe bulunamadı.</p>
<NuxtLink to="/mugla" class="text-slate-900 underline mt-4 inline-block">Muğla sayfasına dön</NuxtLink>
</div>
</template>
