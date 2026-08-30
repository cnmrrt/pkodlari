<script setup lang="ts">
import { ref, computed } from 'vue';
import { ArrowLeft, Search, ChevronRight } from 'lucide-vue-next';
import { slugify, titleCase } from '~/utils/slugify';

const route = useRoute() ;
const filter = ref('');

const { data: ankaraData } = await useAsyncData('ankara-data', () =>
$fetch<any[]>('https://pkodlari.com/data/ankara/all.json')
)                                                                                                                ;

const districtSlug = computed(() => route.params.district as string) ;

const districtData = computed(() => {
if (!ankaraData.value) return null                                                                      ;
const filtered = ankaraData.value.filter(item => slugify(item.ilce || 'MERKEZ') === districtSlug.value) ;
if (filtered.length === 0) return null                                                                  ;

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

const pageTitle = computed(() => districtData.value ? `${titleCase(districtData.value.name)} Posta Kodları` : 'İlçe Bulunamadı');
const pageDesc = computed(() => districtData.value ? `Ankara ilinin ${titleCase(districtData.value.name)} ilçesine bağlı mahallelerin posta kodlarını görmek için tıklayın!` : 'Posta Kodu Rehberi');

useHead({
title: pageTitle,
meta: [{ name: 'description', content: pageDesc }],
script: [
computed(() => {
if (!districtData.value) return {}                                                                                                              ;
return {
type: 'application/ld+json',
children: JSON.stringify({
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [
{ "@type": "ListItem", "position": 1, "name": "Anasayfa", "item": "https://pkodlari.com/" },
{ "@type": "ListItem", "position": 2, "name": "Ankara", "item": "https://pkodlari.com/ankara" },
{ "@type": "ListItem", "position": 3, "name": titleCase(districtData.value.name), "item": `https://pkodlari.com/ankara/${districtSlug.value}` }
]
})
}
})
]
})                                                                                                                                              ;

usePageSeo({ title: pageTitle, description: pageDesc }) ;
</script>

<template>
<div v-if="isValid" class="animate-in fade-in duration-500 max-w-4xl mx-auto">
<div class="header">
<div class="districtTitleContainer">
<NuxtLink to="/ankara" ><ArrowLeft/></NuxtLink>
<div>
<h1>{{ titleCase(districtData.name) }} Posta Kodları</h1>
<p>Ankara</p>
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
:to="`/ankara/${districtSlug}/${nItem.slug}`"

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
</div>
<div v-else class="py-32 text-center text-slate-400">
<p>İlçe bulunamadı.</p>
<NuxtLink to="/ankara" class="text-slate-900 underline mt-4 inline-block">Ankara sayfasına dön</NuxtLink>
</div>
</template>
