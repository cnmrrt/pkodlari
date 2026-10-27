
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://pkodlari.com';
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const COLLECTION_PATH = path.join(__dirname, '../public/data/collection.json');
const SPANISH_DATA_PATH = path.join(__dirname, '../public/data/es.json');

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

const generateSitemap = () => {
    console.log(`Reading data from ${COLLECTION_PATH}...`);
    const data = JSON.parse(fs.readFileSync(COLLECTION_PATH, 'utf8'));
    if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Postal data collection must be a non-empty JSON array');
    }
    const spanishData = JSON.parse(fs.readFileSync(SPANISH_DATA_PATH, 'utf8'));
    if (!Array.isArray(spanishData) || spanishData.length === 0) {
        throw new Error('Spanish postal data must be a non-empty JSON array');
    }

    const uniqueUrls = new Set();
    const urls = [];
    const addUrl = (url, priority, changefreq) => {
        if (uniqueUrls.has(url)) return;
        uniqueUrls.add(url);
        urls.push({ loc: url, priority, changefreq });
    };

    addUrl(`${DOMAIN}/`, '1.0', 'daily');
    addUrl(`${DOMAIN}/plaka-kodlari`, '0.7', 'monthly');
    addUrl(`${DOMAIN}/es`, '0.8', 'weekly');

    const addDataUrls = (rows, localePrefix = '') => {
        rows.forEach(item => {
            if (!item?.il) return;

            const citySlug = slugify(item.il);
            const districtSlug = slugify(item.ilce || 'MERKEZ');
            const neighborhoodSlug = slugify(item.mahalle || 'MERKEZ');

            if (!citySlug) return;
            addUrl(`${DOMAIN}${localePrefix}/${citySlug}`, '0.8', 'weekly');

            if (!districtSlug) return;
            addUrl(`${DOMAIN}${localePrefix}/${citySlug}/${districtSlug}`, '0.6', 'weekly');

            if (neighborhoodSlug) {
                addUrl(`${DOMAIN}${localePrefix}/${citySlug}/${districtSlug}/${neighborhoodSlug}`, '0.5', 'monthly');
            }
        });
    };

    addDataUrls(data);
    addDataUrls(spanishData, '/es');

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
};

try {
    generateSitemap();
} catch (error) {
    console.error('Failed to generate sitemap:', error.message);
    process.exitCode = 1;
}
