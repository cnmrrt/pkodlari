import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://pkodlari.com';
const DATA_DIR = path.join(__dirname, '../public/data');
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

// Replicating utils/slugify.ts logic
const slugify = (s) => {
    return String(s)
        .toLocaleLowerCase('tr')
        .replace(/[ıığüşöç]/g, (m) => ({ 'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c' }[m] || m))
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
};

const generateSitemap = () => {
    console.log('Generating sitemap...');

    let urls = [];

    // Add Homepage
    urls.push(`${DOMAIN}/`);

    // Read all JSON files in data directory
    if (!fs.existsSync(DATA_DIR)) {
        console.error(`Data directory not found: ${DATA_DIR}`);
        process.exit(1);
    }

    const files = fs.readdirSync(DATA_DIR).filter(file => file.endsWith('.json'));

    files.forEach(file => {
        const filePath = path.join(DATA_DIR, file);
        const content = fs.readFileSync(filePath, 'utf8');
        try {
            const data = JSON.parse(content);
            const city = path.basename(file, '.json');

            // Add City URL
            urls.push(`${DOMAIN}/${city}`);

            // Process districts and neighborhoods
            const districts = {};

            data.forEach(item => {
                const districtSlug = slugify(item.ilce);
                const neighborhoodSlug = slugify(item.mahalle);

                // Add District URL (once per district)
                if (!districts[districtSlug]) {
                    districts[districtSlug] = true;
                    urls.push(`${DOMAIN}/${city}/${districtSlug}`);
                }

                // Add Neighborhood URL
                if (neighborhoodSlug) {
                    urls.push(`${DOMAIN}/${city}/${districtSlug}/${neighborhoodSlug}`);
                }
            });

        } catch (err) {
            console.error(`Error parsing ${file}:`, err);
        }
    });

    // XML Structure using loop
    let xmlUrls = '';
    const today = new Date().toISOString().split('T')[0];

    urls.forEach(url => {
        xmlUrls += `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
  </url>\n`;
    });

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, xmlContent);
    console.log(`Sitemap generated with ${urls.length} URLs at ${SITEMAP_PATH}`);
};

generateSitemap();
