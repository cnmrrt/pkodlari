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
<a href="/adana" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Adana</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">15 İLÇE </div>
</a>
<a href="/adiyaman" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Adıyaman</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">9 İLÇE </div>
</a>
<a href="/afyonkarahisar" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Afyonkarahisar</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">18 İLÇE </div>
</a>
<a href="/agri" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Ağrı</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">8 İLÇE </div>
</a>
<a href="/aksaray" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Aksaray</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">8 İLÇE </div>
</a>
<a href="/amasya" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Amasya</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">7 İLÇE </div>
</a>
<a href="/ankara" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Ankara</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">25 İLÇE </div>
</a>
<a href="/ardahan" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Ardahan</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">6 İLÇE </div>
</a>
<a href="/antalya" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Antalya</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">19 İLÇE </div>
</a>
<a href="/artvin" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Artvin</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">9 İLÇE </div>
</a>
<a href="/aydin" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Aydın</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">17 İLÇE </div>
</a>
<a href="/balikesir" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Balıkesir</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">20 İLÇE </div>
</a>
<a href="/bilecik" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Bilecik</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">8 İLÇE </div>
</a>

<a href="/bingol" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Bingöl</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div>
</a>

<a href="/bitlis" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Bitlis</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div>
</a>

<a href="/bolu" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Bolu</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">9 İLÇE </div>
</a>

<a href="/bartin" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Bartın</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">4 İLÇE </div>
</a>

<a href="/batman" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Batman</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div>
</a>

<a href="/bayburt" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Bayburt</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">3 İLÇE </div>
</a>

<a href="/burdur" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Burdur</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">11 İLÇE </div>
</a>

<a href="/bursa" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Bursa</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">10 İLÇE </div>
</a><a href="/edirne" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Edirne</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">9 İLÇE </div>
</a><a href="/canakkale" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Çanakkale</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">12 İLÇE </div>
</a><a href="/cankiri" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Çankırı</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div>
</a><a href="/corum" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Çorum</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div>
</a><a href="/denizli" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Denizli</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">19 İLÇE </div>
</a><a href="/diyarbakir" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Diyarbakır</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">17 İLÇE </div>
</a><a href="/duzce" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Düzce</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">8 İLÇE </div>
</a><a href="/elazig" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Elazığ</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">11 İLÇE </div>
</a><a href="/erzincan" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Erzincan</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div>
</a><a href="/erzurum" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Erzurum</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div>
</a><a href="/eskisehir" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Eskişehir</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">14 İLÇE </div>
</a><a href="/gaziantep" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Gaziantep</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div>
</a><a href="/giresun" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Giresun</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">16 İLÇE </div>
</a><a href="/gumushane" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Gümüşhane</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">5 İLÇE </div>
</a><a href="/hakkari" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Hakkari</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div>
</a><a href="/hatay" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Hatay</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div>
</a><a href="/isparta" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Isparta</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">13 İLÇE </div>
</a><a href="/mersin" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Mersin</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">13 İLÇE </div>
</a><a href="/istanbul" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">İstanbul</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">35 İLÇE </div>
</a><a href="/izmir" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">İzmir</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">30 İLÇE </div>
</a><a href="/kars" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Kars</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">8 İLÇE </div>
</a><a href="/kastamonu" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Kastamonu</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">2 İLÇE </div>
</a><a href="/kayseri" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Kayseri</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">16 İLÇE </div>
</a><a href="/kirklareli" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Kırklareli</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">2 İLÇE </div>
</a><a href="/kirsehir" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Kırşehir</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div>
</a><a href="/kocaeli" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Kocaeli</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">12 İLÇE </div>
</a><a href="/konya" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Konya</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">20 İLÇE </div>
</a><a href="/kutahya" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Kütahya</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">2 İLÇE </div>
</a><a href="/malatya" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Malatya</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">13 İLÇE </div>
</a><a href="/manisa" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Manisa</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">17 İLÇE </div>
</a><a href="/kahramanmaras" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Kahramanmaraş</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div>
</a><a href="/mardin" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Mardin</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div>
</a><a href="/mugla" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Muğla</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">13 İLÇE </div>
</a><a href="/mus" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Muş</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">1 İLÇE </div>
</a><a href="/sakarya" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Sakarya</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">9 İLÇE </div>
</a><a href="/samsun" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Samsun</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">17 İLÇE </div>
</a><a href="/tekirdag" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Tekirdağ</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">11 İLÇE </div>
</a><a href="/trabzon" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Trabzon</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">18 İLÇE </div>
</a><a href="/yalova" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Yalova</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">3 İLÇE </div>
</a><a href="/yozgat" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Yozgat</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">14 İLÇE </div>
</a><a href="/zonguldak" class="soft-card p-4 rounded-xl text-center">
<div class="font-semibold text-slate-900 text-sm truncate">Zonguldak</div>
<div class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">8 İLÇE </div>
</a>
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
