<script setup lang="ts">
import { ArrowLeft, ChevronRight } from 'lucide-vue-next';
import { slugify, titleCase } from '~/utils/slugify';

const { data: bartinData } = await useAsyncData('bartin-data', () =>
$fetch<any[]>('https://words-from-life-5cb26-default-rtdb.firebaseio.com/posta_kodlari_duzenlenmis/bartin.json')
)                                                                                                               ;

const districts = computed(() => {
if (!bartinData.value) return []                                         ;
const districtMap: Record<string, { name: string, count: number }> = {} ;

bartinData.value.forEach(item => {
const distName = item.ilce || 'MERKEZ';
const distSlug = slugify(distName)                   ;
if (!districtMap[distSlug]) {
districtMap[distSlug] = { name: distName, count: 0 } ;
}
districtMap[distSlug].count++                        ;
})                                                   ;

return Object.entries(districtMap).sort(([, a], [, b]) => a.name.localeCompare(b.name, 'tr'));
})                                                                                             ;

const pageTitle = "Bartın Posta Kodları";
const pageDesc = "Bartın iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!";

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
"name": "Bartın",
"item": "https://pkodlari.com/bartin"
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
<div class="mb-10 flex items-center gap-4">
<NuxtLink to="/" class="text-slate-400 hover:text-slate-900 transition-colors"><ArrowLeft class="w-5 h-5" /></NuxtLink>
<div>
<h1 class="text-3xl font-bold text-slate-900 tracking-tight">Bartın Posta Kodları</h1>
<p class="text-slate-500 text-sm font-medium uppercase tracking-wider">{{ districts.length }} İLÇE</p>
</div>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<NuxtLink
v-for="([distSlug, distItem]) in districts"
:key="distSlug"
:to="`/bartin/${distSlug}`"
class="soft-card p-6 rounded-xl flex items-center justify-between"
>
<div>
<h3 class="font-bold text-slate-900 text-lg">{{ titleCase(distItem.name) }}</h3>
<p class="text-xs text-slate-400 font-medium uppercase tracking-wider">{{ distItem.count }} mahalle</p>
</div>
<ChevronRight class="w-5 h-5 text-slate-300" />
</NuxtLink>
</div>
</div>
</template>
