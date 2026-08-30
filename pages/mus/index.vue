<script setup lang="ts">
import { ArrowLeft, ChevronRight } from 'lucide-vue-next';
import { slugify, titleCase } from '~/utils/slugify';

const { data: musData } = await useAsyncData('mus-data', () =>
$fetch<any[]>('https://pkodlari.com/data/mus.json')
)                                                                                                               ;

const districts = computed(() => {
if (!musData.value) return []                                         ;
const districtMap: Record<string, { name: string, count: number }> = {} ;

musData.value.forEach(item => {
const distName = item.ilce || 'MERKEZ';
const distSlug = slugify(distName)                   ;
if (!districtMap[distSlug]) {
districtMap[distSlug] = { name: distName, count: 0 } ;
}
districtMap[distSlug].count++                        ;
})                                                   ;

return Object.entries(districtMap).sort(([, a], [, b]) => a.name.localeCompare(b.name, 'tr'));
})                                                                                             ;

const pageTitle = "Muş Posta Kodları";
const pageDesc = "Muş iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!";

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
"name": "Muş",
"item": "https://pkodlari.com/mus"
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
<h1>Muş Posta Kodları</h1>
<p>{{ districts.length }} İLÇE</p>
</div>
</div>

<div class="districts">
<NuxtLink
v-for="([distSlug, distItem]) in districts"
:key="distSlug"
:to="`/mus/${distSlug}`"

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
