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
<div class="header">
<div class="districtTitleContainer">
<NuxtLink to="/mugla" ><ArrowLeft/></NuxtLink>
<div>
<h1>{{ titleCase(districtData.name) }} Posta Kodları</h1>
<p>Muğla</p>
</div>
</div>
<div class="neighborhood-search-container">
<Search />
<input
type="text"
placeholder="Mahallelerde ara..."

v-model="filter"
/>
</div>
</div>

<div class="neighborhoods-links-container">
<NuxtLink
v-for="nItem in neighs"
:key="nItem.slug"
:to="`/mugla/${districtSlug}/${nItem.slug}`"

>
<div class="mahalle-name">
<h4>{{ titleCase(nItem.name) }}</h4>
<p>MAHALLE</p>
</div>
<div class="mahalle-zip-code">
<span>{{ nItem.zipCode }}</span>
<ChevronRight />
</div>
</NuxtLink>
<div v-if="neighs.length === 0" class="col-span-full p-12 text-center text-slate-400 text-sm">Sonuç bulunamadı</div>
</div>
<h2 class="text-2xl font-bold text-slate-900 tracking-tight mt-20 mb-5 ml-1">Muğla İlçeleri</h2>
<div class="districts"><a href="/mugla/bodrum" ><div><h3>Bodrum</h3><p>56 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/dalaman" ><div><h3>Dalaman</h3><p>25 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/datca" ><div><h3>Datça</h3><p>12 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/fethiye" ><div><h3>Fethiye</h3><p>41 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/kavaklidere" ><div><h3>Kavaklıdere</h3><p>15 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/koycegiz" ><div><h3>Köyceğiz</h3><p>25 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/marmaris" ><div><h3>Marmaris</h3><p>30 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/mentese" ><div><h3>Menteşe</h3><p>66 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/milas" ><div><h3>Milas</h3><p>132 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/ortaca" ><div><h3>Ortaca</h3><p>27 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/seydikemer" ><div><h3>Seydikemer</h3><p>65 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/ula" ><div><h3>Ula</h3><p>30 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m9 18 6-6-6-6"></path></svg></a><a href="/mugla/yatagan" ><div><h3>Yatağan</h3><p>50 mahalle</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m9 18 6-6-6-6"></path></svg></a></div>

</div>
<div v-else class="py-32 text-center text-slate-400">
<p>İlçe bulunamadı.</p>
<NuxtLink to="/mugla" class="text-slate-900 underline mt-4 inline-block">Muğla sayfasına dön</NuxtLink>
</div>
</template>
