<script setup lang="ts">
import { ArrowLeft, ChevronRight } from 'lucide-vue-next';
import { slugify, titleCase } from '~/utils/slugify';

const { data: artvinData } = await useAsyncData('artvin-data', () =>
    $fetch<any[]>('https://pkodlari.com/data/artvin.json')
);

const districts = computed(() => {
    if (!artvinData.value) return [];
    const districtMap: Record<string, { name: string, count: number }> = {};

    artvinData.value.forEach(item => {
        const distName = item.ilce || 'MERKEZ';
        const distSlug = slugify(distName);
        if (!districtMap[distSlug]) {
            districtMap[distSlug] = { name: distName, count: 0 };
        }
        districtMap[distSlug].count++;
    });

    return Object.entries(districtMap).sort(([, a], [, b]) => a.name.localeCompare(b.name, 'tr'));
});

const currentYear = new Date().getFullYear();
const pageTitle = `Artvin Posta Kodları ve İlçeleri ${currentYear}`;
const pageDesc = "Artvin iline bağlı ilçe ve mahallelerin posta kodlarını görmek için tıklayın!";

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
                        "name": "Artvin",
                        "item": "https://pkodlari.com/artvin"
                    }
                ]
            })
        }
    ]
});

usePageSeo({ title: pageTitle, description: pageDesc });
</script>

<template>
    <div class="animate-in fade-in duration-500 max-w-4xl mx-auto">
        <div class="cityTitleContainer">
            <NuxtLink to="/">
                <ArrowLeft />
            </NuxtLink>
            <div>
                <h1>Artvin Posta Kodları</h1>
                <p>9 İLÇE</p>
            </div>
        </div>

        <div class="districts"><!--[--><a href="/artvin/ardanuc" class="">
                <div>
                    <h3>Ardanuç</h3>
                    <p>200 mahalle</p>
                </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </a><a href="/artvin/arhavi" class="">
                <div>
                    <h3>Arhavi</h3>
                    <p>100 mahalle</p>
                </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </a><a href="/artvin/borcka" class="">
                <div>
                    <h3>Borçka</h3>
                    <p>73 mahalle</p>
                </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </a><a href="/artvin/hopa" class="">
                <div>
                    <h3>Hopa</h3>
                    <p>30 mahalle</p>
                </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </a><a href="/artvin/kemalpasa" class="">
                <div>
                    <h3>Kemalpaşa</h3>
                    <p>16 mahalle</p>
                </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </a><a href="/artvin/merkez" class="">
                <div>
                    <h3>Merkez</h3>
                    <p>299 mahalle</p>
                </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </a><a href="/artvin/murgul" class="">
                <div>
                    <h3>Murgul</h3>
                    <p>21 mahalle</p>
                </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </a><a href="/artvin/savsat" class="">
                <div>
                    <h3>Şavşat</h3>
                    <p>419 mahalle</p>
                </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </a><a href="/artvin/yusufeli" class="">
                <div>
                    <h3>Yusufeli</h3>
                    <p>674 mahalle</p>
                </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-chevron-right-icon w-5 h-5 text-slate-300">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </a></div>
    </div>
</template>
