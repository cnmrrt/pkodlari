
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://pkodlari.com';
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const API_URL = 'https://words-from-life-5cb26-default-rtdb.firebaseio.com/postakodlari.json';

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

const generateSitemap = async () => {
    console.log('Fetching data from Firebase...');

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();

        console.log(`Fetched ${data.length} records. Generating sitemap...`);

        // Use Set to track unique URLs to avoid duplicates
        const uniqueUrls = new Set();
        const urls = [];

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
        console.log(`Sitemap generated with ${urls.length} URLs at ${SITEMAP_PATH}`);

    } catch (error) {
        console.error('Error generating sitemap:', error);
        process.exit(1);
    }
};

generateSitemap();
