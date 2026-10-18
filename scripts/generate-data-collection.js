import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../public/data');
const COLLECTION_FILE = path.join(DATA_DIR, 'collection.json');
const CITY_DATA_DIR = path.join(DATA_DIR, 'cities');

const slugify = (value) =>
    String(value)
        .toLocaleLowerCase('tr')
        .replace(/[ıığüşöç]/g, (character) => ({
            'ı': 'i',
            'ğ': 'g',
            'ü': 'u',
            'ş': 's',
            'ö': 'o',
            'ç': 'c'
        })[character])
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');

const itemKey = (item) =>
    [item.il, item.ilce, item.mahalle, String(item.postaKodu ?? '')]
        .join('|')
        .toLocaleLowerCase('tr');

const generateCityData = () => {
    console.log(`Reading postal data from ${COLLECTION_FILE}`);
    const sourceData = JSON.parse(fs.readFileSync(COLLECTION_FILE, 'utf8'));
    if (!Array.isArray(sourceData) || sourceData.length === 0) {
        throw new Error('Postal data source must return a non-empty JSON array');
    }

    const seen = new Set();
    const collection = [];
    for (const item of sourceData) {
        if (!item || typeof item !== 'object' || !item.il) continue;
        const key = itemKey(item);
        if (seen.has(key)) continue;
        seen.add(key);
        collection.push(item);
    }

    if (collection.length === 0) {
        throw new Error('Postal data source contains no records with a city name');
    }

    collection.sort((a, b) => {
        const city = String(a.il).localeCompare(String(b.il), 'tr');
        if (city !== 0) return city;

        const district = String(a.ilce || '').localeCompare(String(b.ilce || ''), 'tr');
        if (district !== 0) return district;

        return String(a.mahalle || '').localeCompare(String(b.mahalle || ''), 'tr');
    });

    const cityCollections = new Map();
    for (const item of collection) {
        const citySlug = slugify(item.il);
        if (!cityCollections.has(citySlug)) cityCollections.set(citySlug, []);
        cityCollections.get(citySlug).push(item);
    }

    fs.mkdirSync(CITY_DATA_DIR, { recursive: true });
    for (const entry of fs.readdirSync(CITY_DATA_DIR, { withFileTypes: true })) {
        if (!entry.isFile() || !entry.name.endsWith('.json')) continue;
        const citySlug = entry.name.slice(0, -'.json'.length);
        if (!cityCollections.has(citySlug)) {
            fs.unlinkSync(path.join(CITY_DATA_DIR, entry.name));
        }
    }

    for (const [citySlug, records] of cityCollections) {
        fs.writeFileSync(path.join(CITY_DATA_DIR, `${citySlug}.json`), JSON.stringify(records));
    }

    console.log(`\nRead ${collection.length} records from ${path.relative(path.join(__dirname, '..'), COLLECTION_FILE)}`);
    console.log(`Wrote ${cityCollections.size} city data files to ${path.relative(path.join(__dirname, '..'), CITY_DATA_DIR)}`);
};

try {
    generateCityData();
} catch (error) {
    console.error('Failed to generate data collection:', error.message);
    process.exitCode = 1;
}