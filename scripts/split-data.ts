import fs from 'fs';
import path from 'path';

// Standard slugify logic to match the one used in the app
const slugify = (s: string) => {
    return String(s)
        .toLocaleLowerCase('tr')
        .replace(/[ıığüşöç]/g, (m: string) => ({ 'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c' }[m] || m))
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
};

const findValue = (obj: any, possibleKeys: string[]) => {
    if (!obj || typeof obj !== 'object') return null;
    const normalize = (s: string) => s.toLocaleLowerCase('tr').replace(/\s+/g, '').replace(/[ıığüşöç]/g, (m: string) => ({ 'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c' }[m] || m));
    const normalizedPossible = possibleKeys.map(normalize);
    for (const key of Object.keys(obj)) {
        if (normalizedPossible.includes(normalize(key))) return obj[key];
    }
    return null;
};

const INPUT_FILE = path.join(process.cwd(), 'public', 'pk.json');
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'api');
const CITIES_DIR = path.join(OUTPUT_DIR, 'cities');

if (!fs.existsSync(INPUT_FILE)) {
    console.error(`Input file not found: ${INPUT_FILE}`);
    process.exit(1);
}

if (!fs.existsSync(CITIES_DIR)) {
    fs.mkdirSync(CITIES_DIR, { recursive: true });
}

console.log('Loading data...');
const data = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf-8'));
const entries = Array.isArray(data) ? data : Object.values(data);

const transformed: any = {};
const sitemapUrls: string[] = [];

console.log('Transforming data...');
entries.forEach((item: any) => {
    if (!item || typeof item !== 'object') return;
    const city = findValue(item, ['il', 'city', 'İL', 'şehir']);
    const dist = findValue(item, ['ilce', 'district', 'İLÇE', 'İlçe']);
    const neigh = findValue(item, ['mahalle', 'neighborhood', 'semt', 'MAHALLE']);
    const zip = findValue(item, ['posta_kodu', 'zip', 'pk', 'POSTA KODU', 'PK']);
    const map = findValue(item, ['harita', 'map', 'iframe', 'google_map', 'embed']);

    if (city) {
        const cityStr = String(city).trim().toLocaleUpperCase('tr');
        const distStr = String(dist || "MERKEZ").trim().toLocaleUpperCase('tr');
        const neighStr = String(neigh || "MERKEZ").trim().toLocaleUpperCase('tr');

        const citySlug = slugify(cityStr);
        const distSlug = slugify(distStr);
        const neighSlug = slugify(neighStr);

        const codeStr = String(zip || "00000").trim();
        const mapStr = map ? String(map) : undefined;

        if (!transformed[citySlug]) {
            transformed[citySlug] = {
                name: cityStr,
                districts: {}
            };
        }

        if (!transformed[citySlug].districts[distSlug]) {
            transformed[citySlug].districts[distSlug] = {
                name: distStr,
                neighborhoods: {}
            };
        }

        transformed[citySlug].districts[distSlug].neighborhoods[neighSlug] = {
            name: neighStr,
            zipCode: codeStr,
            mapCode: mapStr
        };

        if (mapStr && !transformed[citySlug].mapCode) {
            transformed[citySlug].mapCode = mapStr;
        }
        if (mapStr && !transformed[citySlug].districts[distSlug].mapCode) {
            transformed[citySlug].districts[distSlug].mapCode = mapStr;
        }
    }
});

const searchData: any[] = [];
const citiesMetadata: any = {};

console.log('Saving modular files...');
Object.keys(transformed).forEach(citySlug => {
    const city = transformed[citySlug];
    citiesMetadata[citySlug] = {
        name: city.name,
        slug: citySlug
    };

    sitemapUrls.push(`/${citySlug}`);

    Object.keys(city.districts).forEach(distSlug => {
        const dist = city.districts[distSlug];
        sitemapUrls.push(`/${citySlug}/${distSlug}`);

        Object.keys(dist.neighborhoods).forEach(neighSlug => {
            const neigh = dist.neighborhoods[neighSlug];
            sitemapUrls.push(`/${citySlug}/${distSlug}/${neighSlug}`);

            searchData.push({
                city: city.name,
                citySlug,
                district: dist.name,
                districtSlug: distSlug,
                neighborhood: neigh.name,
                neighborhoodSlug: neighSlug,
                zipCode: neigh.zipCode,
                type: 'neighborhood'
            });
        });
    });

    fs.writeFileSync(
        path.join(CITIES_DIR, `${citySlug}.json`),
        JSON.stringify(city)
    );
});

fs.writeFileSync(path.join(OUTPUT_DIR, 'metadata.json'), JSON.stringify(citiesMetadata));
fs.writeFileSync(path.join(OUTPUT_DIR, 'search-data.json'), JSON.stringify(searchData));
fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-data.json'), JSON.stringify(sitemapUrls));

console.log('Data splitting complete! Generated metadata and city-specific files.');
