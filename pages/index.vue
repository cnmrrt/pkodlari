<script setup lang="ts">
import { computed } from 'vue';
import type { PostalData } from '~/types';
import { transformPostalData } from '~/utils/transformPostalData';

const currentYear = new Date().getFullYear();
useHead({
    title: `Türkiye Posta Kodları ${currentYear}`,
    meta: [{ name: 'description', content: 'Türkiye posta kodları rehberi. İl, ilçe ve mahalle posta kodlarını hızlıca sorgulayın.' }]
});
usePageSeo({ title: 'Türkiye Posta Kodları', description: 'Türkiye posta kodları rehberi. İl, ilçe ve mahalle posta kodlarını hızlıca sorgulayın.' });

const dataBaseURL = useRuntimeConfig().app.baseURL;
const collectionUrl = import.meta.server
    ? '/api/postal-data'
    : `${dataBaseURL}data/collection.json`;
const { data: searchData, pending: searchLoading } = await useFetch<PostalData>(
    collectionUrl,
    {
        key: 'search-postal-data',
        transform: transformPostalData,
    }
);
const cities = computed(() =>
    Object.entries(searchData.value || {}).sort(([, a], [, b]) =>
        a.name.localeCompare(b.name, 'tr')
    )
);
</script>

<template>
    <div class="animate-in fade-in duration-500">
        <div class="home-h1-container">
            <h1>Türkiye Posta Kodları</h1>
            <p>Hızlıca ilçe ve mahalle posta kodlarını sorgulayın.</p>
            <SearchBar :data="searchData" :loading="searchLoading" />
        </div>
        <div class="home-cities">
            <NuxtLink
                v-for="[citySlug, cityItem] in cities"
                :key="citySlug"
                :to="`/${citySlug}.html`"
            >
                <div>{{ titleCase(cityItem.name) }}</div>
                <div>{{ Object.keys(cityItem.districts).length }} İLÇE</div>
            </NuxtLink>
        </div>

        <div class="home-content-container">
            <div class="h-c-first-div">
                <h2>Posta Kodu Nedir ve Neden Önemlidir?</h2>

                <div class="h-c-second-div">
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
