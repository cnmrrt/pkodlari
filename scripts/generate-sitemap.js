
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://pkodlari.com';
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const API_URL = 'https://pkodlari.com/data/collection.json';

// Replicating utils/slugify.ts logic exactly
const slugify = (s) => {
    return String(s)
        .toLocaleLowerCase('tr')
        .replace(/[ıığüşöç]/g, (m) => ({ 'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c' }[m] || m))
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
};

const titleCase = (s) => {
    if (!s) return '';
    return s.toLocaleLowerCase('tr').replace(/(^|[^a-züığüşöçı])([a-züığüşöçı])/g, (match, p1, p2) =>
        p1 + p2.toLocaleUpperCase('tr')
    );
};

const buildFallbackUrls = () => {
    const uniqueUrls = new Set();
    const urls = [];

    const addUrl = (url, priority, changefreq) => {
        if (!uniqueUrls.has(url)) {
            uniqueUrls.add(url);
            urls.push({ loc: url, priority, changefreq });
        }
    };

    addUrl(`${DOMAIN}/`, '1.0', 'daily');

    const pagesDir = path.join(__dirname, '../pages');
    if (fs.existsSync(pagesDir)) {
        const entries = fs.readdirSync(pagesDir, { withFileTypes: true });

        entries.forEach((entry) => {
            if (entry.name.startsWith('.') || entry.name.startsWith('[')) return;

            if (entry.isFile() && entry.name.endsWith('.vue')) {
                const slug = entry.name.replace(/\.vue$/, '');
                if (slug && slug !== 'index') {
                    addUrl(`${DOMAIN}/${slug}`, '0.8', 'weekly');
                }
            }

            if (entry.isDirectory()) {
                const indexPath = path.join(pagesDir, entry.name, 'index.vue');
                if (fs.existsSync(indexPath)) {
                    addUrl(`${DOMAIN}/${slugify(entry.name)}`, '0.8', 'weekly');
                }
            }
        });
    }

    return urls;
};

const generateSitemap = async () => {
    console.log('Fetching data from Firebase...');

    let urls = [];
    let source = 'fallback';

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
            throw new Error('Unexpected Firebase data shape');
        }

        console.log(`Fetched ${data.length} records. Generating sitemap...`);

        // Use Set to track unique URLs to avoid duplicates
        const uniqueUrls = new Set();
        urls = [];

        // Helper to add URL if not exists
        const addUrl = (url, priority, changefreq) => {
            if (!uniqueUrls.has(url)) {
                uniqueUrls.add(url);
                urls.push({ loc: url, priority, changefreq });
            }
        };

        // 1. Homepage
        addUrl(`${DOMAIN}/`, '1.0', 'daily');

        // 2. Process Data
        // Data format: [{"il":"Adana","ilce":"Aladağ","mahalle":"Akpınar Mahallesi","postaKodu":"01720","semt":"Aladağ"}, ...]

        data.forEach(item => {
            if (!item.il) return;

            const citySlug = slugify(item.il);
            const districtSlug = item.ilce ? slugify(item.ilce) : null;
            const neighborhoodSlug = item.mahalle ? slugify(item.mahalle) : null;

            // City URL
            // Priority 0.8 for cities
            if (citySlug) {
                addUrl(`${DOMAIN}/${citySlug}`, '0.8', 'weekly');

                // District URL
                // Priority 0.6 for districts
                if (districtSlug) {
                    addUrl(`${DOMAIN}/${citySlug}/${districtSlug}`, '0.6', 'weekly');

                    // Neighborhood URL
                    // Priority 0.5 for neighborhoods
                    if (neighborhoodSlug) {
                        addUrl(`${DOMAIN}/${citySlug}/${districtSlug}/${neighborhoodSlug}`, '0.5', 'monthly');
                    }
                }
            }
        });

        source = 'firebase';
    } catch (error) {
        console.warn('Firebase fetch failed, using local fallback sitemap routes:', error.message);
        urls = buildFallbackUrls();
    }

    // 3. Generate XML
    let xmlUrls = '';
    const today = new Date().toISOString().split('T')[0];

    urls.forEach(u => {
        xmlUrls += `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>\n`;
    });

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, xmlContent);
    console.log(`Sitemap generated with ${urls.length} URLs from ${source} at ${SITEMAP_PATH}`);
};

generateSitemap();
