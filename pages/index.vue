<script setup lang="ts">
import type { PostalData } from '~/types';
import { transformPostalData } from '~/utils/transformPostalData';

const currentYear = new Date().getFullYear();
useHead({
    title: `Türkiye Posta Kodları ${currentYear}`,
    meta: [{ name: 'description', content: 'Türkiye posta kodları rehberi. İl, ilçe ve mahalle posta kodlarını hızlıca sorgulayın.' }]
});
usePageSeo({ title: 'Türkiye Posta Kodları', description: 'Türkiye posta kodları rehberi. İl, ilçe ve mahalle posta kodlarını hızlıca sorgulayın.' });

const { data: searchData, pending: searchLoading } = useFetch<PostalData>('/api/postal-data', {
    key: 'search-postal-data',
    server: false,
    transform: transformPostalData,
});
</script>

<template>
    <div class="animate-in fade-in duration-500">
        <div class="home-h1-container">
            <h1>Türkiye Posta Kodları</h1>
            <p>Hızlıca ilçe ve mahalle posta kodlarını sorgulayın.</p>
            <SearchBar :data="searchData" :loading="searchLoading" />
        </div>
        <div class="home-cities">
            <a href="/adana">
                <div>Adana</div>
                <div>15 İLÇE </div>
            </a><a href="/adiyaman">
                <div>Adıyaman</div>
                <div>9 İLÇE </div>
            </a><a href="/afyonkarahisar">
                <div>Afyonkarahisar</div>
                <div>18 İLÇE </div>
            </a><a href="/agri">
                <div>Ağrı</div>
                <div>8 İLÇE </div>
            </a><a href="/amasya">
                <div>Amasya</div>
                <div>7 İLÇE </div>
            </a><a href="/ankara">
                <div>Ankara</div>
                <div>25 İLÇE </div>
            </a><a href="/antalya">
                <div>Antalya</div>
                <div>19 İLÇE </div>
            </a><a href="/artvin">
                <div>Artvin</div>
                <div>9 İLÇE </div>
            </a><a href="/aydin">
                <div>Aydın</div>
                <div>17 İLÇE </div>
            </a><a href="/balikesir">
                <div>Balıkesir</div>
                <div>20 İLÇE </div>
            </a><a href="/bilecik">
                <div>Bilecik</div>
                <div>8 İLÇE </div>
            </a><a href="/bingol">
                <div>Bingöl</div>
                <div>8 İLÇE </div>
            </a><a href="/bitlis">
                <div>Bitlis</div>
                <div>7 İLÇE </div>
            </a>
            <a href="/bolu">
                <div>Bolu</div>
                <div>9 İLÇE </div>
            </a>
            <a href="/burdur">
                <div>Burdur</div>
                <div>11 İLÇE </div>
            </a><a href="/bursa">
                <div>Bursa</div>
                <div>10 İLÇE </div>
            </a><a href="/canakkale">
                <div>Çanakkale</div>
                <div>12 İLÇE </div>
            </a><a href="/cankiri">
                <div>Çankırı</div>
                <div>12 İLÇE </div>
            </a><a href="/corum">
                <div>Çorum</div>
                <div>14 İLÇE </div>
            </a><a href="/denizli">
                <div>Denizli</div>
                <div>19 İLÇE </div>
            </a><a href="/diyarbakir">
                <div>Diyarbakır</div>
                <div>17 İLÇE </div>
            </a><a href="/edirne">
                <div>Edirne</div>
                <div>9 İLÇE </div>
            </a><a href="/elazig">
                <div>Elazığ</div>
                <div>11 İLÇE </div>
            </a><a href="/erzincan">
                <div>Erzincan</div>
                <div>9 İLÇE </div>
            </a><a href="/erzurum">
                <div>Erzurum</div>
                <div>20 İLÇE </div>
            </a><a href="/eskisehir">
                <div>Eskişehir</div>
                <div>14 İLÇE </div>
            </a><a href="/gaziantep">
                <div>Gaziantep</div>
                <div>9 İLÇE </div>
            </a><a href="/giresun">
                <div>Giresun</div>
                <div>16 İLÇE </div>
            </a><a href="/gumushane">
                <div>Gümüşhane</div>
                <div>5 İLÇE </div>
            </a><a href="/hakkari">
                <div>Hakkari</div>
                <div>5 İLÇE </div>
            </a><a href="/hatay">
                <div>Hatay</div>
                <div>1 İLÇE </div>
            </a><a href="/isparta">
                <div>Isparta</div>
                <div>13 İLÇE </div>
            </a><a href="/mersin">
                <div>Mersin</div>
                <div>13 İLÇE </div>
            </a>

            <a href="/istanbul">
                <div>İstanbul</div>
                <div>39 İLÇE </div>
            </a>

            <a href="/izmir">
                <div>İzmir</div>
                <div>30 İLÇE </div>
            </a><a href="/kars">
                <div>Kars</div>
                <div>8 İLÇE </div>
            </a><a href="/kastamonu">
                <div>Kastamonu</div>
                <div>20 İLÇE </div>
            </a><a href="/kayseri">
                <div>Kayseri</div>
                <div>16 İLÇE </div>
            </a><a href="/kirklareli">
                <div>Kırklareli</div>
                <div>8 İLÇE </div>
            </a><a href="/kirsehir">
                <div>Kırşehir</div>
                <div>7 İLÇE </div>
            </a><a href="/kocaeli">
                <div>Kocaeli</div>
                <div>12 İLÇE </div>
            </a><a href="/konya">
                <div>Konya</div>
                <div>20 İLÇE </div>
            </a><a href="/kutahya">
                <div>Kütahya</div>
                <div>13 İLÇE </div>
            </a><a href="/malatya">
                <div>Malatya</div>
                <div>13 İLÇE </div>
            </a><a href="/manisa">
                <div>Manisa</div>
                <div>17 İLÇE </div>
            </a><a href="/kahramanmaras">
                <div>Kahramanmaraş</div>
                <div>1 İLÇE </div>
            </a><a href="/mardin">
                <div>Mardin</div>
                <div>10 İLÇE </div>
            </a><a href="/mugla">
                <div>Muğla</div>
                <div>13 İLÇE </div>
            </a><a href="/mus">
                <div>Muş</div>
                <div>6 İLÇE </div>
            </a><a href="/nevsehir">
                <div>Nevşehir</div>
                <div>8 İLÇE </div>
            </a><a href="/nigde">
                <div>Niğde</div>
                <div>6 İLÇE </div>
            </a><a href="/ordu">
                <div>Ordu</div>
                <div>19 İLÇE </div>
            </a><a href="/rize">
                <div>Rize</div>
                <div>12 İLÇE </div>
            </a><a href="/sakarya">
                <div>Sakarya</div>
                <div>16 İLÇE </div>
            </a><a href="/samsun">
                <div>Samsun</div>
                <div>17 İLÇE </div>
            </a><a href="/siirt">
                <div>Siirt</div>
                <div>7 İLÇE </div>
            </a><a href="/sivas">
                <div>Sivas</div>
                <div>17 İLÇE </div>
            </a><a href="/tekirdag">
                <div>Tekirdağ</div>
                <div>11 İLÇE </div>
            </a><a href="/tokat">
                <div>Tokat</div>
                <div>7 İLÇE </div>
            </a><a href="/trabzon">
                <div>Trabzon</div>
                <div>18 İLÇE </div>
            </a><a href="/usak">
                <div>Uşak</div>
                <div>6 İLÇE </div>
            </a><a href="/van">
                <div>Van</div>
                <div>13 İLÇE </div>
            </a><a href="/yozgat">
                <div>Yozgat</div>
                <div>14 İLÇE </div>
            </a><a href="/zonguldak">
                <div>Zonguldak</div>
                <div>8 İLÇE </div>
            </a><a href="/aksaray">
                <div>Aksaray</div>
                <div>8 İLÇE </div>
            </a><a href="/bayburt">
                <div>Bayburt</div>
                <div>3 İLÇE </div>
            </a><a href="/karaman">
                <div>Karaman</div>
                <div>6 İLÇE </div>
            </a><a href="/kirikkale">
                <div>Kırıkkale</div>
                <div>9 İLÇE </div>
            </a><a href="/batman">
                <div>Batman</div>
                <div>6 İLÇE </div>
            </a><a href="/sirnak">
                <div>Şırnak</div>
                <div>7 İLÇE </div>
            </a><a href="/bartin">
                <div>Bartın</div>
                <div>4 İLÇE </div>
            </a><a href="/ardahan">
                <div>Ardahan</div>
                <div>6 İLÇE </div>
            </a><a href="/igdir">
                <div>Iğdır</div>
                <div>4 İLÇE </div>
            </a><a href="/yalova">
                <div>Yalova</div>
                <div>6 İLÇE </div>
            </a><a href="/karabuk">
                <div>Karabük</div>
                <div>6 İLÇE </div>
            </a><a href="/kilis">
                <div>Kilis</div>
                <div>4 İLÇE </div>
            </a><a href="/osmaniye">
                <div>Osmaniye</div>
                <div>7 İLÇE </div>
            </a><a href="/duzce">
                <div>Düzce</div>
                <div>8 İLÇE </div>
            </a>
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
