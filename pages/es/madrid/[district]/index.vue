<script setup lang="ts">
import { ref, computed } from 'vue';
import { ArrowLeft, Search, ChevronRight } from 'lucide-vue-next';
import { slugify, titleCase } from '~/utils/slugify';

const route = useRoute();
const filter = ref('');

const { data: madridData } = await useAsyncData('madrid-data', () =>
    $fetch<any[]>('https://pkodlari.com/data/es/madrid.json')
);

const districtSlug = computed(() => route.params.district as string);

const districtData = computed(() => {
    if (!madridData.value) return null;
    const filtered = madridData.value.filter(item => slugify(item.ilce || 'MERKEZ') === districtSlug.value);
    if (filtered.length === 0) return null;

    return {
        name: filtered[0].ilce || 'MERKEZ',
        neighborhoods: filtered.map(item => ({
            name: item.mahalle,
            zipCode: item.postaKodu,
            slug: slugify(item.mahalle)
        })).sort((a, b) => a.name.localeCompare(b.name, 'tr'))
    };
});

const isValid = computed(() => !!districtData.value);

const neighs = computed(() => {
    if (!isValid.value) return [];
    return districtData.value!.neighborhoods.filter(n =>
        n.name.toLocaleLowerCase('tr').includes(filter.value.toLocaleLowerCase('tr'))
    );
});

const pageTitle = computed(() => districtData.value ? `Madrid ${titleCase(districtData.value.name)} Códigos postales` : 'Distrito no encontrado');
const pageDesc = computed(() => districtData.value ? `¡Haga clic para ver los códigos postales de los vecindarios en el distrito ${titleCase(districtData.value.name)} de la provincia de Madrid!` : 'Guía de códigos postales');

useHead({
    htmlAttrs: {
        lang: 'es'
    },
    title: pageTitle,
    meta: [{ name: 'description', content: pageDesc }],
    script: [
        computed(() => {
            if (!districtData.value) return {};
            return {
                type: 'application/ld+json',
                children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Página principal",
                            "item": "https://pkodlari.com/es"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Madrid",
                            "item": "https://pkodlari.com/es/madrid"
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": titleCase(districtData.value.name),
                            "item": `https://pkodlari.com/es/madrid/${districtSlug.value}`
                        }
                    ]
                })
            }
        })
    ]
});

usePageSeo({ title: pageTitle, description: pageDesc });
</script>

<template>
    <div v-if="isValid" class="animate-in fade-in duration-500 max-w-4xl mx-auto">
        <div class="header">
            <div class="districtTitleContainer">
                <NuxtLink to="/es/madrid">
                    <ArrowLeft />
                </NuxtLink>
                <div>
                    <h1>Códigos Postales De {{ titleCase(districtData.name) }}</h1>
                    <p>Madrid</p>
                </div>
            </div>
            <div class="neighborhood-search-container">
                <Search />
                <input type="text" placeholder="Buscar en los barrios..." v-model="filter" />
            </div>
        </div>

        <div class="neighborhoods-links-container">
            <NuxtLink v-for="nItem in neighs" :key="nItem.slug" :to="`/es/madrid/${districtSlug}/${nItem.slug}`">
                <div class="mahalle-name">
                    <h4>{{ titleCase(nItem.name) }}</h4>
                    <p>VECINDARIO</p>
                </div>
                <div class="mahalle-zip-code">
                    <span>{{ nItem.zipCode }}</span>
                    <ChevronRight />
                </div>
            </NuxtLink>
            <div v-if="neighs.length === 0" class="col-span-full p-12 text-center text-slate-400 text-sm">No se
                encontraron resultados.</div>
        </div>
    </div>
    <div v-else class="py-32 text-center text-slate-400">
        <p>Distrito no encontrado.</p>
        <NuxtLink to="/es/madrid" class="text-slate-900 underline mt-4 inline-block">Volver a la página de Madrid
        </NuxtLink>
    </div>
</template>
