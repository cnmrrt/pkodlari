<script setup lang="ts">
import { inject, computed } from 'vue';
import type { Ref } from 'vue';
import { Loader2 } from 'lucide-vue-next';
import type { PostalData } from '~/types';

const postalData = inject<Ref<PostalData | null>>('postalData');

useHead({
title: 'Türkiye Posta Kodları',
meta: [{ name: 'description', content: 'Türkiye posta kodları rehberi. İl, ilçe ve mahalle posta kodlarını hızlıca sorgulayın.' }]
})                                                                                                                                                               ;
usePageSeo({ title: 'Türkiye Posta Kodları', description: 'Türkiye posta kodları rehberi. İl, ilçe ve mahalle posta kodlarını hızlıca sorgulayın.' }) ;

const cityList = computed(() => {
if (!postalData?.value) return []                                                          ;
return Object.values(postalData.value).sort((a, b) => a.name.localeCompare(b.name, 'tr'));
})                                                                                         ;
</script>

<template>
<div v-if="!postalData" class="py-32 flex flex-col items-center justify-center">
<Loader2 class="w-8 h-8 text-slate-400 animate-spin" />
</div>

<div v-else class="animate-in fade-in duration-500">
<div class="text-center mb-12 py-9">
<h1 class="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Türkiye Posta Kodları</h1>
<p class="text-slate-500 mb-10">Hızlıca ilçe ve mahalle posta kodlarını sorgulayın.</p>
<SearchBar :data="postalData" />
</div>
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
<NuxtLink
v-for="(cityItem, slug) in postalData"
:key="slug"
:to="`/${slug}`"
class="soft-card p-4 rounded-xl text-center"
>
<div class="font-semibold text-slate-900 text-sm truncate">{{ titleCase(cityItem.name) }}</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
{{ Object.keys(cityItem.districts || {}).length }} İLÇE
</div>
</NuxtLink>
</div>

<div class="mt-16 max-w-4xl mx-auto px-4 mb-12">
<div class="soft-card p-8 rounded-2xl">
<h2 class="text-2xl font-bold text-slate-900 mb-6">Posta Kodu Nedir ve Neden Önemlidir?</h2>

<div class="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
<p>
Posta kodu, mektup, kargo ve diğer gönderilerin adrese daha hızlı ve hatasız bir şekilde
ulaştırılmasını sağlamak amacıyla kullanılan, rakam veya harflerden oluşan bir kodlama
sistemidir. Türkiye'de posta kodları 5 basamaklı sayısal değerlerden oluşur. Bu sistemde ilk iki
rakam ilin plaka kodunu temsil ederken, diğer üç rakam ise dağıtım bölgesini, yani ilçe ve
mahalle detaylarını belirtir.
</p>

<div>
<h3 class="text-lg font-semibold text-slate-800 mb-3">Posta Kodu Kullanımının Avantajları</h3>
<ul class="space-y-2">
<li class="flex items-start">
<span class="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
<span><strong class="text-slate-700">Hızlı ve Doğru Teslimat:</strong> Gönderilerin
ayrıştırma merkezlerinde otomatik sistemlerle işlenmesini sağlar, böylece insan
hatası en aza iner ve teslimat süresi kısalır.</span>
</li>
<li class="flex items-start">
<span class="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
<span><strong class="text-slate-700">Adres Karışıklığını Önleme:</strong> Türkiye
genelinde aynı isme sahip birçok mahalle ve sokak bulunmaktadır. Posta kodu, bu
benzerliklerden kaynaklanabilecek yanlış teslimatların önüne geçer.</span>
</li>
<li class="flex items-start">
<span class="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
<span><strong class="text-slate-700">Verimlilik:</strong> Lojistik ve kargo firmalarının
operasyonel süreçlerini optimize etmesine yardımcı olur, bu da genel hizmet
kalitesini artırır.</span>
</li>
</ul>
</div>

<p>
Sitemiz aracılığıyla Türkiye'nin 81 iline, tüm ilçelerine ve mahallelerine ait güncel posta kodu
bilgilerine ücretsiz ve hızlı bir şekilde ulaşabilirsiniz. Aradığınız konumu bulmak için il
listesini kullanabilir veya ana sayfadaki arama kutusundan doğrudan sorgulama yapabilirsiniz.
</p>
<p>Posta kodlarını <a href="https://www.turkiye.gov.tr/ptt-posta-kodu-sorgulama" rel="nofollow"
target="_blank">https://www.turkiye.gov.tr/ptt-posta-kodu-sorgulama</a> üzerinden teyit
edebilirsiniz.</p>
</div>
</div>
</div>
</div>
</template>
