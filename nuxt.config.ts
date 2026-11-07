// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const transliteration: Record<string, string> = {
    'ı': 'i',
    'ğ': 'g',
    'ü': 'u',
    'ş': 's',
    'ö': 'o',
    'ç': 'c'
};
const slugify = (value: string) =>
    String(value)
        .toLocaleLowerCase('tr')
        .replace(/[ıığüşöç]/g, (character) => transliteration[character])
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const appBasePath = process.env.NUXT_APP_BASE_URL || '/';
const normalizedBasePath = appBasePath.endsWith('/') ? appBasePath : `${appBasePath}/`;
const collectionPath = path.join(projectRoot, 'public/data/collection.json');
const spanishDataPath = path.join(projectRoot, 'public/data/es.json');
const prerenderRoutes = new Set<string>();

const addPrerenderRoutes = (
    rows: Array<{ il?: string; ilce?: string; mahalle?: string }>,
    localePrefix = ''
) => {
    for (const row of rows) {
        if (!row.il) continue;

        const citySlug = slugify(row.il);
        if (!citySlug) continue;
        prerenderRoutes.add(`${localePrefix}/${citySlug}`);

        const districtSlug = slugify(row.ilce || 'MERKEZ');
        if (!districtSlug) continue;
        prerenderRoutes.add(`${localePrefix}/${citySlug}/${districtSlug}`);

        const neighborhoodSlug = slugify(row.mahalle || 'MERKEZ');
        if (neighborhoodSlug) {
            prerenderRoutes.add(`${localePrefix}/${citySlug}/${districtSlug}/${neighborhoodSlug}`);
        }
    }
};

if (fs.existsSync(collectionPath)) {
    const collection: Array<{ il?: string; ilce?: string; mahalle?: string }> =
        JSON.parse(fs.readFileSync(collectionPath, 'utf8'));
    addPrerenderRoutes(collection);
}

if (fs.existsSync(spanishDataPath)) {
    const spanishData: Array<{ il?: string; ilce?: string; mahalle?: string }> =
        JSON.parse(fs.readFileSync(spanishDataPath, 'utf8'));
    prerenderRoutes.add('/es');
    addPrerenderRoutes(spanishData, '/es');
}

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    experimental: {
        payloadExtraction: false
    },
    router: {
        options: {
            strict: true // Rotaların katı bir şekilde eşleşmesini sağlar
        }
    },
    nitro: {
        prerender: {
            routes: [...prerenderRoutes, '/telefon-kodlari', '/plaka-kodlari'],
            autoSubfolderIndex: false // DİKKAT: true yerine false yapıldı. Alt sayfaların sonuna slash ekleyerek klasörleştirmeyi engeller.
        }
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'tr'
            },
            title: 'Posta Kodu Rehberi',
            script: [
                {
                    innerHTML: `(()=>{const basePath=${JSON.stringify(normalizedBasePath)};const {pathname,search,hash}=window.location;if(pathname.startsWith(basePath)&&pathname!==basePath&&pathname.endsWith('/'))window.history.replaceState(window.history.state,'',pathname.slice(0,-1)+search+hash)})();`
                },
                //{ src: 'https://cdn.tailwindcss.com' },
                {
                    innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PVZMM8PF');`
                }
            ],
            noscript: [
                {
                    innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PVZMM8PF"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    tagPosition: 'bodyOpen'
                }
            ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'stylesheet', href: `${normalizedBasePath}styles.css` },
                //{ rel: 'preconnect', href: 'https://cdn.tailwindcss.com' }

            ],

        }
    }
})
