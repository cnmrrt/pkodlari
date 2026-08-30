<script setup lang="ts">
import { ArrowLeft, ChevronRight } from 'lucide-vue-next';
import { slugify, titleCase } from '~/utils/slugify';

const { data: sakaryaData } = await useAsyncData('sakarya-data', () =>
$fetch<any[]>('https://pkodlari.com/data/sakarya.json')
)                                                                                                               ;

const districts = computed(() => {
if (!sakaryaData.value) return []                                         ;
const districtMap: Record<string, { name: string, count: number }> = {} ;

sakaryaData.value.forEach(item => {
const distName = item.ilce || 'MERKEZ';
const distSlug = slugify(distName)                   ;
if (!districtMap[distSlug]) {
districtMap[distSlug] = { name: distName, count: 0 } ;
}
districtMap[distSlug].count++                        ;
})                                                   ;

return Object.entries(districtMap).sort(([, a], [, b]) => a.name.localeCompare(b.name, 'tr'));
})                                                                                             ;

const pageTitle = "Sakarya Posta Kodları";
const pageDesc = "Sakarya iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!";

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
"item": "https://pkodlari.com/"
},
{
"@type": "ListItem",
"position": 2,
"name": "Sakarya",
"item": "https://pkodlari.com/sakarya"
}
]
})
}
]
})                                                  ;

usePageSeo({ title: pageTitle, description: pageDesc }) ;
</script>

<template>
<div class="animate-in fade-in duration-500 max-w-4xl mx-auto">
<div class="cityTitleContainer">
<NuxtLink to="/" ><ArrowLeft/></NuxtLink>
<div>
<h1>Sakarya Posta Kodları</h1>
<p>{{ districts.length }} İLÇE</p>
</div>
</div>

<div class="districts">
<NuxtLink
v-for="([distSlug, distItem]) in districts"
:key="distSlug"
:to="`/sakarya/${distSlug}`"

>
<div>
<h3>{{ titleCase(distItem.name) }}</h3>
<p>{{ distItem.count }} mahalle</p>
</div>
<ChevronRight class="w-5 h-5 text-slate-300" />
</NuxtLink>
</div>
</div>
</template>
